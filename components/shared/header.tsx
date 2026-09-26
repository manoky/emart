import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ModeToggle } from "@/components/shared/modeToggle";
import Menu from "@/components/shared/menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/public" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo `}
              width={48}
              height={48}
              priority
            />
            <span className="hidden lg:block font-bold text2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};
export default Header;
