import React,{ useState, useEffect } from "react";
import styles from "../../styles/Nav.module.css";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";



const Nav = ({setavticatedRecords,setDisplayRecords,setDisplaynewRecords}) => {
    const [ activeRecords, setActiveRecords ] = useState(true);
    const [ activeNewRecords, setActiveNewRecords ] = useState(false);

    function activateRecords () {
        setActiveRecords(true)
        setActiveNewRecords(false)
        setavticatedRecords(true)
        setDisplayRecords("block")
        setDisplaynewRecords("none")
    }

    function activateNewRecord () {
        setActiveNewRecords(true)
        setActiveRecords(false)
        setavticatedRecords(false)
        setDisplaynewRecords("block")
        setDisplayRecords("none")
       
    }

    
    console.log("records:",activeRecords)
    console.log("newrecords:",activeNewRecords)

    return (
        <nav className={styles.navContainer}>
        <div style={{borderBottom:activeRecords === true ? "4px solid white" : "none"}} className={styles.headingContainer} onClick={() => activateRecords()}><Link href="/home"><a className={styles.link}><span><Image src="/icons/contacts.svg" width={20} height={20}/></span>RECORDS</a></Link></div>
        <div style={{borderBottom:activeNewRecords === true ? "4px solid white" : "none"}} className={styles.headingContainer}  onClick={() => activateNewRecord()}><Link href="/home"><a className={styles.link}><span><Image src="/icons/plus.svg" width={19} height={19}/></span>ADD-RECORD</a></Link></div>
       </nav>
    )
}

export default Nav;