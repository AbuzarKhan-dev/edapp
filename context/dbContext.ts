import React, { useContext, useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const dbContext = React.createContext();

export function useDb() {
  return useContext(dbContext);
}

const DbProvider = ({ children }) => {
  const [id, setId] = useState("");
  async function createRecord(e ?: any, name : string, contact: string, info: string ) {
    e.preventDefault();
    try {
      const colRef = collection(db, "users");
      const docRef = await addDoc(colRef, {
        Name: name,
        Contact: contact,
        AdditionalInfo: info,
        id: "",
      });
      console.log("Document written with ID: ", docRef.id);
      setId(docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function kameezMeasurements(
    length: number,
    width: number,
    cuffs: number,
    additionalinfo: string,
    useruid: string | number,
    id: string | number
  ) {
    try {
      const docRef = collection(db, "users", id, "kameezdetails");
      await addDoc(docRef, {
        Length: `${length} inches`,
        Width: `${width} inches`,
        Cuffs: `${cuffs} inches`,
        Additionalinfo: additionalinfo,
        uid: useruid,
      });
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function salwarMeasurements(
    length: number,
    width: number,
    poncha: number,
    additionalinfo: string,
    useruid: string | number,
    id: string | number
  ) {
    try {
      const docRef = collection(db, "users", id, "shalwardetails");
      await addDoc(docRef, {
        Length: `${length} inches`,
        Width: `${width} inches`,
        Poncha: `${poncha} inches`,
        Additionalinfo: additionalinfo,
        uid: useruid,
      });
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  console.log("id:", id);
  const value = {
    id,
    createRecord,
    kameezMeasurements,
    salwarMeasurements,
  };

};

export default DbProvider;