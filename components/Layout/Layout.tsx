import React from "react";
import styles from "../../styles/Layout.module.css";
import Header from "../Header/Header";

interface PropsInterface {
    children: React.ReactNode,
    setDisplayRecords: string,
    setDisplaynewRecords: string,
}

const Layout = ({ children,setDisplayRecords,setDisplaynewRecords }: PropsInterface) => {

    return (
        <div className={styles.layout}>
            <Header setDisplayRecords={setDisplayRecords} setDisplaynewRecords={setDisplaynewRecords}/>    
        <div>
            <div className={styles.childrenContainer}>
           {children}
           </div>
        </div>
        </div>
    )
}

export default Layout;