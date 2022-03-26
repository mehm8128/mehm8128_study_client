import axios from 'axios'
import { useContext, useState } from 'react'

import { Box, BoxProps, Button, Flex, Heading, Input, Textarea } from '@chakra-ui/react'

import { UserContext } from '../UserProvider'

import type { NextPage } from "next"
const GoalSettingForm: NextPage<BoxProps> = (props) => {
	const { me, getGoals } = useContext(UserContext)
	const [title, setTitle] = useState("")
	const [goalDate, setGoalDate] = useState("")
	const [comment, setComment] = useState("")

	function handleSubmit() {
		if (title !== "" && /^2[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(goalDate)) {
			axios
				.post("http://localhost:8000/api/goals", {
					title: title,
					goalDate: goalDate,
					comment: comment,
					isCompleted: false,
					createdBy: me.id,
				})
				.then(() => {
					getGoals()
					setTitle("")
					setGoalDate("")
					setComment("")
				})
				.catch((err) => alert(err))
		} else {
			alert("タイトルは必須です。期限はyyyy-mm-ddの形式で入力してください。")
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
					<Textarea
						placeholder="コメント"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						resize="none"
					></Textarea>
					<Button onClick={handleSubmit}>目標を設定</Button>
				</Flex>
			</Box>
		</>
	)
}

export default GoalSettingForm
