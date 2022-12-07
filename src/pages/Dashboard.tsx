import { motion } from 'framer-motion';

function Dashboard() {
  return (
    <motion.div className='App' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h1>Dashboard</h1>
    </motion.div>
  );
  //TODO: Fetch DBD codes
  //TODO: Make dashboard look nice, add a logout button 
  //TODO: Fix it so it works
}

export default Dashboard;