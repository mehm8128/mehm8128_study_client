import { Avatar, Box, Button, Center, Flex, Text } from '@chakra-ui/react'

import image from '../assets/mehm8128.png'
import { Goal } from '../types/Goal'

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
						<Avatar name="aaa" src={image.src} mr={4}></Avatar>
						<Text>{props.goal.createdBy}</Text>
					</Center>
					<Text>{props.goal.createdAt}</Text>
				</Flex>
				<Box ml={12}>
					<Text>目標を設定しました！</Text>
					<Text>{props.goal.title}</Text>
					<Text>{props.goal.comment}</Text>
				</Box>
				<Center>
					<Button>いいね！</Button>
					<Text>{props.goal.favoriteNum}</Text>
				</Center>
			</Box>
		</>
	)
}

export default Goal
