import '../styles/globals.css'

import { UserProvider } from 'src/components/UserProvider'

import { ChakraProvider } from '@chakra-ui/react'

import Header from '../components/common/Header'

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<UserProvider>
				<Header />
				<Component {...pageProps} />
			</UserProvider>
		</ChakraProvider>
	)
}

export default MyApp
