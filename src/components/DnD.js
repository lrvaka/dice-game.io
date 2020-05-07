import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
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
    maxWidth: 500,
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
    background: "linear-gradient(45deg, #ff5252, 30%, #3b0000 90%)",
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



function DnDDice(){

    const classes = useStyles();

    const [OpenD4, setOpenD4] = useState(false);
    const [D4Score, setD4Score] = useState(4)

    const [OpenD6, setOpenD6] = useState(false);
    const [D6Score, setD6Score] = useState(6)

    const [OpenD8, setOpenD8] = useState(false);
    const [D8Score, setD8Score] = useState(8)

    const [OpenD10, setOpenD10] = useState(false);
    const [D10Score, setD10Score] = useState(10)

    const [OpenD12, setOpenD12] = useState(false);
    const [D12Score, setD12Score] = useState(12)

    const [OpenD20, setOpenD20] = useState(false);
    const [D20Score, setD20Score] = useState(20)

    const [OpenD100, setOpenD100] = useState(false);
    const [D100Score, setD100Score] = useState(100)

    const [OpenDX, setOpenDX] = useState(false);
    const [DXScore, setDXScore] = useState()

    const [CustomScore, setCustomScore] = useState()

    function D4() {
        return Math.floor(Math.random() * Math.floor(4));
      }

    function D6() {
        return Math.floor(Math.random() * Math.floor(6));
      }

      function D8() {
        return Math.floor(Math.random() * Math.floor(8));
      }

      function D10() {
        return  Math.floor(Math.random() * Math.floor(10));
      }

      function D12() {
        return Math.floor(Math.random() * Math.floor(12));
      }

      function D20() {
        return Math.floor(Math.random() * Math.floor(20));
      }

      function D100() {
        return Math.floor(Math.random() * Math.floor(100));
      }

      function DieX() {
        return Math.floor(Math.random() * Math.floor(CustomScore));
      }
      
    return(<div>
        <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button className={classes.root} onClick={() => {setD4Score(D4); setOpenD4(true);}}>
              d4:
              {OpenD4 ? D4Score : null }
      </Button>
              <Divider orientation="vertical" flexItem variant="middle" />
              <Button className={classes.root} onClick={() => {setD6Score(D6); setOpenD6(true);}}>
                  d6:
              {OpenD6 ? D6Score : null }
      </Button>
      <Divider orientation="vertical" flexItem variant="middle" />
      <Button className={classes.root} onClick={() => {setD8Score(D8); setOpenD8(true);}}>
      d8:
              {OpenD8 ? D8Score : null }
      </Button>
            </Grid>
            <div> ​</div>
            <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
      <Button className={classes.root} onClick={() => {setD10Score(D10); setOpenD10(true);}}>
      D10:
              {OpenD10 ? D10Score : null }
      </Button>
      <Divider orientation="vertical" flexItem variant="middle" />
      <Button className={classes.root} onClick={() => {setD12Score(D12); setOpenD12(true);}}>
      D12:
              {OpenD12 ? D12Score : null }
      </Button>
      <Divider orientation="vertical" flexItem variant="middle" />
      <Button className={classes.root} onClick={() => {setD20Score(D20); setOpenD20(true);}}>
      D20:
              {OpenD20 ? D20Score : null }
      </Button>
      </Grid>
      </div>
      <div>
      <div> ​</div>
      <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
                <Button className={classes.root} onClick={() => {setD100Score(D100); setOpenD100(true);}}>
                D100:
              {OpenD100 ? D100Score : null }
      </Button>
      <Divider orientation="vertical" flexItem variant="middle" />
      <Button className={classes.root} onClick={() => {setDXScore(DieX); setOpenDX(true);}}>
              {OpenDX ? DXScore : 0 }
      </Button>
      <TextField className={classes.textField9} id="outlined-basic" label="Custom" variant="outlined" onChange={event => setCustomScore(event.target.value)}/>
            </Grid>
      </div>
    </div>)
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
              <DnDDice/>
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
            DnD Die Simulator
          </Typography>
          <Typography variant="h6" component="h2" align ="center" color="textSecondary">
            Click any of the die and retrieve a side for your game of Dungeons and Dragons! Custom sides are also inlcuded!
          </Typography>
        </Grid>
      </div>
    </CardContent>
  </Card></div>
  </div>
  );
}

const DnDFinal = withStyles(styles)(card13);

export default DnDFinal;
