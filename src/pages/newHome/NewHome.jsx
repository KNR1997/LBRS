import React from "react";
import NavbarNew from "../../components/NEW/NavbarNew";
import Hero from "../../components/hero/Hero";
import Explore from "../../components/explore/Explore";
import { motion } from "framer-motion";

function NewHome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavbarNew />
      <Hero />
      <Explore />
    </motion.div>
  );
}

export default NewHome;
