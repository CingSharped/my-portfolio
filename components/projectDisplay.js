import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Home.module.css'

const ProjectDisplay = ({project}) => {
    return (
        <Link href={project.Link}>
        <div className={styles.card}>
            <Image src={project.Image} width="450px" height="300px" alt={project.Title} />
            <h2>{project.Title}</h2>
            <hr></hr>
            <p>{project.Description}</p>
            <hr></hr>
            {project.Skills.split(', ').map((skill, i) => {
                return <footer key={i}>{"- "}{skill}</footer>
            })}
        </div>
        </Link>
    )
}

export default ProjectDisplay