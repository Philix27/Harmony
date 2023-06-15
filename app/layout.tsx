import { Inter } from "next/font/google";
// import "../styles/index.scss";
import styles from "../src/styles/home.module.scss";
// ../styles/home.module.scss


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unwind",
  description: "Speak your mind freely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {children}
        {/* <AuthProvider></AuthProvider> */}
      </body>
    </html>
  );
}
