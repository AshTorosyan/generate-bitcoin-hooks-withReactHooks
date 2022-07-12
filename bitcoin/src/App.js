import React, { useState } from "react";
import Button from "./Components/Button/Button";
import List from "./Components/Button/List/List";
import ListItem from "./Components/ListItem/ListItem";
import classes from "./UserInterface/Global.module.css";
import Text from "./Components/Text/Text";
import "./App.css";

function App() {

const [bpi,setBpi] = useState({});
const [isFetched,setIsFetched] = useState(false)
const handdleBpi = () => {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then(data => data.json())
  .then(bpiRes => {
    setBpi(bpiRes.bpi);
    setIsFetched(true);
    console.log(bpiRes.bpi);
  });
  
}




  return (
    <div>
       <Button className={classes.button} onClick={handdleBpi} >click me</Button>
       <List className={classes.list}>
        {
         isFetched && <ListItem className={classes.listItem}>
          <Text>EUR:  {bpi.EUR.code} </Text>
          <Text>rate: {bpi.EUR.rate}</Text>
          <Text>rate_float: {bpi.EUR.rate_float}</Text>
          <Text>description: {bpi.EUR.description}</Text>
          <Text>symbol: "{bpi.EUR.symbol}"</Text>
          </ListItem>
         } 
         {
        isFetched && <ListItem className={classes.listItem}>
            <Text>GBP: {bpi.GBP.code}</Text>
            <Text>rate: {bpi.GBP.rate}</Text>
            <Text>rate_float: {bpi.GBP.rate_float}</Text>
            <Text>description: {bpi.GBP.description}</Text>
            <Text>symbol: "{bpi.EUR.symbol}"</Text>
          </ListItem>
         }
         {
         isFetched && <ListItem className={classes.listItem}>
          <Text>USD:  {bpi.USD.code} </Text>
          <Text>rate: {bpi.USD.rate}</Text>
          <Text>rate_float: {bpi.USD.rate_float}</Text>
          <Text>description: {bpi.USD.description}</Text>
          <Text>symbol: "{bpi.EUR.symbol}"</Text>
          </ListItem>
         } 
       </List>
    </div>
  );
}

export default App;
