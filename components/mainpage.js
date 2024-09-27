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
                <p>저는 그리 실력이 좋지는 못 하지만 현재 강사분과 담임 선생님의 노력으로 이렇게 여기서 인사드릴 수 있었습니다
                    저는 처음엔 코딩에 흥미를 느껴 이 과에 지원했지만 그 흥미는 오래가지 못 했습니다 하지만 선생님께서
                    한 번 저를 불러 조언을 해주셨습니다 그리고 이후 좋은 강사분을 만나 다시 한번 도전해 끈기 있게 이어나갈 것 입니다.
                    
                 </p>
                 <h3>매우 좋은 작품</h3>
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