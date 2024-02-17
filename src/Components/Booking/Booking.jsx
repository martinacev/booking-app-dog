import classes from "./Booking.module.css";
import dog from "../../../public/woof.jpg";

const Booking = () => {
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
							<button className={classes.btn}>BOOK HERE 🐶</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
