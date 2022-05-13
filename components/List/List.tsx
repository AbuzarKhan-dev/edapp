import React from 'react';
import styles from '../../styles/List.module.css';
import Image from 'next/image';


const List = () => {
	const data = [
		{ Name: 'Tig', Contact: '+920122223445' },
		{ Name: 'S1mple', Contact: '+920122223445' },
		{ Name: 'Bugha', Contact: '+920122223445' },
		{ Name: 'Choco', Contact: '+920122223445' },
		{ Name: 'Kaymind', Contact: '+920122223445' },
		{ Name: 'Tfue', Contact: '+920122223445' },
		{ Name: 'Shroud', Contact: '+920122223445' },
		{ Name: 'Guardian', Contact: '+920122223445' },
		{ Name: 'Niko', Contact: '+920122223445' },
		{ Name: 'Olof', Contact: '+920122223445' },
		{ Name: 'Shrimzy', Contact: '+920122223445' },
		{ Name: 'Kratos', Contact: '+920122223445' }
	];

	return (
		<div
			className={styles.mainContainer}
		>
			<ul>
				{data?.map((person, index) => (
					<li key={index}>
						<div className={styles.inliContainer}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<Image
									src="/icons/person.svg"
									width={16}
									height={16}
									alt="personIcon"
								/>
								<h4 style={{ marginLeft: '10px' }}>
									{person?.Name}
								</h4>
							</div>
							<div
								style={{
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<Image
									src="/icons/phone.svg"
									width={12}
									height={12}
									alt="phoneIcon"
								/>
								<p style={{ marginLeft: '10px' }}>
									{person?.Contact}
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
export default List;
