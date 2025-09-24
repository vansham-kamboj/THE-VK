import type {Metadata} from 'next';
import './globals.css';
import { LayoutClient } from '@/components/layout-client';

export const metadata: Metadata = {
  title: "VK's Cosmic Portfolio",
  description: 'The Boy Who Never Quit Dreaming',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased text-secondary-foreground">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
