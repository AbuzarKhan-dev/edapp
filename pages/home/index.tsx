import React,{ useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "../../styles/Home.module.css";
import Record from "./records";
import AddnewRecord from "./addnew";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/Config";

interface PropsInterface {
    records ?: any
}

const Home = () => {
    const [ displayRecords, setDisplayRecords ] = useState("block");
    const [ displaynewRecords, setDisplaynewRecords ] = useState("none");
    const [ records, setRecords ] = useState([]);

    function getRecords () {
        
    }

    useEffect(() => {
    
    const colRef = collection(db, "users");
    const unSub = onSnapshot(colRef, (snapShots) =>   
    setRecords(snapShots.docs.map((doc) => doc.data())))

    return unSub;
    },[])

    const rec = [];
    const record = [{Name:"Tig", Contact:"+920122223445"},{Name:"S1mple", Contact:"+920122223445"},{Name:"Bugha", Contact:"+920122223445"},{Name:"Choco", Contact:"+920122223445"},{Name:"Kaymind", Contact:"+920122223445"},{Name:"Tfue", Contact:"+920122223445"},{Name:"Shroud", Contact:"+920122223445"},{Name:"Guardian", Contact:"+920122223445"},{Name:"Niko", Contact:"+920122223445"},{Name:"Olof", Contact:"+920122223445"},{Name:"Shrimzy", Contact:"+920122223445"},{Name:"Kratos", Contact:"+920122223445"}]
    return (
        <div>
            <Layout setDisplayRecords={setDisplayRecords} setDisplaynewRecords={setDisplaynewRecords}>
              <Record array={record} display={displayRecords}/>
              <AddnewRecord display={displaynewRecords}/>
            </Layout>
            </div>
    )
}


export default Home;

