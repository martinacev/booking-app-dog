import classes from "./MyChat.module.css";
import TEXT_DATA from "../data/textData";

const MyChat = () => {
	return (
		<div>
			<div className={classes.chat}>
				<div className={classes.empty}></div>
				<div className={classes.text}>{TEXT_DATA.secondText}</div>
			</div>
		</div>
	);
};

export default MyChat;
