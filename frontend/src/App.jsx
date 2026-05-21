import "./App.css";

function App() {

  return (
    <>

      {/* Navbar */}

      <nav className="navbar">

        <h1>Portfolio</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

      </nav>

      {/* Home */}

      <section className="home" id="home">

        <div className="home-left">

          <h1>Hello, I'm Kesaram Veda Shruthi</h1>

          <h2>Full Stack Developer</h2>

          <p>
            I build modern MERN stack applications.
          </p>

        </div>

        <div className="home-right">

          <img
            src="/images/profile_image.jpeg"
            alt="profile"
          />

        </div>

      </section>

      {/* About */}

      <section className="section" id="about">

        <h1>About Me</h1>

        <p>
          Passionate Full Stack Developer skilled in various technologies including HTML, CSS, JavaScript,
          React.js, Node.js, Express.js, and MongoDB.
        </p>

      </section>

      {/* Skills */}

      <section className="section" id="skills">

        <h1>My Skills</h1>

        <div className="skills-container">

          <div className="skill-card">
            HTML
          </div>

          <div className="skill-card">
            CSS
          </div>

          <div className="skill-card">
            JavaScript
          </div>

          <div className="skill-card">
            React.js
          </div>

          <div className="skill-card">
            Node.js
          </div>

          <div className="skill-card">
            Express.js
          </div>

          <div className="skill-card">
            MongoDB
          </div>

          <div className="skill-card">
            Next.js
          </div>

          <div className="skill-card">
            Tailwind CSS
          </div>

          <div className="skill-card">
            Git & GitHub
          </div>

        </div>

      </section>

      {/* Projects */}

      <section className="section" id="projects">

        <h1>Projects</h1>

        <div className="projects">

          <a
            href="https://github.com/KesaramVedaShruthi/youtube-clone.git"
            target="_blank"
            className="card"
          >

            <h2>YouTube Clone</h2>

            <p>
              MERN Stack + Firebase Project
            </p>

          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="card"
          >

            <h2>Student Management</h2>

            <p>
              Full Stack MERN Application
            </p>

          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="card"
          >

            <h2>Portfolio Website</h2>

            <p>
              Responsive React Portfolio
            </p>

          </a>

        </div>

      </section>

      

    </>
  );
}

export default App;