import styles from '../../styles/Header.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import Nav from '../Nav/Nav';

interface PropsInterface {
	displayRecords: any;
	displaynewRecords: any;
}

const Header = ({ displayRecords, displaynewRecords }: PropsInterface) => {
	const [avticatedRecords, setavticatedRecords] = useState(true);
	const [display, setDisplay] = useState('none');

	return (
		<div>
			<header className={styles.header}>
				<div className={styles.logobtnContainer}>
					<div className={styles.logoContainer}>
						<h1>darzi-recordbook</h1>
					</div>
					<div className={styles.toggleBtnContainer}>
						{avticatedRecords === true ? (
							<div
								className={styles.imgContainer}
								onClick={() => setDisplay('block')}
							>
								<Image
									src="/icons/search2.svg"
									width={16}
									height={16}
									alt="icon"
								/>
							</div>
						) : (
							''
						)}
						<div className={styles.dotIconContainer}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div
						style={{ display: display }}
						className={styles.inputMainContainer}
					>
						<div className={styles.bgContainer}></div>
						<div className={styles.inputContainer}>
							<div className={styles.inputdiv}>
								<input
									className={styles.input}
									placeholder="Search customer by name"
								/>
							</div>
							<div
								className={styles.iconContainer}
								onClick={() => setDisplay('none')}
							>
								<Image
									src="/icons/x4.svg"
									width={22}
									height={22}
									style={{ cursor: 'pointer' }}
									alt="searchIcon"
								/>
							</div>
						</div>
					</div>
				</div>
				<Nav
					setavticatedRecords={setavticatedRecords}
					setDisplayRecords={displayRecords}
					setDisplaynewRecords={displaynewRecords}
				/>
			</header>
		</div>
	);
};

export default Header;
