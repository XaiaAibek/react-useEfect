import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main"
import MainSet from "./components/Main/MainSet";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
				<Main />
				<MainSet />
			</header>
		</div>
	);
}

export default App;
