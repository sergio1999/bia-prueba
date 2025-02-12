import { nunitoSans } from "./ui/assets/fonts/fonts";
import "./ui/assets/styles/global.css";

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
