import classes from "./Reservation.module.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import back from "../../../public/back.png";
import { useNavigate } from "react-router-dom";


const dogBreeds = [
	"",
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

	const navigateButton = () => {
		navigate("/")
	}

	return (
		<div className={classes.container}>
			<button onClick={navigateButton} className={classes.btn}>
				<img className={classes.arrow} src={back} alt="back" />
			</button>
			<div className={classes.inputs}>
				<TextField 
					sx={{
						width: 400,
						margin: 1,
					}}
					id="outlined-basic"
					label="Your Name Surname"
					variant="outlined"
				/>

				<TextField 
					sx={{
						width: 400,
						margin: 1,
					}}
					id="outlined-select-currency"
					select
					label="Dog breed"
					defaultValue={dogBreeds[0]}
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

					<Button
						sx={{
							width: 200,
							height: 50,
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
