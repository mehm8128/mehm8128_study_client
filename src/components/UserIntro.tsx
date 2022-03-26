import { useContext } from 'react'
import { UserContext } from 'src/components/UserProvider'
import { users } from 'src/mock/users'
import { createdByToString } from 'src/utils/createdByToString'

import { Avatar, Box, Center, Flex, Text } from '@chakra-ui/react'

import image from '../assets/mehm8128.png'

import type { NextPage } from "next"
type Props = {
	userId: string
}
const UserIntro: NextPage<Props> = (props) => {
	const { user } = useContext(UserContext)
	return (
		<>
			<Box p={4}>
				<Flex>
					<Center>
						<Avatar
							name={user.name}
							src={props.userId === "me" ? image.src : ""}
							mr={2}
						></Avatar>
						<Text fontSize={20}>
							{props.userId !== "me"
								? createdByToString(props.userId, users)
								: user.name}
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
