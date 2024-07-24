import { JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Transition from "@/components/Transition";
import Stairs from "@/components/Stairs";

const jetbrainsmono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jetbrainsMono"
});

export const metadata = {
  title: "mintRaven.",
  description: "portfolio website",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsmono.variable}>
        
        <Header />
        <Stairs />
        <Transition>
          {children}
        </Transition>
      </body>
    </html>
  );
}
