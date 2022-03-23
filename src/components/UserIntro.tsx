import { useRouter } from 'next/router'
import { users } from 'src/mock/users'
import { createdByToString } from 'src/utils/createdByToString'

import { Avatar, Box, Center, Flex, Text } from '@chakra-ui/react'

import image from '../assets/mehm8128.png'

import type { NextPage } from "next"

type Props = {
	userId: string
}
const UserIntro: NextPage<Props> = (props) => {
	const me = "mehm8128" //get meで取ってくる
	return (
		<>
			<Box p={4}>
				<Flex>
					<Center>
						<Avatar
							name="aaa"
							src={props.userId === "mehm8128" ? image.src : ""}
							mr={2}
						></Avatar>
						<Text fontSize={20}>
							{props.userId !== "me"
								? createdByToString(props.userId, users)
								: me}
						</Text>
					</Center>
				</Flex>
				<Box height={20} py={4} px={4}>
					<Text>自己紹介</Text>
				</Box>
			</Box>
		</>
	)
}

export default UserIntro
