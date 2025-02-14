import { nunitoSans } from "../public/fonts/fonts";
import "@/public/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} antialised`}>{children}</body>
    </html>
  );
}
