import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProjectDisplay from '../components/projectDisplay'

export default function Home({projects}) {

  const email = "chrismsharpe123@gmail.com"
  const number = "07951575927"
  const projectExample = {
    Title: "Project Title",
    Description: "This is a description of my project what it is and should do",
    Image: "https://img.itch.zone/aW1nLzQ2ODQ2NDQuanBn/347x500/G46JhY.jpg",
    Link: "https://beastcomplex.itch.io/time-breaker",
    Skills: "Skill 1, Skill 2, Skill 3"
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
        <div>
        {projects ? (
          projects.map((project, i) => {
            return <ProjectDisplay key={i} project={project} />
          })
        ) : (
          <ProjectDisplay project={projectExample} />
        )}
        </div>
      </main>

      <footer className={styles.footer}>
      Email: {email} | Number: {number}
      </footer>
    </div>
  )
}
