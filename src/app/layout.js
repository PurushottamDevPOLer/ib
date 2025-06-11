import "./globals.css";

export const metadata = {
  title: "Indian Burger | Vadapav",
  description: "Indian burger means vadapav.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
