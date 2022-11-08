import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import toast, { Toaster } from "react-hot-toast";

//api-key & baseurl
const api_key = "e73f257fc4704818fcdc0479ca01561d";
const baseURL = "https://api.themoviedb.org/3";

export const UserContext = createContext();

export default function UserProvider({ children }) {
	const [user, setUser] = useState(null);

	const [status, setStatus] = useState(0);

	const [session, setSession] = useState(() => localStorage.getItem("session"));

	async function getUserData() {
		const getUser = await axios.get(
			`${baseURL}/account?api_key=${api_key}&session_id=${session}`
		);
		setUser(getUser.data);
	}
	//check null or fill session
	useEffect(() => {
		getUserData();
	}, [session]);

	//function for login in component Sign in
	async function login(username, password) {
		try {
			const tokenResult = await axios.get(
				`${baseURL}/authentication/token/new?api_key=${api_key}`
			);
			// console.log(tokenResult.data.request_token);

			const authentication = await axios.post(
				` ${baseURL}/authentication/token/validate_with_login?api_key=${api_key}`,
				{
					username,
					password,
					request_token: tokenResult.data.request_token,
				}
			);

			const session = await axios.post(
				`${baseURL}/authentication/session/new?api_key=${api_key}`,
				{
					request_token: tokenResult.data.request_token,
				}
			);

			setStatus(tokenResult.status);

			setSession(session.data.session_id);
			localStorage.setItem("session", session.data.session_id);
		} catch {
			toast.error("Invalid username or password.", {
				style: { backgroundColor: "#eec932", color: "#000" },
			});
		}
	}
	//
	return (
		<UserContext.Provider value={{ user, login, session, status }}>
			{children}
		</UserContext.Provider>
	);
}
