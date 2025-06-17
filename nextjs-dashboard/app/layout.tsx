import type { Metadata } from "next";
import "./globals.css";


// Load fonts from Google with Tailwind-friendly CSS variables

// Metadata used for SEO / browser title
export const metadata = {
  title: 'Trulynotes',
  description: 'The platform where IB students collaborate and succeed.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist&family=Geist+Mono&display=swap"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}