import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Mercadolibre",
  description: "Nunca dejes de buscar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main
          role="main"
          className="max-w-7xl w-full mx-auto rounded bg-white p-4 min-h-80"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
