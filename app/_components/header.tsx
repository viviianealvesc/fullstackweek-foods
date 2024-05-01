import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> 36dcfb804cc828ef9b62df4113af7e9cb875692f

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
<<<<<<< HEAD
      <Image src="/logo.png" alt="FWS Foods" height={30} width={90} />
=======
      <div className="relative h-[30px] w-[100px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="FSW Foods"
            fill
            className="object-cover"
          />
        </Link>
      </div>
>>>>>>> 36dcfb804cc828ef9b62df4113af7e9cb875692f
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
