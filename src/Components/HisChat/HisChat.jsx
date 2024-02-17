import classes from "./HisChat.module.css";
import avatar from "../../../public/face.jpg";
import TEXT_DATA from "../data/textData";

const HisChat = () => {
	return (
		<div>
			<div className={classes.chat}>
				<div className={classes.wrapper}>
					<img className={classes.friend} src={avatar} alt="friend" />
					<div className={classes.text}>
						{TEXT_DATA.text}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HisChat;
