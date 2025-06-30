import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';
import { getAllEvents } from '@/lib/actions/events';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'Bloomington-Normal Developers',
  description:
    "Bloomington-Normal's group for professional software developers and designers.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const events = getAllEvents();
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth font-brand`}>
      <body className="leading-base bg-gray-900 text-lg text-white antialiased">
        <Layout events={events}>{children}</Layout>
      </body>
    </html>
  );
}
