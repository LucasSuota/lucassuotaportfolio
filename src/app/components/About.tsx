const About = () => {
  return (
    <div className="sm:min-h-screen h-[700px] overflow-hidden flex items-center justify-center">
      <div className="max-w-screen-lg p-8">
        {/* <Image
          className="rounded-full"
          src={"/profile.jpg"}
          alt="perfil"
          width={150}
          height={150}
        /> */}
        <p className="sm:text-4xl text-xl font-black text-[#313131]">{"<>"}</p>
        <p className="sm:text-3xl text-base font-black text-[#313131]">
          Primeiramente, prazer! Me chamo Lucas.
        </p>
        <p className="sm:text-xl text-xs text-[#313131] mt-2">
          Desde pequeno sempre gostei de computadores, jogar jogos, desenhar,
          brincar no paint e tudo mais. Conforme fui crescendo percebi que além
          de jogar, computadores servem pra outra coisa também: Programar.
        </p>

        <p className="sm:text-xl text-xs text-[#313131] mt-2">
          Atualmente eu estou estudando Desenvolvimento de Frontend, mas sem
          dúvidas quero me tornar um programador Fullstack.
        </p>
        <p className="sm:text-xl text-xs text-[#313131] mt-2">
          As tecnologias que eu tenho conhecimento são REACT, JAVASCRIPT,
          NEXTJS, TAILWIND, TYPESCRIPT, HTML E CSS. Estou me desenvolvendo
          nestas mesmas e assim que &quot;terminar&quot; irei começar algo
          relacionado ao Backend. Estou aberto a novas tecnologias, adoro
          aprender.
        </p>
        <p className="sm:text-xl text-xs text-[#313131] mt-2">
          Eu trabalho como professor de inglês em uma escola particular, onde já
          estou a 2 anos. Inglês é algo essencial na vida e principalmente no
          mercado da programação.
        </p>
        <p className="sm:text-4xl text-xl font-black text-[#313131]">{"</>"}</p>
      </div>
    </div>
  );
};

export default About;
