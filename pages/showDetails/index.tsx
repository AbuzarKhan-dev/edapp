import styles from '../../styles/showDetails.module.css';
import Image from 'next/dist/client/image';
import Link from 'next/link';
import type { NextPage } from 'next';

const ShowDetails: NextPage = () => {
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
							alt="icon"
						/>
					</div>
					<div>
						<h1 className={styles.logoHeading}>darzi-recordbook</h1>
					</div>
				</div>
			</header>
			<section>
				<div className={styles.sectionMainContainer}>
					<div className={styles.insideContainer}>
						<h2 className={styles.mainHeading}>KAMEEZ DETAILS</h2>
						<h3 className={styles.threeHeading}>
							Width : <span>20 inches</span>
						</h3>
						<h3 className={styles.threeHeading}>
							Height : <span>40 inches</span>
						</h3>
						<h3 className={styles.threeHeading}>
							Cuffs :<span> 5 inches</span>
						</h3>
						<h3 className={styles.threeHeading}>
							Addition Info :<span> xyz</span>
						</h3>
					</div>
					<div className={styles.btn}>
						<Image
							src="/icons/edit.svg"
							width={22}
							height={22}
							alt="icon"
						/>
					</div>
					<div style={{ width: 'fit-content', float: 'right' }}>
						<Link href="/edit"><h3 style={{color:"#f1f1f1"}}>{'>'}</h3></Link>
					</div>
				</div>
				<div className={styles.sectionMainContainer}>
					<div className={styles.insideContainer}>
						<h2 className={styles.mainHeading}>PAJAMA DETAILS</h2>
						<h3 className={styles.threeHeading}>
							Width : <span>20 inches</span>
						</h3>
						<h3 className={styles.threeHeading}>
							Height : <span>40 inches</span>
						</h3>
						<h3 className={styles.threeHeading}>
							Poncha : <span>5 inches</span>
						</h3>
						<h3 className={styles.threeHeading}>
							Addition Info : <span>xyz</span>
						</h3>
					</div>
					<div className={styles.btn}>
						<Image
							src="/icons/edit.svg"
							width={22}
							height={22}
							alt="icon"
						/>
					</div>
					<div style={{ width: 'fit-content', float: 'right' }}>
						<Link href="/edit"><h3 style={{color:"#f1f1f1"}}>{'>'}</h3></Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ShowDetails;
