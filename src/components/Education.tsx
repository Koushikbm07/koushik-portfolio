
import { GraduationCap, Award, Trophy } from 'lucide-react';

export function Education() {
    const achievements = [
        {
            title: 'Project Quantum Leap',
            organization: 'Google Cloud Partners',
            description: 'Completed AI training program and earned multiple AI badges',
            icon: Award,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'PrepSAT Hackathon',
            organization: 'PrepInsta',
            description: 'Secured rank 2049 out of 90,678 participants',
            icon: Trophy,
            color: 'from-emerald-500 to-emerald-600'
        },
        {
            title: 'Java Full Stack Development',
            organization: 'KodNest Technologies',
            description: 'Comprehensive training in enterprise Java development',
            icon: GraduationCap,
            color: 'from-purple-500 to-purple-600'
        }
    ];

    return (
        <section id="education" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-5xl font-bold font-mono mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                        Education & Achievements
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Academic background and notable accomplishments
                    </p>
                </div>

                <div className="mb-12 reveal">
                    <div className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Bachelor of Engineering</h3>
                                        <p className="text-xl text-emerald-400 mb-1">Electronics and Communication</p>
                                        <p className="text-gray-400">Jain College of Engineering and Technology</p>
                                        <p className="text-sm text-gray-500">Hubli, Karnataka</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border border-emerald-500/30 rounded-lg mb-2">
                                            <span className="font-mono font-bold text-emerald-400">CGPA: 8.17</span>
                                        </div>
                                        <p className="text-sm text-gray-400 font-mono">June 2020 – May 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                            <div
                                key={index}
                                className="reveal group p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
                            >
                                <div className={`inline-block p-3 bg-gradient-to-br ${achievement.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 font-mono">{achievement.title}</h3>
                                <p className="text-sm text-emerald-400 mb-2">{achievement.organization}</p>
                                <p className="text-sm text-gray-400">{achievement.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
