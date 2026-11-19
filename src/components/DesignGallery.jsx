import React, { useState } from 'react';
import { Heart, ZoomIn, X, Sparkles, Clock } from 'lucide-react';

const GALLERY_ITEMS = [
    {
        id: 1,
        title: 'The Jodhpur Royal Haveli',
        category: 'bridal',
        tag: 'Bestseller Bridal',
        image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80',
        time: '5.5 hours',
        style: 'Traditional Rajasthani',
        description: 'Intricate storytelling featuring groom procession (Baraat), dancing peacock motifs, lotus jali work, and hidden couple portraits.',
        likes: 428,
    },
    {
        id: 2,
        title: 'Dubai Cascading Florals',
        category: 'arabic',
        tag: 'Trending Arabic',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
        time: '2.5 hours',
        style: 'Bold Gulf Arabic',
        description: 'Bold shaded roses, open breathing spaces, dramatic fingertip details, and fluid floral trails cascading from the wrist to the index finger.',
        likes: 312,
    },
    {
        id: 3,
        title: 'Sacred Mandala & Lotus Feet',
        category: 'feet',
        tag: 'Bridal Feet',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
        time: '3 hours',
        style: 'Royal Foot Jewellery Art',
        description: 'Anklet imitation paisleys, central lotus mandala medallion, and symmetrical toe embellishments matching the bridal payal.',
        likes: 285,
    },
    {
        id: 4,
        title: 'Minimalist Indo-Western Cuff',
        category: 'minimalist',
        tag: 'Modern Chic',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
        time: '1.5 hours',
        style: 'Geometric Contemporary',
        description: 'Fine lace mesh cuffs, negative space geometry, and minimal finger accents tailored for cocktail gowns and contemporary receptions.',
        likes: 194,
    },
    {
        id: 5,
        title: 'The Royal Crest & Vows',
        category: 'groom',
        tag: 'Groom Art',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
        time: '45 mins',
        style: 'Royal Crest & Monogram',
        description: 'Subtle wedding crest on the groom’s palm containing the couple initials, hashtag, wedding date, and auspicious elephant motif.',
        likes: 176,
    },
    {
        id: 6,
        title: 'Varanasi Temple Bells & Jharokha',
        category: 'bridal',
        tag: 'Heritage Bridal',
        image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1000&q=80',
        time: '6 hours',
        style: 'Heritage Temple Art',
        description: 'Arched palace window (Jharokha) silhouettes, temple bells, sacred Kalash emblems, and Radha-Krishna storytelling panels.',
        likes: 512,
    },
];

