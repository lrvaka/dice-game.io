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
    width: "10ch"
  },
  menu: {
    width: "15ch"
  }
});

function DiceRoll() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const [open420, setOpen420] = useState(true)

  const [gameScore, setGame] = useState(21);

  const [score, setScore] = useState(0);
  const [score1, setScore1] = useState(0);
  const [image1, setImage] = useState(<img/>);
  const [image12, setImage1] = useState(<img/>);

  const finalScore = ResultValue();
  const finalScore1 = finalScore[0]
  const finalImage = finalScore[1]

  const finalScore2 = ResultValue();
  const finalScore3 = finalScore2[0]
  const finalImage1 = finalScore2[1]

  function closeitup(){
    setOpen420(false)
  }

 function checkGame12(){
   if(score1 == score && score1 >= gameScore && score >= gameScore){
    setOpen679(true)
   } else if (score1 >=gameScore && score1 >= score && score !== score1) {
    setOpen99(true)
   } else if (score >= gameScore && score >= score1 && score !== score1) {
    setOpen(true)
   } else{
     return null
   }
  }

  const checkGame1 = setTimeout(() => {
    checkGame12()
  }, 0);


  function handleClose1(){
    setOpen(false)
  }

  function handleClose2(){
    setOpen1(false)
  }

  function handleClose3(){
    setOpen3(false)
  }

  function handleClose4(){
    setOpen5(false)
  }

  const [player1, setPlayer1] = useState('Player 1')
  const [player2, setPlayer2] = useState('Player 2')

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen3] = useState(false);
  const [open3, setOpen5] = useState(false);
  const [open99, setOpen99] = useState(false);
  const [open679, setOpen679] = useState(false)

  function setOpen2(){
    setOpen1(true)
  }

  function setOpen4(){
    setOpen3(true)
  }

  function setOpen6(){
    setOpen5(true)
  }

  const changeLimit= (<Dialog
    open={open3}
    onClose={handleClose}
    aria-labelledby="alert"
  maxWidth='xs'>
    <DialogTitle alignItems='' id="alert">What score limit would you like?</DialogTitle>
    <DialogContent>
    <TextField className={classes.textField} id="outlined-basic" label="Limit" variant="outlined" onChange={event => setGame(event.target.value)}/>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose4} color="primary" autoFocus>
        Confirm
      </Button>
    </DialogActions>
  </Dialog>)

  const changeDie= (<Dialog
    open={open2}
    onClose={handleClose}
    aria-labelledby="alert"
  maxWidth='xs'>
    <DialogTitle alignItems='' id="alert">How many die objects would you like?</DialogTitle>
    <DialogContent>
    <TextField className={classes.textField} id="outlined-basic" label="#" variant="outlined"/>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose3} color="primary" autoFocus>
        Confirm
      </Button>
    </DialogActions>
  </Dialog>)
 
  const newDieLimit= (<Dialog
    open={open1}
    onClose={handleClose}
    aria-labelledby="alert"
  maxWidth='xs'>
    <DialogTitle alignItems='' id="alert">How many sides would you like on the die?</DialogTitle>
    <DialogContent>
    <TextField className={classes.textField} id="outlined-basic" label="Sides" variant="outlined"/>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose2} color="primary" autoFocus>
        Confirm
      </Button>
    </DialogActions>
  </Dialog>)

  const alertBanner = (<Dialog
  open={open}
  onClose={handleClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
maxWidth='xs'>
  <DialogTitle alignItems='' id="alert-dialog-title">🏆{player1} has won🏆</DialogTitle>
  <DialogContent>
  </DialogContent>
  <DialogActions>
    <Button color="primary" autoFocus onClick={() => {
        setScore(0);
    setScore1(0);
    setOpen(false);
         }}>
      Play Again
    </Button>
  </DialogActions>
</Dialog>)

  const alertBanner1 = (<Dialog
  open={open99}
  onClose={handleClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
maxWidth='xs'>
  <DialogTitle alignItems='' id="alert-dialog-title">🏆{player2} Has Won🏆</DialogTitle>
  <DialogContent>
  </DialogContent>
  <DialogActions>
    <Button color="primary" autoFocus onClick={() => {
        setScore(0);
    setScore1(0);
    setOpen99(false);
         }}>
      Play Again
    </Button>
  </DialogActions>
</Dialog>)

  const tieBanner = (<Dialog
  open={open679}
  onClose={handleClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
maxWidth='xs'>
  <DialogTitle alignItems='' id="alert-dialog-title">🛑Game Tied, Restart🛑</DialogTitle>
  <DialogContent>
  </DialogContent>
  <DialogActions>
    <Button color="primary" autoFocus onClick={() => {
        setScore(0);
    setScore1(0);
    setOpen679(false);
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
        {alertBanner}
        {alertBanner1}
        {newDieLimit}
        {changeDie}
        {changeLimit}
      </div>
      <div>
      <Grid
              container 
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h6" component="h2" onChange={checkGame1}>
                Score: {score}
              </Typography>
              <Divider orientation="vertical" flexItem variant="middle" />
              <Typography variant="h6" component="h2" onChange={checkGame1}>
                Score: {score1}
              </Typography>
              </Grid>
              
          </div>
          <div>
          <Grid
              container 
              direction="row"
              justify="center"
              alignItems="center"
            ><p>{image1} {image12} </p></Grid> 
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button className={classes.root} onClick={() => {
        setScore(score + finalScore1); 
        setScore1(score1 + finalScore3);
        setImage(finalImage);
        setImage1(finalImage1);
        setTimeout(checkGame1, 50)
        }}>
        Roll Dice
      </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
      <Button aria-controls="simple-menu" variant="contained"color="secondary" aria-haspopup="true" onClick={handleClick}>
        Settings
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={setOpen6}>Change score limit</MenuItem>
      </Menu>
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
            Click the "Roll Dice" button, the first player to 21 wins!
          </Typography>
        </Grid>
      </div>
    </CardContent>
  </Card></div>
  </div>
  );
}

const Final1v1 = withStyles(styles)(card13);

export default Final1v1;
