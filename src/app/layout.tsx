import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const metadata: Metadata = {
  title: 'Praveen Kumar — Software Engineer | Data Science Engineer | Web3 Enthusiast',
  description: 'Portfolio of Praveen Kumar — Software Engineer, Data Science Engineer and Web3 Enthusiast exploring software engineering, data, Big Data and emerging technologies.',
  keywords: ['Software Engineer', 'Data Science', 'Web3', 'Big Data', 'Cloud', 'Portfolio'],
  authors: [{ name: 'Praveen Kumar' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://praveenkumar.dev',
    siteName: 'Praveen Kumar',
    title: 'Praveen Kumar — Software Engineer | Data Science Engineer | Web3 Enthusiast',
    description: 'Portfolio of Praveen Kumar — Software Engineer, Data Science Engineer and Web3 Enthusiast exploring software engineering, data, Big Data and emerging technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praveen Kumar — Software Engineer | Data Science Engineer | Web3 Enthusiast',
    description: 'Portfolio of Praveen Kumar — Software Engineer, Data Science Engineer and Web3 Enthusiast exploring software engineering, data, Big Data and emerging technologies.',
  },
};

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
