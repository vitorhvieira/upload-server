import { FacebookIcon, InstagramIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    areas: [
      "Direito Trabalhista",
      "Direito Imobiliário",
      "Direito Civil",
      "Direito de Família",
    ],
    servicos: [
      "Consultoria Jurídica",
      "Defesa Processual",
      "Elaboração de Contratos",
      "Mediação e Arbitragem",
    ],
  };

  const socialLinks = [
    { icon: FacebookIcon, url: "#", label: "Facebook" },
    { icon: InstagramIcon, url: "#", label: "Instagram" },
    { icon: PhoneIcon, url: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/LOGO-BRUNO.png"
                alt="Logo Bruno"
                width={60}
                height={60}
              />
              <div>
                <h3 className="text-xl font-bold">Dr. Bruno Pires</h3>
                <p className="text-sm text-gray-400">Advocacia & Consultoria</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Comprometidos em oferecer soluções jurídicas de excelência com
              ética, transparência e dedicação aos nossos clientes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a961] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2">
              {footerLinks.areas.map((link, index) => (
                <li key={index}>
                  <a
                    href="#areas"
                    className="text-gray-400 hover:text-[#c9a961] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <a
                    href="#areas"
                    className="text-gray-400 hover:text-[#c9a961] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="font-semibold text-white">
                  Segunda - Sexta:
                </span>
                <br />
                09:00 - 18:00
              </li>
              <li>
                <span className="font-semibold text-white">Sábado:</span>
                <br />
                09:00 - 13:00
              </li>
              <li className="text-sm">
                * Atendimentos fora do horário mediante agendamento
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} Dr. João Silva Advocacia. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#c9a961] transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#c9a961] transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
