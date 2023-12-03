import Image from "next/image";
import Link from "next/link";
import { FaSistrix } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
export default function NavBar() {
  return (
    <header className=" sticky top-0 flex px-4 justify-between z-10 bg-white">
      <a href="/">
        <Image
          className="pt-2 "
          src="/pizza-logo.png"
          alt="logo"
          width={100}
          height={50}
          priority
          object-contain
        ></Image>
      </a>
      <Image
        className=""
        src="/pizza-header.png"
        alt="pizza header"
        width={150}
        height={50}
        priority
        object-contain
      ></Image>
      <nav className="flex pt-8 gap-6 font-bold">
        <ul className="flex gap-6">
          <Link href={""}>HOME</Link>
          <Link href={""}>PRODUCTS</Link>
          <Link href={""}>PAGES</Link>
          <Link href={""}>BLOG</Link>
          <Link href={""}>CONTACT</Link>
        </ul>
        <FaSistrix className="text-xl" />
        <FaShoppingCart className="text-blue-600 text-2xl" />
      </nav>
    </header>

    
  );
}
