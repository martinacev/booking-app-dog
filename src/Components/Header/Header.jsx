import classes from "./Header.module.css";
import face from "../../../public/face.jpg";
import camera from "../../../public/cam2.png";


const Header = () => {
	return (
			<div className={classes.person}>
				<div className={classes.btnBack}>
					<button className={classes.back}>{`<`}</button>
				</div>
				<div className={classes.avatar}>
					<img className={classes.face} src={face} alt="face" />
				</div>
				<div className={classes.nameSurname}>
					<div className={classes.wrapper}>
						<p className={classes.name}>Ben Anderson</p>
						<p className={classes.active}>Active now</p>
					</div>
				</div>

				<div className={classes.video}>
					<img className={classes.logo} src={camera} alt="camera" />
				</div>
			</div>
	);
};

export default Header;
