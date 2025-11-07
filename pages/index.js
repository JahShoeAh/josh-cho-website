import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResumeSection from "@/components/ResumeSection";

const resumeData = {
  systems: [
    {
      title: "C++ Lead: Oathbound Studios",
      timeline: "May 2025 - Oct 2025",
      description:
        "Led integrations for C++ classes in Unreal Engine as a point of contact.",
      linkLabel: "Oathbound Studios",
      linkUrl: "https://www.linkedin.com/company/oathbound-studios/posts/?feedView=all",
      tags: ["C++", "Unreal Engine 5"],
      icon: "OS",
    },
    {
      title: "Unix Shell",
      timeline: "July 2025",
      description:
        "Unix-based Shell built with C++ and C utilizing Lex and Yacc for parsing.",
      linkLabel: "github.com/JahShoeAh/Shell",
      linkUrl: "https://placeholder.example/deep-space",
      tags: ["C++/C", "Lex", "Yac"],
      icon: "[>_]",
    },
    {
      title: "Simple C Compiler",
      timeline: "Aug 2025 - Dec 2025",
      description:
        "Built a compiler for a C-based language. Built on C++ with Lex and Yacc for parsing.",
      linkLabel: "github.com/JahShoeAh/Compiler",
      linkUrl: "https://placeholder.example/deep-space",
      tags: ["C++", "Lex", "Yac"],
      icon: "SC",
    },
    {
      title: "Personal Malloc implmenetation",
      timeline: "June 2025",
      description:
        "Personal Malloc project based off of dlmalloc.",
      linkLabel: "github.com/JahShoeAh/malloc",
      linkUrl: "https://placeholder.example/mission-control",
      tags: ["C"],
      icon: "M()",
    },
  ],
  software: [
    {
      title: "BeatProof",
      timeline: "Oct 2025",
      description:
        "Solana based music market place developed with Next.js and deployed with Vercel.",
      linkLabel: "beatproof.app",
      linkUrl: "https://beatproof.vercel.app/",
      repoLabel: "Github",
      repoUrl: "https://github.com/awu41/colosseum-cypherpunk-2025",
      tags: ["Solana", "Next.js", "Vercel"],
      icon: "BP",
    },
    {
      title: "Heater App",
      timeline: "Aug 2025 - Sep 2025",
      description:
        "Swift app deployed on the Apple Appstore, with Firebase Backend.",
      linkLabel: "github.com/JahShoeAh/heater",
      linkUrl: "https://placeholder.example/viz",
      tags: ["Swift", "Firebase"],
      icon: "H",
    },
    {
      title: "Market Place Messaging System",
      timeline: "Nov 2023",
      description:
        "Concurrent messaging app built fully with Java.",
      linkLabel: "github.com/JahShoeAh/MPMS",
      linkUrl: "https://placeholder.example/resilience",
      tags: ["Java"],
      icon: "MP",
    },
    {
      title: "Rapper Run 3D",
      timeline: "May 2022",
      description:
        "2D infinite sidescrolling game built entirely with the PyGame Library",
      linkLabel: "github.com/JahShoeAh/RR3D",
      linkUrl: "https://placeholder.example/resilience",
      tags: ["Python"],
      icon: "RR3D",
    },
    {
      title: "Personal Website",
      timeline: "Nov 2025",
      description:
        "This very website!",
      repoLabel: "Github",
      repoUrl: "https://github.com/JahShoeAh/josh-cho-website",
      tags: ["Next.js", "Vercel"],
      icon: "ME",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Cho • Systems & Software Engineer</title>
        <meta
          name="description"
          content="Josh Cho"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-screen bg-terminal-base">
        <Navbar />
        <main className="relative">
          <Hero />
          <div className="-mx-4 sm:-mx-0">
            <div className="w-full">
              <ResumeSection data={resumeData} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
