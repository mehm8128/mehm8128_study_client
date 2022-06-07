import { Flex, Heading } from "@chakra-ui/react"

import type { NextPage } from "next"
import Login from "../components/login/Login"
import SignUp from "../components/login/SignUp"

const LoginPage: NextPage = () => {
	return (
		<>
			<Heading mt={4} textAlign="center">
				タイトル
			</Heading>
			<Flex
				direction={{ base: "column", md: "row" }}
				h={500}
				justifyContent="space-around"
				mt={12}
				mx={4}
			>
				<Login />
				<SignUp />
			</Flex>
		</>
	)
}

export default LoginPage
