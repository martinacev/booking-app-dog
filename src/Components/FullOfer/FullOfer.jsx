import classes from './FullOfer.module.css';
import TEXT_DATA from '../data/textData';
import avatar from '../../../public/face.jpg'

const FullOfer = () => {
	return (
		<div className={classes.chat}>
			<div className={classes.wrapper}>
				<img className={classes.friend} src={avatar} alt="friend" />
				<div className={classes.text}>{TEXT_DATA.oneHour}</div>
			</div>
		</div>

		
	);
};

export default FullOfer;