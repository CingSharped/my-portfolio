import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Home.module.css'

const ProjectDisplay = ({project}) => {
    return (
        <div className={styles.card}>
            <Image src={project.Image} width="450px" height="300px" alt={project.Title} />
            <Link href={project.Link}>
                <h2>{project.Title}</h2>
            </Link>
            <p>{project.Description}</p>
                {project.Skills.split(',').map((skill, i) => {
                    <footer key={i} className="blockquote-footer">{skill}</footer>
                })}
        </div>
    )
}

export default ProjectDisplay