import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { personalInfo } from '../utils/constants';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'glass py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <Code2 className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    <span className="font-mono text-xl font-bold tracking-tighter text-white">
                        {personalInfo.name.split(' ')[0]}
                        <span className="text-primary">.dev</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-sm font-medium"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass border-t border-slate-700/50 py-4 px-6 flex flex-col gap-4 shadow-2xl animate-fade-in-up">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-slate-300 hover:text-white font-medium py-2 border-b border-slate-700/30"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
