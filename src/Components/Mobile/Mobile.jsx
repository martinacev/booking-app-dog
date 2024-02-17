import classes from "./Mobile.module.css";
import Header from "../Header/Header";
import Chat from "../Chat/Chat";
import Message from "../Message/Message";
import { useState } from "react";

const Mobile = () => {

	const [messageValue, setMessageValue] = useState('');

	const handleMessageChange = (value) => {
		setMessageValue(value);
	}

	return (
		<div className={classes.container}>
			<div className={classes.mobile}>
				<div className={classes.display}>
					<div className={classes.camera}></div>
					<Header />
					<Chat messageValue={messageValue} />
					<Message onMessageChange={handleMessageChange} />
				</div>
				
			</div>
		</div>
	);
};

export default Mobile;
