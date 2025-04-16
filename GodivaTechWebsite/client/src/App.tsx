import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import PortfolioPage from "@/pages/PortfolioPage";
import BlogPage from "@/pages/BlogPage";
import TestimonialsPage from "@/pages/TestimonialsPage";

function Router() {
  const [location] = useLocation();
  const [isInitialRender, setIsInitialRender] = useState(true);
  
  // Disable initial animation on first page load
  useEffect(() => {
    if (isInitialRender) {
      setTimeout(() => setIsInitialRender(false), 100);
    }
  }, [isInitialRender]);
  
  // Page transition animations
  const pageVariants = {
    initial: {
      opacity: isInitialRender ? 1 : 0,
      y: isInitialRender ? 0 : 10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/testimonials" component={TestimonialsPage} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
