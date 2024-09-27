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
                <h2>반갑습니다 이승빈입니다</h2>
                <p>
                    
                 </p>
                 <h3>작품 둘러보기</h3>
                <Button variant="outlined" onClick={handleClick}>클릭해서 참가</Button>
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