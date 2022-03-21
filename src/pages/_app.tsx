import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'

import Header from '../components/common/Header'

import type { AppProps } from "next/app"
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Header />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
