import { mainStyle, mainTheme } from './styles/Default';
import Grid from '@material-ui/core/Grid';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import HomeCard from './components/Cards';
import { CssBaseline } from '@material-ui/core';
import TopBar from './components/TopBar'
import FooterBar from './components/FooterBar'
import { cardData } from './config';

function App() {
  const theme = mainTheme;
  const style = mainStyle(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid className={style.main}>
        <TopBar logoText="FTT, LLC"/>
        <Grid container className={style.content}>
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
        <FooterBar />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
