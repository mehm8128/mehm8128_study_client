import axios from 'axios'
import { useContext, useEffect, useState } from 'react'

import { BoxProps, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'

import { UserContext } from '../UserProvider'

import type { NextPage } from "next"

type Props = {
	type: "post" | "put"
	isCompleted: boolean
	defaultTitle?: string
	defaultGoalDate?: string
	defaultComment?: string
} & BoxProps

const GoalSettingForm: NextPage<Props> = ({
	defaultTitle = "",
	defaultGoalDate = "",
	defaultComment = "",
	...props
}) => {
	const { me, getGoals } = useContext(UserContext)
	const [title, setTitle] = useState("")
	const [goalDate, setGoalDate] = useState("")
	const [comment, setComment] = useState("")
	useEffect(() => {
		setTitle(defaultTitle)
		setGoalDate(defaultGoalDate)
		setComment(defaultComment)
	}, [defaultTitle, defaultGoalDate, defaultComment])

	function handleSubmit() {
		if (title !== "" && /^2[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(goalDate)) {
			if (props.type === "post") {
				axios
					.post(process.env.NEXT_PUBLIC_URL + "/api/goals", {
						title: title,
						goalDate: goalDate,
						comment: comment,
						isCompleted: props.isCompleted,
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
				axios
					.put(process.env.NEXT_PUBLIC_URL + "/api/goals", {
						title: title,
						goalDate: goalDate,
						comment: comment,
						isCompleted: props.isCompleted,
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
		} else {
			alert("タイトルは必須です。期限はyyyy-mm-ddの形式で入力してください。")
		}
	}

	return (
		<>
			<Flex flexDirection="column" justifyContent="space-around" h="80%">
				<Text>タイトル</Text>
				<Input
					placeholder="必須項目"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				></Input>
				<Text>期限</Text>
				<Input
					placeholder="YYYY-MM-DD"
					value={goalDate}
					onChange={(e) => setGoalDate(e.target.value)}
				></Input>
				<Text>コメント</Text>
				<Textarea
					placeholder="任意"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					resize="none"
				></Textarea>
				{props.type === "post" ? (
					<Button onClick={handleSubmit}>目標を設定</Button>
				) : null}
			</Flex>
		</>
	)
}

export default GoalSettingForm
