import BlogClientPage from "./BlogClientPage";
import "../globals.css";

export const metadata = {
  title: "Blog - modev | Web Development & Automation Insights",
  description:
    "Entdecke die neuesten Trends in Web Development, MERN Stack, Next.js, SaaS-Entwicklung und Automation. Praktische Tipps und Einblicke von einem erfahrenen Entwickler.",
  keywords:
    "Web Development Blog, MERN Stack, Next.js, SaaS, Automation, JavaScript, TypeScript, React, Node.js",
  openGraph: {
    title: "Blog - modev | Web Development & Automation Insights",
    description:
      "Entdecke die neuesten Trends in Web Development, MERN Stack, Next.js, SaaS-Entwicklung und Automation.",
    type: "website",
    locale: "de_DE",
  },
};

export default function BlogPage() {
  return <BlogClientPage />;
}
