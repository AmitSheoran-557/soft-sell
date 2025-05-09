import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./icons";

export const HEADER_DATA_LIST = [
    {
        title: 'About Us',
        link: '#about',
    },
    {
        title: 'Services',
        link: '#services',
    },
    {
        title: 'Pricing',
        link: '#pricing',
    },
    {
        title: 'Contact',
        link: '#contact',
    },
]
export const HOW_IT_WORKS_DATA_LIST = [
    {
        title: 'Upload License',
        description: 'Securely submit your software license details online.',
        icon: (
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
            </svg>
        ),
    },
    {
        title: 'Get Valuation',
        description: 'Receive a fair and instant market valuation.',
        icon: (
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7 4h10M7 4a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
            </svg>
        ),
    },
    {
        title: 'Get Paid',
        description: 'Accept the offer and receive your payment fast.',
        icon: (
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-3-1-3-2s1-2 3-2 3 1 3 2-1 2-3 2zm0 0v8m0 0c2 0 3 1 3 2s-1 2-3 2-3-1-3-2 1-2 3-2z" />
            </svg>
        ),
    },
];
export const CHOOSE_US_DATA_LIST = [
    {
        icon: '💡',
        title: 'Smart Valuation',
        description: 'We use real-time market data to offer the best price for your software licenses.',
    },
    {
        icon: '⚡',
        title: 'Fast Payouts',
        description: 'Get paid quickly with our streamlined and secure transfer process.',
    },
    {
        icon: '🛡️',
        title: 'Secure & Trusted',
        description: 'Your data and licenses are handled with top-tier encryption and trust.',
    },
];
export const CONTACT_DATA_LIST = {
    location: {
        title: 'Location',
        content: '123 Main Street, Anytown, CA 12345, USA',
    },
    email: {
        title: 'Email',
        content: 'softShell.123@example.com',
        href: 'mailto:softShell.123@example.com',
    },
    phone: {
        title: 'Phone',
        content: '+1 (123) 456-7890',
        href: 'tel:+11234567890',
    },
};

export const SOCIAL_LINKS = [
    { href: 'https://x.com', icon: <TwitterIcon /> },
    { href: 'https://www.linkedin.com/', icon: <LinkedInIcon /> },
    { href: 'https://www.instagram.com/', icon: <InstagramIcon /> },
    { href: 'https://www.facebook.com/', icon: <FacebookIcon /> },
];