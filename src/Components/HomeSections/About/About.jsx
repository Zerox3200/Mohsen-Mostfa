import './About.scss'
import AboutPhoto from './../../../Images/view-3d-man-holding-laptop.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function About() {
    const ref = useRef();
    const InView = useInView(ref, { once: true })
    return (
        <section className="About px-5" id='About' >
            <div className="About_pt1">
                <h2>About</h2>
                <p>Welcome to My Porftolio! As an AI Researcher, Data Scientist, and AI Developer, I leverage advanced
                    machine learning techniques and data-driven insights to solve complex problems. I specialize in
                    designing, training, and deploying cutting-edge AI models, while continuously exploring new algorithms
                    and methods to improve performance. My expertise in data science allows me to analyze large datasets,
                    extract meaningful patterns, and make informed decisions. As a developer, I focus on building scalable
                    AI applications, implementing end-to-end solutions that integrate research breakthroughs into real-world
                    systems. My work drives innovation by bridging the gap between theoretical research and practical application.
                </p>
            </div>
            <div className="About_pt2" >
                <motion.img src={AboutPhoto} alt="..." loading='lazy' initial={{ opacity: 0, x: -5 }}
                    animate={InView && { opacity: 1, x: 0 }}
                    transition={{ duration: .8, ease: "linear", delay: .3 }}
                />

                <motion.div className="About_pt2_Desc"
                    initial={{ opacity: 0, x: 5 }}
                    animate={InView && { opacity: 1, x: 0 }}
                    transition={{ duration: .8, ease: "linear", delay: .3 }}
                >
                    <h3 ref={ref}>AI Developer</h3>
                    <p>As an AI Researcher, and AI Developer, I bridge the gap between theoretical advancements
                        and real-world applications. My work focuses on leveraging machine learning and artificial intelligence
                        to extract actionable insights from data, build predictive models, and develop intelligent systems. I
                        conduct cutting-edge research to explore new algorithms and techniques, while applying my expertise in
                        data science to analyze complex datasets and drive data-driven decision-making. As a developer, I
                        implement scalable, end-to-end AI solutions, ensuring seamless integration and deployment of AI models
                        in production environments. Explore my work to see how innovation and practical problem-solving converge
                        in the fields of AI and data science.
                    </p>
                    <div className="About_pt2_Desc_details">
                        <p><ArrowForwardIosIcon />  <b>Birthday</b> 24 June 1983</p>
                        <p><ArrowForwardIosIcon />  <b>Age</b> 41 </p>
                        <p><ArrowForwardIosIcon />  <b>Degree</b> Bachelor</p>
                        <p><ArrowForwardIosIcon />  <b>Phone</b> +20 102 556 5499</p>
                        <p><ArrowForwardIosIcon />  <b>Email</b> mohsen.mostafa83555@gmail.com</p>
                        <p><ArrowForwardIosIcon />  <b>Country</b> Egypt</p>
                        <p><ArrowForwardIosIcon />  <b>City</b> Cairo</p>
                        <p><ArrowForwardIosIcon />  <b>Freelance</b> Available</p>
                    </div>
                    <p>Maintainable code that leverages the power of reusable algorithms and frameworks, ensuring efficient
                        AI and data-driven solutions. I believe in the art of simplicity and precision, where every line of
                        code serves a purpose, contributing to the accuracy and performance of AI models and data pipelines.
                        By harnessing the capabilities of cutting-edge AI libraries and tools, I optimize workflows, boosting
                        productivity without compromising on quality. Whether it's developing novel machine learning models,
                        conducting deep data analysis, or architecting scalable AI systems, I adhere to best practices that
                        drive innovation and efficiency. Explore my portfolio to see how I combine clean code principles with
                        powerful AI frameworks to create impactful solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default About;