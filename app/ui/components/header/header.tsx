// import { Button } from '@mui/material';
import styles from './header.module.css';

export default function HeaderComponent() {
  return (
    <header className={styles.customHeader}>
      <div className={styles.title}>
        <h1>Where in the world?</h1>
      </div>
      <div className={styles.mode}>
        {/* <Button>dark mode</Button> */}
      </div>
    </header>
  );
}