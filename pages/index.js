import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProjectDisplay from '../components/projectDisplay'

export default function Home({projectData}) {
  const email = "chrismsharpe123@gmail.com"
  const number = "07951575927"
  const projects = projectData ? CreateProjects(projectData) : false
  
  const projectExample = {
    Title: "Project Title",
    Description: "This is an awesome description of my project what it is and should do",
    Image: "https://img.itch.zone/aW1nLzQ2ODQ2NDQuanBn/347x500/G46JhY.jpg",
    Link: "https://beastcomplex.itch.io/time-breaker",
    Skills: "Skill 1, Skill 2, Skill 3"
  }

  function CreateProjects(projectData) {
    var newProjects = []
    var keys = projectData.projectData[0]
    for (let i = 1; i < projectData.projectData.length; i++){

      var newProject = {}
      var values = projectData.projectData[i]
      for (let j = 0; j < values.length; j++) {
        newProject[keys[j]] = values[j]
      }
      newProjects.push(newProject)
    }
    return newProjects;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Portfolio</title>
        <meta name="Portfolio" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Portfolio
        </h1>
        <p className={styles.description}>
          Welcome to my portfolio
        </p>
        {projectData ? (
          projects.map((project, i) => {
            return <ProjectDisplay key={i} project={project} />
          })
        ) : (
          <ProjectDisplay project={projectExample} />
        )}
      </main>

      <footer className={styles.footer}>
      Email: {email} | Number: {number}
      </footer>
    </div>
  )
}


export const getStaticProps = async (ctx) => {
  let dev = process.env.NODE_ENV !== 'production'
  let server = dev ? 'http://localhost:3000/' : 'my-portfolio-tau-beryl.vercel.app'
  const url = (server + 'api/projects')
  const res = await fetch(url)
  const projectData = await res.json()
  return {
    props:{
      projectData
    }
  }
}

