import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Avatar,
  Divider,
  TextField
} from '@mui/material';
import {
  SmartToy,
  CalendarToday,
  BarChart,
  GpsFixed,
  Group,
  Bolt,
  Star,
  ArrowForward,
  PlayArrow,
  GitHub,
  Microsoft
} from '@mui/icons-material';
import HabitLineLogo from '../../assets/Images/HabitLineLogo.png';
import styles from './splash_screen.module.scss' 
import IconButtonHL from '../Widgets/Buttons/IconButton';
import { GoogleIcon } from '../../assets/CustomIcons/GoogleIcon';

function SplashScreen() {
    const loginMethods = [
        { 
            icon: <GitHub />, 
            label: 'Login with GitHub',
            color: '#1976d2'
        },
        { 
            icon: <GoogleIcon />,
            label: 'Login with Google',
            color: '#333'
        },
        { 
            icon: <Microsoft />,
            label: 'Login with Microsoft',
            color: '#db4437'
        },
    ];
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
    <Box className={styles.container}>
      {/* Hero Section */}
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

            <Card className={styles.loginCard} elevation={3}>
              <CardContent>
                <Typography variant="h6" component="h3" fontWeight="bold">
                  Login
                </Typography>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" size="large" fullWidth>
                  Login
                </Button>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
                  Don't have an account? <a href="/signup">Sign up</a>
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  Forgot your password? <a href="/reset-password">Reset it</a>
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>	
                    or
                </Typography>
                <Box className={styles.loginMethods}>
                  {loginMethods.map((method, index) => (
                    <IconButtonHL
                      key={index}
                      variant="contained"
                      onClick={() => console.log(`Login with ${method.label}`)}
                      title={method.label}
                      icon={method.icon}
                      customClass= {styles.loginMethodButton}
                    />
                  ))}
                </Box>

              </CardContent>
            </Card>

        </Container>
      </Box>

      {/* Features Section */}
      <Box className={styles.featuresSection}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" className={styles.sectionTitle} fontWeight="bold">
            Features that change everything
          </Typography>
          <Typography variant="h6" className={styles.sectionSubtitle}>
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
      </Box>

      {/* AI Feature Spotlight */}
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
                <Typography variant="body1" paragraph>
                  Imagine having a dedicated assistant who knows every detail of your projects, 
                  understands your work patterns, and proactively helps you stay on track.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our AI doesn't just remind you about tasks—it calls you daily, asks intelligent 
                  questions about your progress, and provides personalized insights to optimize your workflow.
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  It's like having a personal productivity expert available 24/7.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Card className={styles.aiDemo} elevation={3}>
                <CardContent>
                  <Box className={styles.aiMessage}>
                    <Avatar className={styles.aiAvatar}>
                      <SmartToy />
                    </Avatar>
                    <Box className={styles.aiMessageContent}>
                      <Typography className={styles.messageText}>
                        "Good morning! I see you have 3 urgent tasks today. Should we prioritize the client presentation first?"
                      </Typography>
                      <Typography className={styles.messageLabel}>
                        AI Assistant • Daily Check-in
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.aiMessage}>
                    <Avatar className={styles.aiAvatar}>
                      <SmartToy />
                    </Avatar>
                    <Box className={styles.aiMessageContent}>
                      <Typography className={styles.messageText}>
                        "I noticed the LED-Matrix project is 80% complete. Want me to schedule time to finish it this week?"
                      </Typography>
                      <Typography className={styles.messageLabel}>
                        AI Assistant • Smart Suggestion
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.aiMessage}>
                    <Avatar className={styles.aiAvatar}>
                      <SmartToy />
                    </Avatar>
                    <Box className={styles.aiMessageContent}>
                      <Typography className={styles.messageText}>
                        "You've completed 5 tasks today—great progress! Tomorrow might be good for tackling the BVB-Scraper fix."
                      </Typography>
                      <Typography className={styles.messageLabel}>
                        AI Assistant • Progress Update
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

    {/* Pricing Section */}
    <Box className={styles.pricingSection}>
    <Container maxWidth="lg">
        <Typography variant="h3" component="h2" className={styles.sectionTitle} fontWeight="bold">
        Flexible pricing for every need
        </Typography>
        <Typography variant="h6" className={styles.sectionSubtitle}>
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
    </Box>

      {/* Testimonials */}
      <Box className={styles.testimonialsSection}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" className={styles.sectionTitle} fontWeight="bold">
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
      </Box>

      {/* CTA Section */}
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




    </Box>
  );
};


export default SplashScreen