import Header from "@/components/Header";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Todo App",
  description: "todo app for youtube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <>
            <Header />
            {children}
            <Toaster />
          </>
        </Providers>
      </body>
    </html>
  );
}
