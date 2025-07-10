import { Box } from '@mui/material';
import HeroSection from './HeroSection/HeroSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import AiAssistantSection from './AiAssistantSection/AiAssistantSection';
import PricingSection from './PricingSection/PricingSection';
import TestimonalsSection from './TestimonialsSection/TestimonalsSection';
import CtaSection from './CtaSection/CtaSection';
import styles from './splash_screen.module.scss'
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import StyledDivider from '../Widgets/StyledDivider/StyledDivider';

function SplashScreen() {
  const { setTheme } = useContext(ThemeContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) navigate("/dashboard");
    setTheme("dark");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box className={styles.container}>
      <HeroSection />
      <FeaturesSection />
      <AiAssistantSection />
      <PricingSection />
      <StyledDivider orientation="horizontal" />
      <TestimonalsSection />
      <CtaSection />
    </Box>
  );
};


export default SplashScreen