const projects = [
  {
    title: "YouTube Clone",
    description: "React + Firebase Project",
    link: "https://github.com/",
  },

  {
    title: "Student Management",
    description: "MERN Stack Project",
    link: "https://github.com/",
  },
];

function Projects() {

  return (
    <section id="projects" className="section">

      <h1>Projects</h1>

      <div className="projects">

        {projects.map((project, index) => (

          <a
            href={project.link}
            target="_blank"
            key={index}
            className="card"
          >

            <h2>{project.title}</h2>

            <p>{project.description}</p>

          </a>

        ))}

      </div>

    </section>
  );
}

export default Projects;