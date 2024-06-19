import { motion } from "framer-motion";
import React, { useState } from "react";
import GetStartedModal from "./GetStartedModal";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";

const Modals = ({ isOpen, onClose }) => {
    const [formType, setFormType] = useState("getstarted");

    return (
        isOpen && (
            <div>
                <div className="fixed top-0 left-0 bg-black/80 w-full h-[100dvh] z-[50]" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{}}
                    className=" rounded-[60px] fixed left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] lg:w-[40%] w-[100%] sm:w-[80%] h-auto z-[100]"
                >
                    {formType === "getstarted" && (
                        <GetStartedModal onClose={onClose} setFormType={setFormType} />
                    )}
                    {formType === "signup" && (
                        <SignUpModal setFormType={setFormType} />
                    )}
                    {formType === "signin" && (
                        <SignInModal setFormType={setFormType} />
                    )}
                </motion.div>
            </div>
        )
    );
};

export default Modals;
