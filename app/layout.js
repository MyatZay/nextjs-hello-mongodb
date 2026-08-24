import "./globals.css";

export const metadata = {
  title: "Next.js API Assignments",
  description: "Hello API and MongoDB testing API"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
