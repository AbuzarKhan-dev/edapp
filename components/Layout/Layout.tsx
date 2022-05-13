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
		</div>
	);
};

export default Layout;
