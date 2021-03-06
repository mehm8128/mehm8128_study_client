import {
	Avatar,
	Box,
	Button,
	Center,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useDisclosure,
} from "@chakra-ui/react"
import axios from "axios"
import { useRouter } from "next/router"
import { useContext } from "react"
import { GoalType } from "../../types/goal"
import LinkComponent from "../common/LinkComponent"
import GoalFixModal from "./GoalFixModal"
import { UserContext } from "src/components/UserProvider"
import { createdByToString } from "src/utils/createdByToString"
import { dateFormatter } from "src/utils/dateFormatter"

type Props = {
	goal: GoalType
}
const Goal: React.FC<Props> = (props) => {
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
								mr={2}
								name={createdByToString(props.goal.createdBy, users)}
								src={""}
							></Avatar>
							<Text fontSize={20}>
								{createdByToString(props.goal.createdBy, users)}
							</Text>
						</Center>
					</LinkComponent>
					<Flex alignItems="center">
						<Text mr={4}>{dateFormatter(props.goal.createdAt)}</Text>
						{me.id === props.goal.createdBy ? (
							<>
								<Menu>
									<MenuButton
										_hover={{ backgroundColor: "gray.200" }}
										borderRadius="50%"
										h={12}
										opacity="50%"
										w={12}
									>
										<Center>
											<Text fontSize={12} fontWeight="bold">
												?????????
											</Text>
										</Center>
									</MenuButton>
									<MenuList>
										<MenuItem onClick={onOpen}>???????????????????????????</MenuItem>
										<MenuItem onClick={handleDelete}>
											???????????????????????????
										</MenuItem>
									</MenuList>
								</Menu>
							</>
						) : null}
					</Flex>
				</Flex>
				<Box mb={4} ml={12}>
					<Text>??????????????????????????????</Text>
					<Text>{props.goal.title}</Text>
					<Text>?????????{props.goal.goalDate}</Text>
					<Text whiteSpace="pre-wrap">{props.goal.comment}</Text>
				</Box>
				<Center justifyContent="space-evenly">
					{props.goal.isCompleted ? (
						<Button disabled={true}>????????????</Button>
					) : (
						<Button onClick={handleComplete}>???????????????????????????</Button>
					)}
					<Button onClick={handleFavorite}>
						???????????? {props.goal.favoriteNum}
					</Button>
				</Center>
			</Box>
			<GoalFixModal goal={props.goal} isOpen={isOpen} onClose={onClose} />
		</>
	)
}

export default Goal
