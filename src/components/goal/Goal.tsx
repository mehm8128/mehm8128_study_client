import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from 'src/components/UserProvider'
//import { users } from 'src/mock/users'
import { createdByToString } from 'src/utils/createdByToString'
import { dateFormatter } from 'src/utils/dateFormatter'

import { Avatar, Box, Button, Center, Flex, Text } from '@chakra-ui/react'

import { GoalType } from '../../types/Goal'
import LinkComponent from '../common/LinkComponent'

import type { NextPage } from "next"
type Props = {
	goal: GoalType
}
const Goal: NextPage<Props> = (props) => {
	const { me, getGoals, users } = useContext(UserContext)
	function handleFavorite() {
		axios
			.put("http://localhost:8000/api/goals/favorite/" + props.goal.id, {
				createdBy: me.id,
			})
			.then(() => getGoals())
			.catch((err) => alert(err))
	}
	return (
		<>
			<Box borderWidth={2} p={2}>
				<Flex justifyContent="space-between">
					<LinkComponent href={"/user/" + props.goal.createdBy}>
						<Center>
							<Avatar
								name={createdByToString(props.goal.createdBy, users)}
								src={""}
								mr={2}
							></Avatar>
							<Text fontSize={20}>
								{createdByToString(props.goal.createdBy, users)}
							</Text>
						</Center>
					</LinkComponent>
					<Text>{dateFormatter(props.goal.createdAt)}</Text>
				</Flex>
				<Box ml={12}>
					<Text>目標を設定しました！</Text>
					<Text>{props.goal.title}</Text>
					<Text>期限：{props.goal.goalDate}</Text>
					<Text>{props.goal.comment}</Text>
				</Box>
				<Center>
					<Button onClick={handleFavorite}>
						いいね！ {props.goal.favoriteNum}
					</Button>
				</Center>
			</Box>
		</>
	)
}

export default Goal
