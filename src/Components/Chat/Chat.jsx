import classes from "./Chat.module.css";
import HisChat from "../HisChat/HisChat";
import MyChat from "../MyChat/MyChat";
import OfferChat from "../OfferChat/OfferChat";
import HalfOffer from "../HalfOffer/HalfOffer";
import FullOfer from "../FullOfer/FullOfer";
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
