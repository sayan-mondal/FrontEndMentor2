import AdviceGeneratorApp from './AdviceGeneratorApp';
import BlogrLandingPage from './BlogrLandingPage';
import CardDetailsForm from './CardDetailsForm';
import ClipboardLandingPage from './ClipboardLandingPage';
import CrowdfundingProductPage from './CrowdfundingProductPage';
import ExpensesChartComponent from './ExpensesChartComponent';
import FyloComponent from './FyloComponent';
import FyloThemedLandingPage from './FyloThemedLandingPage';
import HuddleFeatureBlocksPage from './HuddleFeatureBlocksPage';
import InteractivePricingComponent from './InteractivePricingComponent';
import IntroSection from './IntroSection';
import LoopstudiosLandingPage from './LoopstudiosLandingPage';
import NotificationsPage from './NotificationsPage';
import PricingComponent from './PricingComponent';
import ProjectTrackingComponent from './ProjectTrackingComponent';
import SocialMediaDashboard from './SocialMediaDashboard';
import SunnysideAgencyPage from './SunnysideAgencyPage';
import TestimonialsSlider from './TestimonialsSlider';
import TimeTrackingDashboard from './TimeTrackingDashboard';
import TipCalculatorApp from './TipCalculatorApp';

export const pagesData = [
	{
		id: 1,
		path: 'expenseschartcomponent',
		title: 'Expenses Chart Component',
		component: <ExpensesChartComponent />,
		colors: {
			bgColor: 'hsl(10, 79%, 65%)',
			color: 'hsl(33, 100%, 98%)',
		},
	},
	{
		id: 2,
		path: 'pricingcomponent',
		title: 'Pricing Component',
		component: <PricingComponent />,
		colors: {
			bgColor: 'hsl(237, 63%, 64%)',
			color: 'hsl(0, 0%, 100%)',
		},
	},
	{
		id: 3,
		path: 'advicegeneratorapp',
		title: 'Advice Generator App',
		component: <AdviceGeneratorApp />,
		colors: {
			bgColor: 'hsl(150, 100%, 66%)',
			color: 'hsl(0, 0%, 0%)',
		},
	},
	{
		id: 4,
		path: 'tipcalculatorapp',
		title: 'Tip Calculator App',
		component: <TipCalculatorApp />,
		colors: {
			bgColor: 'hsl(183, 100%, 15%)',
			color: 'hsl(172, 67%, 45%)',
		},
	},
	{
		id: 5,
		path: 'fylocomponent',
		title: 'Fylo Component',
		component: <FyloComponent />,
		colors: {
			bgColor: 'hsl(228, 56%, 26%)',
			color: 'hsl(0, 0%, 100%)',
		},
	},
	{
		id: 6,
		path: 'interactivepricingcomponent',
		title: 'Interactive Pricing Component',
		component: <InteractivePricingComponent />,
		colors: {
			bgColor: 'hsl(174, 86%, 45%)',
			color: 'hsl(0, 0%, 0%)',
		},
	},
	{
		id: 7,
		path: 'testimonialsslider',
		title: 'Testimonials Slider',
		component: <TestimonialsSlider />,
		colors: {
			bgColor: 'hsl(240, 18%, 77%)',
			color: 'hsl(240, 38%, 20%)',
		},
	},
	{
		id: 8,
		path: 'carddetailsform',
		title: 'Card Details Form',
		component: <CardDetailsForm />,
		colors: {
			bgColor: 'hsl(278, 94%, 30%)',
			color: 'hsl(0, 0%, 100%)',
		},
	},
	{
		id: 9,
		path: 'timetrackingdashboard',
		title: 'Time Tracking Dashboard',
		component: <TimeTrackingDashboard />,
		colors: {
			bgColor: 'hsl(246, 80%, 60%)',
			color: 'hsl(0, 0%, 100%)',
		},
	},
	{
		id: 10,
		path: 'socialmediadashboard',
		title: 'Social Media Dashboard',
		component: <SocialMediaDashboard />,
		colors: {
			bgColor: 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
			color: 'hsl(228, 28%, 20%)',
		},
	},
	{
		id: 11,
		path: 'projecttrackingcomponent',
		title: 'Project Tracking Component',
		component: <ProjectTrackingComponent />,
		colors: {
			bgColor: 'hsl(0, 100%, 68%)',
			color: 'hsl(0, 0%, 100%)',
		},
	},
	{
		id: 12,
		path: 'sunnysideagencypage',
		title: 'Sunnyside Agency Page',
		component: <SunnysideAgencyPage />,
		colors: {
			bgColor: 'hsl(51, 100%, 49%)',
			color: 'hsl(212, 27%, 19%)',
		},
	},
	{
		id: 13,
		path: 'introsection',
		title: 'Intro Section',
		component: <IntroSection />,
		colors: {
			bgColor: 'hsl(0, 0%, 8%)',
			color: 'hsl(0, 0%, 98%)',
		},
	},
	{
		id: 14,
		path: 'loopstudioslandingpage',
		title: 'Loopstudios Landing Page',
		component: <LoopstudiosLandingPage />,
		colors: {
			bgColor: 'hsl(0 0% 50%)',
			color: 'hsl(0 0% 93%)',
		},
	},
	{
		id: 15,
		path: 'crowdfundingproductpage',
		title: 'Crowdfunding Product Page',
		component: <CrowdfundingProductPage />,
		colors: {
			bgColor: 'hsl(176, 72%, 28%)',
			color: 'hsl(0 0% 100%)',
		},
	},
	{
		id: 16,
		path: 'blogrlandingpage',
		title: 'Blogr Landing Page',
		component: <BlogrLandingPage />,
		colors: {
			bgColor:
				'linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))',
			color: 'hsl(0 0% 100%)',
		},
	},
	{
		id: 16,
		path: 'clipboardlandingpage',
		title: 'Clipboard Landing Page',
		component: <ClipboardLandingPage />,
		colors: {
			bgColor:
				'linear-gradient(90deg, hsl(171, 66%, 44%), hsl(233, 100%, 69%))',
			color: 'hsl(0 0% 100%)',
		},
	},
	{
		id: 17,
		path: 'fylothemedlandingpage',
		title: 'Fylo Themed Landing Page',
		component: <FyloThemedLandingPage />,
		colors: {
			bgColor: 'linear-gradient(90deg, hsl(217, 28%, 15%), hsl(218, 28%, 13%))',
			color: 'hsl(0 0% 100%)',
		},
	},
	{
		id: 17,
		path: 'huddlefeatureblockspage',
		title: 'Huddle Feature Blocks Page',
		component: <HuddleFeatureBlocksPage />,
		colors: {
			bgColor: 'hsl(322, 100%, 66%)',
			color: 'hsl(0 0% 100%)',
		},
	},
	{
		id: 18,
		path: 'notificationspage',
		title: 'Notifications Page',
		component: <NotificationsPage />,
		colors: {
			bgColor: 'hsl(219, 85%, 26%)',
			color: 'hsl(0 0% 100%)',
		},
	},
];
