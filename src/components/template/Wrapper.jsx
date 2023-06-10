'use client'
import { motion } from "framer-motion";
export default function PageWrapper(props) {
    return (
        <motion.div
            className={`${props.className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 1 }}>
            {props.children}
        </motion.div>
    )
}