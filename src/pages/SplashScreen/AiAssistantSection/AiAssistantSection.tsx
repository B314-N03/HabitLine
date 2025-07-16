
import { Box, Container, Typography, Card, CardContent, Avatar, Chip } from '@mui/material';
import { SmartToy } from '@mui/icons-material';

import styles from './ai_assistant_section.module.scss';

function AiAssistantSection() {
    const descriptionTexts = [
        "Imagine having a dedicated assistant who knows every detail of your projects, understands your work patterns, and proactively helps you stay on track.",
        "Our AI doesn't just remind you about tasks—it calls you daily, asks intelligent questions about your progress, and provides personalized insights to optimize your workflow.",
        "With Habit Line, you can focus on what matters most: your tasks and projects.",
        "It's like having a personal productivity expert available 24/7."
    ];
    const aiMessages = [
        {
            text: "Good morning! I see you have 3 urgent tasks today. Should we prioritize the client presentation first?",
            label: "AI Assistant • Daily Check-in"
        },
        {
            text: "I noticed the LED-Matrix project is 80% complete. Want me to schedule time to finish it this week?",
            label: "AI Assistant • Smart Suggestion"
        },
        {
            text: "You've completed 5 tasks today—great progress! Tomorrow might be good for tackling the BVB-Scraper fix.",
            label: "AI Assistant • Progress Update"
        }
    ];
    return (
        <Box className={styles.aiSpotlight}>
            <Container maxWidth="lg">
                <Box className={styles.aiGrid}>
                    <Box>
                        <Box className={styles.aiContent}>
                            <Chip
                                icon={<SmartToy />}
                                label="Revolutionary AI Assistant"
                                className={styles.aiBadgeSection}
                            />
                            <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
                                Your AI productivity coach that never sleeps
                            </Typography>
                            {descriptionTexts.map((text, index) => (
                                <Typography key={index} variant="body1" gutterBottom fontWeight={index === descriptionTexts.length - 1 ? 'bold' : 'normal'}>
                                    {text}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Card className={styles.aiDemo} elevation={3}>
                            <CardContent>
                                {aiMessages.map((message, index) => (
                                    <Box key={index} className={styles.aiMessage}>
                                        <Avatar className={styles.aiAvatar}>
                                            <SmartToy />
                                        </Avatar>
                                        <Box className={styles.aiMessageContent}>
                                            <Typography className={styles.messageText}>
                                                {message.text}
                                            </Typography>
                                            <Typography className={styles.messageLabel}>
                                                {message.label}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default AiAssistantSection