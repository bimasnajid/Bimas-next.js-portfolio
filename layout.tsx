import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";

export const metadata = {
  title: "Bimas | Portfolio",
  description:
    "My name is Bimas, I'm a web developer and I'm passionate about it. This is my portfolio website.",
  author: "Bimas Najid Ilmansyah",
  siteUrl: "#",
  applicationName: "Bimas Portfolio",
  keywords: [
    "Bimas",
    "mybimas",
    "bimas portfolio",
    "bimas najid",
    "najid",
    "bimas najid ilmansyah",
    "web developer portfolio",
  ],
  openGraph: {
    type: "website",
    url: "#",
    title: "Bimas Portfolio",
    description: "Welcome to Bimas Najid Ilmansyah's portfolio website.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-rev.png",
        alt: "Bimas Portfolio",
      },
    ],
    site_name: "Bimas Portfolio",
  },
};

// import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
  ssr: false,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopProgressBar />
        <Navbar />
        {children}
        {/* <Chat /> */}
        <Analytics />
      </body>
    </html>
  );
}
