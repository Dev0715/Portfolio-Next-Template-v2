import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import { graphcms, QUERY } from "../services";
import { ISkills, IJobs, IProjects } from "../typings";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Jobs } from "../components/Jobs";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

interface IHomeProps {
  jobs: IJobs[];
  projects: IProjects[];
  skills: ISkills[];
}

const Home: NextPage<IHomeProps> = ({ jobs, projects, skills }) => {
  const jobsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleNavItemClick = (item: string) => {
    let scrollObject = {};
    switch (item) {
      case "about":
        scrollObject = {
          top: 0,
          behavior: "smooth",
        };
        break;

      case "jobs":
        scrollObject = {
          top: jobsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "projects":
        scrollObject = {
          top: projectsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "skills":
        scrollObject = {
          top: skillsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "contact":
        scrollObject = {
          top: contactRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      default:
        break;
    }

    window.scrollTo(scrollObject);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar onNavItemClick={handleNavItemClick} />

        <section className="about">
          <About />
        </section>

        <section className="jobs" ref={jobsRef}>
          <Jobs jobs={jobs} />
        </section>

        <section className="projects" ref={projectsRef}>
          <Projects projects={projects} />
        </section>

        <section className="skills" ref={skillsRef}>
          <Skills skills={skills} />
        </section>

        <section className="contact" ref={contactRef}>
          <Contact />
        </section>

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
        />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { skills, jobs, projects } = await graphcms.request(QUERY);

  return {
    props: {
      skills,
      jobs,
      projects,
    },
    revalidate: 10,
  };
};
