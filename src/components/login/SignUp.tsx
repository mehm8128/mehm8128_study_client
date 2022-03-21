import { Box, Heading } from '@chakra-ui/react'

import type { NextPage } from "next"

const SignUp: NextPage = () => {
	return (
		<>
			<Box borderWidth={4} borderColor="gray.200" h="" w="40%">
				<Heading textAlign="center">新規登録</Heading>
			</Box>
		</>
	)
}

export default SignUp
