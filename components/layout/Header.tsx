"use client";

import { usePathname } from "next/navigation";
import { Link } from "@heroui/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Rocket, Home, Camera, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";

import { ThemeSwitch } from "../theme-switch";

export default function Header() {
  const pathname = usePathname();
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "APOD", href: "/apod", icon: Camera },
    { name: "Projects", href: "/projects", icon: FolderOpen },
  ];

  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      className="bg-background/80 backdrop-blur-sm"
    >
      <NavbarBrand>
        <Link className="flex items-center gap-2" href="/">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Rocket className="w-5 h-5 text-blue-600" />
            </motion.div>
          </div>
          <span className="text-xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            NASA Api Projects
          </span>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <NavbarItem key={item.name}>
              <Button
                as={Link}
                className={isActive ? "font-semibold" : ""}
                color={isActive ? "primary" : "default"}
                href={item.href}
                startContent={<Icon className="w-4 h-4" />}
                variant={isActive ? "solid" : "light"}
              >
                {item.name}
              </Button>
            </NavbarItem>
          );
        })}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
