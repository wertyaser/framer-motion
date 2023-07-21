import * as React from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center lg:mx-48">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 2 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img src={logo} className="w-32 rounded-lg bg-slate-400" />
      </motion.div>
    </div>
  );
};

export default App;
