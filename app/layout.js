import { Navbar } from "../src/components/navbar";

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
