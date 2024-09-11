import Footer from "../components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Mybimas | About",
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";