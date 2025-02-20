export const ideas = [
  {
    id: 1,
    title: "AI-Powered Content Generator",
    description:
      "Create an AI tool that generates high-quality blog posts and social media content.",
    category: "Technology",
    votes: 12,
    createdAt: "2024-03-20",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    id: 2,
    title: "Sustainable Food Delivery",
    description:
      "Eco-friendly food delivery service using electric vehicles and biodegradable packaging.",
    category: "Sustainability",
    votes: 8,
    createdAt: "2024-03-19",
    coverImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
  },
  {
    id: 3,
    title: "Virtual Reality Fitness",
    description:
      "Immersive VR fitness experiences that make working out fun and engaging.",
    category: "Health",
    votes: 15,
    createdAt: "2024-03-18",
    coverImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
  },
];

export const idea = {
  id: 2,
  title: "AI-Powered Content Generator",
  summary: "Create high-quality content using AI with simple prompts",
  status: "In Progress",
  problem: "Content creation is time-consuming and expensive",
  solution:
    "AI-powered tool that generates high-quality content based on simple prompts",
  targetAudience: ["Content creators", "Marketing teams", "Small businesses"],
  marketGap: "Existing solutions lack quality control and customization",
  features: {
    mustHave: ["AI content generation", "Quality control", "Export options"],
    niceToHave: ["Team collaboration", "Content calendar", "Analytics"],
    future: ["Multi-language support", "API access", "Custom training"],
  },
  businessModel: {
    type: "Subscription",
    pricing: {
      basic: "10/month",
      pro: "29/month",
      enterprise: "Custom",
    },
  },
  competition: [
    {
      name: "Competitor 1",
      features: ["Content generation", "Basic editing", "Templates"],
    },
    {
      name: "Competitor 2",
      features: ["AI writing", "Grammar check", "Plagiarism detection"],
    },
  ],
  attachments: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      title: "Concept Mockup",
    },
  ],
};
