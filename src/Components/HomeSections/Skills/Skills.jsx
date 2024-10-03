import { useRef } from 'react';
import SkillLoader from './SkillLoaders/SkilLoaders';
import './Skills.scss';
import { AIDevelopingSkills, AIReasheringSkills, DataSkills, SoftSkills } from './SkillsFile';
import { motion, useInView } from 'framer-motion';

function Skills() {
    const Title1 = useRef();
    const InView = useInView(Title1, { once: true });

    return (
        <section className="Skills" id='Skills'>
            <div className="Skiils_pt1 px-5">
                <h2>Skills</h2>
                <p>Welcome to the Skills section! Here, I'm excited to showcase the expertise and proficiency I bring to the
                    world of AI and data science. As an AI Researcher, Data Scientist, and AI Developer, I've honed my abilities
                    across various domains to develop intelligent, scalable, and impactful solutions. Below, you'll find a
                    snapshot of the skills I've cultivated throughout my journey, reflecting my commitment to innovation and
                    excellence in AI and data-driven technologies:
                </p>
                <div className="d-flex flex-column" ref={Title1}>
                    <motion.h3 className='fs-4 w-100 d-flex justify-content-center align-items-center mt-2 mb-4'
                        initial={{ opacity: 0, y: 20 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}>Data Science</motion.h3>
                    <div className="Skills_Statics">
                        {DataSkills.map((skill, index) =>
                            <SkillLoader key={index} Precentage={skill.Precentage} Title={skill.Title} />)}
                    </div>
                    <motion.h3 className='fs-4 w-100 d-flex justify-content-center align-items-center my-5 mb-4'
                        initial={{ opacity: 0, y: 20 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}>AI Researchering</motion.h3>
                    <div className="Skills_Statics">
                        {AIReasheringSkills.map((skill, index) =>
                            <SkillLoader key={index} Precentage={skill.Precentage} Title={skill.Title} />)}
                    </div>
                    <motion.h3 className='fs-4 w-100 d-flex justify-content-center align-items-center my-5 mb-4'
                        initial={{ opacity: 0, y: 20 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }} >AI Developing</motion.h3>
                    <div className="Skills_Statics">
                        {AIDevelopingSkills.map((skill, index) =>
                            <SkillLoader key={index} Precentage={skill.Precentage} Title={skill.Title} />)}
                    </div>
                    <motion.h3 className='fs-4 w-100 d-flex justify-content-center align-items-center my-5 mb-4'
                        initial={{ opacity: 0, y: 20 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}>Soft Skills</motion.h3>
                    <div className="Skills_Statics">
                        {SoftSkills.map((skill, index) =>
                            <SkillLoader key={index} Precentage={skill.Precentage} Title={skill.Title} />)}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;