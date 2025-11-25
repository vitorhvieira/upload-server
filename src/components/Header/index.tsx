"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const path = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "artigos", label: "Artigos Publicados" },
    { id: "areas", label: "Areas de Atuações" },
    { id: "contato", label: "Contato" },
  ];
  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-100 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href={"/"} className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <Image
                src="/LOGO-BRUNO.png"
                alt="Logo Bruno"
                width={60}
                height={60}
              />
            </div>
            <div className=" text-start">
              <h2 className="text-black text-xl/tight font-bold">
                Dr. Bruno Pires
              </h2>
              <p className="text-black text-xs">Advocacia & Consultoria</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-black">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer text-md font-medium transition-colors duration-200 hover:text-[#c9a961]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-black">
          <nav className="container text-black flex flex-col gap-4 p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleScroll(item.id);
                  setIsMenuOpen(false);
                }}
                className={`text-left hover:bg-gray-100 px-4 py-3 rounded-lg ${
                  path === `/${item.id}` && "bg-amber-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
