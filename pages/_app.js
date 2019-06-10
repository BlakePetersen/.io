import App, { Container } from 'next/app'
import Layout from '../components/layout/Layout'

export default class MyApp extends App {
	static async getInitialProps ({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		pageProps.pathname = router.route;

		return {pageProps}
	}

	render () {
		const {Component, pageProps} = this.props;
		console.log('props', pageProps);
		return <Container>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Container>
	}
}