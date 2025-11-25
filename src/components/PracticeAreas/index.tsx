import {
  BriefcaseIcon,
  FileTextIcon,
  HeartIcon,
  HomeIcon,
  ScaleIcon,
  UsersIcon,
} from "lucide-react";

export function PracticeAreas() {
  const areas = [
    {
      icon: BriefcaseIcon,
      title: "Direito Trabalhista",
      description:
        "Defesa de direitos trabalhistas, rescisões, verbas rescisórias e processos contra empregadores.",
    },
    {
      icon: HomeIcon,
      title: "Direito Imobiliário",
      description:
        "Assessoria em compra, venda, locação e regularização de imóveis e propriedades.",
    },
    {
      icon: UsersIcon,
      title: "Direito Civil",
      description:
        "Contratos, indenizações, responsabilidade civil e questões de direito do consumidor.",
    },
    {
      icon: HeartIcon,
      title: "Direito de Família",
      description:
        "Divórcios, pensão alimentícia, guarda de filhos e partilha de bens.",
    },
    {
      icon: FileTextIcon,
      title: "Direito Empresarial",
      description:
        "Constituição de empresas, contratos comerciais e recuperação judicial.",
    },
    {
      icon: ScaleIcon,
      title: "Direito Previdenciário",
      description:
        "Aposentadorias, benefícios do INSS e revisão de benefícios previdenciários.",
    },
  ];
  return (
    <section className="bg-white pt-8 pb-8 scroll-mt-20" id="areas">
      <div className="container mx-auto px-4 sm:px lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-20 h-1 bg-yellow-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos serviços jurídicos especializados em diversas áreas do
            direito, com atendimento personalizado e comprometimento com
            resultados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-amber-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/90 transition-colors ">
                <area.icon className="w-8 h-8 text-[#c9a961] group-hover:text-[#a08850]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                {area.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
