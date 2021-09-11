
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { mainStyle } from '../styles/Default';

export default function TopBar(props: any) {
    const style = mainStyle();
    return <AppBar position="static" className={style.topAppBar}>
            <Toolbar>
                <Button>
                    <Typography className={style.logoButton} variant="h4" align="left">
                        {props.logoText}
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
}