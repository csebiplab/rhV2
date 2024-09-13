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
      <body className={`${roboto.className}`}>
        <ProgressBar />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
