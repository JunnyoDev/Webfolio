import Image from "next/image";

export default function Home() {
  return (
    <div className='bg-slate-900 min-h-screen pt-5'>
      <div className='flex flex-col text-center space-x-1 align-center'>
        <div>
          <Image
           className="rounded-full w-40 h-40 mx-auto"
           src="/foto.jpg" 
           alt="Roberto Junnyo"
           width={160} 
           height={0}
           /></div>
        <div><p className='text-white mt-6 text-3xl font-serif font-extrabold'>Ola, Eu sou o Roberto Junnyo</p></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-white text-center text-xl italic font-bold font-sans mt-6 w-250 ">
         Tenho 20 anos e sou entusiasta em Tecnologia da Informação. Atualmente curso Análise e Desenvolvimento de Sistemas no UniBH. Possuo a certificação AWS Academy Cloud Foundations e formação no curso de react. Atuo como desenvolvedor full stack, com interesse constante em aprender novas tecnologias e aplicar soluções inovadoras no desenvolvimento de sistemas e aplicações.
        </p>
      </div>
      <div>
       
      </div>
      <div className="flex flex-row space-x-5 align-center justify-center pt-20">
        <div>
          <Image 
          src="/next.svg" 
          alt="Next js"
          width={75}
          height={75}
           /></div>
        <div>
          <Image 
          src="/tailwind.svg"
          alt="tailwand css" 
          width={75}
          height={75}
          className="w-[75px] h-[75px]"

          /></div>
        <div>
          <Image 
          src="/ts.png" 
          alt="Typescript" 
          width={75}
          height={75}
          /></div>
          <div>
          <Image 
          src="/js.png" 
          alt="javascript" 
          width={75}
          height={75}
          /></div>
      </div>
    </div>
  );
}
