
import styles from "./Home.module.css";
import Card from "./Card";
import { Achivement } from "./Achivement.jsx";
import Navbar from "./Navbar/nav.jsx";
import earth from "../../assets/earth.png"

function Home() {
 return (
  <>
   <div className={styles.heroWrapper}>
    <div className={styles.container}>
      <Navbar />
       <h1 className={styles.title}><img src={earth} alt="earth" className={styles.logo}/>Explore the World </h1>
      <h1 className={styles.head}>STEP INTO NATURE</h1>
    </div>
  </div>

  <div className={styles.section1}>
    <Card />
  </div>

  <div className={styles.achiv}>
    <Achivement />
  </div>
  </>
  );


}
export default Home;