import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import ShowMenu from "./ShowMenu";

export default function SearchBar() {
  const [name, setName] = React.useState("");
  const [starting, setStarting] = useState("");
  const [startingData, setStartingData] = useState([]);

  // useEffect(() => {
  //   showData();
  // }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const startHandler = (event) => {
    setStarting(event.target.value);
    console.log(starting);
  };
  // const showData = () => {
  //   fetch(" http://localhost:5000/flights")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log("Data", data);
  //       setStartingData(data);
  //     });
  // };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <TextField
          label="From"
          variant="standard"
          onChange={startHandler}
          focused
        />
      </FormControl>
      <FormControl variant="standard">
        <TextField label="to" variant="standard" focused />
        {/* {startingData
          .filter((val) => {
            if (starting === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(starting.toLowerCase())
            ) {
              return val;
            }
          })
          .map((el) => (
            <ShowMenu name={el.name} />
          ))} */}
      </FormControl>
      <FormControl variant="standard">
        <TextField label="Departure" variant="standard" focused />
      </FormControl>
      <FormControl variant="standard">
        <TextField label="Travellers | class" variant="standard" focused />
      </FormControl>
      <button
        style={{
          backgroundColor: "#EC5C30",
          padding: "10px",
          width: "180px",
          color: "white",
        }}
      >
        Search
      </button>
    </Box>
  );
}
