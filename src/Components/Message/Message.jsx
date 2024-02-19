import { useState } from "react";
import PropTypes from "prop-types";
import classes from "./Message.module.css";

const Message = ({ onMessageChange }) => {
	const [inputValue, setInputValue] = useState("");

	const handleButtonClick = () => {
		onMessageChange(inputValue);
		setInputValue("");
	};

	const handleInputKeyDown = (event) => {
		if (event.key === "Enter") {
			handleButtonClick();
		}
	};

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<input
					className={classes.message}
					type="text"
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
					onKeyDown={handleInputKeyDown}
				/>
				<button className={classes.send} onClick={handleButtonClick}>
					{">"}
				</button>
			</div>
		</div>
	);
};

Message.propTypes = {
	onMessageChange: PropTypes.func.isRequired,
};

export default Message;