export const DesignGallery = ({ onSelectDesign }) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);
    const [likesMap, setLikesMap] = useState({});

    const categories = [
        { id: 'all', label: 'All Creations' },
        { id: 'bridal', label: 'Royal Bridal' },
        { id: 'arabic', label: 'Arabic Fusion' },
        { id: 'minimalist', label: 'Minimalist Chic' },
        { id: 'feet', label: 'Feet & Ankles' },
        { id: 'groom', label: 'Groom Henna' },
    ];

    const filteredItems = activeCategory === 'all'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

    const handleLike = (id, e) => {
        e.stopPropagation();
        setLikesMap((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <section id="gallery" className="relative py-16 lg:py-24 bg-warmcream-100/60">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="max-w-3xl mx-auto mb-10 text-center sm:mb-14">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-900 text-xs font-semibold mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                        <span>Curated Portfolio</span>
                    </div>
                    <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-henna-950">
                        Our Signature <span className="text-henna-gradient">Bridal Gallery</span>
                    </h2>
                    <p className="mt-3 text-base text-stone-600 sm:text-lg">
                        Every swirl, petal, and contour is drafted custom for each bride's personal journey. Click any design for intricate details.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${activeCategory === cat.id
                                        ? 'bg-henna-900 text-gold-200 shadow-md scale-105'
                                        : 'bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-stone-200/80'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                    {filteredItems.map((item) => {
                        const isLiked = likesMap[item.id];
                        const currentLikes = item.likes + (isLiked ? 1 : 0);

                        return (
                            <div
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                className="relative flex flex-col overflow-hidden transition-all duration-300 bg-white border shadow-sm cursor-pointer group rounded-3xl hover:shadow-xl border-stone-200/80"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />

                                    <div className="absolute inset-0 transition-opacity bg-gradient-to-t from-henna-950/70 via-transparent to-black/20 opacity-60 group-hover:opacity-80" />

                                    <div className="absolute flex items-center justify-between top-4 left-4 right-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full shadow-sm bg-white/90 backdrop-blur-md text-henna-950">
                                            {item.tag}
                                        </span>
                                        <button
                                            onClick={(e) => handleLike(item.id, e)}
                                            className={`p-2 rounded-full backdrop-blur-md transition-colors shadow-sm ${isLiked
                                                    ? 'bg-rose-500 text-white'
                                                    : 'bg-white/80 hover:bg-white text-stone-700'
                                                }`}
                                            aria-label="Like design"
                                        >
                                            <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
                                        </button>
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 pointer-events-none group-hover:opacity-100">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white/90 backdrop-blur-md text-henna-950">
                                            <ZoomIn className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="absolute text-white bottom-4 left-4 right-4">
                                        <span className="text-[11px] font-medium text-gold-300 uppercase tracking-widest block">
                                            {item.style}
                                        </span>
                                        <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight mt-0.5">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 text-xs border-t sm:p-5 border-stone-100 text-stone-500">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                                        <span>{item.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1 font-medium text-stone-600">
                                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                                        <span>{currentLikes} brides saved</span>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Lightbox Modal */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 duration-200 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
                    <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 grid grid-cols-1 md:grid-cols-2 max-h-[90vh]">

                        <div className="relative bg-stone-900 aspect-square md:aspect-auto h-72 md:h-full">
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="object-cover w-full h-full"
                            />
                            <span className="absolute px-3 py-1 text-xs font-semibold border rounded-full top-4 left-4 bg-henna-900/90 text-gold-200 backdrop-blur-sm border-gold-400/30">
                                {selectedItem.tag}
                            </span>
                        </div>

                        <div className="flex flex-col justify-between p-6 overflow-y-auto sm:p-8">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                                    <span className="text-xs font-bold tracking-wider uppercase text-gold-700">
                                        {selectedItem.style}
                                    </span>
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="p-1.5 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-100 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <h3 className="mt-4 font-serif text-2xl font-bold sm:text-3xl text-henna-950">
                                    {selectedItem.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                                    {selectedItem.description}
                                </p>

                                <div className="p-4 mt-6 space-y-3 text-xs border rounded-2xl bg-warmcream-50 border-warmcream-200 sm:text-sm text-stone-700">
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-stone-600">Application Duration:</span>
                                        <span className="font-bold text-henna-900">{selectedItem.time}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-stone-600">Henna Cones Used:</span>
                                        <span className="font-bold text-henna-900">100% Organic Eucalyptus Blend</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-stone-600">Customization:</span>
                                        <span className="font-bold text-henna-900">Portraits, Dates & Initials Included</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-stone-200 sm:flex-row">
                                <button
                                    onClick={() => {
                                        const title = selectedItem.title;
                                        setSelectedItem(null);
                                        onSelectDesign(title);
                                    }}
                                    className="flex-1 py-3.5 rounded-xl bg-henna-900 hover:bg-henna-950 text-gold-200 font-bold text-sm text-center shadow-md transition-colors flex items-center justify-center gap-2"
                                >
                                    <Sparkles className="w-4 h-4 text-gold-300" />
                                    <span>Request This Design Pattern</span>
                                </button>
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="px-5 py-3.5 rounded-xl border border-stone-300 text-stone-700 font-medium text-sm hover:bg-stone-50 transition-colors"
                                >
                                    Close
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            )}

        </section>
    );
};