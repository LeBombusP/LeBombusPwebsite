import { motion } from 'framer-motion';
import NavIcons from '../components/navIcons';

function Dashboard() {
  const dark: boolean = localStorage.getItem('dark') === 'true';
  return (
    <motion.div className='App' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <NavIcons dark={dark} link={"out"} />
      <h1 className='mt-0'>Dashboard</h1>
    </motion.div>
  );
  //TODO: Fetch DBD codes
  //TODO: Make dashboard look nice, add a logout button 
  //TODO: Fix it so it works
}

export default Dashboard;