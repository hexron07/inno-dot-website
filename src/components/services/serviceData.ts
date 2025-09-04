import { 
  Search, 
  MousePointer, 
  Share2, 
  FileText, 
  Mail, 
  Palette,
  Target,
  TrendingUp,
  BarChart3,
  Clock,
  Users,
  Award,
  Lightbulb,
  Eye,
  Globe,
  Zap,
  Shield,
  Calendar,
  ArrowUpRight,
  DollarSign,
  LineChart,
  Megaphone,
  Settings,
  PenTool,
  BookOpen,
  Send,
  UserPlus,
  Heart,
  Camera,
  Video,
  Code,
  Smartphone,
  Monitor,
  Layers,
  Compass,
  Star
} from 'lucide-react';

export const serviceProcess = {
  seo: [
    { step: 1, title: 'SEO Audit & Analysis', description: 'Comprehensive website audit to identify opportunities and technical issues.', duration: '1-2 weeks', icon: Search },
    { step: 2, title: 'Strategy Development', description: 'Custom SEO strategy based on your goals, competition, and target audience.', duration: '1 week', icon: Lightbulb },
    { step: 3, title: 'Implementation', description: 'Execute on-page, technical, and content optimizations systematically.', duration: '2-4 weeks', icon: Zap },
    { step: 4, title: 'Monitoring & Optimization', description: 'Continuous monitoring and optimization for sustained growth.', duration: 'Ongoing', icon: TrendingUp }
  ],
  ppc: [
    { step: 1, title: 'Account Audit & Research', description: 'Comprehensive analysis of current campaigns, competitors, and market opportunities.', duration: '1-2 weeks', icon: Target },
    { step: 2, title: 'Strategy Development', description: 'Custom PPC strategy aligned with your business goals and target audience.', duration: '1 week', icon: Lightbulb },
    { step: 3, title: 'Campaign Setup & Launch', description: 'Professional campaign setup with optimized structure and tracking implementation.', duration: '1-2 weeks', icon: Zap },
    { step: 4, title: 'Optimization & Management', description: 'Continuous monitoring, testing, and optimization for maximum performance.', duration: 'Ongoing', icon: TrendingUp }
  ],
  'social-media': [
    { step: 1, title: 'Social Media Audit', description: 'Complete analysis of current social presence, competitors, and audience insights.', duration: '1-2 weeks', icon: Eye },
    { step: 2, title: 'Strategy Development', description: 'Custom social media strategy aligned with brand voice and business goals.', duration: '1 week', icon: Lightbulb },
    { step: 3, title: 'Content Planning & Creation', description: 'Develop content calendar and create engaging posts for all platforms.', duration: '2-3 weeks', icon: Camera },
    { step: 4, title: 'Community Management', description: 'Active posting, engagement, and community building across all platforms.', duration: 'Ongoing', icon: Users }
  ],
  'content-marketing': [
    { step: 1, title: 'Content Audit & Research', description: 'Analysis of existing content, competitor research, and audience persona development.', duration: '1-2 weeks', icon: Search },
    { step: 2, title: 'Strategy Development', description: 'Custom content strategy with topics, formats, and distribution channels.', duration: '1 week', icon: Lightbulb },
    { step: 3, title: 'Content Creation', description: 'Professional content creation including blogs, videos, infographics, and more.', duration: '2-4 weeks', icon: PenTool },
    { step: 4, title: 'Distribution & Optimization', description: 'Strategic content distribution and ongoing optimization based on performance.', duration: 'Ongoing', icon: Share2 }
  ],
  'email-marketing': [
    { step: 1, title: 'Email Audit & Strategy', description: 'Analysis of current email performance and development of comprehensive strategy.', duration: '1-2 weeks', icon: Mail },
    { step: 2, title: 'List Building & Segmentation', description: 'Audience segmentation and lead magnet creation to grow your email list.', duration: '1 week', icon: Users },
    { step: 3, title: 'Campaign Creation', description: 'Professional email design and copywriting for maximum engagement.', duration: '1-2 weeks', icon: Send },
    { step: 4, title: 'Automation & Optimization', description: 'Setup automated sequences and continuous optimization based on performance.', duration: 'Ongoing', icon: Zap }
  ],
  'web-design': [
    { step: 1, title: 'Discovery & Planning', description: 'Understanding your business goals, target audience, and technical requirements.', duration: '1-2 weeks', icon: Lightbulb },
    { step: 2, title: 'Design & Prototyping', description: 'Creating wireframes, mockups, and interactive prototypes for approval.', duration: '2-3 weeks', icon: Palette },
    { step: 3, title: 'Development & Build', description: 'Professional development with modern technologies and best practices.', duration: '3-5 weeks', icon: Code },
    { step: 4, title: 'Testing & Launch', description: 'Thorough testing, optimization, and deployment to production.', duration: '1-2 weeks', icon: Zap }
  ],
  'brand-strategy': [
    { step: 1, title: 'Brand Discovery & Research', description: 'Deep dive into your business, competitors, and target market analysis.', duration: '2-3 weeks', icon: Eye },
    { step: 2, title: 'Strategy Development', description: 'Develop comprehensive brand strategy including positioning and messaging.', duration: '1-2 weeks', icon: Lightbulb },
    { step: 3, title: 'Visual Identity Creation', description: 'Design logo, color palette, typography, and visual brand elements.', duration: '2-4 weeks', icon: Palette },
    { step: 4, title: 'Implementation & Guidelines', description: 'Brand guidelines creation and implementation across all marketing materials.', duration: '1-2 weeks', icon: Layers }
  ]
};

