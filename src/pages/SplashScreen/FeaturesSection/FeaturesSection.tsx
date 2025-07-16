import { Box, Card, CardContent, Chip, Container, Typography } from '@mui/material';
import { SmartToy, GpsFixed, CalendarToday, BarChart, Bolt, Group, Star } from '@mui/icons-material';

import styles from './features_section.module.scss'
import baseStyles from '../splash_screen.module.scss'

function FeaturesSection() {
    const features = [
        {
            icon: <SmartToy className={styles.featureIcon} style={{ color: '#1976d2' }} />,
            title: "AI Task Assistant",
            description: "Your personal AI companion calls you daily, understands your projects, and helps prioritize what matters most.",
            highlight: true
        },
        {
            icon: <GpsFixed className={styles.featureIcon} style={{ color: '#4caf50' }} />,
            title: "Smart Project Management",
            description: "Organize tasks into projects with visual progress tracking and intelligent categorization."
        },
        {
            icon: <CalendarToday className={styles.featureIcon} style={{ color: '#9c27b0' }} />,
            title: "Daily Task Planning",
            description: "Never miss important tasks with our intelligent daily planning system and habit tracking."
        },
        {
            icon: <BarChart className={styles.featureIcon} style={{ color: '#ff9800' }} />,
            title: "Progress Analytics",
            description: "Visualize your productivity with detailed analytics and completion rates across all projects."
        },
        {
            icon: <Bolt className={styles.featureIcon} style={{ color: '#ffeb3b' }} />,
            title: "Urgency Detection",
            description: "Automatically identifies and surfaces your most urgent tasks so nothing falls through the cracks."
        },
        {
            icon: <Group className={styles.featureIcon} style={{ color: '#f44336' }} />,
            title: "Team Collaboration",
            description: "Share projects, assign tasks, and track team progress with real-time updates."
        }
    ];
    return (
        <Box className={styles.featuresSection}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" className={baseStyles.sectionTitle} fontWeight="bold">
                    Features that change everything
                </Typography>
                <Typography variant="h6" className={baseStyles.sectionSubtitle}>
                    More than just a task manager—Habit Line is your intelligent productivity partner.
                </Typography>

                <Box className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <Box key={index} sx={{ gridColumn: { xs: 'span 1', md: 'span 1', lg: 'span 1' } }}>
                            <Card
                                className={`${styles.featureCard} ${feature.highlight ? styles.highlighted : ''}`}
                                elevation={feature.highlight ? 4 : 2}
                            >
                                <CardContent>
                                    <Box className={styles.featureHeader}>
                                        {feature.icon}
                                        <Typography variant="h6" component="h3" fontWeight="bold">
                                            {feature.title}
                                        </Typography>
                                    </Box>
                                    {feature.highlight && (
                                        <Chip
                                            icon={<Star />}
                                            label="AI Powered"
                                            className={styles.aiBadge}
                                            size="small"
                                        />
                                    )}
                                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>)
}

export default FeaturesSection