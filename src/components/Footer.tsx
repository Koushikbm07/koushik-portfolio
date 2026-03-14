
import { personalInfo } from '../utils/constants';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800/50 bg-slate-900 py-12">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="font-mono text-xl font-bold tracking-tighter text-white mb-2">
                        {personalInfo.name.split(' ')[0]}
                        <span className="text-primary">.dev</span>
                    </span>
                    <p className="text-slate-400 text-sm">
                        Crafting digital experiences with passion & precision.
                    </p>
                </div>

                <div className="text-slate-500 text-sm">
                    &copy; {currentYear} {personalInfo.name}. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
