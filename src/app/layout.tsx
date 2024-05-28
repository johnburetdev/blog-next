import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Avatar from "@/assets/images/avatar.jpg";
import "./globals.css";
import Link from "next/link";

console.log(Avatar);

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} bg-gray-900`}>
        <main className="grid min-h-screen items-center py-20">
          <div className="mx-auto rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 sm:w-[500px] md:w-[700px]">
            <div className="rounded bg-gray-100 p-8">
              <Link href="/">
                <img
                  src={Avatar.src}
                  alt="Imagen avatar de presentación"
                  className="mx-auto -mt-20 mb-8 rounded-full "
                  width={100}
                  height={100}
                />
              </Link>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
