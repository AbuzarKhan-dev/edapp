import type { NextPage } from 'next';
import styles from '../../styles/edit.module.css';
import Image from 'next/dist/client/image';
import Link from 'next/link';

const Edit: NextPage = () => {
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
				<div className={styles.mainContainer}>
					<h1 className={styles.mainHeading}>Edit KAMEEZ DETAILS</h1>
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
											backgroundColor: '#183413',
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
											backgroundColor: '#C4070A',
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
											backgroundColor: '#183413',
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
											backgroundColor: '#C4070A',
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
											backgroundColor: '#183413',
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
											backgroundColor: '#C4070A',
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
											backgroundColor: '#183413',
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
											backgroundColor: '#C4070A',
											borderBottomRightRadius: '3px',
											fontSize: '18px'
										}}
										className={styles.button}
									>
										-
									</button>
								</div>
							</div>
							<input
								className={styles.submit}
								type="submit"
								value="SAVE"
							/>
							<Link href="/selectClType">{'<'}</Link>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Edit;
