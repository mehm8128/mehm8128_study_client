import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from 'src/components/UserProvider'

import { Box, BoxProps, Button, Flex, Heading, Input, Text, Textarea } from '@chakra-ui/react'

import type { NextPage } from "next"

type Props = {
	type: "post" | "put"
	defaultTitle?: string
	defaultPage?: string
	defaultTime?: string
	defaultComment?: string
	id?: string
	onClose?: () => void
} & BoxProps

const RecordForm: NextPage<Props> = ({
	defaultTitle = "",
	defaultPage = "",
	defaultTime = "",
	defaultComment = "",
	id = "",
	...props
}) => {
	const { me, getRecords } = useContext(UserContext)
	const [title, setTitle] = useState("")
	const [page, setPage] = useState("")
	const [time, setTime] = useState("")
	const [comment, setComment] = useState("")
	useEffect(() => {
		setTitle(defaultTitle)
		setPage(defaultPage)
		setTime(defaultTime)
		setComment(defaultComment)
	}, [defaultTitle, defaultPage, defaultTime, defaultComment])

	function handleSubmit() {
		if (
			(title !== "" && /[0-9]+/.test(time) && /[0-9]+/.test(page)) ||
			page === ""
		) {
			if (props.type === "post") {
				axios
					.post(process.env.NEXT_PUBLIC_URL + "/api/records", {
						title: title,
						page: Number(page),
						time: Number(time),
						comment: comment,
						createdBy: me.id,
					})
					.then(() => {
						getRecords()
						setTitle("")
						setPage("")
						setTime("")
						setComment("")
					})
					.catch((err) => alert(err))
			} else {
				axios
					.put(process.env.NEXT_PUBLIC_URL + "/api/records/" + id, {
						title: title,
						page: Number(page),
						time: Number(time),
						comment: comment,
						createdBy: me.id,
					})
					.then(() => {
						getRecords()
						setTitle("")
						setPage("")
						setTime("")
						setComment("")
						if (props.onClose !== undefined) {
							props.onClose()
						}
					})
					.catch((err) => alert(err))
			}
		} else {
			alert("タイトルは必須です。ページと時間は半角数字で入力してください。")
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
				<Text>ページ数</Text>
				<Input
					placeholder="半角数字(任意)"
					value={page}
					onChange={(e) => setPage(e.target.value)}
				></Input>{" "}
				<Text>時間</Text>
				<Input
					placeholder="半角数字(任意)"
					value={time}
					onChange={(e) => setTime(e.target.value)}
				></Input>
				<Text>コメント</Text>
				<Textarea
					placeholder="任意"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					resize="none"
				></Textarea>
				{props.type === "post" ? (
					<Button onClick={handleSubmit}>記録</Button>
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

export default RecordForm
