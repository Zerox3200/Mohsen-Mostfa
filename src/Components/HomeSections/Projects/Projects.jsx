import React from 'react'
import './Projects.scss'
import ProjectCard from './ProjectCard'
import { AllProjects } from './ProjectsFile'

export default function Projects() {
    return <section className='Projects px-5 mt-2'>
        <h1 className='h2 mb-4'>Projects</h1>
        <div className="d-flex flex-wrap gap-4">
            {AllProjects.map((ele, index) => <ProjectCard key={index} BackGround={ele.image}
                Delay={0.01 * index} Title={ele.Title} paragraph={ele.Description} Link={ele.RepoLink} />)}
        </div>
    </section>

}
