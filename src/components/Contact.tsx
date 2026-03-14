import { useState } from 'react';
import { personalInfo } from '../utils/constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6 reveal">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                        <div className="flex items-start gap-4 p-4 glass rounded-xl hover:-translate-y-1 transition-transform">
                            <Mail className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <p className="font-medium text-white">Email</p>
                                <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-accent transition-colors">
                                    {personalInfo.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 glass rounded-xl hover:-translate-y-1 transition-transform delay-75">
                            <Phone className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <p className="font-medium text-white">Phone</p>
                                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-400 hover:text-accent transition-colors">
                                    {personalInfo.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 glass rounded-xl hover:-translate-y-1 transition-transform delay-150">
                            <MapPin className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <p className="font-medium text-white">Location</p>
                                <p className="text-slate-400">
                                    {personalInfo.location}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 reveal" style={{ transitionDelay: '200ms' }}>
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-primary transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'submitting' ? (
                                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                ) : status === 'success' ? (
                                    <span>Message Sent Successfully!</span>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
