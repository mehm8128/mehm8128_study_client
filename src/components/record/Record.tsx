import axios from 'axios'
import { useContext } from 'react'
//import { users } from 'src/mock/users'
import { createdByToString } from 'src/utils/createdByToString'
import { dateFormatter } from 'src/utils/dateFormatter'

import { Avatar, Box, Button, Center, Flex, Text } from '@chakra-ui/react'

import { RecordType } from '../../types/Record'
import LinkComponent from '../common/LinkComponent'
import { UserContext } from '../UserProvider'

import type { NextPage } from "next"
type Props = {
	record: RecordType
}
const Record: NextPage<Props> = (props) => {
	const { me, getRecords, users } = useContext(UserContext)
	function handleFavorite() {
		axios
			.put(
				"https://mehm8128-study-server.herokuapp.com/api/records/favorite/" +
					props.record.id,
				{
					createdBy: me.id,
				}
			)
			.then(() => getRecords())
			.catch((err) => alert(err))
	}
	return (
		<>
			<Box borderWidth={2} p={2}>
				<Flex justifyContent="space-between">
					<LinkComponent href={"/user/" + props.record.createdBy}>
						<Center>
							<Avatar
								name={createdByToString(props.record.createdBy, users)}
								src={""}
								mr={2}
							></Avatar>
							<Text fontSize={20}>
								{createdByToString(props.record.createdBy, users)}
							</Text>
						</Center>
					</LinkComponent>
					<Text>{dateFormatter(props.record.createdAt)}</Text>
				</Flex>
				<Box ml={12}>
					<Text>{props.record.title}</Text>
					<Text>
						{props.record.time ? props.record.time + "分、" : ""}
						{props.record.page ? props.record.page + "ページ " : ""}
						勉強しました！
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
