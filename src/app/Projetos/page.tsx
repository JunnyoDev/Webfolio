import Image from "next/image";

export default function Projects () {
    return (
        <div className="bg-slate-900 min-h-screen flex flex-row p-10 align-center justify-center gap-5">
            <div className="text-white h-full">
                <div className="flex justify-center items-center">
                <Image
                  className="flex justify-center items-center"
                  src="/Projeto1.png" 
                  alt="Minha foto" 
                  width={200} 
                  height={200}
                 />
                 </div>
                <p className='flex justify-center text-xl font-serif font-bold mt-3'>Portfolio</p>
                 <p className='flex justify-center text-base font-mono '>Nesse projeto foi usado react com tailwand css</p>
                 <p className='flex justify-center text-base font-mono mt-5'>Saiba Mais:</p>
                 <a className="flex justify-center h-25" href="https://github.com/JunnyoDev/Portfolio.git"><img src="./Git.png"/></a>
            </div>
            <div className="text-white h-full">
                <div className="flex justify-center items-center">
                <Image
                  className="flex justify-center items-center"
                  src="/Projeto1.png" 
                  alt="Minha foto" 
                  width={200} 
                  height={200}
                 />
                 </div>
                <p className='flex justify-center text-xl font-serif font-bold mt-3'>Portfolio</p>
                 <p className='flex justify-center text-base font-mono '>Nesse projeto foi usado react com tailwand css</p>
                 <p className='flex justify-center text-base font-mono mt-5'>Saiba Mais:</p>
                 <a className="flex justify-center h-25" href="https://github.com/JunnyoDev/Portfolio.git"><img src="./Git.png"/></a>
            </div><div className="text-white h-full">
                <div className="flex justify-center items-center">
                <Image
                  className="flex justify-center items-center"
                  src="/Projeto1.png" 
                  alt="Minha foto" 
                  width={200} 
                  height={200}
                 />
                 </div>
                <p className='flex justify-center text-xl font-serif font-bold mt-3'>Portfolio</p>
                 <p className='flex justify-center text-base font-mono '>Nesse projeto foi usado react com tailwand css</p>
                 <p className='flex justify-center text-base font-mono mt-5'>Saiba Mais:</p>
                 <a className="flex justify-center h-25" href="https://github.com/JunnyoDev/Portfolio.git"><img src="./Git.png"/></a>
            </div>
        </div>
            
    )
}