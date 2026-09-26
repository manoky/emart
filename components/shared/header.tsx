import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

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
        <div className="space-x-2">
          <Button variant="ghost">
            <Link href="/cart">
              <ShoppingCart className="size-5" /> Cart
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/user">
              <UserIcon className="size-5" /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
