import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'

import { Box, Button, Flex, Heading, Input, Textarea } from '@chakra-ui/react'

import { UserContext } from '../UserProvider'

import type { NextPage } from "next"

const SignUp: NextPage = () => {
	const router = useRouter()
	const { login } = useContext(UserContext)
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirm, setPasswordConfirm] = useState("")
	const [description, setDescription] = useState("")

	function handleRegister() {
		if (
			password === passwordConfirm &&
			userName.length > 0 &&
			password.length > 0
		) {
			axios
				.post(process.env.NEXT_PUBLIC_URL + "/api/users/signup", {
					name: userName,
					password: password,
					description: description,
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
		} else {
			alert(
				"ユーザー名とパスワードは1文字以上必要です。パスワードを確認用パスワードが一致していない可能性があります。"
			)
		}
	}

	return (
		<>
			<Box
				borderWidth={4}
				borderColor="gray.200"
				w={{ base: "100%", md: "40%" }}
				mb={{ base: 12 }}
			>
				<Heading textAlign="center" mt={2}>
					新規登録
				</Heading>
				<Flex flexDirection="column" justifyContent="space-around" h="90%">
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
					<Input
						placeholder="パスワード(確認)"
						value={passwordConfirm}
						onChange={(e) => setPasswordConfirm(e.target.value)}
					></Input>
					<Textarea
						placeholder="自己紹介"
						resize="none"
						h={32}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></Textarea>
					<Button onClick={handleRegister}>登録</Button>
				</Flex>
			</Box>
		</>
	)
}

export default SignUp
