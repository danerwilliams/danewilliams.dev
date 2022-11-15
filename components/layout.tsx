import { FC, ReactNode } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<Readonly<LayoutProps>> = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-lightmode-slate1 dark:bg-darkmode-slate1">
      <Navbar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};