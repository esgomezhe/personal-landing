import type { Metadata } from "next";
import { Space_Grotesk, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "600"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "OPERATOR_ID: 00482 | ESTEBAN GOMEZ HERNANDEZ",
  description:
    "Backend Developer & IT Lead — Python, APIs REST, integraciones y soluciones impulsadas por IA.",
  keywords: ["backend developer", "python", "django", "fastapi", "api", "colombia"],
  authors: [{ name: "Esteban Gomez Hernandez" }],
  openGraph: {
    title: "Esteban Gomez Hernandez | Backend Developer",
    description:
      "Backend Developer & IT Lead especializado en Python, APIs y soluciones con IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${robotoMono.variable} dark`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
