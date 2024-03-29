import { FC, ReactNode } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<Readonly<LayoutProps>> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-lightmode-background dark:bg-darkmode-background text-lightmode-text dark:text-darkmode-text">
      <Navbar />
      <main className="flex flex-grow justify-center px-6">{children}</main>
      <Footer />
    </div>
  );
};
