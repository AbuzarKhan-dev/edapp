import React, { useState } from 'react';
import styles from '../../styles/Nav.module.css';
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';

interface PropsInterface {
	setavticatedRecords?: any;
	setDisplayRecords?: any;
	setDisplaynewRecords?: any;
}

const Nav = ({
	setavticatedRecords,
	setDisplayRecords,
	setDisplaynewRecords
}: PropsInterface) => {
	const [activeRecords, setActiveRecords] = useState(true);
	const [activeNewRecords, setActiveNewRecords] = useState(false);

	function activateRecords() {
		setActiveRecords(true);
		setActiveNewRecords(false);
		setavticatedRecords(true);
		setDisplayRecords('block');
		setDisplaynewRecords('none');
	}

	function activateNewRecord() {
		setActiveNewRecords(true);
		setActiveRecords(false);
		setavticatedRecords(false);
		setDisplaynewRecords('block');
		setDisplayRecords('none');
	}

	return (
		<nav className={styles.navContainer}>
			<div
				style={{
					borderBottom:
						activeRecords === true ? '3px solid white' : 'none'
				}}
				className={styles.headingContainer}
				onClick={() => activateRecords()}
			>
				<Link href="/home">
					<a className={styles.link}>
						<span>
							<Image
								src="/icons/contacts.svg"
								width={20}
								height={20}
								alt="contactIcon"
							/>
						</span>
						RECORDS
					</a>
				</Link>
			</div>
			<div
				style={{
					borderBottom:
						activeNewRecords === true ? '3px solid white' : 'none',
				}}
				className={styles.headingContainer}
				onClick={() => activateNewRecord()}
			>
				<Link href="/home">
					<a className={styles.link}>
						<span>
							<Image
								src="/icons/plus.svg"
								width={20}
								height={20}
								alt="plusIcon"
							/>
						</span>
						ADD-RECORD
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
