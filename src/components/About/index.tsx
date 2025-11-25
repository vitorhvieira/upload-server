import Image from "next/image";

export function About() {
  return (
    <section className="pt-16 bg-gray-50 pb-16 scroll-mt-20" id="sobre">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="">
            <Image
              src="/images/Imagem-do-WhatsApp-de-2024-11-08-as-20.25.37_d33cc1b1.jpg"
              alt="Dr. Bruno Pires Ribeiro De Menezes"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 text-black">
            <h2 className="font-bold text-2xl">
              Sobre Dr. Bruno Pires Ribeiro De Menezes
            </h2>
            <p>
              Dr. Bruno Pires Ribeiro De Menezes é um destacado advogado com
              carreira marcada por excelência e dedicação. Graduou-se em Direito
              pela Universidade de Uberaba (UNIUBE) em 1995 e, ao longo de sua
              carreira, especializou-se em Direito do Trabalho, Direito de
              Família, Direito Civil e Processo Civil.
            </p>
            <p>
              Sua busca pelo conhecimento levou-o a participar de diversos
              cursos e simpósios na área do Direito. Desde 1996 ate a presente
              data. Dr. Bruno cursou o mestrado em Direito pela Universidade do
              Estado de Minas Gerais (UEMG).
            </p>
            <p>
              Como professor universitário, Dr. Bruno ensinou disciplinas de
              Direito Civil e Processo Civil na UEMG, Campus Ituiutaba, de 2002
              a 2005. Ele também lecionou no curso de pós-graduação em Direito
              Processual Civil na UEMG, tanto no Campus Ituiutaba/MG quanto no
              Campus Itumbiara/GO, durante 2004 e 2005. Além disso, atuou como
              professor de estágio profissionalizante em prática forense e foi
              orientador e membro da banca examinadora de monografias no curso
              de Direito na UEMG.
            </p>
            <p>
              Dr. Bruno também é conhecido por suas contribuições como
              palestrante. Ele ministrou várias palestras sobre temas voltados
              ao Direito, incluindo a “Formação dos Contratos” na Faculdade de
              Iturama, Minas Gerais.
            </p>
            <p>
              Exercendo a advocacia há 30 anos, Dr. Bruno atua nas áreas de
              Direito do Trabalho, Direito de Família, Direito Civil e Direito
              Processual Civil, oferecendo sua vasta experiência e conhecimento
              para atender e orientar seus clientes com competência e
              profissionalismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
