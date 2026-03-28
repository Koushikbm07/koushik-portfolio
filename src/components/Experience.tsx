
import { Briefcase, TrendingUp } from 'lucide-react';

export function Experience() {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Tech Mahindra Ltd',
            location: 'Bangalore, IN',
            period: 'Dec. 2023 – Present',
            duration: '2+ Years',
            achievements: [
                'Developed and maintained scalable backend (BFF) services using Spring Boot, delivering optimized REST APIs for MFE consumers across a telecom platform serving 1M+ active users.',
                'Secured 10+ BFF endpoints using Spring Security, OAuth2, and JWT with RBAC, meeting enterprise-grade telecom security and compliance standards.',
                'Implemented Spring Data JPA mappings and optimized SQL queries, improving data retrieval performance and reducing API response times by 25%.',
                'Implemented event-driven architecture using Apache Kafka across 5+ downstream services, ensuring real-time data consistency.',
                'Containerized microservices with Docker and Kubernetes, contributing to CI/CD pipelines that reduced deployment time by 25%.',
                'Collaborated with cross-functional teams like front-end developers to define API contracts for postpaid and prepaid product offerings, accelerating end-to-end feature delivery.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-5xl font-bold font-mono mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                        Professional Journey
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Building scalable systems and driving technical excellence
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-transparent"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-24 pb-16 reveal">
                            <div className="absolute left-5 top-2 w-7 h-7 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                                <Briefcase className="w-3 h-3 text-white" />
                            </div>

                            <div className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
                                <div className="flex flex-wrap items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-emerald-400">{exp.title}</h3>
                                        <p className="text-xl text-gray-300 mb-1">{exp.company}</p>
                                        <p className="text-sm text-gray-500">{exp.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border border-blue-500/30 rounded-lg mb-2">
                                            <TrendingUp className="w-4 h-4 mr-2 text-emerald-400" />
                                            <span className="font-mono font-bold text-emerald-400">{exp.duration}</span>
                                        </div>
                                        <p className="text-sm text-gray-400 font-mono">{exp.period}</p>
                                    </div>
                                </div>

                                <ul className="space-y-3 mt-6">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start text-gray-300 leading-relaxed">
                                            <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
