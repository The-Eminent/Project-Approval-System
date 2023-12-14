// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, onUpvote, onDownvote, onSendMessage }) => (
  <div className="project-card">
    <h3>{project.studentName}/{project.projectName}</h3>
    <p className="project-details">{project.description}</p>
    <div className="tech-stack">
      <strong>Tech Stack:</strong> {project.techStack.join(', ')}
    </div>
    <a href={project.documentationLink} download>Download Documentation</a>
    <a href={project.pptLink} download>Download Presentation</a>
    <div className="chat-section">
      <h4>Chat</h4>
      <div className="chat-box">
        {/* Chat messages will be dynamically added here */}
      </div>
      <textarea className="chat-input" placeholder="Type your message"></textarea>
      <button className="chat-send-btn" onClick={() => onSendMessage(project.projectName)}>Send</button>
    </div>
    <div className="votes-section">
      <button className="upvote-btn" onClick={() => onUpvote(project.projectName)}>Upvote</button>
      <span className="votes-count" id={`${project.projectName}-votes`}>0</span>
      <button className="downvote-btn" onClick={() => onDownvote(project.projectName)}>Downvote</button>
    </div>
  </div>
);

export default ProjectCard;
