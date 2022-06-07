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

import { RecordType } from "../../types/record"
import { UserContext } from "../UserProvider"
import LinkComponent from "../common/LinkComponent"
import RecordFixModal from "./RecordFixModal"
import { createdByToString } from "src/utils/createdByToString"
import { dateFormatter } from "src/utils/dateFormatter"

type Props = {
	record: RecordType
}
const Record: React.FC<Props> = (props) => {
	const router = useRouter()
	const { me, getRecords, users } = useContext(UserContext)
	const { isOpen, onOpen, onClose } = useDisclosure()
	function handleFavorite() {
		axios
			.put(
				process.env.NEXT_PUBLIC_URL +
					"/api/records/favorite/" +
					props.record.id,
				{
					createdBy: me.id,
				}
			)
			.then(() => getRecords(router.asPath === "/user/me" ? me.id : ""))
			.catch((err) => alert(err))
	}
	function handleDelete() {
		if (me.id === props.record.createdBy) {
			axios
				.delete(process.env.NEXT_PUBLIC_URL + "/api/records/" + props.record.id)
				.then(() => getRecords(router.asPath === "/user/me" ? me.id : ""))
				.catch((err) => alert(err))
		}
	}
	return (
		<>
			<Box borderWidth={2} p={2}>
				<Flex justifyContent="space-between">
					<LinkComponent href={"/user/" + props.record.createdBy}>
						<Center>
							<Avatar
								mr={2}
								name={createdByToString(props.record.createdBy, users)}
								src={""}
							></Avatar>
							<Text fontSize={20}>
								{createdByToString(props.record.createdBy, users)}
							</Text>
						</Center>
					</LinkComponent>
					<Flex>
						<Flex alignItems="center">
							<Text mr={4}>{dateFormatter(props.record.createdAt)}</Text>
							{me.id === props.record.createdBy ? (
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
													・・・
												</Text>
											</Center>
										</MenuButton>
										<MenuList>
											<MenuItem onClick={onOpen}>この記録を編集する</MenuItem>
											<MenuItem onClick={handleDelete}>
												この記録を削除する
											</MenuItem>
										</MenuList>
									</Menu>
								</>
							) : null}
						</Flex>
					</Flex>
				</Flex>
				<Box mb={4} ml={12}>
					<Text>{props.record.title}</Text>
					<Text>
						{props.record.time ? props.record.time + "分、" : ""}
						{props.record.page ? props.record.page + "ページ " : ""}
						勉強しました！
					</Text>
					<Text whiteSpace="pre-wrap">{props.record.comment}</Text>
				</Box>
				<Center justifyContent="space-evenly">
					<Button onClick={handleFavorite}>
						いいね！ {props.record.favoriteNum}
					</Button>
				</Center>
			</Box>
			<RecordFixModal isOpen={isOpen} record={props.record} onClose={onClose} />
		</>
	)
}

export default Record
