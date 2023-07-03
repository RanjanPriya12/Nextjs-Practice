import { Navbar } from "../src/components/navbar";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar/>
        </header>
        {children}
      </body>
    </html>
  );
}
