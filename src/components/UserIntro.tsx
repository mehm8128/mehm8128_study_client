import { Avatar, Box, Center, Flex, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { UserContext } from "src/components/UserProvider"
import { User } from "src/types/user"
import { createdByToString } from "src/utils/createdByToString"
import { minutesToHoursAndMinutes } from "src/utils/minutesToHoursAndMinutes"


type Props = {
	user: User
}
const UserIntro: React.FC<Props> = (props) => {
	const { users, records } = useContext(UserContext)
	const fullStudyTime = records.reduce((acc, record) => {
		return acc + record.time
	}, 0)
	return (
		<>
			<Box p={4}>
				<Flex>
					<Center>
						<Avatar mr={2} name={props.user.name} src={""}></Avatar>
						<Text fontSize={20}>{createdByToString(props.user.id, users)}</Text>
					</Center>
				</Flex>
				<Box height={20} px={4} py={4}>
					<Text>総勉強時間：{minutesToHoursAndMinutes(fullStudyTime)}</Text>
					<Text whiteSpace="pre-wrap">{props.user.description}</Text>
				</Box>
			</Box>
		</>
	)
}

export default UserIntro
