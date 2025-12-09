import styles from "../_styles/header.module.css"
import NavContact from "./NavContact";
import NavMenu from "./NavMenu"

export default function Header() {
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Sumin Lee</h1>
      <div className={styles.variousButtons}>
        <NavMenu />
        <NavContact />
      </div>
    </div>
  );
}