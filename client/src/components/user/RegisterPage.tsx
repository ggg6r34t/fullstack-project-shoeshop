import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";

import { theme } from "../theme/theme";

const StyledTextField = styled(TextField)`
  & .MuiFormLabel-root {
    color: #04460675;
  }
  & .MuiInputLabel-root {
    color: #04460675 !important;
  }

  & .MuiInputBase-root {
    color: #044606ad;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: 2px solid;
    border-radius: 20px;
    border-color: #04460675 !important;
  }

  & .Mui-focused fieldset {
    border-color: #04460675 !important;
  }
`;

// const formItems = ["first name", "last name", "email", "password"];

function RegisterPage() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // get user first name from form
  function getFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, firstName: e.target.value });
  }

  // get user last name from form
  function getLastName(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, lastName: e.target.value });
  }

  // get user email from form
  function getEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, email: e.target.value });
  }

  // get user password from form
  function getPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, password: e.target.value });
  }

  function sendUserInformation() {
    // send an AJAX request to the backend API endpoint
    axios
      .post("http://localhost:8000/account/register", userInput)
      .then((res) => {
        // handle successful login
        const token = res.data.token;
        // display the success message to the user
        const message = res.data.message;
        console.log(message);
        // store the toekn securely (e.g., in local storage or cookie)
        localStorage.setItem("token", token);

        // redirect to user account
        navigate("/");
      })
      .catch((err) => {
        // handle login error
        console.error(err);
      });

    // clear form
    setUserInput({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }

  const handleSumbit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendUserInformation();
  };

  return (
    <div>
      <Container
        sx={{
          width: "100%",
          height: "875px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          minWidth="446px"
          sx={{
            "& .MuiTextField-root": { display: "flex" },
          }}
          onSubmit={handleSumbit}
        >
          <Typography
            variant="h1"
            component="h1"
            color="#044606"
            align="center"
            fontFamily="Noto Serif"
            fontSize="2.5rem"
            textTransform="lowercase"
            sx={{ margin: "26px 0" }}
          >
            create account
          </Typography>
          {/* {formItems.map((item) => ( */}
          <StyledTextField
            fullWidth
            id="first name"
            name="first name"
            label="first name"
            margin="normal"
            type="first name"
            variant="outlined"
            required
            value={userInput.firstName}
            onChange={getFirstName}
          />
          {/* ))} */}
          <StyledTextField
            fullWidth
            id="last name"
            name="last name"
            label="last name"
            margin="normal"
            type="last name"
            variant="outlined"
            required
            value={userInput.lastName}
            onChange={getLastName}
          />

          <StyledTextField
            fullWidth
            id="email"
            name="email"
            label="email"
            margin="normal"
            type="email"
            variant="outlined"
            required
            value={userInput.email}
            onChange={getEmail}
          />

          <StyledTextField
            fullWidth
            id="password"
            name="password"
            label="password"
            margin="normal"
            type="password"
            variant="outlined"
            required
            value={userInput.password}
            onChange={getPassword}
          />

          <FormControl
            margin="normal"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="div">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#044606",
                  minHeight: "60px",
                  minWidth: "125px",
                  borderRadius: "65px",
                  mt: "40px",
                }}
              >
                <Typography
                  sx={{
                    textTransform: "lowercase",
                    fontFamily: theme.typography.h6,
                  }}
                >
                  create
                </Typography>
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterPage;
