import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useState } from "react"
import { UserContext } from "src/components/UserProvider"

const RecordForm: React.FC = () => {
	const { me, getRecords } = useContext(UserContext)
	const [title, setTitle] = useState("")
	const [page, setPage] = useState("")
	const [time, setTime] = useState("")
	const [comment, setComment] = useState("")

	function handleSubmit(e: any) {
		e.preventDefault()
		if (title === "" || (!/[0-9]+/.test(time) && !/[0-9]+/.test(page))) {
			alert("タイトルは必須です。ページと時間は半角数字で入力してください。")
			return
		}
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
				<Text>ページ数</Text>
				<Input
					placeholder="半角数字(任意)"
					value={page}
					onChange={(e) => setPage(e.target.value)}
				/>
				<Text>時間</Text>
				<Input
					placeholder="半角数字(任意)"
					value={time}
					onChange={(e) => setTime(e.target.value)}
				/>
				<Text>コメント</Text>
				<Textarea
					placeholder="任意"
					resize="none"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				<Button type="submit">記録</Button>
			</Flex>
		</Box>
	)
}

export default RecordForm
