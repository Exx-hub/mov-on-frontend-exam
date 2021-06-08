import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import ContextProvider from "./contexts/Context";
import NavBar from "./components/NavBar";

function App() {
	const location = useLocation();

	let background = location.state && location.state.background;

	return (
		<ContextProvider>
			<div className="App">
				<NavBar />
				<Switch location={background || location}>
					<Route exact path="/" component={Home} />
					<Route exact path="/users" component={Users} />
				</Switch>

				{background && <Route path="/users/create" component={Create} />}
				{background && <Route path="/users/edit/:id" component={Edit} />}
				{background && <Route path="/users/delete/:id" component={Delete} />}
			</div>
		</ContextProvider>
	);
}

export default App;
