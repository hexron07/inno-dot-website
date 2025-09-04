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

export interface ServiceFeature {
  icon: any;
  title: string;
  description: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
  duration: string;
  icon: any;
}

export interface ServicePackage {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface ServiceStat {
  value: string;
  label: string;
  icon: any;
}

export const serviceData = {
  seo: {
    badge: { text: 'Search Engine Optimization', icon: Search, colors: 'from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30' },
    title: { main: 'Dominate', highlight: 'Search Results' },
    description: 'Boost your online visibility and drive qualified organic traffic with our comprehensive SEO strategies. Get found by customers who are actively searching for your services.',
    images: [
      { src: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTU5NzA3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'SEO Dashboard Analytics', title: 'SEO Analytics Dashboard', subtitle: 'Real-time performance tracking' },
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGFuYWx5dGljcyUyMGRhc2hib2FyZCUyMG1ldHJpY3N8ZW58MXx8fHwxNzU1OTcwNzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'SEO Strategy Planning', title: 'Strategic SEO Planning', subtitle: 'Custom growth strategies' }
    ],
    bgColors: { primary: 'bg-blue-500/10', secondary: 'bg-cyan-500/10' },
    gradients: { button: 'from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500', accent: 'text-blue-400' }
  },
  ppc: {
    badge: { text: 'Pay-Per-Click Advertising', icon: MousePointer, colors: 'from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30' },
    title: { main: 'Drive Instant', highlight: 'Results' },
    description: 'Generate immediate traffic and leads with expertly managed PPC campaigns. Get your business in front of customers who are ready to buy.',
    images: [
      { src: 'https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQUEMlMjBhZHZlcnRpc2luZyUyMGNhbXBhaWduJTIwZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NTU5NzA3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'PPC Campaign Dashboard', title: 'PPC Campaign Management', subtitle: 'Expert campaign optimization' },
      { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQUEMlMjBhZHZlcnRpc2luZyUyMGFuYWx5dGljcyUyMGRhdGF8ZW58MXx8fHwxNzU1OTcwNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'PPC Analytics', title: 'Performance Analytics', subtitle: 'Data-driven optimization' }
    ],
    bgColors: { primary: 'bg-purple-500/10', secondary: 'bg-pink-500/10' },
    gradients: { button: 'from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500', accent: 'text-purple-400' }
  },
  'social-media': {
    badge: { text: 'Social Media Marketing', icon: Share2, colors: 'from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30' },
    title: { main: 'Build Powerful', highlight: 'Brand Communities' },
    description: 'Engage your audience and build meaningful relationships across all social media platforms. Create compelling content that drives engagement, builds community, and generates leads.',
    images: [
      { src: 'https://images.unsplash.com/photo-1620396748669-46bd3128ccce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHBob25lJTIwYXBwc3xlbnwxfHx8fDE3NTU5NzA3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Social Media Marketing Apps', title: 'Social Media Platforms', subtitle: 'Multi-platform management' },
      { src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NTU5NzA3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Social Media Content Creation', title: 'Content Creation', subtitle: 'Engaging visual content' }
    ],
    bgColors: { primary: 'bg-green-500/10', secondary: 'bg-emerald-500/10' },
    gradients: { button: 'from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500', accent: 'text-green-400' }
  },
  'content-marketing': {
    badge: { text: 'Content Marketing', icon: FileText, colors: 'from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30' },
    title: { main: 'Create Compelling', highlight: 'Content That Converts' },
    description: 'Build trust, establish authority, and drive conversions with strategic content marketing. Create valuable content that resonates with your audience and supports your business goals.',
    images: [
      { src: 'https://images.unsplash.com/photo-1745151485547-8d428247c1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nJTIwd3JpdGluZyUyMGJsb2clMjBsYXB0b3B8ZW58MXx8fHwxNzU1OTcwNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Content Marketing Writing', title: 'Content Creation', subtitle: 'Professional writing & strategy' },
      { src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwc3RyYXRlZ3klMjBwbGFubmluZyUyMG5vdGVib29rfGVufDF8fHx8MTc1NTk3MDc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Content Strategy Planning', title: 'Strategic Planning', subtitle: 'Data-driven content strategy' }
    ],
    bgColors: { primary: 'bg-orange-500/10', secondary: 'bg-red-500/10' },
    gradients: { button: 'from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500', accent: 'text-orange-400' }
  },
  'email-marketing': {
    badge: { text: 'Email Marketing', icon: Mail, colors: 'from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30' },
    title: { main: 'Nurture Leads &', highlight: 'Retain Customers' },
    description: 'Build lasting relationships with personalized email campaigns that convert prospects into customers and turn customers into loyal advocates for your brand.',
    images: [
      { src: 'https://images.unsplash.com/photo-1683117927786-f146451082fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMG5ld3NsZXR0ZXIlMjBjYW1wYWlnbnxlbnwxfHx8fDE3NTU5NzA3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Email Marketing Campaign', title: 'Email Campaigns', subtitle: 'Professional newsletter design' },
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGFuYWx5dGljcyUyMGRhc2hib2FyZCUyMG1ldHJpY3N8ZW58MXx8fHwxNzU1OTcwNzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Email Analytics Dashboard', title: 'Performance Analytics', subtitle: 'Detailed campaign metrics' }
    ],
    bgColors: { primary: 'bg-indigo-500/10', secondary: 'bg-purple-500/10' },
    gradients: { button: 'from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500', accent: 'text-indigo-400' }
  },
  'web-design': {
    badge: { text: 'Web Design & Development', icon: Palette, colors: 'from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/30' },
    title: { main: 'Create Stunning', highlight: 'High-Converting Websites' },
    description: 'Transform your online presence with professional web design and development. Create websites that not only look amazing but also deliver exceptional user experiences and drive conversions.',
    images: [
      { src: 'https://images.unsplash.com/photo-1576272531110-2a342fe22342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudCUyMG1vY2t1cCUyMHNjcmVlbnN8ZW58MXx8fHwxNzU1OTcwNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Web Design Mockup', title: 'Custom Web Design', subtitle: 'Professional mockups & prototypes' },
      { src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NTU5NzA3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Web Development Coding', title: 'Professional Development', subtitle: 'Clean, optimized code' }
    ],
    bgColors: { primary: 'bg-pink-500/10', secondary: 'bg-rose-500/10' },
    gradients: { button: 'from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500', accent: 'text-pink-400' }
  },
  'brand-strategy': {
    badge: { text: 'Brand Strategy & Design', icon: Target, colors: 'from-teal-500/20 to-blue-500/20 text-teal-300 border-teal-500/30' },
    title: { main: 'Build a Brand That', highlight: 'Resonates & Converts' },
    description: 'Develop a comprehensive brand strategy that differentiates you from competitors and creates meaningful connections with your target audience.',
    images: [
      { src: 'https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwZGVzaWduJTIwbG9nbyUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NTk3MDcyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Brand Strategy Design', title: 'Brand Identity', subtitle: 'Logo & visual design' },
      { src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwcGxhbm5pbmclMjBicmFpbnN0b3JtfGVufDF8fHx8MTc1NTk3MDc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Brand Strategy Planning', title: 'Strategic Planning', subtitle: 'Brand positioning & strategy' }
    ],
    bgColors: { primary: 'bg-teal-500/10', secondary: 'bg-blue-500/10' },
    gradients: { button: 'from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500', accent: 'text-teal-400' }
  }
};

export const serviceFeatures = {
  seo: [
    { icon: Search, title: 'Keyword Research & Strategy', description: 'In-depth keyword analysis to identify high-value opportunities for your business.' },
    { icon: Globe, title: 'Technical SEO Optimization', description: 'Comprehensive technical audits and optimizations for maximum search engine visibility.' },
    { icon: FileText, title: 'Content Optimization', description: 'Strategic content creation and optimization to drive organic traffic and engagement.' },
    { icon: BarChart3, title: 'Performance Tracking', description: 'Detailed analytics and reporting to measure and improve your SEO success.' }
  ],
  ppc: [
    { icon: Target, title: 'Advanced Targeting', description: 'Precise audience targeting based on demographics, interests, behaviors, and custom audiences.' },
    { icon: DollarSign, title: 'Budget Optimization', description: 'Smart budget allocation and bid management to maximize ROI and minimize wasted spend.' },
    { icon: LineChart, title: 'Campaign Analytics', description: 'Comprehensive tracking and reporting with actionable insights for continuous improvement.' },
    { icon: Megaphone, title: 'Ad Creative Management', description: 'High-converting ad copy and creative development with continuous A/B testing.' }
  ],
  'social-media': [
    { icon: Camera, title: 'Content Creation & Curation', description: 'Professional visual content and engaging posts tailored to each platform and audience.' },
    { icon: Users, title: 'Community Management', description: 'Active community engagement, responding to comments, and building relationships with followers.' },
    { icon: Target, title: 'Targeted Social Advertising', description: 'Strategic paid social campaigns to reach new audiences and drive conversions.' },
    { icon: BarChart3, title: 'Analytics & Reporting', description: 'Detailed performance tracking and insights to measure engagement and ROI.' }
  ],
  'content-marketing': [
    { icon: PenTool, title: 'Content Strategy & Planning', description: 'Strategic content planning aligned with your business goals and audience needs.' },
    { icon: BookOpen, title: 'Blog Writing & Articles', description: 'High-quality blog posts and articles that establish thought leadership and drive traffic.' },
    { icon: Search, title: 'SEO-Optimized Content', description: 'Content optimized for search engines to improve visibility and organic rankings.' },
    { icon: BarChart3, title: 'Performance Tracking', description: 'Detailed analytics on content performance, engagement, and conversion metrics.' }
  ],
  'email-marketing': [
    { icon: Send, title: 'Campaign Design & Creation', description: 'Professional email templates and compelling content that drives action and conversions.' },
    { icon: Target, title: 'List Segmentation & Targeting', description: 'Advanced audience segmentation for personalized messaging and better engagement.' },
    { icon: Zap, title: 'Marketing Automation', description: 'Automated email sequences for lead nurturing, onboarding, and customer retention.' },
    { icon: BarChart3, title: 'Performance Analytics', description: 'Detailed metrics on open rates, click rates, conversions, and ROI tracking.' }
  ],
  'web-design': [
    { icon: Palette, title: 'Custom Design & Branding', description: 'Unique, professional designs that reflect your brand identity and convert visitors.' },
    { icon: Smartphone, title: 'Responsive Development', description: 'Mobile-first design approach ensuring perfect performance across all devices.' },
    { icon: Zap, title: 'Performance Optimization', description: 'Lightning-fast loading times and optimized user experience for better conversions.' },
    { icon: BarChart3, title: 'Analytics & Tracking', description: 'Comprehensive tracking setup to measure user behavior and website performance.' }
  ],
  'brand-strategy': [
    { icon: Compass, title: 'Brand Strategy Development', description: 'Comprehensive brand strategy that defines your unique position in the market.' },
    { icon: Palette, title: 'Visual Identity Design', description: 'Professional logo design, color schemes, and visual guidelines that represent your brand.' },
    { icon: Target, title: 'Brand Positioning', description: 'Strategic positioning to differentiate your brand and appeal to target audiences.' },
    { icon: Users, title: 'Brand Guidelines', description: 'Comprehensive brand guidelines to ensure consistent messaging across all touchpoints.' }
  ]
};