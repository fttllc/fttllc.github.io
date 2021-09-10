import { createStyles, createTheme, makeStyles, Theme } from '@material-ui/core/styles';

const PRIMARY_COLOR = '#5cdb9f';
const SECONDARY_COLOR = '#3a6d91';
const TERTIARY_COLOR = '#379680';
const CARD_BACKGROUND =  SECONDARY_COLOR; //'#ffff00'
const TEXT_COLOR = '#edf5e0';

export const mainTheme = createTheme({
    palette: {
        background: {
            default: PRIMARY_COLOR
        },
        primary: {
            main: PRIMARY_COLOR
        },
        secondary: {
            main: SECONDARY_COLOR
        },
    },
    overrides: {
        MuiCard: {
            root: {
                backgroundColor: CARD_BACKGROUND,
                maxWidth: 275,
                minHeight: 200,
                wordWrap: "break-word",
                textAlign: "center",
            }
        },
        MuiCardHeader: {
            title: {
                color: TEXT_COLOR,
                textAlign: "center"
            }
        },
        MuiTypography: {
            root: {
                color: TEXT_COLOR
            }
        }
    }
});

export const mainStyle = makeStyles((theme: Theme) =>
  createStyles({
    main: {
        flexDirection: "column",
        minHeight: '100vh',
        display: 'flex'
    },
    topAppBar: {
        minHeight: '50px',
        color: "primary"
    },
    content: {
        paddingTop: 10,
        padding: 10,
        display: 'flex',
        flex: 1
    },
    logoButton: {
        color: TEXT_COLOR
    },
    bottomAppBar: {
        top: 'auto',
        bottom: '0px',
        // display: 'block',
        // flexGrow: 1
      },
    bottomBar: {
        background: TERTIARY_COLOR,
        width: '100vw',
        // maxHeight: '50px',
        top: 'auto',
        bottom: '0px',
        position: 'static',
    },
  }),
);