import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid2"
import Lottie from 'react-lottie-player'
import lottiejson from '/public/mainpage.json'
import styles from './mainpage.module.css'
import { useRouter } from "next/router"

export default function Mainpage(){
    const router = useRouter();
    const handleClick = () => {
        router.push('/projects');
    };
    return(
        <>
            <Grid container spacing={2}>
            <Grid size={4}>
                <div className={styles.introduce}>
                <h2>반갑습니다 여러분 이승빈 입니다</h2>
                <p>노력하는 인물이 되겠습니다.</p>
                <Button variant="outlined" onClick={handleClick}>눌러서 참가</Button>
                </div>
            </Grid>
            <Grid size={6}>
                <div>
                <Lottie
            loop
            animationData={lottiejson}
            play
            
          />
                </div>
            </Grid>
            </Grid>
        </>
    )
}