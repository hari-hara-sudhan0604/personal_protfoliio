import { motion } from "framer-motion";

function AnimatedPage({ children }) {

    return (

        <motion.main

            initial={{
                opacity:0,
                y:20
            }}

            animate={{
                opacity:1,
                y:0
            }}

            exit={{
                opacity:0,
                y:-20
            }}

            transition={{
                duration:.45,
                ease:"easeOut"
            }}

        >

            {children}

        </motion.main>

    );

}

export default AnimatedPage;