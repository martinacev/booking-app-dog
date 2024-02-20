import classes from "./Employers.module.css";
import face from "../../../public/face.jpg";
import natalia from "../../../public/grl.webp";
import sebastian from '../../../public/heh.jpg';
import caramel from '../../../public/caramel.jpg';
import message from '../../../public/message.png';
import PropTypes from 'prop-types';

const Person = ({ name, image }) => (
	<div className={classes.box}>
		<div className={classes.person}>
			<div className={classes.avatar}>
				<img className={classes.face} src={image} alt={name} />
			</div>
			<div className={classes.nameSurname}>
				<div className={classes.wrapper}>
					<p className={classes.name}>{name}</p>
					<p className={classes.active}>Active now</p>
				</div>
			</div>
			<div className={classes.message}>
					<img className={classes.chat} src={message} alt="message" />
				</div>
		</div>
	</div>
);

const Employers = () => (
	<div className={classes.container}>
		<Person name="Ben Anderson" image={face} />
		<Person name="Natalia Williams" image={natalia} />
        <Person name="Sebastian Miller" image={sebastian} />
        <Person name="Aisha Robinson" image={caramel} />
	</div>
);

Person.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default Employers;
