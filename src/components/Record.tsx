import { users } from 'src/mock/users'
import { createdByToString } from 'src/utils/createdByToString'
import { dateFormatter } from 'src/utils/dateFormatter'

import { Avatar, Box, Button, Center, Flex, Text } from '@chakra-ui/react'

import image from '../assets/mehm8128.png'
import { Record } from '../types/Record'

import type { NextPage } from "next"

type Props = {
	record: Record
}
const Record: NextPage<Props> = (props) => {
	return (
		<>
			<Box borderWidth={2} p={2}>
				<Flex justifyContent="space-between">
					<Center>
						<Avatar name="aaa" src={image.src} mr={2}></Avatar>
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
					<Button>いいね！ {props.record.favoriteNum}</Button>
				</Center>
			</Box>
		</>
	)
}

export default Record
