const express = require('express');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const users = [
  {
    firstName: 'Archil',
    lastName: 'Kumar',
    username: 'archil',
    // Convert this to SHA256 hash for value of `password`
    password: 'password'
  },
  {
    firstName: 'Puneet',
    lastName: 'Srivastava',
    username: 'puneet',
    password: 'password'
  }
];

const getHashedPassword = (password) => password;

const authTokens = {};

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString('hex');
}

app.post('/authenticate', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = getHashedPassword(password);

  const user = users.find((user) =>
      username === user.username && hashedPassword === user.password
  );

  if (user) {
      const authToken = generateAuthToken();

      // Store authentication token
      authTokens[authToken] = user;

      const { firstName, lastName } = user;

      // Setting the auth token in cookies
      res.cookie('AuthToken', authToken).send({firstName, lastName, token: authToken});
  } else {
      res.status(401).send('Wrong Credentials');
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
