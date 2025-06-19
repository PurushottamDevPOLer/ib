import "./globals.css";
import Header from "@/components/Header";
import { getAuthenticatedAppForUser } from "@/lib/firebase/serverApp"; 
import Script from "next/script"

export const metadata = {
  title: "WHAT A PAV!!",
  description: "Indian burger means vadapav.",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  const { currentUser } = await getAuthenticatedAppForUser();
  return (
    <>
    <html lang="en">
      <body>
        <Header initialUser={currentUser?.toJSON()} />
        {children}
      </body>
    </html>
     <Script src="https://checkout.razorpay.com/v1/checkout.js" />
     </>
  );
}
