import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'
import './Projects.scss'

export default function ProjectCard({ Delay, BackGround, paragraph, Title, Link }) {

    const ref = useRef();
    const InView = useInView(ref, { once: true })

    return <motion.div className="card" ref={ref} initial={{ opacity: 0 }}
        animate={InView && { opacity: 1 }}
        transition={{ duration: 0.8, ease: "linear", delay: Delay }}>
        <img src={BackGround} className="card-img-top" alt="..." loading='lazy' />
        <div className="card-body">
            <h2 className='h3'>{Title}</h2>

            <div className="HR">
                <hr />
            </div>

            {paragraph &&
                <p className="card-text">{paragraph}</p>
            }

            <a href={Link} class="btn">Visit Repo</a>

        </div>
    </motion.div>
}
