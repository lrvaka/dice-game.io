import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import die from './die/die'
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState } from 'react';

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 365,
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

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #039479, 30%, #004c82 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  textField: {
    width: "8ch"
  },
  textField9: {
    width: "8ch"
  },
  menu: {
    width: "15ch"
  }
});

function DiceRoll() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function roll() {
    const roll = Math.floor(Math.random() * Math.floor(6));
    return roll;
  }

  function ResultValue() {
    const roll1 = roll();
    const addScore = die[roll1].value;
    const dieImage = die[roll1].image;
    const dieObject = [addScore, dieImage];
    return dieObject
  }

  const [ShowSecondButton, setShowSecondButton] = useState(true)
  const [ShowFirstButton, setShowFirstButton] = useState(true)

  const [score, setScore] = useState(0);
  const [score1, setScore1] = useState(0);
  const [PairScore, setPairScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [PairScore1, setPairScore1] = useState(0);
  const [image1, setImage] = useState(<img/>);
  const [image12, setImage1] = useState(<img/>);
  const [image123, setImage13] = useState(<img/>);
  const [image1231, setImage134] = useState(<img/>);

  const result = ResultValue();
  const finalScore = result[0]
  const finalImage = result[1]

  const result1 = ResultValue();
  const finalScore1 = result1[0]
  const finalImage1 = result1[1]

  const result2 = ResultValue();
  const finalScore2 = result2[0]
  const finalImage2 = result2[1]

  const result3 = ResultValue();
  const finalScore3 = result3[0]
  const finalImage3 = result3[1]
   
   const WhoWonFinal = setTimeout(() => {
    WhoWon()
  }, 0);

  const checkGame1 = setTimeout(() => {
    checkGame12()
  }, 0);

  const checkGame2 = setTimeout(() => {
    checkGame123()
  }, 0);

  const [player1, setPlayer1] = useState('Player 1')
  const [player2, setPlayer2] = useState('Player 2')

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
 
const FirstButton = (<Button className={classes.root} onClick={() => {
    setScore(finalScore); 
    setScore1(finalScore1);
    setImage(finalImage);
    setImage1(finalImage1);
    setTimeout(checkGame1, 50)
    setTimeout(WhoWon(), 50)
    }}>
    Roll Dice
  </Button>)

const SecondButton = (<Button className={classes.root} onClick={() => {
    setScore2(finalScore2); 
    setScore3(finalScore3);
    setImage13(finalImage2);
    setImage134(finalImage3);
    setTimeout(checkGame2, 50)
    setTimeout(WhoWon(), 50);
    }}>
    Roll Dice
  </Button>)

const WackButton = (<Button className={classes.root}>
    Roll Dice
  </Button>)

function checkGame12(){
    if(score === 1 && score1 === 1){
     setPairScore(1)
     setShowFirstButton(false)
    } else if (score === 2 && score1 === 2) {
     setPairScore(2)
     setShowFirstButton(false)
    } else if (score === 3 && score1 === 3) {
     setPairScore(3)
     setShowFirstButton(false)
    } else if (score === 4 && score1 === 4){
     setPairScore(4)
     setShowFirstButton(false)
    } else if (score === 5 && score1 === 5){
     setPairScore(5)
     setShowFirstButton(false)
    } else if (score === 6 && score1 === 6){
     setPairScore(6)
     setShowFirstButton(false)
    } else{
        return null
    }
   }
 
   function checkGame123(){
     if(score2 === 1 && score3 === 1){
      setPairScore1(1)
      setShowSecondButton(false)
     } else if (score2 === 2 && score3 === 2) {
         setPairScore1(2)
         setShowSecondButton(false)
     } else if (score2 === 3 && score3 === 3) {
         setPairScore1(3)
         setShowSecondButton(false)
     } else if (score2 === 4 && score3 === 4){
         setPairScore1(4)
         setShowSecondButton(false)
     } else if (score2 === 5 && score3 === 5){
         setPairScore1(5)
         setShowSecondButton(false)
     } else if (score2 === 6 && score3 === 6){
         setPairScore1(6)
         setShowSecondButton(false)
     } else{
         return null
     }
    }
 
    function WhoWon(){
     if(PairScore === PairScore1 && PairScore > 0 && PairScore1 > 0){
       setOpen2(true)
        } else if (PairScore > PairScore1 && PairScore > 0 && PairScore1 > 0) {
         setOpen(true)
        } else if (PairScore1 > PairScore && PairScore > 0 && PairScore1 > 0){
         setOpen1(true)
        } else{
            return null
        }
    }

const Player1Win = (<Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      maxWidth='xs'>
        <DialogTitle alignItems='' id="alert-dialog-title">🏆{player1} has won🏆</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button color="primary" autoFocus onClick={() => {
              setPairScore(0);
              setPairScore1(0);
              setScore(0);
              setScore1(0);
              setScore2(0);
              setScore3(0);
              setShowFirstButton(true);
              setShowSecondButton(true);
          setOpen(false);
               }}>
            Play Again
          </Button>
        </DialogActions>
      </Dialog>)

const Player2Win = (<Dialog
    open={open1}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  maxWidth='xs'>
    <DialogTitle alignItems='' id="alert-dialog-title">🏆{player2} has won🏆</DialogTitle>
    <DialogContent>
    </DialogContent>
    <DialogActions>
      <Button color="primary" autoFocus onClick={() => {
          setPairScore(0);
          setPairScore1(0);
          setScore(0);
          setScore1(0);
          setScore2(0);
          setScore3(0);
          setShowFirstButton(true);
            setShowSecondButton(true);
      setOpen1(false);
           }}>
        Play Again
      </Button>
    </DialogActions>
  </Dialog>)

const tieBanner = (<Dialog
    open={open2}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  maxWidth='xs'>
    <DialogTitle alignItems='' id="alert-dialog-title">🛑Game Tied, Restart🛑</DialogTitle>
    <DialogContent>
    </DialogContent>
    <DialogActions>
      <Button color="primary" autoFocus onClick={() => {
          setPairScore(0);
          setPairScore1(0);
          setScore(0);
          setScore1(0);
          setScore2(0);
          setScore3(0);
          setShowFirstButton(true);
              setShowSecondButton(true);
      setOpen2(false);
           }}>
        Play Again
      </Button>
    </DialogActions>
  </Dialog>)

  return (
    <div>
      <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <TextField className={classes.textField9} id="outlined-basic" label="Player 1" variant="outlined" onChange={event => setPlayer1(event.target.value)}/>
              <Divider orientation="vertical" flexItem variant="middle" />
              <TextField className={classes.textField9} id="outlined-basic1" label="Player 2" variant="outlined" onChange={event => setPlayer2(event.target.value)}/>
            </Grid>
          </div>
      <div>
        {tieBanner}
        {Player1Win}
        {Player2Win}
      </div>
      <div>
      <Grid
              container 
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h6" component="h2" onChange={checkGame1}>
                Pair: {PairScore}
              </Typography>
              <Divider orientation="vertical" flexItem variant="middle" />
              <Typography variant="h6" component="h2" onChange={checkGame1}>
              Pair: {PairScore1}
              </Typography>
              </Grid>
              
          </div>
          <div>
          <Grid
              container 
              direction="row"
              justify="center"
              alignItems="center"
            ><div>{image1} {image12} {image123} {image1231} </div></Grid> 
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {ShowFirstButton ? FirstButton : WackButton }
      <Divider orientation="vertical" flexItem variant="middle" />
      {ShowSecondButton ? SecondButton : WackButton }
          </div>
      </div>
    </div>
  );
}

function card13({ classes }) {
  return (
    <div>
    <div className="card">
      <Card className={classes.card} height="100%">
        <CardContent className={classes.content}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
             <DiceRoll/>
          </div>      
        </CardContent>
      </Card>
    </div>
    ​​<div> ​</div>
    <div> <Card className={classes.card} height="100%">
    <CardContent className={classes.content}>
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Typography variant="h5" component="h2" color="textPrimary">
            How to Play
          </Typography>
          <Typography variant="h6" component="h2" align ="center" color="textSecondary">
            Click the "Roll Dice" button, the player with the highest pair wins!
          </Typography>
        </Grid>
      </div>
    </CardContent>
  </Card></div>
  </div>
  );
}

const FinalTop2 = withStyles(styles)(card13);

export default FinalTop2;
