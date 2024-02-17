import PropTypes from "prop-types";
import classes from "./RespondField.module.css";

const RespondField = ({ messageValue }) => {
	return (
		<div>
			<div className={classes.chat}>
				<div className={classes.wrapper}>
					<div className={classes.friend} />
					<div className={classes.box}>
						<div className={classes.text}>{messageValue}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

RespondField.propTypes = {
	messageValue: PropTypes.string.isRequired,
};

export default RespondField;

