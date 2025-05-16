import type { Metadata } from "next";
import { Roboto, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "./icon.png";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "ふらりこ - 方向音痴を楽しみながら目的地まで一直線！",
  description:
    "ふらりこは、方向音痴を楽しみながら目的地まで向かうことができるアプリです。",
  itunes: {
    appId: "6448612672",
    appArgument: "https://furari.co/app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${notoSansJP.className} flex min-h-screen flex-col items-center justify-between bg-furarico-background-primary text-furarico-label-primary`}
      >
        <header className="container mx-auto flex justify-between items-center space-x-4 px-4 py-8">
          <div className="flex justify-start items-center">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Image src={Icon} alt="ふらりこ" width={32} height={32} />
                <div className="text-2xl font-bold">ふらりこ</div>
              </div>
            </Link>
          </div>

          <div className="flex justify-end items-center space-x-4 lg:space-x-8">
            <Link href="/about">
              <div className="text-sm">About</div>
            </Link>

            <div className="bg-furarico-accent-primary rounded-full">
              <Link href="https://apps.apple.com/app/id6448612672">
                <div className="mx-3 my-1 text-furarico-label-tertiary text-sm">
                  Install
                </div>
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto mb-12 px-4 py-2 flex-auto">
          {children}
        </main>

        <footer className="w-full bg-furarico-background-secondary text-furarico-label-secondary">
          <div className="container mx-auto px-4 py-8 flex-col space-y-8">
            <div className="flex-col space-y-4">
              <div>
                <Link href="/about">
                  <div className="text-sm">About</div>
                </Link>
              </div>

              <div>
                <Link href="/contact">
                  <div className="text-sm">Contact</div>
                </Link>
              </div>

              <div>
                <Link href="/privacy">
                  <div className="text-sm">Privacy</div>
                </Link>
              </div>
            </div>

            <div className="text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="https://furari.co">ふらりこ</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
