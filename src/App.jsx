import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./Components/Booking/Booking";
import Mobile from "./Components/Mobile/Mobile";
import "./App.css";
import Reservation from "./Components/Reservation/Reservation";
import Walker from "./Components/Walker/Walker";

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
