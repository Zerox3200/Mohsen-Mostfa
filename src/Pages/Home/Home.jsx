import Nav from '../../Components/HomeNav/Nav';
import About from '../../Components/HomeSections/About/About';
import Intro from '../../Components/HomeSections/Intro/Intro';
import Resume from '../../Components/HomeSections/Resume/Resume';
import Service from '../../Components/HomeSections/Service/Service';
import Skills from '../../Components/HomeSections/Skills/Skills';
import './Home.scss'
import { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import Projects from '../../Components/HomeSections/Projects/Projects';
import Footer from '../../Components/HomeSections/Footer/Footer';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    return (
        <>
            {!isLoading ?
                <>
                    <div className="home-flex md:h-screen">
                        <Nav />
                        <section className="Home">
                            <Intro />
                            <About />
                            <Skills />
                            <Resume />
                            <Service />
                            <Projects />
                            <Footer />

                        </section>
                    </div>

                </> :
                <Loading />}
        </>

    );
}

export default Home;