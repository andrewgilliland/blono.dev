import { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
  style: "normal",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} font-brand`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
