import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 w-full">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Roberto Junnyo. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <Link href="https://github.com/JunnyoDev" target="_blank" className="hover:text-blue-400 transition">
            <Github size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/robertojunnyo" target="_blank" className="hover:text-blue-400 transition">
            <Linkedin size={24} />
          </Link>
          <Link href="https://www.instagram.com/junnyo_wenceslau/" target="_blank" className="hover:text-blue-400 transition">
            <Instagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
