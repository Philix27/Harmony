import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Modal = ({ showModal, setShowModal, title, children }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className="backdrop"
            onClick={() => setShowModal(false)}
          />
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className="container"
          >
            {/* <Heading1>{title}</Heading1> */}
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
