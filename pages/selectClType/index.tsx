import type { NextPage } from 'next';
import styles from '../../styles/Cltype.module.css';
import Image from 'next/image';
import Link from 'next/link';

const SelectClType: NextPage = () => {
	return (
		<div>
			<header className={styles.header}>
				<div className={styles.logoContainer}>
					<div className={styles.backbtnContainer}>
						<Image
							src="/icons/arrow5.svg"
							width={24}
							height={24}
							style={{ cursor: 'pointer' }}
							alt="arrowIcon"
						/>
					</div>
					<div>
						<h1 className={styles.logoHeading}>darzi-recordbook</h1>
					</div>
				</div>
			</header>
			<section className={styles.section}>
				<div
					className={styles.bgContainer}
					style={{
					   backgroundColor:"#FCFCFC"
					}}
				></div>
				<Link href="/showDetails"><h3 style={{color:"#f1f1f1"}}>{'>'}</h3></Link>
				<div className={styles.insidemainContainer}>
					<div className={styles.btnContainer}>
						<button className={styles.btn}><Image
							src="/icons/tape 1.svg"
							width={24}
							height={24}
							style={{ cursor: 'pointer' }}
							alt="arrowIcon"
							className={styles.Image}
						/><h3>KAMEEZ DETAILS</h3></button>
						<button className={styles.btn}><Image
							src="/icons/tape 1.svg"
							width={24}
							height={24}
							style={{ cursor: 'pointer' }}
							alt="arrowIcon"
						/><h3>SALWAR DETAILS</h3></button>
						<button className={styles.btn}><Image
							src="/icons/tape 1.svg"
							width={24}
							height={24}
							style={{ cursor: 'pointer' }}
							alt="arrowIcon"
						/><h3>KURTA DETAILS</h3></button>
						<button className={styles.btn}><Image
							src="/icons/tape 1.svg"
							width={24}
							height={24}
							style={{ cursor: 'pointer' }}
							alt="arrowIcon"
						/><h3>PAJAMA DETAILS</h3></button>
					</div>
					<div className={styles.dropdownContainer}>
						<select
							className={styles.dropDowmain}
							// value={dropVal}
							// onChange={(e) => setdropVal(e.target.value)}
						>
							<option
								className={styles.dropDowItem}
								value="Select option"
							>
								Select option
							</option>
							<option
								className={styles.dropDowItem}
								value="kameez"
							>
								Kameez
							</option>
							<option
								className={styles.dropDowItem}
								value="shalwar"
							>
								Salwar
							</option>
							<option
								className={styles.dropDowItem}
								value="kurta"
							>
								Kurta
							</option>
							<option
								className={styles.dropDowItem}
								value="pajama"
							>
								Pajama
							</option>
						</select>
					</div>
					<div
						style={{
							width: '90%',
							maxWidth: '500px',
							margin: '0 auto'
						}}
					>
						<Link href="/addMeasurement"><h3 style={{color:"#f1f1f1"}}>{'>'}</h3></Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SelectClType;
