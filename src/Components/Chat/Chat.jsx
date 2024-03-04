import classes from "./Chat.module.css";
import HisChat from "../Hischat/HisChat";
import MyChat from "../Mychat/MyChat";
import OfferChat from "../Offerchat/OfferChat";
import HalfOffer from "../Halfoffer/HalfOffer";
import FullOfer from "../Fulloffer/FullOfer";
import RespondField from "../RespondField/RespondField";
import PropTypes from "prop-types";


const Chat = ({ messageValue }) => {
	return (
		<div className={classes.container}>
			<HisChat />
			<MyChat />
			<OfferChat />
			<HalfOffer />
			<FullOfer />
			<RespondField messageValue={messageValue} />
		</div>
	);
};

export default Chat;

Chat.propTypes = {
	messageValue: PropTypes.string.isRequired,
}
