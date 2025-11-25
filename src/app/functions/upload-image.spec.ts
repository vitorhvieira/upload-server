import { randomUUID } from 'node:crypto'
import { Readable } from 'node:stream'
import { eq } from 'drizzle-orm'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { db } from '@/infra/db'
import { schema } from '@/infra/db/schemas'
import { isLeft, isRight, unwrapEither } from '@/infra/shared/either'
import { InvalidFileFormat } from './errors/invalid-file-format'
import { uploadImage } from './upload-image'

describe('upload image', () => {
  beforeAll(() => {
    vi.mock('@/infra/storage/upload-file-to-storage', () => {
      return {
        uploadFileToStorage: vi.fn().mockImplementation(() => {
          return {
            key: `${randomUUID()}`,
            url: 'https://storage.com/image.jpg',
          }
        }),
      }
    })
  })

  it('should be able to upload an image', async () => {
    const fileName = `${randomUUID()}`
    const sut = await uploadImage({
      contentStream: Readable.from([]),
      contentType: 'image/jpg',
      fileName,
    })
    expect(isRight(sut)).toBe(true)

    const result = await db
      .select()
      .from(schema.uploads)
      .where(eq(schema.uploads.name, fileName))

    expect(result).toHaveLength(1)
  })

  it('should be able to upload an invalid FIle', async () => {
    const fileName = `${randomUUID()}`
    const sut = await uploadImage({
      contentStream: Readable.from([]),
      contentType: 'document/pdf',
      fileName,
    })
    expect(isLeft(sut)).toBe(true)
    expect(unwrapEither(sut)).toBeInstanceOf(InvalidFileFormat)
  })
})
