import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./Components/booking/Booking";
import Mobile from "./Components/mobile/Mobile";
import "./App.css";
import Reservation from "./Components/reservation/Reservation";
import Walker from "./Components/walker/Walker";

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
