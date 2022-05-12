import React from "react";
import type { NextComponentType } from "next";
import styles from "../../styles/List.module.css";
import Image from "next/image";

type PropType = {
    array?: string[];
}

const List: NextComponentType = ({array}: PropType) => {
    
    return (
           <div style={{justifyContent:array?.length === 0 ? "center": "", alignItems:array?.length === 0 ? "center" : ""}} className={styles.mainContainer}>
           {array.length === 0 ?<h1>No record to show</h1> 
            : <ul>
                {array?.map((person, index) => 
                    <li key={index}>
                       <div className={styles.inliContainer}>
                       <div style={{display:"flex",alignItems:"center"}}>
                       <Image src="/icons/person.svg" width={16} height={16} />    
                       <h style={{marginLeft:"10px"}}>{person?.Name}</h>
                       </div>
                       <div style={{display:"flex",alignItems:"center"}}>
                       <Image src="/icons/phone.svg" width={12} height={12} />
                       <p style={{marginLeft:"10px"}}>{person?.Contact}</p>
                       </div>
                       </div>
                    </li>
                )}
            </ul>
}
        </div>
    )
}
export default List;