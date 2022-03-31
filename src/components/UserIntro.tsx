import axios from 'axios'
import { useContext, useState } from 'react'
import { UserContext } from 'src/components/UserProvider'
import { User } from 'src/types/User'
import { createdByToString } from 'src/utils/createdByToString'
import { minutesToHoursAndMinutes } from 'src/utils/minutesToHoursAndMinutes'

import {
    Avatar, Box, Button, Center, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent,
    ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure
} from '@chakra-ui/react'

import type { NextPage } from "next"
type Props = {
	user: User
}
const UserIntro: NextPage<Props> = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { me, users, records, getUsers } = useContext(UserContext)
	const [userName, setUserName] = useState(props.user.name)
	const [description, setDescription] = useState(props.user.description)
	const fullStudyTime = records.reduce((acc, record) => {
		return acc + record.time
	}, 0)

	function handleFixIntro() {
		if (userName.length > 0) {
			axios
				.put(process.env.NEXT_PUBLIC_URL + "/api/users/me", {
					id: me.id,
					name: userName,
					description: description,
				})
				.then(() => {
					getUsers()
				})
				.catch((err) => alert(err))
		} else {
			alert("ユーザー名は1文字以上必要です。")
		}
	}
	return (
		<>
			<Box p={4}>
				<Flex justifyContent="space-between">
					<Flex>
						<Center>
							<Avatar name={props.user.name} src={""} mr={2}></Avatar>
							<Text fontSize={20}>
								{createdByToString(props.user.id, users)}
							</Text>
						</Center>
					</Flex>
					{me.id === props.user.id ? (
						<Button onClick={onOpen}>ユーザー情報を編集する</Button>
					) : null}
				</Flex>
				<Box height={20} py={4} px={4}>
					<Text>総勉強時間：{minutesToHoursAndMinutes(fullStudyTime)}</Text>
					<Text>{props.user.description}</Text>
				</Box>
			</Box>
			<Modal size="xl" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent h="70%">
					<ModalHeader>ユーザー情報の編集</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>ユーザー名</Text>
						<Input
							placeholder="ユーザー名"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						></Input>
						<Text>自己紹介</Text>
						<Textarea
							placeholder="自己紹介"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							resize="none"
						></Textarea>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={handleFixIntro}>
							決定
						</Button>
						<Button onClick={onClose}>戻る</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default UserIntro
