// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReduxProvider from '../components/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SMA Nusantara',
  description: 'Excellence in Education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}