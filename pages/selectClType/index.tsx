
import styles from "../../styles/Cltype.module.css";
import Image from "next/image";
import Link from "next/link";


const SelectClType = () => {
    return (
        <div> 
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <div className={styles.backbtnContainer}>
                        <Image src="/icons/arrow5.svg" width={24} height={24} style={{cursor:"pointer"}}/>
                    </div>
                    <div>
                        <h1 className={styles.logoHeading}>darzi-recordbook</h1>
                    </div>
                </div>
            </header>
            <section className={styles.section}>
            <div className={styles.bgContainer} style={{backgroundColor:"green",width:"100%",height:"100vh",opacity:"0.2"}}></div>
            <div className={styles.insidemainContainer}>
                <div className={styles.btnContainer}>
                <Link href="/showDetails">{">"}</Link>
                    <button className={styles.btn}>KAMEEZ DETAILS</button>
                    <button className={styles.btn}>SALWAR DETAILS</button>
                    <button className={styles.btn}>KURTA DETAILS</button>
                    <button className={styles.btn}>PAJAMA DETAILS</button>
                </div>
            <div className={styles.dropdownContainer}>
            <select
                className={styles.dropDowmain}
                // value={dropVal}
                // onChange={(e) => setdropVal(e.target.value)}
              >
                <option className={styles.dropDowItem} value="Select option">
                  Select option
                </option>
                <option className={styles.dropDowItem} value="kameez">
                  Kameez
                </option>
                <option className={styles.dropDowItem} value="shalwar">
                  Salwar
                </option>
                <option className={styles.dropDowItem} value="kurta">
                  Kurta
                </option>
                <option className={styles.dropDowItem} value="pajama">
                  Pajama
                </option>
              </select>
              </div>
              <div style={{width:"90%",maxWidth:"500px",margin:"0 auto"}}>
              <Link href="/addMeasurement">{">"}</Link>
              </div>
              </div>
            </section>
        </div>
    )
}

export default SelectClType;