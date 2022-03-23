import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'

import type { NextPage } from "next"

const Login: NextPage = () => {
	return (
		<>
			<Box borderWidth={4} borderColor="gray.200" h="70%" w="40%">
				<Heading textAlign="center" mt={2}>
					ログイン
				</Heading>
				<Flex flexDirection="column" justifyContent="space-around" h="80%">
					<Input placeholder="ユーザー名"></Input>
					<Input placeholder="パスワード"></Input>
					<Button>ログイン</Button>
				</Flex>
			</Box>
		</>
	)
}

export default Login
