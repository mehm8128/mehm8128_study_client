import { Button, Flex, Input, Text, Textarea } from "@chakra-ui/react"
import type { BoxProps } from "@chakra-ui/react"
import axios from "axios"
import type { NextPage } from "next"
import { useContext, useEffect, useState } from "react"

import { UserContext } from "../UserProvider"

type Props = {
	type: "post" | "put"
	isCompleted: boolean
	defaultTitle?: string
	defaultGoalDate?: string
	defaultComment?: string
	id?: string
	onClose?: () => void
} & BoxProps

const GoalSettingForm: NextPage<Props> = ({
	defaultTitle = "",
	defaultGoalDate = "",
	defaultComment = "",
	id = "",
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
					.put(process.env.NEXT_PUBLIC_URL + "/api/goals/" + id, {
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
						if (props.onClose !== undefined) {
							props.onClose()
						}
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
				) : (
					<Flex justifyContent="space-around" mt={4}>
						<Button colorScheme="blue" onClick={handleSubmit} w={32}>
							決定
						</Button>
						<Button onClick={props.onClose} w={32}>
							戻る
						</Button>
					</Flex>
				)}
			</Flex>
		</>
	)
}

export default GoalSettingForm
