// App.jsx
import React, { useState } from 'react';
import ProfileSection from './ProfileSection';
import ProjectCard from './ProjectCard';

const App = () => {
  // Sample data for the profile
  const profileData = {
    name: 'John Doe',
    college: 'Your College',
    designation: 'Professor',
  };

  // Sample data for projects
  const initialProjectsData = [
    {
      studentName: 'Student 1',
      projectName: 'Project 1',
      description: 'A brief description of Project 1.',
      documentationLink: 'path/to/project1/documentation.pdf',
      pptLink: 'path/to/project1/project_presentation.ppt',
      chat: [],
      techStack: ['HTML', 'CSS', 'JavaScript'],
      upvotes: 0,
      downvotes: 0,
    },
    {
      studentName: 'Student 2',
      projectName: 'Project 2',
      description: 'A brief description of Project 2.',
      documentationLink: 'path/to/project2/documentation.pdf',
      pptLink: 'path/to/project2/project_presentation.ppt',
      chat: [],
      techStack: ['React', 'Node.js', 'Express'],
      upvotes: 0,
      downvotes: 0,
    },
    // Add more projects as needed
  ];

  const [projectsData, setProjectsData] = useState(initialProjectsData);

  const upvote = (projectName) => {
    setProjectsData((prevData) =>
      prevData.map((project) =>
        project.projectName === projectName
          ? { ...project, upvotes: project.upvotes + 1 }
          : project
      )
    );
  };

  const downvote = (projectName) => {
    setProjectsData((prevData) =>
      prevData.map((project) =>
        project.projectName === projectName
          ? { ...project, downvotes: project.downvotes + 1 }
          : project
      )
    );
  };

  const sendMessage = (projectName) => {
    // Implement chat functionality as needed
  };

  return (
    <div>
      <header>
        <h1>Your Website</h1>
      </header>

      <main className="container">
        <ProfileSection profile={profileData} />

        <section className="projects-section">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.projectName}
              project={project}
              onUpvote={upvote}
              onDownvote={downvote}
              onSendMessage={sendMessage}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
