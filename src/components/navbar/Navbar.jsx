import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/img/cloud.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../reducers/userReducer";
const Navbar = () => {
	const isAuth = useSelector((state) => state.user.isAuth);
	const dispatch = useDispatch();
	return (
		<div className={styles.navbar}>
			<div className={styles.container}>
				<img src={Logo} alt='' className={styles.navbarLogo} />
				<div className={styles.navbarHeader}>MERN Cloud</div>
				{!isAuth && (
					<div className={styles.navbarLogin}>
						<NavLink to='/login'>Log In</NavLink>
					</div>
				)}
				{!isAuth && (
					<div className={styles.navbarRegistration}>
						<NavLink to='/registration'>Registration</NavLink>
					</div>
				)}
				{isAuth && (
					<div
						className={styles.navbarLogin}
						onClick={() => {
							dispatch(logOut());
						}}>
						Log Out
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
