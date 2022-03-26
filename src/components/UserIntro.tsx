import { useContext } from 'react'
import { UserContext } from 'src/components/UserProvider'
//import { users } from 'src/mock/users'
import { User } from 'src/types/User'
import { createdByToString } from 'src/utils/createdByToString'

import { Avatar, Box, Center, Flex, Text } from '@chakra-ui/react'

import type { NextPage } from "next"
type Props = {
	user: User
}
const UserIntro: NextPage<Props> = (props) => {
	const { users } = useContext(UserContext)
	return (
		<>
			<Box p={4}>
				<Flex>
					<Center>
						<Avatar name={props.user.name} src={""} mr={2}></Avatar>
						<Text fontSize={20}>{createdByToString(props.user.id, users)}</Text>
					</Center>
				</Flex>
				<Box height={20} py={4} px={4}>
					<Text>{props.user.description}</Text>
				</Box>
			</Box>
		</>
	)
}

export default UserIntro
