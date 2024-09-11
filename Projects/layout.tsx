import Footer from "../components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Mybimas | Projects",
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
