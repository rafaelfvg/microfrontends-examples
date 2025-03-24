import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
     <h1>Host App - Squad 3</h1>
     <nav>
        <ul>
          <li>
            <Link href="/commissions">
              Commissions Squad 1
            </Link>
          </li>
          <li>
            <Link href="/squad4">
              Another team app
            </Link>
          </li>
        </ul>  
    </nav> 
    </div>
  );
}
