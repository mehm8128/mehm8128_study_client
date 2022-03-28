import axios from 'axios'
import { createContext, useState } from 'react'
import { GoalType } from 'src/types/Goal'
import { RecordType } from 'src/types/Record'
import { Me, User } from 'src/types/User'

type UserContextType = {
	me: Me
	login: (me: Me) => void
	logout: () => void
	getRecords: (id?: string) => void
	getGoals: (id?: string) => void
	getUsers: () => void
	records: RecordType[]
	goals: GoalType[]
	users: User[]
}
export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC = ({ children }) => {
	const [me, setMe] = useState({
		id: "",
		name: "",
		auth: false,
	} as Me)
	const [records, setRecords] = useState<RecordType[]>(new Array<RecordType>())
	const [goals, setGoals] = useState<GoalType[]>(new Array<GoalType>())
	const [users, setUsers] = useState<User[]>(new Array<User>())

	const login = (me: Me) => {
		setMe(me)
	}
	const logout = () => {
		setMe({ id: "", name: "", auth: false })
	}
	const getRecords = async (id?: string) => {
		let userId = id ? "/user/" + id : ""
		await axios
			.get(process.env.NEXT_PUBLIC_URL + "/api/records" + userId)
			.then((res) => {
				setRecords(res.data)
			})
	}
	const getGoals = async (id?: string) => {
		let userId = id ? "/user/" + id : ""
		await axios
			.get(process.env.NEXT_PUBLIC_URL + "/api/goals" + userId)
			.then((res) => {
				setGoals(res.data)
			})
	}
	const getUsers = () => {
		axios.get(process.env.NEXT_PUBLIC_URL + "/api/users").then((res) => {
			setUsers(res.data)
		})
	}
	return (
		<UserContext.Provider
			value={{
				me,
				login,
				logout,
				getRecords,
				getGoals,
				getUsers,
				records,
				goals,
				users,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
