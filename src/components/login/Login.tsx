import { Box, Heading } from '@chakra-ui/react'

import type { NextPage } from "next"

const Login: NextPage = () => {
	return (
		<>
			<Box borderWidth={4} borderColor="gray.200" h="70%" w="40%">
				<Heading textAlign="center">ログイン</Heading>
			</Box>
		</>
	)
}

export default Login
