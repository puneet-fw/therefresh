import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useAuth } from "./context/auth";
import axios from 'axios';
import Copyright from './components/Copyright';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { authTokens, setAuthTokens } = useAuth();

  const classes = useStyles();

  function postLogin(e) {
    e.preventDefault();
    // axios.post("/authenticate", {
    //   username,
    //   password
    // }).then(result => {
    //   if (result.status === 200) {
    //     setAuthTokens(result.data.token);
    //     setFirstName(result.data.firstName);
    //     setLastName(result.data.lastName);
    //     setLoggedIn(true);
    //   }
    // }).catch(error => {
    //   setIsError(true);
    //   setErrorMessage(error.response.data);
    // });
    setAuthTokens('abcd');
    setFirstName('FirstName');
    setLastName('LastName');
    setLoggedIn(true);
  }

  if (isLoggedIn) {
    return <Redirect to={{pathname: "/", state: {firstName, lastName}}} />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          {isError && <Typography variant="subtitle2" color="secondary" align="center">
            {errorMessage}
          </Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={postLogin}
          >
            Log In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Login;
