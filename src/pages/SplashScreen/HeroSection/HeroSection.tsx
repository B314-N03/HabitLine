import { Box } from '@mui/material'
import { Container, Typography, Button, Divider } from '@mui/material'
import { ArrowForward, PlayArrow } from '@mui/icons-material'
import HabitLineLogo from '../../../assets/Images/HabitLineLogo.png'
import LoginCard from '../../../components/Widgets/Cards/LoginCard/LoginCard'

import styles from './hero_section.module.scss'
function HeroSection() {
    return (
        <Box className={styles.heroSection}>
            <Container maxWidth="lg" className={styles.heroContent}>
                <Container className={styles.heroContentLeft} maxWidth="md">
                    <Box className={styles.heroTitle}>
                        <img src={HabitLineLogo} alt="Habit Line Logo" className={styles.logo} />
                        <Typography variant="h2" component="h1" fontWeight="bold">
                            Habit Line
                        </Typography>
                    </Box>
                    <Typography variant="h6" className={styles.heroSubtitle}>
                        The intelligent task management platform that doesn't just organize your work—it actively helps you succeed.
                        With AI-powered daily check-ins and smart project insights, transform how you handle tasks forever.
                    </Typography>
                    <Box className={styles.heroButtons}>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForward />}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<PlayArrow />}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Watch Demo
                        </Button>
                    </Box>
                </Container>

                <Divider variant='middle' orientation='vertical' className={styles.divider} />

                <LoginCard />

            </Container>
        </Box>

    )
}

export default HeroSection