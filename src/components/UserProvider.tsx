import axios from 'axios'
import { createContext, useState } from 'react'
import { GoalType } from 'src/types/Goal'
import { RecordType } from 'src/types/Record'
import { Me } from 'src/types/User'

type UserContextType = {
	user: Me
	login: (user: Me) => void
	logout: () => void
	getRecords: () => void
	getGoals: () => void
	records: RecordType[]
	goals: GoalType[]
}
export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState({
		id: "",
		name: "",
		auth: false,
	} as Me)
	const [records, setRecords] = useState<RecordType[]>(new Array<RecordType>())
	const [goals, setGoals] = useState<GoalType[]>(new Array<GoalType>())

	const login = (user: Me) => {
		setUser(user)
	}
	const logout = () => {
		setUser({ id: "", name: "", auth: false })
	}
	const getRecords = () => {
		axios.get("http://localhost:8000/api/records").then((res) => {
			setRecords(res.data)
		})
	}
	const getGoals = () => {
		axios.get("http://localhost:8000/api/goals").then((res) => {
			setGoals(res.data)
		})
	}
	return (
		<UserContext.Provider
			value={{ user, login, logout, getRecords, getGoals, records, goals }}
		>
			{children}
		</UserContext.Provider>
	)
}
