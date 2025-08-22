import Link from "next/link";

export default function Sobre() {
    return(
        <div>
            <nav className="flex justify-center items-center h-16 bg-slate-950 text-white">
            <div className="flex items-center justify-center w-full max-w-9xl px-4">
               <ul className="flex space-x-4">
                 <li>
                  <Link href="/">Home</Link>
                 </li>
                 <li>
                    <Link href="/Projetos">Projetos</Link>
                 </li>
                 <li>
                  <Link href="/Sobre">About</Link>
                 </li>
                 <li>
                    <Link href="/Contato">Contato</Link>
                 </li>
              </ul>
            </div>
            </nav>
        </div>
    )
}