import React, { useState } from "react";

import Input from "../input/Input";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	return (
		<div className={styles.authorization}>
			<div className={styles.authorizationHeader}> Login</div>
			<Input
				value={email}
				setValue={setEmail}
				type='email'
				placeholder='Type email...'
			/>
			<Input
				value={password}
				setValue={setPassword}
				type='password'
				placeholder='Type password...'
			/>
			<button className={styles.authorizationButton} onClick={() => {
			  dispatch(login(email,password))
			}}>
				Sign In
			</button>
		</div>
	);
};

export default Login;
