import classes from './OfferChat.module.css';
import TEXT_DATA from '../data/textData';
import avatar from '../../../public/face.jpg'

const offerChat = () => {
	return (
		<div>
			<div className={classes.chat}>
				<div className={classes.wrapper}>
					<img className={classes.friend} src={avatar} alt="friend" />
					<div className={classes.text}>
						{TEXT_DATA.thirdText}
					</div>
				</div>
			</div>
		</div>
	);
};

export default offerChat;
