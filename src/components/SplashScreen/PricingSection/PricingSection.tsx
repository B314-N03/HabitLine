import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import { Bolt } from '@mui/icons-material';

import styles from './pricing_section.module.scss'
import baseStyles from '../splash_screen.module.scss'

function PricingSection() {
    const pricingPlans = [
        {
            title: "Free",
            price: "€0",
            features: ["Basic task management", "1 project", "Daily check-ins", "Limited AI insights"],
            button: "Get Started",
            variant: "outlined"
        },
        {
            title: "Pro",
            price: "€9",
            features: ["Unlimited projects", "Advanced analytics", "Smart prioritization", "AI calls & scheduling"],
            button: "Start Free Trial",
            variant: "contained",
            highlight: true
        },
        {
            title: "Team",
            price: "€29",
            features: ["Team collaboration", "Shared dashboards", "Role-based permissions", "Priority support"],
            button: "Contact Sales",
            variant: "outlined"
        }
    ];
    return (
        <Box className={styles.pricingSection}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" className={baseStyles.sectionTitle} fontWeight="bold">
                    Flexible pricing for every need
                </Typography>
                <Typography variant="h6" className={baseStyles.sectionSubtitle}>
                    Start for free. Upgrade when you're ready for more power.
                </Typography>

                <Box className={styles.pricingGrid}>
                    {pricingPlans.map((plan, index) => (
                        <Card key={index} className={`${styles.pricingCard} ${plan.highlight ? styles.pricingHighlight : ''}`} elevation={plan.highlight ? 4 : 2}>
                            <CardContent>
                                <Typography variant="h5" fontWeight="bold">{plan.title}</Typography>
                                <Typography variant="h4" color="primary" sx={{ mt: 1 }}>{plan.price}/mo</Typography>
                                <ul className={styles.pricingFeatures}>
                                    {plan.features.map((f, i) => (
                                        <li key={i}><Bolt fontSize="small" sx={{ mr: 1 }} /> {f}</li>
                                    ))}
                                </ul>
                                <Button
                                    variant={plan.variant as "outlined" | "contained" | "text"}
                                    fullWidth
                                    sx={{ mt: 2 }}
                                >
                                    {plan.button}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>)
}

export default PricingSection