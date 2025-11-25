import { randomUUID } from 'node:crypto'
import { basename, extname } from 'node:path'
import { Readable } from 'node:stream'
import { Upload } from '@aws-sdk/lib-storage'
import z from 'zod'
import { env } from '@/env'
import { r2 } from './client'

const uploadFileToStorageInput = z.object({
  folder: z.enum(['images', 'downloads']),
  fileName: z.string(),
  contentType: z.string(),
  contentStream: z.instanceof(Readable),
})

type UploadFileToStorageInput = z.input<typeof uploadFileToStorage>

export async function uploadFileToStorage(input: UploadFileToStorageInput) {
  const { folder, fileName, contentStream, contentType } =
    uploadFileToStorageInput.parse(input)

  const fileExtensions = extname(fileName)
  const fileNameWithoutExtensions = basename(fileName)
  const sanitizedFileName = fileNameWithoutExtensions.replace(
    /[^a-zA-Z0-9]/g,
    ''
  )

  const sanitizedFileNameWithExtensions =
    sanitizedFileName.concat(fileExtensions)

  const uniqueFileName = `${folder}/${randomUUID()}-${sanitizedFileNameWithExtensions}`

  const upload = new Upload({
    client: r2,
    params: {
      Key: uniqueFileName,
      Bucket: env.CLOUDFLARE_BUCKET,
      Body: contentStream,
      ContentType: contentType,
    },
  })

  await upload.done()

  return {
    key: uniqueFileName,
    url: new URL(uniqueFileName, env.CLOUDFLARE_PUBLIC_URL).toString(),
  }
}
