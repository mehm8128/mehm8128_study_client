import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import { Box, BoxProps, ListItem, UnorderedList } from '@chakra-ui/react'

import { UserContext } from '../UserProvider'
//import { goals } from '../../mock/goals'
import Goal from './Goal'

import type { NextPage } from "next"
type Props = {
	userId?: string
} & BoxProps

const GoalList: NextPage<Props> = (props) => {
	const router = useRouter()
	const { goals, getGoals } = useContext(UserContext)
	useEffect(() => {
		getGoals(props.userId ? props.userId : "")
	}, [router.pathname])
	return (
		<>
			<Box {...props}>
				<UnorderedList listStyleType="none">
					{goals.map((goal) => (
						<ListItem key={goal.id} mb={4}>
							<Goal goal={goal} />
						</ListItem>
					))}
				</UnorderedList>
			</Box>
		</>
	)
}

export default GoalList
