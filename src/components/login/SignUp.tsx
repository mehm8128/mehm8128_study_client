import { Box, Button, Flex, Heading, Input, Textarea } from '@chakra-ui/react'

import type { NextPage } from "next"

const SignUp: NextPage = () => {
	return (
		<>
			<Box borderWidth={4} borderColor="gray.200" w="40%">
				<Heading textAlign="center">新規登録</Heading>
				<Flex flexDirection="column" justifyContent="space-around" h="80%">
					<Input placeholder="ユーザー名"></Input>
					<Input placeholder="パスワード"></Input>
					<Input placeholder="パスワード(確認)"></Input>
					<Textarea placeholder="自己紹介" resize="none"></Textarea>
					<Button>登録</Button>
				</Flex>
			</Box>
		</>
	)
}

export default SignUp
