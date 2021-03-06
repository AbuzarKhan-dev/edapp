import type { NextPage } from 'next';
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Record from './records';
import AddnewRecord from './addnew';



const Home: NextPage = () => {
	const [displayRecords, setDisplayRecords] = useState('block');
	const [displaynewRecords, setDisplaynewRecords] = useState('none');

	// useEffect(() => {

	// const colRef = collection(db, "users");
	// const unSub = onSnapshot(colRef, (snapShots) =>
	// setRecords(snapShots.docs.map((doc) => doc.data())))

	// return unSub;
	// },[])

	// const record = [{Name:"Tig", Contact:"+920122223445"},{Name:"S1mple", Contact:"+920122223445"},{Name:"Bugha", Contact:"+920122223445"},{Name:"Choco", Contact:"+920122223445"},{Name:"Kaymind", Contact:"+920122223445"},{Name:"Tfue", Contact:"+920122223445"},{Name:"Shroud", Contact:"+920122223445"},{Name:"Guardian", Contact:"+920122223445"},{Name:"Niko", Contact:"+920122223445"},{Name:"Olof", Contact:"+920122223445"},{Name:"Shrimzy", Contact:"+920122223445"},{Name:"Kratos", Contact:"+920122223445"}]
	return (
		<>
			<Layout
				displayRecords={setDisplayRecords}
				displaynewRecords={setDisplaynewRecords}
			>
				<Record display={displayRecords} />
				<AddnewRecord display={displaynewRecords} />
			</Layout>
		</>
	);
};

export default Home;
