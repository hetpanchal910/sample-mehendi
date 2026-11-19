import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { HennaPaisley } from './HennaOrnaments';

const REVIEWS = [
    {
        id: 1,
        name: 'Ananya & Kabir',
        weddingLocation: 'Udaipur Palace Wedding',
        date: 'February 2026',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
        headline: '“The stain was as dark as dark chocolate on my wedding morning!”',
        review: 'Zaara and her team flew to Udaipur for our three-day destination wedding. She custom drafted our proposal at Lake Pichola right onto my forearm. The stain was deep burgundy and smelled like eucalyptus and fresh lavender. Guests could not stop complimenting the fine line work!',
        designUsed: 'Royal Jodhpur Haveli Bridal',
    },
    {
        id: 2,
        name: 'Priyanka Sharma',
        weddingLocation: 'Goa Beachfront Mandap',
        date: 'January 2026',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        headline: '“Zero burning, zero chemicals — truly 100% pure organic henna.”',
        review: 'I have very sensitive, eczema-prone skin and was terrified of allergic reactions. Zaara gave me a complimentary patch test two weeks prior. Her pure Sojat henna felt cooling and soothing. On day 2, the color had blossomed into the most gorgeous mahogany red. Incredible patience and artistry!',
        designUsed: 'Modern Indo-Western Lace Cuff',
    },
    {
        id: 3,
        name: 'Simran & Harpreet',
        weddingLocation: 'Chandigarh Grand Sangeet',
        date: 'December 2025',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
        headline: '“Completed 35 sangeet guests plus my full bridal hands effortlessly!”',
        review: 'Her speed without compromising crisp precision is surreal! Her assistants handled all our sangeet family and bridesmaids while Zaara focused on my bridal hands and feet. She even hid our wedding date and dogs silhouette into the mandala!',
        designUsed: 'Heritage Temple Bells & Portraits',
    },
];

export const Testimonials = () => {
    const [currentIdx, setCurrentIdx] = useState(0);

    const prev = () => {
        setCurrentIdx((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
    };

    const next = () => {
        setCurrentIdx((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
    };

    const review = REVIEWS[currentIdx];

    return (
        <section id="testimonials" className="relative py-16 overflow-hidden lg:py-24 bg-warmcream-100/60">
            <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="max-w-3xl mx-auto mb-12 text-center sm:mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-henna-100 border border-henna-300 text-henna-900 text-xs font-semibold mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-henna-700" />
                        <span>Words From Real Brides</span>
                    </div>
                    <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-henna-950">
                        Loved By Over <span className="text-henna-gradient">5,000+ Brides</span>
                    </h2>
                    <p className="mt-3 text-base text-stone-600 sm:text-lg">
                        Hear from our radiant brides who trusted Zaara Henna for their most milestone moments.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="relative p-8 overflow-hidden bg-white border shadow-xl rounded-3xl sm:p-12 border-stone-200/80">

                        <HennaPaisley className="absolute pointer-events-none -bottom-10 -right-10 w-60 h-60 text-henna-900/5" />

                        <div className="flex flex-col items-start justify-between gap-4 pb-6 border-b sm:flex-row sm:items-center border-stone-100">
                            <div className="flex items-center gap-4">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="object-cover rounded-full w-14 h-14 sm:w-16 sm:h-16 ring-4 ring-gold-200"
                                />
                                <div>
                                    <h3 className="flex items-center gap-2 font-serif text-xl font-bold sm:text-2xl text-henna-950">
                                        {review.name}
                                        <CheckCircle2 className="inline w-4 h-4 text-emerald-600" title="Verified Bride" />
                                    </h3>
                                    <div className="text-xs sm:text-sm text-stone-500">
                                        {review.weddingLocation} • {review.date}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-1 text-amber-500">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 stroke-none" />
                                ))}
                            </div>
                        </div>

                        <div className="py-6 space-y-3">
                            <h4 className="font-serif text-lg font-bold sm:text-xl text-henna-900">
                                {review.headline}
                            </h4>
                            <p className="text-sm italic leading-relaxed text-stone-700 sm:text-base">
                                "{review.review}"
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-between gap-4 pt-6 border-t border-stone-100 sm:flex-row">
                            <div className="text-xs text-stone-500">
                                <span className="font-semibold text-stone-700">Design chosen:</span>{' '}
                                <span className="font-medium text-henna-800">{review.designUsed}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={prev}
                                    className="p-2.5 rounded-full border border-stone-300 hover:border-henna-700 text-stone-700 hover:text-henna-900 hover:bg-henna-50 transition-colors"
                                    aria-label="Previous review"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <span className="px-2 text-xs font-semibold text-stone-500">
                                    {currentIdx + 1} / {REVIEWS.length}
                                </span>
                                <button
                                    onClick={next}
                                    className="p-2.5 rounded-full border border-stone-300 hover:border-henna-700 text-stone-700 hover:text-henna-900 hover:bg-henna-50 transition-colors"
                                    aria-label="Next review"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};