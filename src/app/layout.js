import "./globals.css";

export const metadata = {
  title: "Felor Perfume",
  description: "This is Felor Perfume shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-SatoshiVariable selection:bg-[#AB572D55]">
        {children}
      </body>
    </html>
  );
}
