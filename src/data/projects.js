export const data = {
  projects: [
    {
      title: "ContestPulse",
      description:
        "Developed a full-stack contest tracking web application as a personal project using the MERN stack, integrating real-time contest data from Codeforces, CodeChef, and LeetCode.",
      technologies: ["MERN Stack", "Tailwind CSS"],
      github: "https://github.com/BTANISHA11/TLECP",
      website: "https://conteststrack.vercel.app/",
      img: "https://via.placeholder.com/300x200?text=ContestPulse", // Replace with actual image URL
    },
    {
      title: "BeautyBuzz",
      description:
        "Created a real-time virtual makeup tool leveraging deep learning (CNNs), showcasing expertise in computer vision and scalable model deployment, which improved user satisfaction ratings by 25%.",
      technologies: ["Deep Learning", "Streamlit"],
      github: "https://github.com/BTANISHA11/Beautybuzzi",
      website: "https://www.loom.com/share/102b13c97e5f4050947acbdded218813?sid=106d65b4-426e-439b-bdd1-f9d27ebb5858",
      img: "https://via.placeholder.com/300x200?text=BeautyBuzz", // Replace with actual image URL
    },
    {
      title: "Job A Thon",
      description:
        "A Full Stack Job Portal enabling real-time job listings and secure user authentication with responsive, user-friendly interface for seamless job applications and interactions.",
      technologies: ["Next.js", "Tailwind", "Supabase", "Shadcn/ui", "Clerk"],
      github: "https://github.com/BTANISHA11/jobathon",
      website: "https://jobathon.vercel.app/",
      // img: "https://i.postimg.cc/SKvL4wr6/job.jpg",
    },
    
    {
      title: "Bookify",
      description:
        "This project harnesses the capabilities of Firebase and React to provide a seamless platform for book transactions, featuring an interactive and modern design for an enhanced user experience.",
      technologies: ["React.Js", "Javascript", "Firebase", "Tailwind CSS"],
      github: "https://github.com/BTANISHA11/bookify",
      website: "https://bookify-seven-lime.vercel.app/",
      // img: "https://img.freepik.com/free-vector/stack-blue-books_1308-171795.jpg",
    },
    
  ],
};

// // Sample UI Component to display the projects
// import React from 'react';
// const ProjectCard = ({ project }) => {
//   return (
//     <div className="border rounded-lg shadow-lg p-4 m-4">
//       <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
//       <h2 className="text-xl font-bold mt-2">{project.title}</h2>
//       <p className="mt-2">{project.description}</p>
//       <p className="mt-2"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
//       <div className="mt-4">
//         <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
//         <span className="mx-2">|</span>
//         <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
//       </div>
//     </div>
//   );
// };

// const ProjectsList = () => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {data.projects.map((project, index) => (
//         <ProjectCard key={index} project={project} />
//       ))}
//     </div>
//   );
// };

// export default ProjectsList;