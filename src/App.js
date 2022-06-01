import Navbar from "./componenets/Navbar";
import "./App.css";
import AddShop from "./componenets/Shop";
import ShopState from "./contaxt/ShopState";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ShopState>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<AddShop />} />
					</Routes>
				</ShopState>
			</BrowserRouter>
		</div>
	);
}

export default App;
