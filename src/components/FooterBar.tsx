import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { mainStyle } from '../styles/Default';

export default function FooterBar(props: any) {
    const style = mainStyle();
    return <AppBar position="static" className={style.bottomBar}>
            <Toolbar className={style.bottomBar}>
              <Typography variant="body1">
                © 2021 FTT, LLC
              </Typography>
            </Toolbar>
        </AppBar>
}