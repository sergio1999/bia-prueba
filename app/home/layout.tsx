import HeaderComponent from "@/app/ui/components/header/header";
import styles from './home.module.css';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeaderComponent />
      <section className={styles.container}>{children}</section>
    </div>
  );
}
