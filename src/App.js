import React, { useState } from 'react';import "./App.css";
import Final1v1 from "./components/OneVersus"
import { red, blue, green } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FinalTop2 from "./components/Top2"
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import DnDFinal from "./components/DnD"
import Divider from "@material-ui/core/Divider";


const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  margin: {
    margin: 1
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "middle",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  textField: {
    width: "10ch"
  }
});

function App() {

  const FinalTopTwo = (<FinalTop2/>)
  const FinalDnD = (<DnDFinal/>)
  const FinalOne = (<Final1v1/>)
  const [open420, setOpen420] = useState(true)
  const [WelcomeCard, setWelcomeCard] = useState(true)
  const [ShowVersus, setShowVersus] = useState(false)
  const [ShowDnD, setShowDnD] = useState(false)
  const [ShowTop2, setShowTop2] = useState(false)

  function onClick(){
    setWelcomeCard(false)
    setShowVersus(true)
  }

  function onClick1(){
    setWelcomeCard(false)
    setShowDnD(true)
  }

  function onClick2(){
    setWelcomeCard(false)
    setShowTop2(true)
  }

  function closeitup(){
    setOpen420(false)
  }
  
  const finalCard = (<div>
  <Card height="100%" style={{
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  }}>
    <CardContent>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
          <Button onClick={onClick}>
  1v1
</Button>
<Divider orientation="vertical" flexItem variant="middle" />
<Button onClick={onClick1}>
  DnD Die
</Button>
<Divider orientation="vertical" flexItem variant="middle" />
<Button onClick={onClick2}>
  Top2
</Button>
      </div>      
    </CardContent>
  </Card>
</div>)

  return (
    <div className="App">
      <AutoRotatingCarousel
        label="Start Playing"
        open={open420}
        onClose={closeitup}
        onStart={closeitup}
        autoplay={false}
        mobile={true}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <img src={ require('./components/die/icons/dice.svg')} width="256" height="256" />
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="Welcome "
          subtitle="This is a die object display application created using React!"
        />
      </AutoRotatingCarousel>
      {WelcomeCard ? finalCard : null }
      {ShowVersus ? FinalOne : null }
      {ShowDnD ? FinalDnD : null }
      {ShowTop2 ? FinalTopTwo : null }
    </div>
  );
}

export default App;
