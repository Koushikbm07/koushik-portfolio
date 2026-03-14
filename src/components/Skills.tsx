
import { skills } from '../utils/constants';

export function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-primary">Arsenal</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive overview of the technologies and tools I use to build digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {skills.map((skillGroup, idx) => (
                        <div
                            key={idx}
                            className="glass p-8 rounded-2xl reveal group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-800 rounded-xl text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                                    <skillGroup.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                            </div>

                            <ul className="space-y-3">
                                {skillGroup.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-center gap-2 group/item">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover/item:bg-accent transition-colors duration-300"></span>
                                        <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors duration-300">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
