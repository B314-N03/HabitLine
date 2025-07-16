import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';
import styles from './testimonials_section.module.scss'
import baseStyles from '../splash_screen.module.scss'
function TestimonalsSection() {


    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Product Manager",
            content: "The AI assistant changed everything. It's like having a personal productivity coach that knows exactly what I'm working on.",
            rating: 5
        },
        {
            name: "Mike Rodriguez",
            role: "Software Engineer",
            content: "Finally, a task manager that actually helps me stay organized. The daily AI check-ins keep me accountable.",
            rating: 5
        },
        {
            name: "Emily Watson",
            role: "Designer",
            content: "The project visualization and progress tracking features help me manage multiple client projects effortlessly.",
            rating: 5
        }
    ];
    return (
        <Box className={styles.testimonialsSection}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" className={baseStyles.sectionTitle} fontWeight="bold">
                    Loved by productive people everywhere
                </Typography>

                <Box className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, index) => (
                        <Box key={index}>
                            <Card className={styles.testimonialCard} elevation={1}>
                                <CardContent>
                                    <Box className={styles.rating}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} sx={{ color: '#ffd700', fontSize: 20 }} />
                                        ))}
                                    </Box>
                                    <Typography variant="body1" className={styles.testimonialText}>
                                        "{testimonial.content}"
                                    </Typography>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {testimonial.role}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>)
}

export default TestimonalsSection