import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Headed Somewhere?',
    subHeading: 'Hail HopOnFeast',
    text: 'Book a comfortable car ride or order food via the HopOnFeast mobile app from the convenience of your home. The HopOnFeast mobile app comes with unique features that set it apart and above from other ride hailing services. Scroll on to find out how,',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Bid Your Experience Everytime',
    subHeading: 'BOOK YOUR CAR TODAY!',
    features: [
        {
            title: 'Find a Ride',
            description: 'Conveniently book a car ride to anywhere, anytime.',
            icon: 'car-ride'
        },
        {
            title: 'Place Bids',
            description: 'Negotiate the fare by viewing the market rate.',
            icon: 'place-bids'
        },
        {
            title: 'Order Groceries',
            description: 'Get your groceries delivered to your front door.',
            icon: 'groceries'
        },
        {
            title: 'Safety Feature',
            description: 'HopOnFeast video records the duration of every ride to ensure your safety.',
            icon: 'safety'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'HopOnFeast offers a unique take on rideshare and food delivery service. The on-demand mobile application eliminates the problems of modern rideshare and food delivery giants. Users are able to view competitor pricing before bidding and quoting their own. When both the driver and customer are in agreement, the ride begins, ensuring another milestone in consumer satisfaction. To enable a safe experience the mobile app also records the duration of the ride. However HopOnFeast goes beyond your standard safety features. To make users feel more comfortable the app lets them pick if they want to ride with a male or female driver. ',
    ],
}

export const benefitsContent = {
    heading: 'The Perfect Side Gig!',
    text: 'HopOnFeast offers its drivers flexibility in the way they would like to complete their rides and delivery gigs. Drivers have the choice to start and end their work day whenever they please. HopOnFeast serves as an excellent way to make extra income on the side.',
    benefits: [
        {
            title: 'Complete Control',
            description: 'Drivers can accept or reject a ride or a bid depending on what suits them.',
            icon: 'approved-list'
        },
        {
            title: 'View Public Rating',
            description: 'Both parties, drivers and passengers can view the ratings of each other before taking on a gig.',
            icon: 'profile-rank'
        },
        {
            title: 'Review Service',
            description: 'Leave your feedback about the customer you served or the service you received.',
            icon: 'mutiple-reviews'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is HopOnFeast Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'What do I do in case something is not working on my app?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How does the payment model of HopOnFeast work?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Book Fast to Get Picked Up Fast!',
    text: 'Download the HopOnFeast app and start bidding what seems fair to you today!'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-Up',
    accent: 'User Sign-up',
    tertiary: 'Driver Sign-up'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
