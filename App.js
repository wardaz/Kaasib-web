import './App.css';
import AutoLayoutExample from './components/Containers';
import Find from './components/find';
import CenterMode from './components/Slider2';
import MasterSlider from './components/slider';
import Testimonial from './components/testimonial'
import Footer from './components/Footer'
import Nav1 from './components/navbar';
import JobType from './components/container2';
import Featured from './components/featured';
import BestJob from './components/Job';

function App() {
  return (
   <>
   <div>
      <Nav1/>
   </div>

   <div>
      <BestJob/>
   </div>
 
   <div>
   <h1>Job Type</h1>
   <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
      <JobType/>
     </div>

   <div className=' mt-5'>
   <Featured/>
   </div>

   <div className="mt-5 mt-5 first">
   <h1>TOP COMPANIES</h1>
   <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
  
   <AutoLayoutExample/>
   
   </div>

<div className='mb-5 mt-5 second'>
   <h1>NEW JOBS</h1>
   <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
   <CenterMode/>
   </div>

<div className=' mt-5 search' style={{height: "100%", margin:"auto"}}><Find/></div>
   

    <div className='mb-5 third'>
   <h1>READY TO JOIN</h1>
   <p>Featured employees profile</p>
   <MasterSlider/>

   </div>

   <div className='mb-0'><Testimonial/></div>
   <div className='mt-0'><Footer/></div>


   </>
  );
}

export default App;
