import { Suspense } from "react";
import ProgressBar from "@/components/common/ProgressBar";
import { Header } from "@/components/layout/Header";
import { Roboto_Slab } from 'next/font/google';
import 'sweetalert2/src/sweetalert2.scss';
import "../globals.css";
import Footer from "@/components/layout/Footer/Footer";

const roboto = Roboto_Slab({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProgressBar />
        </Suspense>
        <Header />
        <main className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
