import axios from 'axios'
import { useContext } from 'react'
import { users } from 'src/mock/users'
import { createdByToString } from 'src/utils/createdByToString'
import { dateFormatter } from 'src/utils/dateFormatter'

import { Avatar, Box, Button, Center, Flex, Text } from '@chakra-ui/react'

import image from '../../assets/mehm8128.png'
import { RecordType } from '../../types/Record'
import { UserContext } from '../UserProvider'

import type { NextPage } from "next"
type Props = {
	record: RecordType
}
const Record: NextPage<Props> = (props) => {
	const { user, getRecords } = useContext(UserContext)
	function handleFavorite() {
		axios
			.put("http://localhost:8000/api/records/favorite/" + props.record.id, {
				createdBy: user.id,
			})
			.then(() => getRecords())
			.catch((err) => alert(err))
	}
	return (
		<>
			<Box borderWidth={2} p={2}>
				<Flex justifyContent="space-between">
					<Center>
						<Avatar name={user.name} src={image.src} mr={2}></Avatar>
						<Text fontSize={20}>
							{createdByToString(props.record.createdBy, users)}
						</Text>
					</Center>
					<Text>{dateFormatter(props.record.createdAt)}</Text>
				</Flex>
				<Box ml={12}>
					<Text>{props.record.title}</Text>
					<Text>
						{props.record.time}分、{props.record.page}ページ勉強しました！
					</Text>
					<Text>{props.record.comment}</Text>
				</Box>
				<Center>
					<Button onClick={handleFavorite}>
						いいね！ {props.record.favoriteNum}
					</Button>
				</Center>
			</Box>
		</>
	)
}

export default Record
