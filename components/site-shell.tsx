"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brush, Code2, Home, Info, Moon, Sun } from "@/components/icons";
import { usePortal } from "@/components/theme-provider";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/programmer", label: "Programmer", icon: Code2 },
  { href: "/artist", label: "Artist", icon: Brush },
  { href: "/about", label: "About", icon: Info }
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { preferences, toggleTheme } = usePortal();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="brand" href="/" aria-label="Justin Marshall home">
          <span>JM</span>
          <strong>Justin<br />Marshall</strong>
        </Link>
        <nav aria-label="Primary navigation">
          {links.map(({ href, label, icon: Icon }) => (
            <Link className={pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""} href={href} key={href}>
              <Icon size={19} aria-hidden />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <button className="theme-button" onClick={toggleTheme} type="button">
          {preferences.theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          {preferences.theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </aside>
      <main>{children}</main>
    </div>
  );
}
