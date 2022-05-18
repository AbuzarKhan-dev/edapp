import React, { useState } from 'react';
import styles from '../../styles/Nav.module.css';
import Link from 'next/dist/client/link';

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
						activeRecords === true ? '3px solid #FFCC66' : 'none'
				}}
				className={styles.headingContainer}
				onClick={() => activateRecords()}
			>
				<Link href="/home">
					<a
						className={styles.link}
						style={{
							color:
								activeRecords === true ? '#FFCC66' : '#404040'
						}}
					>
						<span className={styles.span}>
							<svg
								version="1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								// enable-background="new 0 0 48 48"
							>
								<path
									fill={
										activeRecords === true
											? '#FFCC66'
											: '#383439'
									}
									d="M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"
								/>
								<path
									fill={
										activeRecords === true
											? '#fce4b4'
											: '#383439'
									}
									d="M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"
								/>
								<g
									fill={
										activeRecords === true
											? '#fce4b4'
											: '#383439'
									}
								>
									<circle cx="26" cy="20" r="4" />
									<path d="M33,30c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V30z" />
								</g>
							</svg>
						</span>
						RECORDS
					</a>
				</Link>
			</div>
			<div
				style={{
					borderBottom:
						activeNewRecords === true ? '3px solid #FFCC66' : 'none'
				}}
				className={styles.headingContainer}
				onClick={() => activateNewRecord()}
			>
				<Link href="/home">
					<a
						className={styles.link}
						style={{
							color:
								activeNewRecords === true
									? '#FFCC66'
									: '#383439'
						}}
					>
						<span className={styles.span}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path
									fill={
										activeNewRecords === true
											? '#FFCC66'
											: '#383439'
									}
									d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
								/>
							</svg>
						</span>
						ADD-RECORD
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
