import Certifications from './Certifactions/Certifications';
import Experience from './Experience/Experience';
import './Resume.scss';
import ResumeEducation from './Resume_Education/ResumeEducation';
import ResumeIntro from './Resume_Intro/ResumeIntro';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Experiences } from './Experience/ExperienceFile';

function Resume() {
    const ref = useRef();
    const InView = useInView(ref, { once: true })

    return (
        <motion.section className="Resume px-5"
            id='Resume'
            initial={{ opacity: 0, y: 70 }}
            animate={InView && { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "linear", delay: 0.2 }}
        >
            <div className="Resume_pt1">
                <h1 className='h2' ref={ref}>Resume</h1>
                <p>Emerging AI Researcher, Data Scientist, and AI Developer with a passion for advancing intelligent
                    solutions and data-driven insights. Proficient in developing cutting-edge models, analyzing complex
                    datasets, and building scalable AI systems. Committed to pushing the boundaries of artificial intelligence,
                    I strive to create impactful solutions that drive innovation and optimize performance across various
                    applications.
                </p>
            </div>
            <div className="Resume_pt2">
                <div className="Resume_pt2_Summary">
                    <h1 className='h3'>Sumary</h1>
                    <ResumeIntro />
                    <h3>Certfications</h3>
                    <Certifications />
                </div>
                <div className="Resume_pt2_Experience">
                    <h1 className='h3'>Education</h1>
                    <ResumeEducation />
                    <h1 className='h3'>Experience</h1>
                    {Experiences.map((ele, index) => <Experience CompanyName={ele.CompanyName}
                        Date={ele.Date} JopDesc={ele.JopDesc} turn={ele.Turn} key={index} />)}
                </div>
            </div>
        </motion.section>
    );
}

export default Resume;