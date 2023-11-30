export const navItemArray = [
    {tab: "Home", href: "#", isActive: true},
    {tab: "About", href: "#", isActive: false},
    {tab: "Article", href: "#", isActive: false},
    {tab: "Contact Us", href: "#", isActive: false},
]

import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaBehanceSquare  } from "react-icons/fa";
 export const navIcons= [
    {navIcon: FaFacebook, href: "#"},
    {navIcon: FaTwitter, href: "#"},
    {navIcon: FaYoutube, href: "#"},
    {navIcon: FaPinterest, href: "#"},
    {navIcon: FaBehanceSquare , href: "#"}
 ]

import { blogImg, blogImg1, blogImg2, blogImg3, blogImg4, blogImg5, blogImg6, blogImg7, homeImgBg, homeImgBg2 } from "./image";
export const popularTopicArray = {
    popTopicTabs: [
        {popTab: "All", href: "#", isActive: true,value: "option1"},
        {popTab: "Adventure", href: "#", isActive: false,value: "option2"},
        {popTab: "Travel", href: "#", isActive: false,value: "option3"},
        {popTab: "Fashion", href: "#", isActive: false,value: "option4"},
        {popTab: "Technology", href: "#", isActive: false,value: "option5"},
        {popTab: "Branding", href: "#", isActive: false,value: "option6"},  
    ],
    popularTopicCard: [
        {
            image: blogImg,
            imageInnerText: "ADVENTURE",
            cardDate: "08.08.2021",
            cardHeader: "Dream destinations to visit this year in Paris",
            cardText: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
        },
        {
            image: blogImg1,
            imageInnerText: "TRAVEL",
            cardDate: "08.08.2021",
            cardHeader: "Breathtaking first-person photos around Europe",
            cardText: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
        },
        {
            image: blogImg2,
            imageInnerText: "TECHNOLOGY",
            cardDate: "08.08.2021",
            cardHeader: "What collectors need to know about authenticity",
            cardText: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
        },
        {
            image: blogImg3,
            imageInnerText: "FASHION",
            cardDate: "08.08.2021",
            cardHeader: "Instagram artists with great photography skills",
            cardText: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
        },
        {
            image: blogImg4,
            imageInnerText: "ADVENTURE",
            cardDate: "08.08.2021",
            cardHeader: "Thins to know before visiting Cave in Germany",
            cardText: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
        },
        {
            image: blogImg5,
            imageInnerText: "FASHION",
            cardDate: "08.08.2021",
            cardHeader: "Nina Smith vibrant work collab with Nike Dunk",
            cardText: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
        },
        {
            image: blogImg6,
            imageInnerText: "TECHNOLOGY",
            cardDate: "08.08.2021",
            cardHeader: "Richard Norton photorealistic rendering as real photos",
            cardText: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
        },
        {
            image: blogImg7,
            imageInnerText: "FASHION",
            cardDate: "08.08.2021",
            cardHeader: "25 quality collectors toys inspired by famous films",
            cardText: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
        }
    ]
}


import { editorPickImg, editorPickImg2, editorPickImg3 } from "./image"
export const editorPicArray= [
    {
        image: editorPickImg,
        imageInnerText: "FASHION",
        cardDate: "08.08.2021",
        cardHeader: "Richird Norton photorealistic rendering as real photos",
        cardText: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
    },
    {
        image: editorPickImg2,
        imageInnerText: "FASHION",
        cardDate: "08.08.2021",
        cardHeader: "Richird Norton photorealistic rendering as real photos",
        cardText: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
    },
    {
        image: editorPickImg3,
        imageInnerText: "FASHION",
        cardDate: "08.08.2021",
        cardHeader: "Richird Norton photorealistic rendering as real photos",
        cardText: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
    },
];

export const footerArray = [
    {
        footerHeader: "Contact the Publisher",
        links: [
            {link: "mike@runo.com", href: "#" },
            {link: "+944 450 904 505", href: "#" },
        ]
    }, 
    {
        footerHeader: "Explorate",
        links: [
            {link: "About", href: "#" },
            {link: "Partners", href: "#" },
            {link: "Job Opportunities", href: "#" },
            {link: "Advertise", href: "#" },
            {link: "Membership", href: "#" },
        ]
    }, 
    {
        footerHeader: "Headquarter",
        links: [
            {link: "191 Middleville Road,", href: "#" },
            {link: "NY 1001, Sydney", href: "#" },
            {link: "Australia", href: "#" },
        ]
    }, 
]

export const aboutDescription = [
    {
        subHead: "Our mision",
        header: "Creating valuable content for creatives all around the world",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus."
    },
    {
        subHead: "Our Vision",
        header: "A platform that empowers individuals to improve",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus."
    },
] 

import { teamGroup, blogGroup } from "./image";
export const blogTeamArray = [
    {
        image: teamGroup,
        header: "Our team of creatives",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
    },
    {
        image: blogGroup,
        header: "Why we started this Blog",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
    }
]

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {  freedom, desmond } from "./image.js";
export const aboutDev =[
    {
        image: freedom,
        header: "Freedom Chisom",
        subText:"Front-End Developer @Company",
        colorChange: false,
        social:[
            {navIcon: FaFacebook, href: "#"},
            {navIcon: FaTwitter, href: "#"},
            {navIcon: FaInstagram, href: "#"},
            {navIcon: FaLinkedin , href: "#"},
        ]
    },
    {
        image: desmond,
        header: "Desmond Sesugh",
        subText:"Front-End Developer @Company",
        colorChange: true,
        social:[
            {navIcon: FaFacebook, href: "#"},
            {navIcon: FaTwitter, href: "#"},
            {navIcon: FaInstagram, href: "#"},
            {navIcon: FaLinkedin , href: "#"},
        ]
    }
]