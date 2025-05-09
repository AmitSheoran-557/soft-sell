import Header from "./components/common/Header";
import "./globals.css";

export const metadata = {
  title: "SoftSell",
  description: "Welcome back! Please enter your details.",
  openGraph: {
    title: "SoftSell",
    description: "Welcome back! Please enter your details.",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "SoftSell Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell",
    description: "Welcome back! Please enter your details.",
    images: ["/meta-image.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
