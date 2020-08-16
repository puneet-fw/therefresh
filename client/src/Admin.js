import React from "react";
import Button from '@material-ui/core/Button';
import { useAuth } from "./context/auth";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }
  return (<div>
    Admin Page
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      onClick={logOut}
    >
      Log out
    </Button>
  </div>);
}

export default Admin;
