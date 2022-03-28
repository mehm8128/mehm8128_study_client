import axios from 'axios'
import { useContext, useState } from 'react'
import { UserContext } from 'src/components/UserProvider'

import { Box, BoxProps, Button, Flex, Heading, Input, Textarea } from '@chakra-ui/react'

import type { NextPage } from "next"
const RecordForm: NextPage<BoxProps> = (props) => {
	const { me, getRecords } = useContext(UserContext)
	const [title, setTitle] = useState("")
	const [page, setPage] = useState("")
	const [time, setTime] = useState("")
	const [comment, setComment] = useState("")

	function handleSubmit() {
		if (
			(title !== "" && /[0-9]+/.test(time) && /[0-9]+/.test(page)) ||
			page === ""
		) {
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
			alert("タイトルは必須です。ページと時間は半角数字で入力してください。")
		}
	}

	return (
		<>
			<Box borderWidth={2} p={8} h={400} {...props}>
				<Heading>勉強の記録</Heading>
				<Flex flexDirection="column" justifyContent="space-around" h="80%">
					<Input
						placeholder="タイトル"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					></Input>
					<Input
						placeholder="ページ数"
						value={page}
						onChange={(e) => setPage(e.target.value)}
					></Input>
					<Input
						placeholder="時間"
						value={time}
						onChange={(e) => setTime(e.target.value)}
					></Input>
					<Textarea
						placeholder="コメント"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						resize="none"
					></Textarea>
					<Button onClick={handleSubmit}>記録</Button>
				</Flex>
			</Box>
		</>
	)
}

export default RecordForm
