import { Flex, Heading } from '@chakra-ui/react'

import Login from '../components/login/Login'
import SignUp from '../components/login/SignUp'

import type { NextPage } from "next"

const LoginPage: NextPage = () => {
	return (
		<>
			<Heading textAlign="center" mt={4}>
				タイトル
			</Heading>
			<Flex justifyContent="space-around" h={500} mt={12}>
				<SignUp />
				<Login />
			</Flex>
		</>
	)
}

export default LoginPage
