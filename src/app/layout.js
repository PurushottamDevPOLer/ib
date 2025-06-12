import "./globals.css";
import Header from "@/components/Header";
import { getAuthenticatedAppForUser } from "@/lib/firebase/serverApp"; 

export const metadata = {
  title: "Indian Burger | Vadapav",
  description: "Indian burger means vadapav.",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  const { currentUser } = await getAuthenticatedAppForUser();
  return (
    <html lang="en">
      <body>
        <Header initialUser={currentUser?.toJSON()} />
        {children}
      </body>
    </html>
  );
}
