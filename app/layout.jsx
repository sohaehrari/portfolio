import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Soha Ahrari | Frontend Developer",
  description:
    "Portfolio of Soha Ahrari, a frontend developer specializing in React.js, Next.js, JavaScript, and responsive web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}