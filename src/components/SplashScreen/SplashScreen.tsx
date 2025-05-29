import styles from './splash_screen.module.scss' 
import { Card, Typography } from "@mui/material"
import LinkButton from '../Widgets/Buttons/LinkButton'

function SplashScreen() {
    const mvp = false
    return (
        <div className={styles.splashScreen}>
           <div className={styles.splashScreen__content}>
                <div className={styles.splashScreen__headline}>
                    <Card className={styles.splashScreen__card} >
                        <Typography
                            variant="h1"
                            component="h1"
                            className={`${styles.splashScreen__title} animate__animated animate__fadeInDown`}
                        >                            
                        Habit Line
                        </Typography>
                        <Typography
                            variant="h4"
                            component="h4"
                            className={`${styles.splashScreen__subtitle} animate__animated animate__fadeInDown`}
                            >
                            {mvp ? "Make habits stick with a daily call." : "Build habits that stick."}
                        </Typography>
                        <Typography
                            variant="h4"
                            component="h4"
                            className={`${styles.splashScreen__subtitle} animate__animated animate__fadeInDown`}
                            >
                            All Tasks & Todos in one place.
                        </Typography>
                    </Card>
                </div>
                <div className={styles.splashScreen__cta_container}>
                    <LinkButton
                        href="/dashboard"
                        title="Get Started" variant="contained"
                        customClass={`${styles.splashScreen__button} animate__animated animate__fadeIn`}
                    />

                    <div className={styles.splashScreen__description}>
                            <Typography
                                variant="h5"
                                component="h5"
                                className={`${styles.splashScreen__text} animate__animated animate__fadeIn`}
                            >
                                Habit Line is a habit tracking app that helps you build and maintain good habits. 
                                With Habit Line, you can set goals, track your progress, and stay motivated.
                            </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SplashScreen