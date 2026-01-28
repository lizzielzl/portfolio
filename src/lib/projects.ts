export interface Project {
  slug: string;
  title: string;
  type: string;
  category: string;
  thumbnail: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "indigo",
    title: "Indigo",
    type: "Desktop + Website",
    category: "featured",
    thumbnail: "/images/indigo-thumb.gif",
    featured: true,
  },
  {
    slug: "voyage",
    title: "Voyage",
    type: "Web",
    category: "featured",
    thumbnail: "/images/voyage-thumb.gif",
    featured: true,
  },
  {
    slug: "quarters",
    title: "Quarters",
    type: "Web",
    category: "featured",
    thumbnail: "/images/quarters-thumb.gif",
    featured: true,
  },
  {
    slug: "shopswap",
    title: "ShopSwap",
    type: "Web",
    category: "featured",
    thumbnail: "/images/shopswap-thumb.gif",
    featured: true,
  },
  {
    slug: "foodies",
    title: "Foodies",
    type: "Mobile",
    category: "featured",
    thumbnail: "/images/foodies-thumb.gif",
    featured: true,
  },
  {
    slug: "nexev",
    title: "Nexev",
    type: "Mobile",
    category: "featured",
    thumbnail: "/images/nexev-thumb.gif",
    featured: true,
  },
];

export const categories = [
  { id: "featured", label: "Featured", count: 6 },
  { id: "web-app", label: "Web App", count: 3 },
  { id: "desktop-app", label: "Desktop App", count: 3 },
  { id: "mobile-app", label: "Mobile App", count: 8 },
  { id: "website", label: "Website", count: 9 },
  { id: "presentation", label: "Presentation", count: 3 },
  { id: "graphic", label: "Graphic", count: 2 },
  { id: "marketing", label: "Marketing", count: 1 },
];
