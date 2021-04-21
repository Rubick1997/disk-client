import Navbar from "./navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./styles.module.scss";
import Registration from "./registration/Registration";

function App() {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Navbar />
				<div className={styles.wrap}>
					<Switch>
						<Route path='/registration' component={Registration} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
