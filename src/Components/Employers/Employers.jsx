import classes from "./Employers.module.css";
import face from "../../../public/face.jpg";
import natalia from "../../../public/grl.webp";
import sebastian from "../../../public/heh.jpg";
import caramel from "../../../public/caramel.jpg";
import message from "../../../public/message.png";
import PropTypes from "prop-types";
import { useState } from "react";

const Person = ({
	id,
	name,
	image,
	phoneNumber,
	isSelected,
	onPersonClick,
}) => {
	const handleClick = () => {
		onPersonClick(id);
	};

	return (
		<div className={classes.box} onClick={handleClick}>
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
			{isSelected && phoneNumber && <p>Contact Number: {phoneNumber}</p>}
		</div>
	);
};

Person.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	phoneNumber: PropTypes.string,
	isSelected: PropTypes.bool.isRequired,
	onPersonClick: PropTypes.func.isRequired,
};

const Employers = () => {
	const [selectedPerson, setSelectedPerson] = useState(null);

	const handlePersonClick = (personId) => {
		setSelectedPerson(personId === selectedPerson ? null : personId);
	};

	return (
		<div className={classes.container}>
			<Person
				id="1"
				name="Ben Anderson"
				image={face}
				phoneNumber="1121-1511-51411"
				isSelected={selectedPerson === "1"}
				onPersonClick={handlePersonClick}
			/>
			<Person
				id="2"
				name="Natalia Williams"
				image={natalia}
				phoneNumber="2122-2542-3267"
				isSelected={selectedPerson === "2"}
				onPersonClick={handlePersonClick}
			/>
			<Person
				id="3"
				name="Sebastian Miller"
				image={sebastian}
				phoneNumber="3231-6323-7913"
				isSelected={selectedPerson === "3"}
				onPersonClick={handlePersonClick}
			/>
			<Person
				id="4"
				name="Aisha Robinson"
				image={caramel}
				phoneNumber="4123-123-1234"
				isSelected={selectedPerson === "4"}
				onPersonClick={handlePersonClick}
			/>
		</div>
	);
};
Person.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default Employers;
