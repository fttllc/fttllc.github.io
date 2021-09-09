import { mainStyle, mainTheme } from './styles/Default';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import HomeCard from './components/Cards';
import { CssBaseline } from '@material-ui/core';
import { cardData } from './config';

function App() {
  const theme = mainTheme;
  const style = mainStyle(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <Button>  
            <Typography className={style.logoButton} variant="h4" align="left">
                FTT, LLC
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container className={style.main}>
        <Grid item>
        </Grid>
        <Grid item>
          <Grid container justifyContent="center" spacing={1}>
            {cardData.map((value, index) => (
              <Grid key={index} item>
                <HomeCard heading={value.heading} desc={value.desc} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <AppBar position="fixed" className={style.bottomBar}>
        <Toolbar>

        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
