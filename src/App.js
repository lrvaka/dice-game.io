import React, { useState } from 'react';import "./App.css";
import Final1v1 from "./components/OneVersus"
import { red, blue, green } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FinalTop2 from "./components/Top2"
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import DnDFinal from "./components/DnD"
import Divider from "@material-ui/core/Divider";
import './App.css';

function App() {
  const images = [
    {
      url:
        "./components/die/icons/VsIcon.png",
      title: "1v1",
      width: "30%",
      onClick: function onClick(){
          setWelcomeCard(false)
          setShowVersus(true)
        }
    },
    {
      url:
        "./components/die/icons/dnd.jpeg",
      title: "DnD Dice",
      width: "30%",
      onClick: function onClick1(){
          setWelcomeCard(false)
          setShowDnD(true)
        }
    },
    {
      url: "/static/images/grid-list/camera.jpg",
      title: "Camera",
      width: "30%",
      onClick: function onClick2(){
          setWelcomeCard(false)
          setShowTop2(true)
        }
    }
  ];
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    image: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15
        },
        "& $imageMarked": {
          opacity: 0
        },
        "& $imageTitle": {
          border: "4px solid currentColor"
        }
      }
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity")
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity")
    }
  }));
  
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
  
  const classes = useStyles();

  const finalCard = (<div className={classes.root}>
    {images.map(image => (
      <ButtonBase
        focusRipple
        type={"button"}
        onClick={image.onClick}
        key={image.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: image.width
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${image.url})`
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {image.title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    ))}
  </div>
)

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
          title="dice-game.io "
          subtitle="This is an application for displaying uses of a die object using React Javascript!"
        />
         <Slide
      media={
        <img src={ require('./components/die/icons/ThreeGames.png')} width="256" height="256" />
      }
      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
      style={{ backgroundColor: blue[600] }}
      title='3 Different Ways'
      subtitle="This project shows three ways in which a die object can be used, 2 games, and a special die object!"
    />
    <Slide
      media={
        <img src={ require('./components/die/icons/PersonIcon.png')} width="256" height="256" />
      }
      mediaBackgroundStyle={{ backgroundColor: green[400] }}
      style={{ backgroundColor: green[600] }}
      title='Authors'
      subtitle='Luke Vakasisikakala & Caroline Mastel'
    />
      </AutoRotatingCarousel>
      <header className="App-header">
      {WelcomeCard ? finalCard : null }
      {ShowVersus ? FinalOne : null }
      {ShowDnD ? FinalDnD : null }
      {ShowTop2 ? FinalTopTwo : null }
      </header>
    </div>
  );
}

export default App;
