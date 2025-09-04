import { 
  Rocket,
  TrendingUp,
  Crown,
  Bot,
  Palette,
  Globe,
  Target
} from 'lucide-react';

export const pricingPlans = [
  {
    id: 'startup',
    name: 'Startup Accelerator',
    description: 'Perfect for startups and small businesses ready to launch their digital presence',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Rocket,
    features: [
      { name: 'SEO Foundation Setup', included: true },
      { name: 'Google Ads Management', included: true },
      { name: 'Social Media Management (2 platforms)', included: true },
      { name: 'Content Creation (8 posts/month)', included: true },
      { name: 'Basic Website Optimization', included: true },
      { name: 'Monthly Performance Reports', included: true },
      { name: 'Email Support', included: true },
      { name: 'AI Automation', included: false },
      { name: '24/7 Priority Support', included: false },
      { name: 'Advanced Analytics Dashboard', included: false }
    ],
    highlights: [
      'Perfect for new businesses',
      'Quick setup in 7 days',
      'Essential digital foundation'
    ],
    pricing: {
      monthly: 999,
      annual: 899,
      originalMonthly: 1299,
      originalAnnual: 1199
    }
  },
  {
    id: 'growth',
    name: 'Growth Catalyst',
    description: 'Comprehensive digital marketing for businesses ready to scale and dominate their market',
    gradient: 'from-purple-500 to-pink-500',
    icon: TrendingUp,
    popular: true,
    features: [
      { name: 'Advanced SEO & Technical Optimization', included: true },
      { name: 'Multi-Platform PPC Management', included: true },
      { name: 'Social Media Management (4 platforms)', included: true },
      { name: 'Content Creation (20 posts/month)', included: true },
      { name: 'Email Marketing Automation', included: true },
      { name: 'Landing Page Optimization', included: true },
      { name: 'Weekly Strategy Calls', included: true },
      { name: 'Basic AI Automation Setup', included: true },
      { name: 'Priority Support', included: true },
      { name: 'Advanced Analytics Dashboard', included: true }
    ],
    highlights: [
      'Most popular choice',
      '350% average ROI increase',
      'Dedicated account manager'
    ],
    pricing: {
      monthly: 2199,
      annual: 1899,
      originalMonthly: 2999,
      originalAnnual: 2699
    }
  },
  {
    id: 'enterprise',
    name: 'Enterprise Domination',
    description: 'Full-scale digital transformation with AI automation for industry-leading organizations',
    gradient: 'from-amber-500 to-orange-500',
    icon: Crown,
    features: [
      { name: 'Enterprise SEO & Technical Audit', included: true },
      { name: 'Unlimited PPC Campaign Management', included: true },
      { name: 'Omnichannel Social Media Strategy', included: true },
      { name: 'Unlimited Content Creation', included: true },
      { name: 'Advanced Email & Marketing Automation', included: true },
      { name: 'Custom Website Development', included: true },
      { name: 'Daily Performance Monitoring', included: true },
      { name: 'Full AI Automation Suite', included: true },
      { name: '24/7 Dedicated Support Team', included: true },
      { name: 'White-label Reporting Dashboard', included: true }
    ],
    highlights: [
      'Complete digital transformation',
      'Custom AI solutions included',
      'Dedicated success team'
    ],
    pricing: {
      monthly: 4499,
      annual: 3899,
      originalMonthly: 6999,
      originalAnnual: 5999
    }
  }
];

export const addOnServices = [
  {
    name: 'AI Chatbot Development',
    description: 'Custom AI chatbot for 24/7 customer support',
    price: 599,
    icon: Bot,
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    name: 'Brand Identity Package',
    description: 'Complete brand redesign with logo and guidelines',
    price: 1299,
    icon: Palette,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    name: 'E-commerce Integration',
    description: 'Full e-commerce setup with payment processing',
    price: 1899,
    icon: Globe,
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    name: 'Video Marketing Package',
    description: 'Professional video content creation (5 videos)',
    price: 2499,
    icon: Target,
    gradient: 'from-orange-500 to-red-500'
  }
];

export const faqItems = [
  {
    question: 'What\'s included in the setup process?',
    answer: 'Our comprehensive onboarding includes strategy development, account setup, initial optimizations, and team training. Most clients see results within the first 30 days.'
  },
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Absolutely! You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle.'
  },
  {
    question: 'Do you offer custom enterprise solutions?',
    answer: 'Yes, we create tailored solutions for large organizations with specific needs. Contact us for a custom quote based on your requirements.'
  },
  {
    question: 'What kind of results can I expect?',
    answer: 'Our clients typically see 200-400% increase in qualified leads, 150-300% improvement in conversion rates, and 300-500% ROI within 6 months.'
  },
  {
    question: 'Is there a contract or can I cancel anytime?',
    answer: 'We offer both month-to-month and annual contracts. You can cancel anytime with 30 days notice. We\'re confident in our results and don\'t believe in locking clients in.'
  },
  {
    question: 'Do you provide training and support?',
    answer: 'Yes! All plans include comprehensive training, documentation, and ongoing support. Higher-tier plans include dedicated account managers and priority support.'
  }
];

export const testimonials = [
  {
    name: 'David Chen',
    company: 'TechFlow Solutions',
    text: 'The Growth Catalyst plan transformed our business. We saw 400% increase in qualified leads within 3 months.',
    avatar: 'DC',
    plan: 'Growth Catalyst',
    results: '+400% Leads'
  },
  {
    name: 'Sarah Williams',
    company: 'EcoGreen Retail',
    text: 'Their AI automation saved us 30+ hours weekly. The ROI has been absolutely incredible.',
    avatar: 'SW',
    plan: 'Enterprise Domination',
    results: '30+ Hours Saved'
  },
  {
    name: 'Marcus Johnson',
    company: 'StartupX',
    text: 'As a startup, the Accelerator plan was perfect. Professional results without breaking the bank.',
    avatar: 'MJ',
    plan: 'Startup Accelerator',
    results: '+250% Growth'
  }
];

export const comparisonFeatures = [
  { feature: 'SEO Optimization', startup: 'Basic', growth: 'Advanced', enterprise: 'Enterprise' },
  { feature: 'PPC Management', startup: 'Google Ads', growth: 'Multi-Platform', enterprise: 'Unlimited' },
  { feature: 'Social Media Platforms', startup: '2', growth: '4', enterprise: 'All' },
  { feature: 'Content Creation', startup: '8/month', growth: '20/month', enterprise: 'Unlimited' },
  { feature: 'AI Automation', startup: false, growth: 'Basic', enterprise: 'Full Suite' },
  { feature: 'Support Level', startup: 'Email', growth: 'Priority', enterprise: '24/7 Dedicated' },
  { feature: 'Reporting', startup: 'Monthly', growth: 'Weekly', enterprise: 'Real-time' },
  { feature: 'Account Manager', startup: false, growth: true, enterprise: 'Dedicated Team' }
];