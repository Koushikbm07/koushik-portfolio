
import { projects } from '../utils/constants';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';

export function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary">Work</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of my recent projects, showcasing my expertise in building robust and scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14">
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="glass-card overflow-hidden group reveal flex flex-col h-full"
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 sm:h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    loading="lazy"
                                />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 rounded-full bg-slate-800 text-white hover:bg-primary transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 rounded-full bg-slate-800 text-white hover:bg-accent transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    <MonitorPlay className="w-5 h-5 text-accent opacity-50" />
                                </div>

                                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, techIdx) => (
                                        <span
                                            key={techIdx}
                                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/50 text-slate-300 border border-slate-700/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 reveal">
                    <a
                        href="https://github.com/Koushikbm07/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
                    >
                        View more on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
}
