import {
    Code2,
    Layout,
    Server,
    Terminal
} from 'lucide-react';

import movieManiac from '../../public/movie-maniac-thumbnail.png';

export const personalInfo = {
    name: "Koushik Malagannavar",
    title: "Java Developer",
    email: "kmalagannavar@gmail.com",
    summary: "I design and build elegant digital products — turning complex problems into intuitive, high-performance web experiences that users love.",
    phone: "+91-8904839357",
    location: "Bangalore, India",
    github: "https://github.com/Koushikbm07",
    linkedin: "https://www.linkedin.com/in/koushik-malagannavar/",
    leetcode: "https://leetcode.com/u/koushik_2002/",
    resume: "https://drive.google.com/file/d/1WVDjbLO10nnp4608PnQImXRLuHwhiVEv/view?usp=sharing"
};

export const skills = [
    {
        category: "Frontend & UI",
        icon: Layout,
        items: ["React.js", "HTML5", "CSS3"]
    },
    {
        category: "Languages",
        icon: Code2,
        items: ["Java 8/11/21", "Python", "JavaScript (ES6+)"]
    },
    {
        category: "Backend Integration",
        icon: Server,
        items: ["J2EE", "Spring Boot", "RESTful APIs", "Microservices Architecture", "Hibernate", "Apache Kafka", "OAuth2/OIDC"]
    },
    {
        category: "Tools & DevOps",
        icon: Terminal,
        items: ["Git / GitHub / GitLab", "Docker", "Kubernetes", "Copilot", "Maven", "Gradle", "AWS", "JIRA"]
    }
];

export const experience = [
    {
        id: 1,
        role: "Senior Frontend Engineer",
        company: "TechNova Solutions",
        duration: "2021 - Present",
        achievements: [
            "Architected a scalable micro-frontend architecture reducing monolithic build times by 40%.",
            "Led a team of 4 frontend developers to deliver a real-time analytics dashboard used by 50K+ daily active users.",
            "Implemented inclusive design practices achieving 100% WCAG 2.1 AA compliance across all digital products."
        ]
    },
    {
        id: 2,
        role: "UI/UX Developer",
        company: "Creative Digital Agency",
        duration: "2018 - 2021",
        achievements: [
            "Bridged the gap between design and engineering, translating complex Figma mockups into pixel-perfect React components.",
            "Optimized web performance, increasing overall Lighthouse scores from 65 to 95+.",
            "Created a centralized component library consumed by 3 disparate product teams."
        ]
    },
    {
        id: 3,
        role: "Frontend Developer",
        company: "Startup Hub",
        duration: "2016 - 2018",
        achievements: [
            "Built interactive user interfaces using React and Redux for a modern e-commerce platform.",
            "Integrated third-party payment gateways (Stripe, PayPal) ensuring secure transactions.",
            "Collaborated closely with backend engineers to define and consume RESTful APIs."
        ]
    }
];

export const projects = [{
    id: 2,
    title: "Movie Maniac - Movie Recommendation System using Public API",
    description: "Movie Maniac is a movie recommendation system that uses the TMDB API to recommend movies to users. Users can search for Upcoming, Popular, Top Rated movies, view movie details, and get movie recommendations based on their preferences.",
    tech: ["React", "CSS3", "JavaScript", "TMDB API"],
    github: "https://github.com/Koushikbm07/movie_maniac",
    demo: "https://movie-maniaca.netlify.app/",
    image: movieManiac
},
{
    id: 1,
    title: "BOOK HIVE - Library e-Commerce Application",
    description: "Book Hive is a library e-commerce platform where users can browse books, purchase them online, and leave reviews, while administrators manage the catalog and respond to user queries. The platform simplifies book discovery and purchasing by providing a structured system for book management, customer interaction, and secure checkout.",
    tech: ["React", "TypeScript", "Spring Boot", "MySQL", "OAuth2.0", "JWT"],
    github: "https://github.com/Koushikbm07/BookHive-backend",
    demo: "https://github.com/Koushikbm07/BookHive-backend",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
}

    // {
    //     id: 3,
    //     title: "E-Commerce Storefront",
    //     description: "High-performance headless e-commerce solution with dynamic routing, seamless cart management, and Stripe checkout integration.",
    //     tech: ["Vue.js", "Nuxt", "Tailwind CSS", "Stripe"],
    //     github: "https://github.com",
    //     demo: "https://example.com",
    //     image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600"
    // }
];

export const education = [
    {
        id: 1,
        degree: "Bachelor of Engineering",
        institution: "Visvesvaraya Technology of University of Karnataka ",
        year: "June 2020 – May 2023",
        specialization: "Electronics and Communication",
        cgpa: "8.17/10",
        details: "Graduated with Bachelors. Specialized in Electronics and Communications Engineering. CGPA: 8.17/10."
    }
    // {
    //     id: 2,
    //     degree: "Advanced Web Development Bootcamp",
    //     institution: "Frontend Masters",
    //     year: "2017",
    //     details: "Intensive 12-week program focusing on advanced JavaScript architectures, React, and modern CSS practices."
    // }
];
