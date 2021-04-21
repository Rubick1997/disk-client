import React, { useState } from "react";
import { registration } from "../../actions/user";
import Input from "../input/Input";
import styles from "./styles.module.scss";

const Registration = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className={styles.registration}>
			<div className={styles.registrationHeader}> Registration</div>
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
			<button
				className={styles.registrationButton}
				onClick={() => {
					registration(email, password);
				}}>
				{" "}
				Sign In
			</button>
		</div>
	);
};

export default Registration;
