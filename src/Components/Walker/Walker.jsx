import Employers from "../employers/Employers";
import classes from "./Walker.module.css";

const Walker = () => {
	return (
		<div className={classes.container}>
			<Employers />
		</div>
	);
};

export default Walker;
