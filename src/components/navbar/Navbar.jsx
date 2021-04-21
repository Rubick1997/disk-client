import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/img/cloud.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.container}>
				<img src={Logo} alt='' className={styles.navbarLogo} />
				<div className={styles.navbarHeader}>MERN Cloud</div>
				<div className={styles.navbarLogin}>
					<NavLink to='/login'>Login</NavLink>
				</div>
				<div className={styles.navbarRegistration}>
					<NavLink to="/registration">Registration</NavLink></div>
			</div>
		</div>
	);
};

export default Navbar;
