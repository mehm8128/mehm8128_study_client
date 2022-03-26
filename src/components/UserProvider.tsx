import { createContext, useState } from 'react'
import { Me } from 'src/types/User'

type UserContextType = {
	user: Me
	login: (user: Me) => void
	logout: () => void
}
export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState({
		id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
		name: "mehm8128",
		auth: false,
	} as Me)

	const login = (user: Me) => {
		setUser(user)
		//api叩いてsetUser
	}
	const logout = () => {
		//api叩いてsetUser
	}
	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	)
}
