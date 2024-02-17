import classes from './Price.module.css';
import TEXT_DATA from '../data/textData';


const HalfOffer = () => {
	return (
		<div className={classes.chat}>
			<div className={classes.wrapper}>
				<div className={classes.friend}></div>
				<div className={classes.text}>{TEXT_DATA.halfHour}</div>
			</div>
		</div>

		
	);
};

export default HalfOffer;
