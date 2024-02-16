import React from 'react';
import FeaturesCard from "./FeaturesCard.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { details1 } from '../../assets/index.js';

const Features = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
        }
    };
    return (
        <section className={`bg-layer-8`}>
            <div>
                <div className={`ml-0 md:ml-12 py-28 flex flex-wrap`}>
                    <motion.div animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        exit="hidden"
                        transition={{ duration: 1, ease: "easeIn" }}
                        ref={ref}
                        className={`w-full md:w-1/2 mr-0 md:mr-[150px]`}>
                        <h1 className='text-4xl font-semibold ml-36'>Features List Highlights</h1>
                    </motion.div>

                </div>
                <div className={`pb-28`}>
                    <FeaturesCard img={details1} no={`1`} title={`Find Your Opponent`}
                        desc={`Our product design blends form, function, and innovation, catering to real-world needs while captivating your audience.`} />
                    <FeaturesCard img={details1} no={`2`} title={`Challenge Your Friends`}
                        desc={`Merging functionality and aesthetics, we craft captivating web solutions for seamless experiences across devices.`} />
                    <FeaturesCard img={details1} no={`3`} title={`Organize Tournaments`}
                        desc={`Through our UI/UX services create engaging, intuitive interfaces for unforgettable digital journeys that resonate with your audience.`} />
                    <FeaturesCard img={details1} no={`4`} title={`Climb The Rankings`}
                        desc={`Beyond a logo, your brand's identity is a waiting story. Our experts define and express its essence, crafting impactful identities that linger.`} />
                    <FeaturesCard img={details1} no={`5`} title={`Publish Your Scores`}
                        desc={`Embrace design systems that unify your brand experience across touch-points, ensuring visual consistency and streamlined workflows.`} />
                    <FeaturesCard img={details1} no={`5`} title={`Compete for Prizes`}
                        desc={`Embrace design systems that unify your brand experience across touch-points, ensuring visual consistency and streamlined workflows.`} />
                </div>
            </div>
        </section>
    );
};

export default Features;
