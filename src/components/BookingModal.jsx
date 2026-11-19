import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Phone, Mail, MapPin, User, MessageCircle, Send } from 'lucide-react';
import { HennaMandala } from './HennaOrnaments';

// 💡 Change this to your business WhatsApp number (with country code, no + or spaces)
export const OWNER_WHATSAPP_NUMBER = "919876543210";

export const BookingModal = ({ isOpen, onClose, initialData = null }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        eventDate: '',
        city: '',
        eventType: 'Bridal Ceremony',
        guests: '0',
        estimatedPrice: '',
        specialNotes: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');

    useEffect(() => {
        if (initialData) {
            setFormData((prev) => ({
                ...prev,
                eventType: initialData.occasion || 'Bridal Ceremony',
                guests: initialData.guestCount !== undefined ? String(initialData.guestCount) : prev.guests,
                estimatedPrice: initialData.estimatedPrice || prev.estimatedPrice,
                specialNotes: initialData.style
                    ? `Selected: ${initialData.occasion} | Coverage: ${initialData.coverage} | Style: ${initialData.style} | Est. Total: ${initialData.estimatedPrice}`
                    : initialData.selectedDesign
                        ? `Interested in Design: ${initialData.selectedDesign}`
                        : prev.specialNotes,
            }));
        }
    }, [initialData]);

    if (!isOpen) return null;

    const constructWhatsAppMessage = () => {
        return `🌸 *NEW MEHENDI BOOKING INQUIRY* 🌸
*Zaara Henna Studio*

👰 *Bride / Client:* ${formData.name}
📱 *Phone / WhatsApp:* ${formData.phone}
📧 *Email:* ${formData.email}
📅 *Event Date:* ${formData.eventDate || 'Not specified'}
📍 *City / Venue:* ${formData.city}
🎉 *Ceremony Type:* ${formData.eventType}
👥 *Guest Count:* ${formData.guests} people
${formData.estimatedPrice ? `💰 *Estimated Package Price:* ${formData.estimatedPrice}\n` : ''}
📝 *Design & Storytelling Notes:*
${formData.specialNotes || 'None specified'}

✨ _Sent directly from the Zaara Henna Website. Please confirm date availability and package schedule._ ✨`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const rawMessage = constructWhatsAppMessage();
        const url = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(rawMessage)}`;
        setLastWhatsappUrl(url);
        setIsSubmitted(true);

        // Open WhatsApp directly with all details
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleReset = () => {
        setIsSubmitted(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
            <div className="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8">

                {/* Modal Header */}
                <div className="bg-gradient-to-r from-henna-950 via-henna-900 to-henna-950 text-gold-200 p-6 sm:p-8 relative overflow-hidden">
                    <HennaMandala className="w-48 h-48 text-gold-400/15 absolute -right-12 -top-12 pointer-events-none" spin />

                    <div className="flex items-center justify-between relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold mb-2">
                                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Direct WhatsApp Inquiry</span>
                            </div>
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                                Book Your Mehendi Date
                            </h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full text-gold-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300 mt-2 relative z-10">
                        Fill in your event details below. All information will be sent directly to the artist's WhatsApp for instant availability confirmation.
                    </p>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8">
                    {isSubmitted ? (
                        <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-300">
                            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>

                            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-henna-950">
                                Inquiry Sent to WhatsApp!
                            </h4>

                            <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                                Your booking inquiry for <strong>{formData.name}</strong> on <strong>{formData.eventDate}</strong> has been transferred to WhatsApp. If the chat window didn't open automatically, click the button below.
                            </p>

                            {/* Message Summary Preview */}
                            <div className="p-4 rounded-2xl bg-warmcream-100/90 border border-warmcream-300 text-xs text-stone-700 max-w-md mx-auto text-left space-y-1.5 font-mono">
                                <div className="font-sans font-bold text-henna-950 text-sm pb-1 border-b border-warmcream-300 flex items-center justify-between">
                                    <span>Inquiry Summary</span>
                                    <span className="text-emerald-700 font-semibold text-xs flex items-center gap-1">
                                        <MessageCircle className="w-3.5 h-3.5" /> Ready on WhatsApp
                                    </span>
                                </div>
                                <div><strong>Bride:</strong> {formData.name}</div>
                                <div><strong>Date:</strong> {formData.eventDate}</div>
                                <div><strong>City:</strong> {formData.city}</div>
                                <div><strong>Ceremony:</strong> {formData.eventType}</div>
                                {formData.estimatedPrice && <div><strong>Package Est:</strong> {formData.estimatedPrice}</div>}
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href={lastWhatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-4 h-4" /> Open WhatsApp Chat Again
                                </a>
                                <button
                                    onClick={handleReset}
                                    className="px-6 py-3.5 rounded-xl border border-stone-300 text-stone-700 font-bold text-sm hover:bg-stone-50 transition-colors"
                                >
                                    Done & Return to Site
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2.5">
                                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>
                                    Upon clicking submit, WhatsApp will launch with your complete booking details pre-filled for the studio owner.
                                </span>
                            </div>

                            {/* Name & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                        Bride / Client Name *
                                    </label>
                                    <div className="relative">
                                        <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Radhika Kapoor"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-henna-600 focus:border-henna-600 text-sm outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                        WhatsApp Number *
                                    </label>
                                    <div className="relative">
                                        <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                        <input
                                            type="tel"
                                            required
                                            placeholder="+91 98765 43210"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-henna-600 focus:border-henna-600 text-sm outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Email & Date */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                        <input
                                            type="email"
                                            required
                                            placeholder="bride@wedding.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-henna-600 focus:border-henna-600 text-sm outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                        Event / Mehendi Date *
                                    </label>
                                    <div className="relative">
                                        <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                        <input
                                            type="date"
                                            required
                                            value={formData.eventDate}
                                            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-henna-600 focus:border-henna-600 text-sm outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* City & Event Type */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                        City / Venue Location *
                                    </label>
                                    <div className="relative">
                                        <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Udaipur, Delhi, Mumbai, Dubai"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-henna-600 focus:border-henna-600 text-sm outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                        Ceremony Type
                                    </label>
                                    <select
                                        value={formData.eventType}
                                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-henna-600 focus:border-henna-600 text-sm outline-none transition-all bg-white"
                                    >
                                        <option value="Bridal Ceremony">Bridal Ceremony</option>
                                        <option value="Sangeet Party (Bride + Guests)">Sangeet Party (Bride + Guests)</option>
                                        <option value="Engagement / Roka">Engagement / Roka</option>
                                        <option value="Baby Shower / Godh Bharai">Baby Shower / Godh Bharai</option>
                                        <option value="Festive / Other">Festive / Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Special Notes & Custom Package Info */}
                            <div>
                                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                    Package Details & Custom Storytelling Requests
                                </label>
                                <textarea
                                    rows="3"
                                    placeholder="Tell us about your wedding motifs: portrait figures, dog silhouettes, skyline, proposal dates, guest count..."
                                    value={formData.specialNotes}
                                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-henna-600 focus:border-henna-600 text-sm outline-none transition-all"
                                />
                            </div>

                            {/* Submit CTA — Direct WhatsApp Action */}
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 hover:from-emerald-800 hover:to-emerald-800 text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 border border-emerald-400/40 transform hover:scale-[1.01] active:scale-[0.99]"
                            >
                                <MessageCircle className="w-5 h-5 text-emerald-200 fill-emerald-200" />
                                <span>Send All Details to Owner on WhatsApp</span>
                                <Send className="w-4 h-4 text-emerald-200" />
                            </button>

                            <div className="text-[11px] text-center text-stone-500 flex items-center justify-center gap-1.5">
                                <span>Direct client concierge to</span>
                                <span className="font-semibold text-emerald-700 font-mono">+{OWNER_WHATSAPP_NUMBER}</span>
                                <span>• No account or login required</span>
                            </div>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
};