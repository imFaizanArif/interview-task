import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeaturesCard = ({ title, img, no, desc, }) => {
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
        <motion.div animate={inView ? "visible" : "hidden"}
            variants={variants}
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeIn" }}
            ref={ref}
        >
            <div className={`md:block hidden ml-0  group cursor-pointer animate-padding w-full`}>
                <div
                    className={`flex space-x-6 py-12 px-48 items-center justify-between relative group-hover:animate-fade-down animate-fade-up w-full group-hover:bg-layer-2 group-hover:text-layer-8`}>
                    <h2 className={`text-6xl font-semibold group-hover:text-stroke opacity-60`}>{title}</h2>
                    <img src={img} alt={`product`}
                        className={`absolute z-10 left-[44%] hidden group-hover:animate-fade-down animate-fade-up group-hover:inline-block w-1/4 transform -rotate-45`} />
                    <p className={`hidden group-hover:inline-block text-lg ml-24 w-1/3 group-hover:text-layer-8`}>{desc}</p>
                </div>
            </div>
        </motion.div>

    );
};

export default FeaturesCard;
