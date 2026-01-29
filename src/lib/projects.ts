export interface Project {
  slug: string;
  title: string;
  type: string;
  categories: string[];
  thumbnail: string;
  featured: boolean;
  hasDetail: boolean;
}

export const projects: Project[] = [
  // Featured projects (with detail pages)
  {
    slug: "indigo",
    title: "Indigo",
    type: "Desktop + Website",
    categories: ["desktop-app", "website"],
    thumbnail: "/images/indigo-thumb.gif",
    featured: true,
    hasDetail: true,
  },
  {
    slug: "voyage",
    title: "Voyage",
    type: "Web",
    categories: ["web-app"],
    thumbnail: "/images/voyage-thumb.gif",
    featured: true,
    hasDetail: true,
  },
  {
    slug: "quarters",
    title: "Quarters",
    type: "Web",
    categories: ["web-app"],
    thumbnail: "/images/quarters-thumb.gif",
    featured: true,
    hasDetail: true,
  },
  {
    slug: "shopswap",
    title: "ShopSwap",
    type: "Web",
    categories: ["web-app"],
    thumbnail: "/images/shopswap-thumb.gif",
    featured: true,
    hasDetail: true,
  },
  {
    slug: "foodies",
    title: "Foodies",
    type: "Mobile",
    categories: ["mobile-app"],
    thumbnail: "/images/foodies-thumb.gif",
    featured: true,
    hasDetail: true,
  },
  {
    slug: "nexev",
    title: "Nexev",
    type: "Mobile",
    categories: ["mobile-app"],
    thumbnail: "/images/nexev-thumb.gif",
    featured: true,
    hasDetail: true,
  },

  // Desktop Apps
  {
    slug: "messaging-app",
    title: "Messaging App",
    type: "Desktop",
    categories: ["desktop-app"],
    thumbnail: "/images/messaging-app-thumb.jpg",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "music-player",
    title: "Music Player",
    type: "Desktop",
    categories: ["desktop-app"],
    thumbnail: "/images/music-player-thumb.jpg",
    featured: false,
    hasDetail: false,
  },

  // Mobile Apps
  {
    slug: "ecommerce-app",
    title: "Ecommerce App",
    type: "Mobile",
    categories: ["mobile-app"],
    thumbnail: "/images/ecommerce-app-thumb.gif",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "habit-app",
    title: "Habit App",
    type: "Mobile",
    categories: ["mobile-app"],
    thumbnail: "/images/habit-app-thumb.gif",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "banking-app-1",
    title: "Banking App 1",
    type: "Mobile",
    categories: ["mobile-app"],
    thumbnail: "/images/banking-app-1-thumb.gif",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "banking-app-2",
    title: "Banking App 2",
    type: "Mobile",
    categories: ["mobile-app"],
    thumbnail: "/images/banking-app-2-thumb.gif",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "ava-rose",
    title: "Ava Rose",
    type: "Mobile + Website",
    categories: ["mobile-app", "website"],
    thumbnail: "/images/ava-rose-thumb.jpg",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "dias-boba",
    title: "Dias Boba",
    type: "Mobile + Website",
    categories: ["mobile-app", "website"],
    thumbnail: "/images/dias-boba-thumb.jpg",
    featured: false,
    hasDetail: false,
  },

  // Websites
  {
    slug: "onboarding",
    title: "Onboarding",
    type: "Website",
    categories: ["website"],
    thumbnail: "/images/onboarding-thumb.jpg",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "checkout",
    title: "Checkout",
    type: "Website",
    categories: ["website"],
    thumbnail: "/images/checkout-thumb.jpg",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "banking-landing-page",
    title: "Banking Landing Page",
    type: "Website",
    categories: ["website"],
    thumbnail: "/images/banking-landing-page-thumb.jpg",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "discount-landing-1",
    title: "Discount Landing Page 1",
    type: "Website",
    categories: ["website"],
    thumbnail: "/images/discount-landing-1-thumb.jpg",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "discount-landing-2",
    title: "Discount Landing Page 2",
    type: "Website",
    categories: ["website"],
    thumbnail: "/images/discount-landing-2-thumb.jpg",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "discount-landing-3",
    title: "Discount Landing Page 3",
    type: "Website",
    categories: ["website"],
    thumbnail: "/images/discount-landing-3-thumb.jpg",
    featured: false,
    hasDetail: false,
  },
  // Presentations
  {
    slug: "shopswap-pitch-deck",
    title: "ShopSwap Pitch Deck",
    type: "Presentation",
    categories: ["presentation"],
    thumbnail: "/images/shopswap-pitch-deck-thumb.gif",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "indigo-pitch-deck",
    title: "Indigo Pitch Deck",
    type: "Presentation",
    categories: ["presentation"],
    thumbnail: "/images/indigo-pitch-deck-thumb.gif",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "liverecover-sales-deck",
    title: "LiveRecover Sales Deck",
    type: "Presentation",
    categories: ["presentation"],
    thumbnail: "/images/liverecover-sales-deck-thumb.gif",
    featured: false,
    hasDetail: false,
  },

  // Graphics
  {
    slug: "voyage-system",
    title: "Voyage System",
    type: "Graphic",
    categories: ["graphic"],
    thumbnail: "/images/voyage-system-thumb.jpg",
    featured: false,
    hasDetail: false,
  },
  {
    slug: "socials",
    title: "Socials",
    type: "Graphic",
    categories: ["graphic"],
    thumbnail: "/images/socials-thumb.jpg",
    featured: false,
    hasDetail: false,
  },

  // Marketing
  {
    slug: "marketing-proposals",
    title: "Marketing Proposals",
    type: "Marketing",
    categories: ["marketing"],
    thumbnail: "/images/marketing-proposals-thumb.jpg",
    featured: false,
    hasDetail: false,
  },
];

const categoryDefs = [
  { id: "featured", label: "Featured" },
  { id: "web-app", label: "Web App" },
  { id: "desktop-app", label: "Desktop App" },
  { id: "mobile-app", label: "Mobile App" },
  { id: "website", label: "Website" },
  { id: "presentation", label: "Presentation" },
  { id: "graphic", label: "Graphic" },
  { id: "marketing", label: "Marketing" },
];

export const categories = categoryDefs.map((cat) => ({
  ...cat,
  count:
    cat.id === "featured"
      ? projects.filter((p) => p.featured).length
      : projects.filter((p) => p.categories.includes(cat.id)).length,
}));
