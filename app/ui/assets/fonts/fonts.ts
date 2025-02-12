import { Lusitana, Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});
const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export { nunitoSans, lusitana };
