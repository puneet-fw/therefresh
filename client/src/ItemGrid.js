import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Button } from '@material-ui/core';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const ROWS = [
  createData(0, '2019-03-16', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '2020-05-25', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '2020-05-25', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '2020-05-25', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '2020-05-25', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

const useStyles = makeStyles((theme) => ({
  tablehead: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
    width: 130
  }
}));

export default function ItemGrid() {
  const classes = useStyles();
  const [rows, setRows] = useState(ROWS);
  function addRow() {
    setRows(rows.concat(createData(rows.length, '', '', '', '', 0)));
  }
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablehead}>Date</TableCell>
            <TableCell className={classes.tablehead}>Name</TableCell>
            <TableCell className={classes.tablehead}>Ship To</TableCell>
            <TableCell className={classes.tablehead}>Payment Method</TableCell>
            <TableCell align="right" className={classes.tablehead}>Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <TextField defaultValue={row.date} type="date" />
              </TableCell>
              <TableCell>
                <TextField defaultValue={row.name} />
              </TableCell>
              <TableCell>
                <TextField defaultValue={row.shipTo} />
              </TableCell>
              <TableCell>
                <TextField select>
                  <MenuItem value="delhi">Card</MenuItem>
                  <MenuItem value="mumbai">Cash</MenuItem>
                </TextField>
              </TableCell>
              <TableCell align="right">
                <TextField defaultValue={row.amount} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <IconButton onClick={addRow}>
        <AddCircleIcon color="primary"/>
      </IconButton>
      <Button variant="contained" color="primary" className={classes.button}>Save Items</Button>
    </React.Fragment>
  );
}