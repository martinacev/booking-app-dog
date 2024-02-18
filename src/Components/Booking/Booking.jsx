import classes from "./Booking.module.css";
import dog from "../../../public/woof.jpg";
import { useNavigate } from "react-router-dom";

const Booking = () => {
	const navigate = useNavigate();

	const navigateButton = () => {
		navigate("/reservation");
	};

	return (
		<div className={classes.container}>
			<div className={classes.bgImg}>
				<div className={classes.content}>
					<div className={classes.card}>
						<div className={classes.wrapper}>
							<img className={classes.dog} src={dog} alt="dog" />
						</div>
						<div className={classes.booking}>
							<p className={classes.text}>
								Simply tap, choose, and let the wagging begin!
								Your pup`s happiness is just a few clicks away.
							</p>
							<button
								onClick={navigateButton}
								className={classes.btn}
							>
								BOOK HERE 🐶
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
