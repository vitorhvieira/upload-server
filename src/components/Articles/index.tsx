import { ArrowRightIcon, Calendar1Icon, ClockIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";

export function Articles() {
  const articles = [
    {
      id: 1,
      slug: "first-article",
      title: "Entenda seus Direitos Trabalhistas em 2024",
      author: "Dr Bruno",
      category: "Direito de Família",
      content: "This is the content of the first article.",
      coverImageUrl: "/images/ai-generated-8679746_1920.jpg",
      published: true,
      createdAt: new Date("2023-01-01"),
      updatedAt: new Date("2023-01-02"),
    },
    {
      id: 2,
      slug: "first-article",
      title: "Entenda seus Direitos Trabalhistas em 2024",
      author: "Dr Bruno",
      category: "Direito de Família",
      content: "This is the content of the first article.",
      coverImageUrl: "/images/ai-generated-8679746_1920.jpg",
      published: true,
      createdAt: new Date("2023-01-01"),
      updatedAt: new Date("2023-01-02"),
    },
    {
      id: 3,
      slug: "first-article",
      title: "Entenda seus Direitos Trabalhistas em 2024",
      author: "Dr Bruno",
      category: "Direito de Família",
      content:
        "This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.",
      coverImageUrl: "/images/ai-generated-8679746_1920.jpg",
      published: true,
      createdAt: new Date("2023-01-01"),
      updatedAt: new Date("2023-01-02"),
    },
    {
      id: 4,
      slug: "first-article",
      title: "Entenda seus Direitos Trabalhistas em 2024",
      author: "Dr Bruno",
      category: "Direito de Família",
      content: "This is the content of the first article.",
      coverImageUrl: "/images/ai-generated-8679746_1920.jpg",
      published: true,
      createdAt: new Date("2023-01-01"),
      updatedAt: new Date("2023-01-02"),
    },
  ];
  return (
    <section className="bg-gray-50 py-8" id="artigos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Artigos Publicados
          </h2>
          <div className="w-20 h-1 bg-[#c9a961] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades e orientações jurídicas
            através dos nossos artigos especializados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.coverImageUrl}
                  alt={article.title}
                  width={1090}
                  height={980}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#c9a961] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar1Icon className="w-4 h-4" />
                    <span>{article.createdAt.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{article.updatedAt.toLocaleTimeString()}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.content}
                </p>

                <button className="flex items-center gap-2 text-[#c9a961] font-semibold hover:gap-3 transition-all">
                  Leia mais
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className=" flex justify-center mt-12">
          <Button variant="clean" size="md">
            Ver Todos os Artigos
          </Button>
        </div>
      </div>
    </section>
  );
}
