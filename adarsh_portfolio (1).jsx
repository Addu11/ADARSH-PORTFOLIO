import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Taski AI - AI Tools Discovery Platform",
      description:
        "A responsive website designed to help users discover AI tools across multiple domains with search and category-based filtering.",
      tech: ["HTML", "CSS", "JavaScript", "NodeJS"],
      live: "#", // Replace with live demo link
      github: "https://github.com/Addu11", // Replace with specific repo
    },
    {
      title: "Pluff - E-Commerce Store for Dog Gear",
      description:
        "An e-commerce platform built with Shopify & NodeJS, featuring AI chatbot, customer reviews, and loyalty program.",
      tech: ["HTML", "CSS", "JavaScript", "NodeJS"],
      live: "#", // Replace with live demo link
      github: "https://github.com/Addu11", // Replace with specific repo
    },
  ];

  const certifications = [
    "Java Basic – HackerRank",
    "JavaScript – Cisco",
    "Problem Solving (Basic) – HackerRank",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        {/* Profile Photo */}
        <div className="flex justify-center">
          <img
            src="/profile_photo.jpg" // Replace with your actual profile photo file in public folder
            alt="Adarsh Pandey"
            className="w-44 h-44 rounded-full object-cover mx-auto mb-4 shadow-xl border-4 border-gray-300"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-900">Adarsh Kumar Pandey</h1>
        <p className="text-gray-600 mt-2">
          Computer Science & Engineering Student | Aspiring Software Developer
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Button asChild variant="outline">
            <a href="https://github.com/Addu11" target="_blank">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.linkedin.com/in/adarsh-pandey-093952190/" target="_blank">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://docs.google.com/document/d/1yolvEL_AsAWZTBNUOwdsNqfMbMgURCU4/edit?usp=sharing&ouid=118159051366402925706&rtpof=true&sd=true" target="_blank">
              <FileText className="w-4 h-4 mr-2" /> Resume
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Career Objective */}
      <motion.div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Career Objective</h2>
        <p className="text-gray-700">
          Motivated Computer Science & Engineering student with strong programming and problem-solving skills. Passionate about software development, data structures, and building innovative applications. Seeking opportunities to apply technical expertise, contribute to impactful projects, and grow as a software developer.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          {[
            "Java",
            "C++",
            "HTML",
            "CSS",
            "JavaScript",
            "NodeJS",
            "MySQL",
            "DSA (Java)",
            "OOP",
            "DBMS",
            "Git & GitHub",
            "VS Code",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-2 bg-white shadow rounded-lg text-center text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Bachelor of Technology (CSE)</strong> – Bansal Institute of Science & Technology, Bhopal (2022 - 2026) | CGPA: 6.99 (6th Sem)
          </li>
          <li>
            <strong>Class XII (M.P. Board)</strong> – Saraswati Shishu Mandir Nehru Nagar Rewa, MP (2018) | 72.40%
          </li>
          <li>
            <strong>Class X (M.P. Board)</strong> – Saraswati Shishu Mandir Nehru Nagar Rewa, MP (2016) | 79.66%
          </li>
        </ul>
      </motion.div>

      {/* Projects Section */}
      <motion.div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <Button asChild variant="outline">
                    <a href={project.live} target="_blank">
                      <Globe className="w-4 h-4 mr-2" /> Live
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Internship */}
      <motion.div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Internship</h2>
        <p className="text-gray-700 font-medium">Spam Email Classification – NLP & Machine Learning</p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>Created an ML model for spam detection using NLP techniques.</li>
          <li>Project under TechSaksham (AICTE, Microsoft & SAP initiative) with mentorship from Edunet Foundation.</li>
        </ul>
      </motion.div>

      {/* Certifications */}
      <motion.div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {certifications.map((c, idx) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-16 text-gray-600"
      >
        <p>📞 +91-74704 79782 | 📧 padarsh508@gmail.com</p>
      </motion.div>
    </div>
  );
}
