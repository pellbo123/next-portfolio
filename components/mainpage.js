import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid2"
import Lottie from 'react-lottie-player'
import lottiejson from '/public/mainpage.json'
import styles from './mainpage.module.css'
import { useRouter } from "next/router"

export default function Mainpage(){
    const router = useRouter();
    const handleClick = () => {
        router.push('/about-me');
    };
    return(
        <>
            <Grid container spacing={2}>
            <Grid size={4}>
                <div className={styles.introduce}>
                <h2>반갑습니다 시민 동포 여러분 이승빈 입니다</h2>
                <p>우리 모두 대한민국의 시민으로서, 이 나라의 자주와 독립, 그리고 평화와 번영을 위하여 함께 힘을 모아 이 나라를 바꿔봅시다.</p>
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