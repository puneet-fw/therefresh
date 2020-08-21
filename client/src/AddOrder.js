import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, MenuItem, Table, TableBody,
  TableCell, TableHead, TableRow, Button, Link, Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Title from './components/Title';
import ItemGrid from './ItemGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch'
  },
  gridTextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '15ch'
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3)
  }
}));

export default function AddOrder() {
  const classes = useStyles();
  const [showGrid, setShowGrid] = useState(false);
  function handleGenerate() {
    setShowGrid(true);
  }
  return (
    <React.Fragment>
      <Title>Add Order</Title>
      <div>
        <TextField
          label="Code"
          id="code"
          defaultValue="0000"
          className={classes.textField}
          helperText="Unique Code"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Order No."
          id="order_no"
          defaultValue="0000"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          label="Order Confirmed On"
          id="order_confirmed_date"
          type="date"
          defaultValue="2020-08-17"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="season"
          label="Season"
          select
          className={classes.textField}
          margin="normal"
        >
          <MenuItem value="winter">Winter</MenuItem>
          <MenuItem value="spring">Spring</MenuItem>
          <MenuItem value="summer">Summer</MenuItem>
          <MenuItem value="fall">Fall</MenuItem>
        </TextField>
      </div>
      <div>
        <TextField
          id="buyer_id"
          label="Buyer"
          select
          className={classes.textField}
          margin="normal"
        >
          <MenuItem value="1234">1234</MenuItem>
          <MenuItem value="2345">2345</MenuItem>
        </TextField>
        <TextField
          id="buyer_name"
          label="Buyer Name"
          select
          className={classes.textField}
          margin="normal"
        >
          <MenuItem value="buyer_one">Buyer One</MenuItem>
          <MenuItem value="buyer_two">Buyer Two</MenuItem>
        </TextField>
        <TextField
          id="promo"
          label="Event/Promo"
          select
          className={classes.textField}
          margin="normal"
        >
          <MenuItem value="promo_1">Promo One</MenuItem>
          <MenuItem value="promo_2">Promo Two</MenuItem>
        </TextField>
        <TextField
          id="buyer_season"
          label="Buyer Season"
          select
          className={classes.textField}
          margin="normal"
        >
          <MenuItem value="winter">Winter</MenuItem>
          <MenuItem value="spring">Spring</MenuItem>
          <MenuItem value="summer">Summer</MenuItem>
          <MenuItem value="fall">Fall</MenuItem>
        </TextField>
      </div>
      <div>
        <TextField
          id="supplier_id"
          label="Supplier"
          select
          className={classes.textField}
          margin="normal"
        >
          <MenuItem value="1234">Supplier One</MenuItem>
          <MenuItem value="2345">Supplier Two</MenuItem>
        </TextField>
        <TextField
          label="Buyer HO Date"
          id="buyer_ho_date"
          type="date"
          defaultValue="2020-08-17"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          label="Supplier HO Date"
          id="supplier_ho_date"
          type="date"
          defaultValue="2020-08-17"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="producton_town"
          label="Production Town"
          select
          className={classes.textField}
          margin="normal"
        >
          <MenuItem value="delhi">Delhi</MenuItem>
          <MenuItem value="mumbai">Mumbai</MenuItem>
        </TextField>
      </div>
      <div>
        <TextField
          label="Payment Mode"
          id="payment_mode"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="currency"
          label="Currency"
          select
          className={classes.textField}
          margin="normal"
        >
          <MenuItem value="euro">Euro</MenuItem>
          <MenuItem value="usd">USD</MenuItem>
          <MenuItem value="inr">INR</MenuItem>
        </TextField>
        <TextField
          id="terms"
          label="Terms"
          select
          className={classes.textField}
          margin="normal"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </TextField>
        <TextField
          id="mode"
          label="Mode"
          select
          className={classes.textField}
          margin="normal"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </TextField>
      </div>
      <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={handleGenerate}>
          Generate Order ID
        </Button>
      </div>
      <Divider/>
      {showGrid && <ItemGrid/>}
    </React.Fragment>
  );
}
