import React from 'react';
import styles from '../../styles/Layout.module.css';
import Header from '../Header/Header';

interface PropsInterface {
	children: React.ReactNode;
	displayRecords: any;
	displaynewRecords: any;
}

const Layout = ({
	children,
	displayRecords,
	displaynewRecords
}: PropsInterface) => {
	return (
		<div className={styles.layout}>
			<Header
				displayRecords={displayRecords}
				displaynewRecords={displaynewRecords}
			/>
			<div>
				<div className={styles.childrenContainer}>{children}</div>
			</div>
			<footer>
				<div className={styles.footerContainer}>
					<div className={styles.footerContainerWrapper}>
						<div className={styles.footerIconContainer}>
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 122.88 112.07" ><style type="text/css"></style><g><path className="st0" fill="#FFFFFF" d="M61.44,0L0,60.18l14.99,7.87L61.04,19.7l46.85,48.36l14.99-7.87L61.44,0L61.44,0z M18.26,69.63L18.26,69.63 L61.5,26.38l43.11,43.25h0v0v42.43H73.12V82.09H49.49v29.97H18.26V69.63L18.26,69.63L18.26,69.63z"/></g></svg>
						</div>
						<div className={styles.footerIconContainer}>
						<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 389.24"><path fill="#FFFFFF" d="M0 0h275.1v50.04H0V0zm361.79 115.14 54.44 54.44H0v50.04h416.2l-54.41 54.41 35.39 35.39L512 194.6v-.03l-35.39-35.36-79.43-79.46-35.39 35.39zM0 339.2h275.1v50.04H0V339.2z"/></svg>
						</div>
						<div className={styles.footerIconContainer}>
						<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 389.24"><path fill="#FFFFFF" d="M0 0h275.1v50.04H0V0zm361.79 115.14 54.44 54.44H0v50.04h416.2l-54.41 54.41 35.39 35.39L512 194.6v-.03l-35.39-35.36-79.43-79.46-35.39 35.39zM0 339.2h275.1v50.04H0V339.2z"/></svg>
						</div>
						<div className={styles.footerIconContainer}>
						<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 389.24"><path fill="#FFFFFF" d="M0 0h275.1v50.04H0V0zm361.79 115.14 54.44 54.44H0v50.04h416.2l-54.41 54.41 35.39 35.39L512 194.6v-.03l-35.39-35.36-79.43-79.46-35.39 35.39zM0 339.2h275.1v50.04H0V339.2z"/></svg>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
