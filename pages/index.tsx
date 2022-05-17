import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<div>
			<h1 style={{marginTop:"0px",color:"#f1f1f1"}}>Sign in</h1>
			<Link href={'/home'}>{'>>>>'}</Link>
		</div>
	);
};

export default Home;
