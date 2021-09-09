import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function HomeCard(props: any) {
    return (
        <Card variant="outlined">
            <CardHeader title={props.heading} />
            <CardContent>
                <Typography variant='body1'>
                    {props.desc}
                </Typography>
            </CardContent>
        </Card>
    )
}