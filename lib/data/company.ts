import {
  ShieldCheck,
  Rocket,
  BadgeCheck,
  TrendingUp,
  Globe2,
  Lock,
} from "lucide-react";
import type {
  TeamMember,
  Testimonial,
  TrustMetric,
  ValueProp,
} from "../types";

export const trustMetrics: TrustMetric[] = [
  { value: 150, prefix: "$", suffix: "M+", label: "GMV Managed" },
  { value: 10, suffix: "+", label: "Years Avg. Experience" },
  { value: 300, suffix: "+", label: "Brands Advised" },
  { value: 40, suffix: "+", label: "Marketplaces & Channels" },
];

export const team: TeamMember[] = [
  {
    name: "Nora Lindqvist",
    role: "Founding Partner — Marketplace Strategy",
    background: "Ex-Amazon Global Account Executive",
    initials: "NL",
    expertise: ["Amazon", "Market Entry", "Retail Media"],
  },
  {
    name: "Dev Malik",
    role: "Partner — DTC & Omnichannel",
    background: "Ex-Shopify Enterprise Solutions Architect",
    initials: "DM",
    expertise: ["Shopify", "DTC", "CRO"],
  },
  {
    name: "Clara Fernandez",
    role: "Partner — Supply Chain & Logistics",
    background: "Ex-Maersk Global Trade Lead",
    initials: "CF",
    expertise: ["Freight", "3PL", "Customs"],
  },
  {
    name: "Ethan Brooks",
    role: "Partner — Operations & Aggregation",
    background: "Ex-Thrasio Portfolio Operator",
    initials: "EB",
    expertise: ["FBA", "Profitability", "Turnaround"],
  },
  {
    name: "Anya Petrova",
    role: "Partner — Social Commerce & Creators",
    background: "Ex-TikTok Shop Growth Lead",
    initials: "AP",
    expertise: ["TikTok Shop", "Affiliates", "Creators"],
  },
  {
    name: "Samuel Osei",
    role: "Partner — IP & Legal Advisory",
    background: "Ex-IP Enforcement Counsel",
    initials: "SO",
    expertise: ["Brand Registry", "IP", "M&A"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "North Star rebuilt our PPC and listings, cut ACoS by 22%, and scaled revenue 3x in five months. They operate like an in-house team.",
    author: "Sofia Martinez",
    company: "Home & Kitchen DTC brand",
    role: "Founder & CEO",
    metric: "3x revenue growth",
  },
  {
    quote:
      "Their 90-day launch roadmap took us from zero to $40K/month in the US without a single compliance hiccup.",
    author: "Daniel Kim",
    company: "Consumer electronics exporter",
    role: "Managing Director",
    metric: "$40K MRR in 90 days",
  },
  {
    quote:
      "They recovered three hijacked listings, enrolled our brand, and stopped counterfeiters cold. Worth every dollar.",
    author: "Aisha Bello",
    company: "Beauty & wellness brand",
    role: "Brand Owner",
    metric: "100% hijacker elimination",
  },
  {
    quote:
      "The inventory model alone saved us six figures in FBA storage fees and freight. Genuinely battle-tested advice.",
    author: "Lucas Meyer",
    company: "Outdoor gear retailer",
    role: "COO",
    metric: "6-figure savings",
  },
];

export const valueProps: ValueProp[] = [
  {
    title: "Battle-Tested Veterans",
    description:
      "Senior operators from Amazon, Shopify, TikTok Shop, Maersk, and Thrasio — not junior consultants.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Funnel Execution",
    description:
      "Strategy plus hands-on execution across marketplaces, DTC, logistics, and brand.",
    icon: Rocket,
  },
  {
    title: "Transparent Fixed Pricing",
    description:
      "Clear deliverables and timelines — no hourly billing surprises or scope creep.",
    icon: BadgeCheck,
  },
  {
    title: "Margin-First Thinking",
    description:
      "Every recommendation is stress-tested against contribution margin and landed cost.",
    icon: TrendingUp,
  },
  {
    title: "Global Operational Footprint",
    description: "On-the-ground expertise across the US, EU, SEA, and APAC.",
    icon: Globe2,
  },
  {
    title: "Compliance & Risk Discipline",
    description: "Tax, IP, and customs rigor baked into every engagement.",
    icon: Lock,
  },
];

export const trustBadges = [
  "Amazon Ads Partner",
  "TikTok Shop Partner",
  "Shopify Partner",
  "Global Trade Compliant",
  "SOC 2-Aligned Ops",
  "A+ Content Certified",
];

export const marketplaces = [
  "Amazon",
  "Shopify",
  "TikTok Shop",
  "Walmart",
  "eBay",
  "Shopee",
  "Lazada",
  "DTC / Omnichannel",
];

export const gmvBrackets = [
  "Under $100K",
  "$100K – $500K",
  "$500K – $1M",
  "$1M – $5M",
  "$5M – $20M",
  "$20M+",
];

export const marketplaceTags = [
  "Amazon",
  "Shopify",
  "TikTok",
  "Walmart",
  "Google",
  "Logistics",
  "Compliance",
  "Legal",
  "Creative",
  "DTC",
  "SEO",
  "PPC",
  "FBA",
  "IP",
];

export const contactInfo = {
  email: "contact@hoomqing.com",
  altEmail: "admin@northstartradings.com",
  address: "1209 Mountain Road Pl NE #11116, Albuquerque, NM 87110, USA",
};

export const globalFootprint = [
  { region: "United States", focus: "Marketplace launch, retail media, entity advisory" },
  { region: "European Union", focus: "VAT, EPR, localization, DTC expansion" },
  { region: "Southeast Asia", focus: "TikTok Shop, Shopee/Lazada, creator networks" },
  { region: "APAC", focus: "Supplier vetting, QC, freight origination" },
];
