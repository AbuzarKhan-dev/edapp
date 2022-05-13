import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charset="UTF-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/logo-128x128.png" />
					<link rel="theme-color" href="#fff" />
					<link rel="manifest" href="/manifest.json" />
					<title>edapp</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
