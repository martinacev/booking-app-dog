import classes from "./Reservation.module.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import back from "../../../public/back.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const dogBreeds = [
	"German Shepherd",
	"Bulldog",
	"Labrador",
	"French Bulldog",
	"Siberian Husky",
	"Beagle",
	"Alaskan Malamute",
	"Poodle",
	"Chihuahua",
	"Dachshund",
	"Border Collie",
	"Australian Cattle Dog",
	"Rottweiler",
	"Malltese dog",
	"Cocker Spaniel",
	"Chow Chow",
	"Pomeranian",
	"Basset Hound",
];

const Reservation = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(false);

	const navigateButton = () => {
		navigate("/");
	};

	const handleWalkersButton = () => {
		navigate('/dogwalkers')
	}

	const handleEmailChange = (e) => {
		const inputEmail = e.target.value;
		setEmail(inputEmail);

		const isValidEmail = /\S+@\S+\.\S+/.test(inputEmail);
		setEmailError(!isValidEmail);
	};

	return (
		<div className={classes.container}>
			<button onClick={navigateButton} className={classes.btn}>
				<img className={classes.arrow} src={back} alt="back" />
			</button>
			<div className={classes.title}>
				<h1 className={classes.walk}>Reserve a walker for your dog</h1>
			</div>
			<div className={classes.inputs}>
				<TextField
					sx={{
						width: 400,
						margin: 1,
					}}
					id="outlined-basic"
					label="Name Surname"
					variant="outlined"
				/>  
		
				<TextField
					sx={{
						width: 400,
						margin: 1,
					}}
					id="outlined-basic"
					label="E-mail"
					variant="outlined"
					value={email}
					onChange={handleEmailChange}
					error={emailError}
					helperText={emailError ? 'Please enter a valid email address' : ''}
				/>

				<TextField
					sx={{
						width: 400,
						margin: 1,
					}}
					id="outlined-select-currency"
					select
					label="Dog breed"
	
				>
					{dogBreeds.map((breed) => (
						<MenuItem 
							className={classes.menu}
							key={breed}
							value={breed}
						>
							{breed}
						</MenuItem>
					))}
				</TextField>

				<div className={classes.payment}>
					<TextField
						sx={{
							display: "flex",
							alignItems: "center",
							width: 200,
							margin: 1,
						}}
						id="filled-number"
						label="Hours"
						type="number"
						InputLabelProps={{
							shrink: true,
						}}
						variant="filled"
						inputProps={{
							min: 0,
						}}
					/>

					<Button onClick={handleWalkersButton}
						sx={{
							width: 200,
							height: 55,
							display: "flex",
							alignItems: "center",
						}}
						variant="outlined"
					>
						Find free Walker
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Reservation;
