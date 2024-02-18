import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./Components/Booking/Booking";
import Mobile from "./Components/Mobile/Mobile";
import './App.css';

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

					{/* Add more routes if needed */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
