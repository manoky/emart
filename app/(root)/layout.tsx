import { Metadata } from "next";
import { APP_NAME, BASE_URL, DESCRIPTION } from "@/lib/constants";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: DESCRIPTION,
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex1 wrapper h-screen overflow-y-auto">{children}</main>
      <Footer />
    </div>
  );
}
