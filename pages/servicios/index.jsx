import Head from 'next/head'
import NavServices from '../../components/Navigation/NavServices'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<NavServices />
	</MainLayout>
}

export default Index