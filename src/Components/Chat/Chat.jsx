import classes from "./Chat.module.css";
import HisChat from "../hischat/HisChat";
import MyChat from "../mychat/MyChat";
import OfferChat from "../offerchat/OfferChat";
import HalfOffer from "../halfoffer/HalfOffer";
import FullOfer from "../fulloffer/FullOfer";
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
