import Head from 'next/head'

import Colors from '../styles/colors'

const Head = ({ title }) => (
	<Head>
		<title>{ title ? title : 'Good Times in Web Development' } &mdash; ʙ ʟ ▲ ĸ ᴇ</title>
		<meta name="description" content="Web Engineer, Blake Petersen, brings the hot takes on common mistakes in web development. Come have a good time with ya boy, Blake!" />
		<link rel='shortcut icon' type='image/x-icon' href='/public/assets/favicon.ico' />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content={ Colors.onyx } />
		<link rel="manifest" href="/public/manifest/manifest.json" />
	</Head>
);

export default Head
