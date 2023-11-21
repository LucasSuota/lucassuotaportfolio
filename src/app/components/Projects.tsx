"use client";

import Image from "next/image";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="mx-auto min-h-screen flex items-center justify-center">
      <div className="sm:min-w-3/5 w-4/5 ">
        <div className="flex flex-col justify-center items-center gap-4">
          <Menu as={"div"} className={"flex items-center flex-col"}>
            <Menu.Button>
              <Image
                className="mx-auto"
                priority
                src={"/petplusimage.png"}
                alt="projeto pet plus"
                width={600}
                height={600}
              />
              <div className="flex flex-col gap-2">
                <h4 className="sm:text-5xl text-3xl text-[#313131] font-black">
                  PET+
                </h4>
                <h5 className="sm:text-md text-sm text-[#313131] font-bold text-center">
                  NEXTJS, REACTJS, TYPESCRIPT, TAILWIND, FIREBASE
                </h5>
              </div>
            </Menu.Button>
            <Menu.Items>
              <Menu.Item as={Fragment}>
                <div className=" flex flex-col items-center justify-center gap-2 mt-2">
                  <p className="text-[#313131] text-center">
                    Pet+ vem sendo desenvolvido em plataforma web, porém no
                    futuro irei desenvolver a versão mobile em si.
                  </p>
                  <p className="text-[#313131] text-center">
                    Desenvolver esse aplicativo me desafia em áreas diferentes
                    como UI/UX design, também trabalhar com banco de dados,
                    fazer autenticação de usúarios, etc.
                  </p>
                  <Link
                    className="text-blue-400"
                    href={"https://pet-plus-app.vercel.app/"}
                  >
                    Clique aqui para ir ao aplicativo!
                  </Link>
                </div>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Projects;
