import axios from 'axios'
import { useContext, useState } from 'react'

import { Box, BoxProps, Button, Flex, Heading, Input } from '@chakra-ui/react'

import { UserContext } from '../UserProvider'

import type { NextPage } from "next"
const GoalSettingForm: NextPage<BoxProps> = (props) => {
	const { user, getGoals } = useContext(UserContext)
	const [title, setTitle] = useState("")
	const [goalDate, setGoalDate] = useState("")
	const [comment, setComment] = useState("")

	function handleSubmit() {
		if (title !== "") {
			axios
				.post("http://localhost:8000/api/goals", {
					title: title,
					goalDate: goalDate,
					comment: comment,
					isCompleted: false,
					createdBy: user.id,
				})
				.then(() => getGoals())
				.catch((err) => alert(err))
		}
	}
	return (
		<>
			<Box borderWidth={2} p={8} h={400} {...props}>
				<Heading>目標の設定</Heading>
				<Flex flexDirection="column" justifyContent="space-around" h="80%">
					<Input
						placeholder="タイトル"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					></Input>
					<Input
						placeholder="期限"
						value={goalDate}
						onChange={(e) => setGoalDate(e.target.value)}
					></Input>
					<Input
						placeholder="コメント"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					></Input>
					<Button onClick={handleSubmit}>目標を設定</Button>
				</Flex>
			</Box>
		</>
	)
}

export default GoalSettingForm
