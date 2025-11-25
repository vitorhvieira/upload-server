"use client";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

interface NavItem {
  menuItems: { id: string; label: string }[];
}

export function MobileMenu({ menuItems }: NavItem) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {isOpen ? (
        <div className="">
          <nav>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setIsOpen(false)}
                className="text-black"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      ) : (
        <MenuIcon
          onClick={() => setIsOpen(true)}
          className="text-black"
        ></MenuIcon>
      )}
    </div>
  );
}
