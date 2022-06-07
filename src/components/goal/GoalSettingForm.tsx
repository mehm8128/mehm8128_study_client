import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useState } from "react"

import { UserContext } from "../UserProvider"

const GoalSettingForm: React.FC = () => {
	const { me, getGoals } = useContext(UserContext)
	const [title, setTitle] = useState("")
	const [goalDate, setGoalDate] = useState("")
	const [comment, setComment] = useState("")

	function handleSubmit(e: any) {
		e.preventDefault()
		if (title === "" || !/^2[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(goalDate)) {
			alert("タイトルは必須です。期限はyyyy-mm-ddの形式で入力してください。")
			return
		}
		axios
			.post(process.env.NEXT_PUBLIC_URL + "/api/goals", {
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
	}

	return (
		<Box as="form" h="100%" onSubmit={handleSubmit}>
			<Flex flexDirection="column" h="80%" justifyContent="space-around">
				<Text>タイトル</Text>
				<Input
					placeholder="必須項目"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Text>期限</Text>
				<Input
					placeholder="YYYY-MM-DD"
					value={goalDate}
					onChange={(e) => setGoalDate(e.target.value)}
				/>
				<Text>コメント</Text>
				<Textarea
					placeholder="任意"
					resize="none"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				<Button type="submit">目標を設定</Button>
			</Flex>
		</Box>
	)
}

export default GoalSettingForm
