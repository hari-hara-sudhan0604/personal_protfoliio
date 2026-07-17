import { motion } from "framer-motion";

import { fadeUp } from "../../utils/animationVariants";

function FadeUp({ children }) {

    return (

        <motion.div

            variants={fadeUp}

            initial="hidden"

            whileInView="visible"

            viewport={{

                once: true,

                amount: 0.2,

            }}

        >

            {children}

        </motion.div>

    );

}

export default FadeUp;