import { Poppins } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./lib/AppContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Stone Island",
};

const darkScript = `
(function(){
  try {
    var h = document.documentElement;
    h.classList.remove('light');
    h.classList.add('dark');
    h.style.background = '#000000';
    h.style.color = '#ffffff';
  } catch(e) {}
})()
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkScript }} />
      </head>
      <body className={poppins.className} style={{ background: "#000", color: "#fff" }}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
