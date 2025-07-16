import { Box, Button, Container, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import styles from './cta_section.module.scss'

function CtaSection() {
    return (
        <Box className={styles.ctaSection}>
            <Container maxWidth="md">
                <Typography variant="h3" component="h2" className={styles.ctaTitle} fontWeight="bold">
                    Ready to transform your productivity?
                </Typography>
                <Typography variant="h6" className={styles.ctaSubtitle}>
                    Join thousands of professionals who've revolutionized their task management with Habit Line's intelligent approach.
                </Typography>
                <Box className={styles.ctaButtons}>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        endIcon={<ArrowForward />}
                        sx={{ px: 4, py: 1.5 }}
                    >
                        Start Your Free Trial
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            px: 4,
                            py: 1.5,
                            color: 'white',
                            borderColor: 'white',
                            '&:hover': {
                                borderColor: 'white',
                                backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                        }}
                    >
                        Schedule Demo
                    </Button>
                </Box>
                <Typography variant="body2" className={styles.ctaDisclaimer}>
                    No credit card required • 14-day free trial • Cancel anytime
                </Typography>
            </Container>
        </Box>
    )
}

export default CtaSection