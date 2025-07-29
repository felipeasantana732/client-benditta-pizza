import StyledComponentsRegistry from '@/lib/styled-components-registry'; 
import { Poppins } from "next/font/google"; 
import './globals.css'; 
import CookieConsentBanner from '@/components/CookieConsentBanner';


const poppins = Poppins({
  weight:["400", "500", "600", "700" ], 
  subsets: ["latin"], 
  display: 'swap', 
  variable: '--font-poppins', 
});

// Metadados da sua aplicação
export const metadata = {
  title: '🍕Benditta Pizza',
  description: 'A melhor pizza com massa de fermentação natural de Goiânia!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <body className={`${poppins.variable} antialiased`}> 
       <StyledComponentsRegistry>
         <CookieConsentBanner />
            {children} {/* Renderiza o conteúdo da página atual */}
             </StyledComponentsRegistry>
      </body>
    </html>
  );
}
