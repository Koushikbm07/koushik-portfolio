import { useState } from "react";
import ProfilePicture from '../../public/profile.jpg';
import { personalInfo } from '../utils/constants';
import { Download, ChevronDown, Github, Linkedin, Sparkles } from 'lucide-react';

// Custom LeetCode SVG Icon
function LeetCode({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.8a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
    );
}

interface FloatCardProps {
    style: React.CSSProperties;
    delay: string;
    label: string;
    value: string;
    accent: string;
}

function FloatCard({ style, delay, label, value, accent }: FloatCardProps) {
    return (
        <div
            className="absolute px-4 py-3 rounded-2xl"
            style={{
                ...style,
                background: 'rgba(8,12,20,0.85)',
                border: `1px solid ${accent}30`,
                backdropFilter: 'blur(16px)',
                boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${accent}10`,
                animation: `floatAnim 3s ease-in-out ${delay} infinite alternate`,
                minWidth: '110px',
                animationFillMode: 'both',
            }}
        >
            <p className="text-2xl font-black text-white leading-none mb-0.5"
                style={{ textShadow: `0 0 20px ${accent}` }}>
                {value}
            </p>
            <p className="text-xs text-slate-400 font-medium">{label}</p>
            <div className="absolute bottom-0 left-4 right-4 h-px opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
        </div>
    );
}

export function Hero() {
    const [imgError, setImgError] = useState(false);

    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: '#080c14', paddingTop: '80px' }}
        >
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to   { opacity: 1; transform: scale(1); }
                }
                @keyframes gradientShift {
                    0%   { background-position: 0% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes spinRing {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes spinRingRev {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(-360deg); }
                }
                @keyframes floatAnim {
                    from { transform: translateY(0px); }
                    to   { transform: translateY(-10px); }
                }
                @keyframes pulseDot {
                    0%, 100% { opacity: 1; box-shadow: 0 0 8px #22d3ee; }
                    50%      { opacity: 0.4; box-shadow: 0 0 2px #22d3ee; }
                }
                @keyframes bounceDown {
                    0%, 100% { transform: translateY(0); }
                    50%      { transform: translateY(5px); }
                }
                @keyframes scrollBar {
                    0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
                    50%  { opacity: 1; transform: scaleY(1); }
                    100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
                }
                .fade-up-1 { animation: fadeUp 0.6s 0.0s ease both; }
                .fade-up-2 { animation: fadeUp 0.6s 0.15s ease both; }
                .fade-up-3 { animation: fadeUp 0.6s 0.3s ease both; }
                .fade-up-4 { animation: fadeUp 0.6s 0.45s ease both; }
                .fade-up-5 { animation: fadeUp 0.6s 0.6s ease both; }
                .fade-in-img { animation: fadeIn 0.9s 0.2s ease both; opacity: 0; animation-fill-mode: forwards; }
                .spin-ring { animation: spinRing 8s linear infinite; }
                .spin-ring-rev { animation: spinRingRev 8s linear infinite; }
                .pulse-dot { animation: pulseDot 2s infinite; }
                .bounce-chevron { animation: bounceDown 1.5s infinite; }
                .scroll-bar { animation: scrollBar 1.8s ease-in-out infinite; }
                .gradient-text {
                    background: linear-gradient(90deg, #67e8f9, #a78bfa, #67e8f9);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: gradientShift 3s linear infinite;
                }
                .cta-primary {
                    background: linear-gradient(135deg, #0891b2, #7c3aed);
                    transition: all 0.3s;
                }
                .cta-primary:hover {
                    background: linear-gradient(135deg, #06b6d4, #8b5cf6);
                    transform: scale(1.05);
                    box-shadow: 0 0 30px rgba(6,182,212,0.35);
                }
                .cta-secondary {
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(8px);
                    transition: all 0.3s;
                }
                .cta-secondary:hover {
                    border-color: rgba(6,182,212,0.4);
                    transform: scale(1.05);
                    color: white;
                }
                .social-btn {
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    transition: all 0.3s;
                }
                .social-btn:hover {
                    border-color: rgba(6,182,212,0.3);
                    background: rgba(6,182,212,0.08);
                    color: #22d3ee;
                    transform: translateY(-3px);
                }
            `}</style>

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />

            {/* Grid overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
            }} />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 py-12">

                    {/* ── LEFT: Text ── */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">

                        {/* Badge */}
                        <div className="fade-up-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
                            style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)', backdropFilter: 'blur(8px)' }}>
                            <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-dot" style={{ display: 'inline-block' }} />
                            <span className="text-sm font-medium text-cyan-300 tracking-wide">Available for new opportunities</span>
                        </div>

                        {/* Greeting */}
                        <p className="fade-up-2 text-slate-400 text-base font-medium tracking-[0.2em] uppercase mb-2">
                            Hi, I'm
                        </p>

                        {/* Name */}
                        <h1 className="fade-up-2 font-black tracking-tight leading-none mb-4 text-white"
                            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
                            {personalInfo.name}
                        </h1>

                        {/* Role */}
                        <div className="fade-up-3 flex items-center gap-2 mb-6">
                            <Sparkles className="w-4 h-4 text-violet-400 flex-shrink-0" />
                            <span className="gradient-text text-xl md:text-2xl font-bold">{personalInfo.title}</span>
                        </div>

                        {/* Summary */}
                        <p className="fade-up-3 text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-10">
                            {personalInfo.summary}
                        </p>

                        {/* CTAs */}
                        <div className="fade-up-4 flex flex-col sm:flex-row items-center gap-4 mb-12">
                            <a href="#projects" className="cta-primary px-8 py-4 rounded-xl font-semibold text-white no-underline">
                                View My Work
                            </a>
                            <a href={personalInfo.resume} target="_blank" className="cta-secondary flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 no-underline">
                                <Download className="w-4 h-4" />
                                Download Resume
                            </a>
                        </div>

                        {/* Socials */}
                        <div className="fade-up-5 flex items-center gap-4">
                            <span className="text-slate-600 text-xs tracking-widest uppercase">Follow</span>
                            <div className="w-8 h-px bg-slate-700" />
                            {[
                                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                                { icon: LeetCode, href: personalInfo.leetcode, label: 'LeetCode' },
                            ].map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                                    aria-label={s.label}
                                    className="social-btn p-2.5 rounded-lg text-slate-400 no-underline flex items-center justify-center">
                                    <s.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Image ── */}
                    <div className="fade-in-img flex-shrink-0 flex items-center justify-center">
                        <div className="relative" style={{ padding: '20px' }}>

                            {/* Spinning conic ring */}
                            <div className="spin-ring absolute rounded-full pointer-events-none"
                                style={{
                                    inset: '-4px',
                                    background: 'conic-gradient(from 0deg, #06b6d4, #7c3aed, #06b6d4)',
                                    borderRadius: '50%',
                                    padding: '2px',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    opacity: 0.7,
                                }} />

                            {/* Glow blur ring */}
                            <div className="spin-ring-rev absolute rounded-full pointer-events-none"
                                style={{
                                    inset: '-8px',
                                    background: 'conic-gradient(from 180deg, rgba(6,182,212,0.3), rgba(124,58,237,0.3), rgba(6,182,212,0.3))',
                                    borderRadius: '50%',
                                    filter: 'blur(12px)',
                                    opacity: 0.5,
                                }} />

                            {/* Photo circle */}
                            <div className="relative rounded-full overflow-hidden"
                                style={{
                                    width: 'clamp(220px, 28vw, 360px)',
                                    height: 'clamp(220px, 28vw, 360px)',
                                    border: '3px solid rgba(6,182,212,0.3)',
                                    boxShadow: '0 0 60px rgba(6,182,212,0.15), 0 0 100px rgba(124,58,237,0.1)',
                                    background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
                                }}>

                                {!imgError ? (
                                    <img
                                        src={ProfilePicture}
                                        alt={personalInfo.name}
                                        className="w-full h-full object-cover object-top"
                                        style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                                        onError={() => setImgError(true)}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="font-black" style={{
                                            fontSize: 'clamp(3rem,8vw,5rem)',
                                            background: 'linear-gradient(135deg,#67e8f9,#a78bfa)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}>AM</span>
                                    </div>
                                )}

                                {/* Inner overlay */}
                                <div className="absolute inset-0 pointer-events-none"
                                    style={{ background: 'linear-gradient(160deg, transparent 50%, rgba(124,58,237,0.2) 100%)' }} />
                            </div>

                            {/* Stat cards */}
                            <FloatCard style={{ top: '6%', right: '-22%' }} delay="0s" label="Years Exp." value="2+" accent="#06b6d4" />
                            {/* <FloatCard style={{ bottom: '10%', left: '-24%' }} delay="0.4s" label="Years Exp." value="2+" accent="#a78bfa" /> */}

                            {/* Tech badges */}
                            {[
                                { emoji: '⚛️', top: '-6%', left: '22%' },
                                { emoji: '🟦', top: '-6%', left: '58%' },
                                { emoji: '🐍', top: '108%', left: '18%' },
                                { emoji: '☁️', top: '108%', left: '62%' },
                            ].map((b, i) => (
                                <div key={i}
                                    className="absolute w-10 h-10 rounded-xl flex items-center justify-center text-base"
                                    style={{
                                        top: b.top, left: b.left,
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(8px)',
                                        animation: `floatAnim ${2.4 + i * 0.35}s ease-in-out ${i * 0.25}s infinite alternate`,
                                    }}>
                                    {b.emoji}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="flex flex-col items-center gap-1 pb-8 opacity-40 hover:opacity-70 transition-opacity duration-300">
                    <a href="#skills" className="flex flex-col items-center gap-2 text-slate-400 no-underline">
                        <span className="text-xs tracking-widest uppercase text-slate-500">Scroll</span>
                        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent scroll-bar" />
                        <ChevronDown className="w-4 h-4 bounce-chevron" />
                    </a>
                </div>
            </div>
        </section>
    );
}