export const serviceBenefits = {
  seo: ['Increased organic search visibility', 'Higher quality website traffic', 'Improved user experience', 'Better conversion rates', 'Long-term sustainable growth', 'Enhanced brand credibility', 'Competitive advantage', 'Measurable ROI'],
  ppc: ['Immediate traffic and visibility', 'Precise audience targeting', 'Measurable ROI tracking', 'Quick market testing', 'Brand awareness boost', 'Competitive advantage', 'Flexible budget control', 'Data-driven insights'],
  'social-media': ['Increased brand awareness', 'Higher engagement rates', 'Growing follower base', 'Better customer relationships', 'Enhanced brand loyalty', 'More website traffic', 'Lead generation', 'Improved brand reputation'],
  'content-marketing': ['Establish thought leadership', 'Build brand authority', 'Improve SEO rankings', 'Generate qualified leads', 'Educate your audience', 'Build trust and credibility', 'Long-term organic growth', 'Enhanced brand storytelling'],
  'email-marketing': ['Higher customer retention', 'Personalized messaging', 'Automated lead nurturing', 'Better customer lifetime value', 'Cost-effective marketing', 'Measurable ROI', 'Direct communication channel', 'Scalable growth strategy'],
  'web-design': ['Professional brand image', 'Mobile-responsive design', 'Fast loading speeds', 'SEO-friendly structure', 'Conversion optimization', 'User-friendly interface', 'Secure & reliable', 'Ongoing maintenance'],
  'brand-strategy': ['Strong brand recognition', 'Consistent brand experience', 'Competitive differentiation', 'Enhanced customer loyalty', 'Premium brand positioning', 'Improved marketing effectiveness', 'Higher perceived value', 'Long-term brand equity']
};

