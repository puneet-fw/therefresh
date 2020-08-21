import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Redirect} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import { AuthContext, useAuth } from "./context/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();
  return(
    <Route
      {...rest}
      render={(props) => (
        authTokens ? (<Component {...props} />) : (<Redirect to="/login" />)
      )}
    />
  );
}

const App = (props) => {
  const rawTokens = localStorage.getItem("tokens");
  const existingTokens = rawTokens !== "undefined" ? JSON.parse(rawTokens) : null;
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <div>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/' component={Dashboard} />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
