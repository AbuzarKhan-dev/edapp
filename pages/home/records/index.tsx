import List from '../../../components/List/List';

interface PropsInterface {
	display: string;
}

const Record = ({ display }: PropsInterface) => {
	return (
		<div style={{ display: display }}>
			<List />
		</div>
	);
};

export default Record;
