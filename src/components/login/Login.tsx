import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { UserContext } from 'src/components/UserProvider'

import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'

import type { NextPage } from "next"

const Login: NextPage = () => {
	const router = useRouter()
	const { login } = useContext(UserContext)
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	function handleLogin() {
		axios
			.post("https://mehm8128-study-server.herokuapp.com/api/users/login", {
				name: userName,
				password: password,
			})
			.then((res) => {
				login({
					id: res.data.id,
					name: res.data.name,
					auth: true,
				})
				router.push("/")
			})
			.catch((err) => alert(err))
	}
	return (
		<>
			<Box borderWidth={4} borderColor="gray.200" h="70%" w="40%">
				<Heading textAlign="center" mt={2}>
					ログイン
				</Heading>
				<Flex flexDirection="column" justifyContent="space-around" h="80%">
					<Input
						placeholder="ユーザー名"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					></Input>
					<Input
						placeholder="パスワード"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Input>
					<Button onClick={handleLogin}>ログイン</Button>
				</Flex>
			</Box>
		</>
	)
}

export default Login
