// components/ProjectList.tsx
import React from "react";

const projects = [
  { title: "Project A", description: "Description of Project A" },
  { title: "Project B", description: "Description of Project B" },
  { title: "Project C", description: "Description of Project C" },
];

export default function ProjectList() {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
