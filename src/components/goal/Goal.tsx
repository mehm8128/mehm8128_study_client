import { users } from 'src/mock/users'
import { createdByToString } from 'src/utils/createdByToString'
import { dateFormatter } from 'src/utils/dateFormatter'

import { Avatar, Box, Button, Center, Flex, Text } from '@chakra-ui/react'

import image from '../../assets/mehm8128.png'
import { Goal } from '../../types/Goal'

import type { NextPage } from "next"

type Props = {
	goal: Goal
}
const Goal: NextPage<Props> = (props) => {
	return (
		<>
			<Box borderWidth={2} p={2}>
				<Flex justifyContent="space-between">
					<Center>
						<Avatar name="aaa" src={image.src} mr={2}></Avatar>
						<Text fontSize={20}>
							{createdByToString(props.goal.createdBy, users)}
						</Text>
					</Center>
					<Text>{dateFormatter(props.goal.createdAt)}</Text>
				</Flex>
				<Box ml={12}>
					<Text>目標を設定しました！</Text>
					<Text>{props.goal.title}</Text>
					<Text>{props.goal.comment}</Text>
				</Box>
				<Center>
					<Button>いいね！ {props.goal.favoriteNum}</Button>
				</Center>
			</Box>
		</>
	)
}

export default Goal
