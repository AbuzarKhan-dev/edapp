import styles from '../../styles/addMeasure.module.css';
import Image from 'next/dist/client/image';
import Link from 'next/link';

const AddMeasurement = () => {
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
						
					}}
				></div>
				<div className={styles.insidemainContainer}>
					<div className={styles.mainContainer}>
						<h1 className={styles.mainHeading}>ADD MEASUREMENTS</h1>
						<div className={styles.fromContainer}>
							<form className={styles.form}>
								<label className={styles.label}>Width</label>
								<div style={{ display: 'flex' }}>
									<input className={styles.input} />{' '}
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											width: '50px'
										}}
									>
										{' '}
										<button
											style={{
												backgroundColor: '#66BDAB',
												borderBottom: '1px solid white',
												borderTopRightRadius: '3px',
												fontSize: '18px'
											}}
											className={styles.button}
										>
											+
										</button>
										<button
											style={{
												backgroundColor: '#DD3B49',
												borderBottomRightRadius: '3px',
												fontSize: '18px'
											}}
											className={styles.button}
										>
											-
										</button>
									</div>
								</div>
								<label className={styles.label}>Length</label>
								<div style={{ display: 'flex' }}>
									<input className={styles.input} />{' '}
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											width: '50px'
										}}
									>
										{' '}
										<button
											style={{
												backgroundColor: '#66BDAB',
												borderBottom: '1px solid white',
												borderTopRightRadius: '3px',
												fontSize: '18px'
											}}
											className={styles.button}
										>
											+
										</button>
										<button
											style={{
												backgroundColor: '#DD3B49',
												borderBottomRightRadius: '3px',
												fontSize: '18px'
											}}
											className={styles.button}
										>
											-
										</button>
									</div>
								</div>
								<label className={styles.label}>Cuffs</label>
								<div style={{ display: 'flex' }}>
									<input className={styles.input} />{' '}
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											width: '50px'
										}}
									>
										{' '}
										<button
											style={{
												backgroundColor: '#66BDAB',
												borderBottom: '1px solid white',
												borderTopRightRadius: '3px',
												fontSize: '18px'
											}}
											className={styles.button}
										>
											+
										</button>
										<button
											style={{
												backgroundColor: '#DD3B49',
												borderBottomRightRadius: '3px',
												fontSize: '18px'
											}}
											className={styles.button}
										>
											-
										</button>
									</div>
								</div>
								<label className={styles.label}>
									Additional Info
								</label>
								<div style={{ display: 'flex' }}>
									<input
										style={{
											width: '130px',
											borderRadius: '3px'
										}}
										className={styles.input}
									/>
								</div>
								<input
									className={styles.submit}
									type="submit"
									value="SUBMIT"
								/>
								<Link href="/selectClType">{'<'}</Link>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AddMeasurement;
