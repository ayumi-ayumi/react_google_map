import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Avatar, Button, TextField, Paper, Grid, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useAuth, } from "../context/AuthProvider";
import { auth } from "../firebase/BaseConfig";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SignUp() {
// export default function SignUp({signup}) {
// export default function SignUp({signedUp, setSignedUp}) {
  const [error, setError] = useState("");
  // const [clickedButton, setClickedButton] = useState<boolean>(false);
  const { currentUser, createUser } = useAuth();
  const navigate = useNavigate();

  // console.log(signup.signedUp)

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
        // console.log(auth)
        // console.log(clickedButton)


  // If the user is already authenticated, redirect to the home page
  // useEffect(() => {
  //   setSignedUp(true)
  //   if (currentUser) navigate("/signin");
  //   // if (currentUser && !signedUp) navigate("/");
  // }, [currentUser])

  // console.log(currentUser)

  // Handle form submission for user login
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleFormSubmit(e: any) {
    e.preventDefault();
    // console.log(123)
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
    .then((result) => {
      // setClickedButton(true);
      // setSignedUp(true);
      // console.log(result)
      // signup.setSignedUp(123)

        console.log("Signed up with:", result)
        // console.log("Signed up with:", result._tokenResponse.kind);
        // console.log("Signed up with:", result.user.uid);
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error.message)
        setError(error.message);
      });
    e.target.reset();
  };
  // console.log(currentUser)

//identitytoolkit#SignupNewUserResponse
//identitytoolkit#VerifyPasswordResponse


  return (
    <>
      <Container maxWidth="sm" component="form" onSubmit={handleFormSubmit}>
        <Grid sx={{ pt: 3 }}>
          <Paper elevation={10} style={paperStyle}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign Up</h2>
            </Grid>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              name="email"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              name="password"
            />
            {error && (
              <Typography style={{ color: "red" }}>
                E-mail address or password is wrong.
              </Typography>
            )}
            <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Sign Up
              </Button>
            {/* {currentUser ? (
            // {clickedButton ? (
              <Button
                color="primary"
                // loading
                variant="contained"
                style={btnstyle}
                disabled
                fullWidth
              >
                Submitting...
              </Button>
            ) : (
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Sign Up
              </Button>
            )} */}
            <Typography>
              Already have an account? <Link to="/signin">Sign in</Link>
            </Typography>
          </Paper>
        </Grid>
      </Container>
    </>
  );
}