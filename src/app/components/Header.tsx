import Image from "next/image";
import { headerItems } from "../constants";
import Link from "next/link";

const Header = () => {
  return (
    <header className="min-w-full fixed z-40 mx-auto p-6 flex sm:justify-end justify-evenly sm:gap-10 gap-4 bg-white">
      {headerItems.map((item, index) => (
        <Link href={item.link} key={index} target="_blank">
          <Image src={item.logo} alt={item.title} width={25} height={25} />
        </Link>
      ))}
      <Link href={"/lucassuotacv.pdf"} target="iframe_download" download={true}>
        <Image src={"/cv.svg"} alt="cv" width={25} height={25} />
      </Link>
    </header>
  );
};

export default Header;
