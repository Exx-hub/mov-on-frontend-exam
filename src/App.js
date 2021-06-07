import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/users" component={Users} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
