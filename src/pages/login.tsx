import { Flex, Heading } from "@chakra-ui/react"

import type { NextPage } from "next"
import Login from "../components/login/Login"
import SignUp from "../components/login/SignUp"

const LoginPage: NextPage = () => {
	return (
		<>
			<Heading textAlign="center" mt={4}>
				タイトル
			</Heading>
			<Flex
				justifyContent="space-around"
				h={500}
				mt={12}
				mx={4}
				direction={{ base: "column", md: "row" }}
			>
				<Login />
				<SignUp />
			</Flex>
		</>
	)
}

export default LoginPage
