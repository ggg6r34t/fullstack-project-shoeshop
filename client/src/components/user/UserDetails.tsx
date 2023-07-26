import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";

import { RootState } from "../../redux/store";
import { userActions } from "../../redux/slices/user";
import banner from "../../assets/background-faq_1200x.png";
import { BASE_URL } from "../../api/api";

const StyledTextField = styled(TextField)`
  & .MuiInput-input {
    color: #044606;
    width: 40px;
  }
  & .MuiInput-root:before {
    border: none;
    border-color: transparent !important;
  }
  & .MuiInput-root:after {
    border: none;
    border-color: transparent !important;
  }
`;

const StyledButton = styled(Button)`
  &&:hover {
    color: #044606c7 !important;
    background-color: transparent;
    border: solid;
    border-size: 1px;
    border-radius: 25px;
  }
`;

function UserDetails() {
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  const [formData, setFormData] = useState({
    firstName: userDetail?.firstName,
    lastName: userDetail?.lastName,
  });

  const [readOnly, setReadOnly] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(userActions.logOut());
    navigate("/account/login");
  }

  function setUserFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, firstName: event.target.value });
  }

  function setUserLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, lastName: event.target.value });
  }

  function onEditHandler() {
    setReadOnly(false);
  }

  function onDeleteHandler() {
    setReadOnly(false);
    setFormData({ firstName: "", lastName: "" });
  }

  function onSubmitHandler() {
    const token = localStorage.getItem("userToken");
    const url = `${BASE_URL}/account/${userDetail?._id}`;

    axios
      .put(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(userActions.setUserData(res.data));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Please log in to change your information.");
        }
        return;
      });
    setReadOnly(true);
  }
  if (!userDetail) {
    return <div> no data...</div>;
  }

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          padding: "0 18px",
          margin: "220px 184px 80px",
        }}
      >
        <Grid container>
          <Grid item md={1.8}>
            <Box component="div" width="200px">
              <Paper
                sx={{
                  backgroundColor: "#fffef1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  maxWidth: "200px",
                  minHeight: "688px",
                }}
              >
                <Box
                  component="div"
                  sx={{ flexGrow: 1, margin: "60px 0 40px" }}
                >
                  <Link to="/account" style={{ textDecoration: "none" }}>
                    <Typography
                      color="#044606"
                      fontFamily="Noto Serif"
                      fontSize="1.2rem"
                      textTransform="lowercase"
                      m={2}
                    >
                      orders
                    </Typography>
                  </Link>
                  <Link
                    to="/account/details"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      color="#044606"
                      fontFamily="Noto Serif"
                      fontSize="1.2rem"
                      textTransform="lowercase"
                      m={2}
                    >
                      my details
                    </Typography>
                  </Link>
                </Box>
                <Box
                  component="div"
                  sx={{ cursor: "pointer" }}
                  onClick={handleLogOut}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      color="#044606"
                      fontFamily="Noto Serif"
                      fontSize="1.2rem"
                      textTransform="lowercase"
                      m={2}
                    >
                      Log out
                    </Typography>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99723 1H1V13H7M10 10L13 7L10 4M4.33333 6.99723H13"
                        stroke="#094E5B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Stack>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item md={10}>
            <Box component="div">
              <Paper
                sx={{
                  display: "flex",
                  maxWidth: "80vw",
                  height: "360px",
                  padding: "48px 48px",
                }}
              >
                <Stack>
                  <Box component="div">
                    <Typography
                      variant="h1"
                      component="h1"
                      color="#044606"
                      fontFamily="Noto Serif"
                      fontSize="4rem"
                      textTransform="lowercase"
                    >
                      my details
                    </Typography>
                  </Box>
                  <Paper
                    component="div"
                    sx={{
                      width: "563px",
                      backgroundColor: "#f3f3f3",
                      padding: "16px",
                      marginTop: "35px",
                    }}
                  >
                    <Box component="div" m={2}>
                      <Typography
                        color="#044606"
                        fontFamily="Noto Serif"
                        fontSize="1rem"
                        textTransform="lowercase"
                      >
                        by default
                      </Typography>
                      <Stack direction="row">
                        <StyledTextField
                          id="standard-basic"
                          variant="standard"
                          value={formData.firstName}
                          onChange={setUserFirstName}
                          InputProps={{ readOnly: readOnly }}
                        />
                        <StyledTextField
                          id="standard-basic"
                          variant="standard"
                          value={formData.lastName}
                          onChange={setUserLastName}
                          InputProps={{ readOnly: readOnly }}
                        />
                      </Stack>
                    </Box>
                    <Stack direction="row" sx={{ maxHeight: "36px" }}>
                      <StyledButton variant="text" onClick={onEditHandler}>
                        <Typography
                          color="#044606"
                          fontFamily="Noto Serif"
                          fontSize="1rem"
                          textTransform="lowercase"
                        >
                          edit
                        </Typography>
                      </StyledButton>
                      {readOnly === false ? (
                        <StyledButton variant="text" onClick={onSubmitHandler}>
                          <Typography
                            color="#044606"
                            fontFamily="Noto Serif"
                            fontSize="1rem"
                            textTransform="lowercase"
                          >
                            save
                          </Typography>
                        </StyledButton>
                      ) : (
                        <StyledButton variant="text" onClick={onDeleteHandler}>
                          <Typography
                            color="#044606"
                            fontFamily="Noto Serif"
                            fontSize="1rem"
                            textTransform="lowercase"
                          >
                            delete
                          </Typography>
                        </StyledButton>
                      )}
                    </Stack>
                  </Paper>
                </Stack>
              </Paper>
              <Paper
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "flex-start",
                  backgroundImage: `url(${banner})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backdropFilter: "blur(10px)",
                  maxWidth: "80vw",
                  minHeight: "120px",
                  p: "20px 20px",
                  mt: 2,
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row">
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h1"
                        component="h1"
                        color="#fff"
                        fontSize="67px"
                        fontWeight="700"
                        textTransform="lowercase"
                      >
                        faq
                      </Typography>
                    </Box>

                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontFamily="sans-serif"
                        fontWeight="300"
                        color="#fff"
                        sx={{
                          ml: "8px",
                        }}
                      >
                        about us & delivery
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default UserDetails;
