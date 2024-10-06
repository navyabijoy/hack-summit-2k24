import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { MessagesProvider } from '@/context/messages'
import Providers from '@/components/Providers'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unify",
  description: "Empowering Silent Voices",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MessagesProvider>
            {children}
          </MessagesProvider>
        </Providers> 
      </body>
    </html>
    </ClerkProvider>
  );
}
