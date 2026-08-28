import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bautizo-valentina-2026.antoniojcc735429.chatgpt.site'),
  title: 'Bautizo de Cauri Danika.',
  description: 'Una invitación especial para acompañarnos a celebrar el bautizo de Cauri Danika.',
  openGraph: {
    title: 'Bautizo de Cauri Danika.',
    description: '03 de octubre de 2026 · 04:00 p. m.',
    type: 'website',
    locale: 'es_MX',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Bautizo de Cauri Danika.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bautizo de Cauri Danika.',
    description: '14 de noviembre de 2026 · 11:00 a. m.',
    images: ['/og.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
