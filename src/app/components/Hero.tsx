import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="sm:min-h-screen h-[700px] sm:flex-row flex-col flex items-center justify-center sm:gap-14 gap-4">
        <div className="sm:w-[280px] sm:h-[280px] w-[220px] h-[220px] relative">
          <Image
            className="rounded-full"
            src={"/profile.jpg"}
            alt="foto de perfil"
            fill
          />
        </div>
        <div className="sm:text-start text-center">
          <h1 className="sm:text-5xl text-3xl font-black text-[#313131]">
            LUCAS SUOTA
          </h1>
          <h2 className="sm:text-3xl text-xl font-black text-[#313131]">
            Desenvolvedor Frontend
          </h2>
          <h3 className="sm:text-xl text-sm font-light text-[#313131]">
            REACTJS, NEXTJS, TYPESCRIPT, TAILWIND
          </h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
