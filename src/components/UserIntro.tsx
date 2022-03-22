import { useRouter } from 'next/router'

import { Avatar, Box, Center, Flex, Text } from '@chakra-ui/react'

import image from '../assets/mehm8128.png'

import type { NextPage } from "next"

type Props = {
	userId: string
}
const UserIntro: NextPage<Props> = (props) => {
	return (
		<>
			<Box>
				<Flex>
					<Center>
						<Avatar name="aaa" src={image.src} mr={4}></Avatar>
						<Text>{"name"}</Text>
					</Center>
				</Flex>
				<Text>自己紹介</Text>
			</Box>
		</>
	)
}

export default UserIntro
