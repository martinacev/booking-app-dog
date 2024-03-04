import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Mobile from "./components/Mobile/Mobile";
import "./App.css";
import Reservation from "./components/Reservation/Reservation";
import Walker from "./components/Walker/Walker";

function App() {
	return (
		<Router>
			<div className="container">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Mobile />
								<Booking />
							</>
						}
					/>
					<Route path="/reservation" element={<Reservation />} />
					<Route path="/dogwalkers" element={<Walker />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
