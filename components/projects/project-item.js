import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/router';
import styles from './project-item.module.css';

export default function ProjectItem({data}) {
    const title = data.properties.이름.title[0]?.plain_text;
    const tags = data.properties.태그.multi_select;
    const start = data.properties?.작업기간.date.start;
    const end = data.properties?.작업기간.date.start;
    const description = data.properties?.설명.rich_text[0].plain_text;
    const github = data.properties?.github.url;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const demo = data.properties?.Demo.url;
    const imgUrl = data.properties?.Image.url;
    const router = useRouter();

    function countWorkDays(start,end){
        const startDate = new Date(start);
        const endDate = new Date(end);

        let workdays = 0;
        let currentDate = new Date(startDate);

        while(currentDate <= endDate) {
            workdays++;
            currentDate.setDate(currentDate.getDate()+1);
        }
        return workdays;
    }
    const workday = countWorkDays(start,end)
    return (
            
            <Card className={styles.cardItem} sx={{width: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <CardMedia sx={{height : 300}} image={imgUrl} title={title}/>                   
            <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" confirm= "div">
                        {title}
                    </Typography>
                    <Typography variant="body1"sx={{color : 'text.secondary'}}>
                        {workday}일
                    </Typography>
                    <Typography variant="body2" sx={{color : 'text.secondary'}}/>
                    {description}
                    <Typography variant="body3" sx={{color : 'text.secondary'}}>
                        {tags.map((aTag) => (<span key={aTag.id}>#{aTag.name} </span>))}
                    </Typography>

                </CardContent>
                <CardActions>
                    {demo &&
                    (<Button size="small" onClick={()=>{router.push(demo)}}>Visit Demo</Button>)}
                    <Button size="small" onClick={()=>{router.push(github)}}>Visit Github</Button>
                </CardActions>

            </Card>
            
    )
}