import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { UserContext } from 'src/components/UserProvider'
import { createdByToString } from 'src/utils/createdByToString'
import { dateFormatter } from 'src/utils/dateFormatter'

import { Avatar, Box, Button, Center, Flex, Text, useDisclosure } from '@chakra-ui/react'

import { GoalType } from '../../types/Goal'
import LinkComponent from '../common/LinkComponent'
import GoalFixModal from './GoalFixModal'

import type { NextPage } from "next"
type Props = {
	goal: GoalType
}
const Goal: NextPage<Props> = (props) => {
	const router = useRouter()
	const { me, getGoals, users } = useContext(UserContext)
	const { isOpen, onOpen, onClose } = useDisclosure()
	function handleComplete() {
		axios
			.put(process.env.NEXT_PUBLIC_URL + "/api/goals/" + props.goal.id, {
				title: props.goal.title,
				comment: props.goal.comment,
				goalDate: props.goal.goalDate,
				isCompleted: true,
				createdBy: me.id,
			})
			.then(() => getGoals(router.asPath === "/user/me" ? me.id : ""))
			.catch((err) => alert(err))
	}
	function handleFavorite() {
		axios
			.put(
				process.env.NEXT_PUBLIC_URL + "/api/goals/favorite/" + props.goal.id,
				{
					createdBy: me.id,
				}
			)
			.then(() => getGoals(router.asPath === "/user/me" ? me.id : ""))
			.catch((err) => alert(err))
	}
	function handleDelete() {
		if (me.id === props.goal.createdBy) {
			axios
				.delete(process.env.NEXT_PUBLIC_URL + "/api/goals/" + props.goal.id)
				.then(() => getGoals(router.asPath === "/user/me" ? me.id : ""))
				.catch((err) => alert(err))
		}
	}
	return (
		<>
			<Box borderWidth={2} p={2}>
				<Flex justifyContent="space-between">
					<LinkComponent href={"/user/" + props.goal.createdBy}>
						<Center>
							<Avatar
								name={createdByToString(props.goal.createdBy, users)}
								src={""}
								mr={2}
							></Avatar>
							<Text fontSize={20}>
								{createdByToString(props.goal.createdBy, users)}
							</Text>
						</Center>
					</LinkComponent>
					<Text>{dateFormatter(props.goal.createdAt)}</Text>
				</Flex>
				<Box ml={12}>
					<Text>目標を設定しました！</Text>
					<Text>{props.goal.title}</Text>
					<Text>期限：{props.goal.goalDate}</Text>
					<Text>{props.goal.comment}</Text>
				</Box>
				<Center justifyContent="space-evenly">
					{props.goal.isCompleted ? (
						<Button disabled={true}>完了済み</Button>
					) : (
						<Button onClick={handleComplete}>この目標を完了する</Button>
					)}
					<Button onClick={handleFavorite}>
						いいね！ {props.goal.favoriteNum}
					</Button>
					{me.id === props.goal.createdBy ? (
						<>
							<Button onClick={onOpen}>この目標を編集する</Button>
							<Button onClick={handleDelete}>この目標を削除する</Button>
						</>
					) : null}
				</Center>
			</Box>
			<GoalFixModal goal={props.goal} isOpen={isOpen} onClose={onClose} />
		</>
	)
}

export default Goal
