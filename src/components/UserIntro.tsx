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
			<Box p={4}>
				<Flex>
					<Center>
						<Avatar name="aaa" src={image.src} mr={2}></Avatar>
						<Text fontSize={20}>{"name"}</Text>
					</Center>
				</Flex>
				<Box height={20} py={4} px={4}>
					<Text>自己紹介</Text>
				</Box>
			</Box>
		</>
	)
}

export default UserIntro
