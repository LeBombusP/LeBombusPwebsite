import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function ErrorPage() {
  return (
    <motion.div className='App' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h1>No, i don't think so.</h1>
      <Link to="/">Return home</Link>
    </motion.div>
  );
}

export default ErrorPage;