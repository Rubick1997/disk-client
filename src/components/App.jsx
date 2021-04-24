import Navbar from "./navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./styles.module.scss";
import Registration from "./authentication/Registration";
import Login from "./authentication/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../actions/user";

function App() {
	const isAuth = useSelector((state) => state.user.isAuth);
	const dispatch = useDispatch();

	//1 parameter i function and second is array of dependencies
	useEffect(() => {
        dispatch(auth())
    }, [])
	
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Navbar />
				<div className={styles.wrap}>
					{!isAuth && (
						<Switch>
							<Route path='/registration' component={Registration} />
							<Route path='/login' component={Login} />
						</Switch>
					)}
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
