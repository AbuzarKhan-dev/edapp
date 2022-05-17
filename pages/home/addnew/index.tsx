import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../../styles/newRecord.module.css';
// import { useRouter } from 'next/router';

type PropType = {
	display: string;
};

const AddnewRecord = ({ display }: PropType) => {
	const [name, setName] = useState('');
	const [contact, setContact] = useState('');
	const [info, setInfo] = useState('');




	return (
		<div style={{ display: display }} className={styles.mainContainer}>
			<div
				className={styles.bgContainer}
			></div>
			<div className={styles.insidemainContainer}>
				<h1 className={styles.mainHeading}>
					Enter the following info to create new record
				</h1>
				<div className={styles.fromContainer}>
					<form className={styles.form} onSubmit={() => {}}>
						<label className={styles.label}>Name</label>
						<input
							className={styles.input}
							placeholder="Enter name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label className={styles.label}>Contact</label>
						<input
							className={styles.input}
							placeholder="Enter contact number"
							value={contact}
							onChange={(e) => setContact(e.target.value)}
						/>
						<label className={styles.label}>Additional Info</label>
						<input
							className={styles.input}
							placeholder="Enter any extra info"
							value={info}
							onChange={(e) => setInfo(e.target.value)}
						/>
						<input
							className={styles.submit}
							type="submit"
							value="SUBMIT"
						/>
						<Link href={'/selectClType'}>{'>'}</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddnewRecord;
