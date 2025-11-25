import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Telefone",
      content: "(34) 9 9999-8763",
      link: "https://wa.me/5534999998763",
    },
    {
      icon: MailIcon,
      title: "Email",
      content: "brunoribeiromenezes@gmail.com",
      link: "mailto:brunoribeiromenezes@gmail.com",
    },
    {
      icon: MapPinIcon,
      title: "Endereço",
      content: "Av. José João Dib, c 23 - Centro, Ituiutaba - MG, 38304-000",
      link: "https://maps.app.goo.gl/H8DbzDUR9RmCdjLaA",
    },
  ];
  return (
    <section className="py-8 bg-white" id="contato">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-[#c9a961] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Agende uma consulta ou tire suas dúvidas conosco. Estamos prontos
            para ajudá-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-8 rounded-xl text-center hover:bg-[#c9a961] group transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/90">
                <info.icon className="w-8 h-8 text-[#c9a961] group-hover:text-[#a08850]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white">
                {info.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90">
                {info.content}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