export const servicePackages = {
  seo: [
    { name: 'SEO Starter', price: '$1,500', period: '/month', description: 'Perfect for small businesses starting their SEO journey', features: ['Basic keyword research', 'On-page optimization', 'Technical SEO audit', 'Monthly reporting', 'Google Analytics setup'], popular: false },
    { name: 'SEO Professional', price: '$2,500', period: '/month', description: 'Comprehensive SEO for growing businesses', features: ['Advanced keyword research', 'Content strategy & creation', 'Link building campaign', 'Technical optimization', 'Competitor analysis', 'Bi-weekly reporting'], popular: true },
    { name: 'SEO Enterprise', price: '$4,500', period: '/month', description: 'Advanced SEO for large organizations', features: ['Enterprise-level strategy', 'Multiple website optimization', 'Advanced analytics', 'Dedicated SEO manager', 'Weekly reporting', 'Priority support'], popular: false }
  ],
  ppc: [
    { name: 'PPC Starter', price: '$1,200', period: '/month', description: 'Perfect for small businesses starting with paid advertising', features: ['Google Ads management', 'Keyword research & setup', 'Ad copywriting', 'Basic bid management', 'Monthly reporting'], popular: false },
    { name: 'PPC Professional', price: '$2,200', period: '/month', description: 'Comprehensive PPC management for growing businesses', features: ['Multi-platform campaigns', 'Advanced targeting', 'Landing page optimization', 'Conversion tracking', 'Bi-weekly optimization', 'Performance reporting'], popular: true },
    { name: 'PPC Enterprise', price: '$4,000', period: '/month', description: 'Advanced PPC solutions for large organizations', features: ['Enterprise-level strategy', 'Multiple account management', 'Advanced analytics & BI', 'Dedicated PPC manager', 'Weekly optimization', 'Priority support'], popular: false }
  ],
  'social-media': [
    { name: 'Social Starter', price: '$800', period: '/month', description: 'Perfect for small businesses starting their social media journey', features: ['2 social platforms', '8 posts per month', 'Basic engagement', 'Monthly reporting', 'Content calendar'], popular: false },
    { name: 'Social Professional', price: '$1,800', period: '/month', description: 'Comprehensive social media management for growing businesses', features: ['4 social platforms', '20 posts per month', 'Community management', 'Social advertising', 'Bi-weekly reporting', 'Content creation'], popular: true },
    { name: 'Social Enterprise', price: '$3,500', period: '/month', description: 'Advanced social media solutions for large organizations', features: ['All social platforms', 'Unlimited content', 'Dedicated social manager', 'Influencer partnerships', 'Advanced analytics', '24/7 monitoring'], popular: false }
  ],
  'content-marketing': [
    { name: 'Content Starter', price: '$1,200', period: '/month', description: 'Perfect for businesses starting their content journey', features: ['4 blog posts per month', 'Content strategy', 'SEO optimization', 'Social media posts', 'Monthly reporting'], popular: false },
    { name: 'Content Professional', price: '$2,200', period: '/month', description: 'Comprehensive content marketing for growing businesses', features: ['8 blog posts per month', 'Video content creation', 'Email newsletters', 'Lead magnets', 'Content distribution', 'Performance tracking'], popular: true },
    { name: 'Content Enterprise', price: '$4,200', period: '/month', description: 'Advanced content solutions for large organizations', features: ['Unlimited content creation', 'Multi-format content', 'Dedicated content team', 'Advanced analytics', 'Content automation', 'Priority support'], popular: false }
  ],
  'email-marketing': [
    { name: 'Email Starter', price: '$600', period: '/month', description: 'Perfect for small businesses starting with email marketing', features: ['Up to 2,500 contacts', '4 email campaigns/month', 'Basic templates', 'Monthly reporting', 'Email support'], popular: false },
    { name: 'Email Professional', price: '$1,500', period: '/month', description: 'Comprehensive email marketing for growing businesses', features: ['Up to 10,000 contacts', '12 email campaigns/month', 'Custom templates', 'Automation sequences', 'A/B testing', 'Advanced analytics'], popular: true },
    { name: 'Email Enterprise', price: '$3,200', period: '/month', description: 'Advanced email solutions for large organizations', features: ['Unlimited contacts', 'Unlimited campaigns', 'Advanced automation', 'Dedicated account manager', 'Custom integrations', 'Priority support'], popular: false }
  ],
  'web-design': [
    { name: 'Website Starter', price: '$3,500', period: 'one-time', description: 'Perfect for small businesses needing a professional website', features: ['5-page custom website', 'Mobile responsive design', 'Basic SEO setup', 'Contact forms', '3 months support'], popular: false },
    { name: 'Website Professional', price: '$7,500', period: 'one-time', description: 'Comprehensive web solution for growing businesses', features: ['10-page custom website', 'Advanced functionality', 'E-commerce capability', 'CMS integration', 'Performance optimization', '6 months support'], popular: true },
    { name: 'Website Enterprise', price: '$15,000', period: 'one-time', description: 'Advanced web solutions for large organizations', features: ['Unlimited pages', 'Custom functionality', 'Advanced integrations', 'Multi-language support', 'Dedicated project manager', '12 months support'], popular: false }
  ],
  'brand-strategy': [
    { name: 'Brand Starter', price: '$2,500', period: 'one-time', description: 'Perfect for startups needing professional brand identity', features: ['Logo design (3 concepts)', 'Color palette', 'Typography selection', 'Basic brand guidelines', '2 revisions included'], popular: false },
    { name: 'Brand Professional', price: '$4,000', period: 'one-time', description: 'Comprehensive branding for growing businesses', features: ['Complete brand strategy', 'Logo & visual identity', 'Brand positioning', 'Marketing collateral', 'Comprehensive guidelines', 'Unlimited revisions'], popular: true },
    { name: 'Brand Enterprise', price: '$8,500', period: 'one-time', description: 'Advanced brand solutions for large organizations', features: ['Full brand transformation', 'Multi-brand management', 'Advanced brand architecture', 'Digital brand assets', 'Brand training sessions', 'Ongoing brand support'], popular: false }
  ]
};

