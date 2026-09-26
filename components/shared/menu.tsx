import { ModeToggle } from "@/components/shared/modeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => (
  <div className="flex justify-end gap-3">
    <nav className="hidden md:flex w-full max-w-xs gap-1">
      <ModeToggle />
      <Button variant="ghost">
        <Link href="/cart" className="flex gap-1">
          <ShoppingCart className="size-5" /> Cart
        </Link>
      </Button>
      <Button>
        <Link href="/user" className="flex gap-1">
          <UserIcon className="size-5" /> Sign In
        </Link>
      </Button>
    </nav>
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <EllipsisVertical />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start p-3">
          <SheetTitle>Menu</SheetTitle>
          <ModeToggle />
          <Button variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
            </Link>
          </Button>
          <SheetDescription />
          <Button>
            <Link href="/user" className="flex gap-1">
              <UserIcon className="size-5" /> Sign In
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </nav>
  </div>
);

export default Menu;
