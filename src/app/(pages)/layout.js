import ProgressBar from "@/components/common/ProgressBar";
import { Header } from "@/components/layout/Header";
import { Roboto_Slab } from 'next/font/google';
import 'sweetalert2/src/sweetalert2.scss';
import Footer from "@/components/layout/Footer/Footer";
import { headers } from "next/headers";

import "../globals.css";


const roboto = Roboto_Slab({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });



function extractGoogleConsoleKey(verificationData) {
  try {
    const metaTagContent = verificationData.verificationUrl?.[0]?.url;
    if (!metaTagContent) return "";

    const parts = metaTagContent.split(" ");
    if (parts.length < 3) return "";

    const consoleKeyPart = parts[2].split("=")[1];
    return consoleKeyPart.slice(1, -1);

  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
  }
}

export async function generateMetadata() {

  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const fullUrl = headerList.get("next-url");

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const metaDataResponse = await fetch(`${apiUrl}/api/metaDatas?pageLink=${fullUrl}`, {
      cache: "no-store",
    });
    const metaData = await metaDataResponse.json();
    const { title, description, keywords } = metaData?.data[0] ?? {};

    const googleVerificationResponse = await fetch(`${apiUrl}/api/verificationUrl`, {
      cache: "no-store",
    });
    const googleVerification = await googleVerificationResponse.json();
    const googleConsoleKey = extractGoogleConsoleKey(googleVerification);

    return {
      title: title || "General Contractor in Brooklyn | RH Construction USA Inc.",
      description: description || "Top-rated general contractor in Brooklyn, specializing in home renovations, bathroom & kitchen remodeling, roofing and construction services.",
      keywords: keywords || "General Contractor, General Contractor in Brooklyn, RH Construction USA Inc, home renovations, bathroom & kitchen remodeling, roofing",
      openGraph: {
        title: title,
        description: description,
      },
      verification: {
        google: googleConsoleKey,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_API_URL}${pathname}`,
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    };
  } catch (error) {
    return {
      title: "General Contractor in Brooklyn | RH Construction USA Inc.",
      keywords: "Top-rated general contractor in Brooklyn, specializing in home renovations, bathroom & kitchen remodeling, roofing and construction services.",
      description: "General Contractor, General Contractor in Brooklyn, RH Construction USA Inc, home renovations, bathroom & kitchen remodeling, roofing",
    };
  }
}

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