export const serviceStats = {
  seo: [
    { value: '387%', label: 'Average Traffic Increase', icon: TrendingUp },
    { value: '156%', label: 'Keyword Ranking Improvement', icon: Target },
    { value: '98%', label: 'Client Satisfaction Rate', icon: Award },
    { value: '6 months', label: 'Average Time to Results', icon: Clock }
  ],
  ppc: [
    { value: '245%', label: 'Average ROAS Increase', icon: TrendingUp },
    { value: '68%', label: 'Cost Per Click Reduction', icon: DollarSign },
    { value: '95%', label: 'Client Retention Rate', icon: Award },
    { value: '2 weeks', label: 'Time to Launch', icon: Clock }
  ],
  'social-media': [
    { value: '180%', label: 'Average Engagement Increase', icon: Heart },
    { value: '250%', label: 'Follower Growth Rate', icon: Users },
    { value: '94%', label: 'Client Satisfaction Rate', icon: Award },
    { value: '2 weeks', label: 'Time to Launch', icon: Clock }
  ],
  'content-marketing': [
    { value: '215%', label: 'Average Traffic Increase', icon: TrendingUp },
    { value: '68%', label: 'Lead Generation Growth', icon: Target },
    { value: '92%', label: 'Client Retention Rate', icon: Award },
    { value: '4 weeks', label: 'Time to Results', icon: Clock }
  ],
  'email-marketing': [
    { value: '124%', label: 'Average Open Rate Increase', icon: Mail },
    { value: '89%', label: 'Click Rate Improvement', icon: Target },
    { value: '96%', label: 'Client Retention Rate', icon: Award },
    { value: '1 week', label: 'Time to Launch', icon: Clock }
  ],
  'web-design': [
    { value: '156%', label: 'Average Conversion Increase', icon: Target },
    { value: '2.3s', label: 'Average Load Time', icon: Zap },
    { value: '97%', label: 'Client Satisfaction Rate', icon: Award },
    { value: '6 weeks', label: 'Average Project Timeline', icon: Clock }
  ],
  'brand-strategy': [
    { value: '234%', label: 'Average Brand Recognition Increase', icon: Eye },
    { value: '78%', label: 'Customer Loyalty Improvement', icon: Heart },
    { value: '95%', label: 'Client Satisfaction Rate', icon: Award },
    { value: '8 weeks', label: 'Average Project Timeline', icon: Clock }
  ]
};