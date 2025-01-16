"use client";

import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import avatar from "../../public/7.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const getCurrentSection = () => {
      let current = "about";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          current = section.getAttribute("id") ?? "about";
        }
      });
      return current;
    };

    const handleScroll = () => {
      const currentSection = getCurrentSection();
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // 清除事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:w-[48%] lg:max-h-screen lg:flex lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Leon Liu</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Stack Web & Software Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I design, develop, and optimize web and software solutions with
          passion and precision.
        </p>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a
                className={`group flex items-center py-3 ${
                  activeSection === "about" ? "active" : ""
                }`}
                href="#about"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  About
                </span>
              </a>
            </li>
            <li>
              <a
                className={`group flex items-center py-3 ${
                  activeSection === "experience" ? "active" : ""
                }`}
                href="#experience"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a
                className={`group flex items-center py-3 ${
                  activeSection === "projects" ? "active" : ""
                }`}
                href="#projects"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-[150px] lg:w-[200px] mt-8">
        <Image
          src={avatar}
          alt="avatar picture"
          className="rounded-full aspect-square brightness-90 saturate-50 object-cover object-top"
        ></Image>
      </div>

      <SocialMedia />
    </header>
  );
}
