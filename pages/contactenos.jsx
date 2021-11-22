import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import FormEmail from '../components/Forms/FormEmail'
import Schedule from '../components/Sections/Schedule'
import MainLayout from "../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<main>
			<FormEmail />
			<Schedule />
		</main>
		<Footer />
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5832112317794!2d-74.07712684958241!3d4.6681516965924725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9affbcbf0bd5%3A0x6383d3abdb90b2cf!2sColombia%20Gas%20Vehicular!5e0!3m2!1ses-419!2sco!4v1637293785155!5m2!1ses-419!2sco" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
		<style jsx>{`

			main {
				display: grid;
				grid-template-columns: 1fr 1fr;
				margin: 6rem 0;
			}
		
			iframe {
				border: none;
				position: relative;
				z-index: 1;
			}
		
		`}</style>
	</MainLayout>
}

export default Index