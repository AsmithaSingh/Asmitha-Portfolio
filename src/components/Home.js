import React from 'react';
import { Link } from 'react-scroll';
import AboutMe from './AboutMe';
import Asmitha from "../Images/AsmithaImage.png"


const Home = props => {
    return (
        <div className='h-height grid grid-cols-3 text-white' name="Home">
            <div className='bg-mycolor flex justify-center items-center col-span-2 border-white '>
                <div>
               <p className='text-2xl font-bold ml-5'>Hello,Glad to see you!!</p><br></br>
               <p className='ml-5 mr-5 font-semibold text-xl text-justify'>I am an enthusiastic and eminent full stack developer dedicated in building and optimizing customer focused
                websites and applications.Proven evidence of technical proficieny and result driven with calm and focused demeanor. Seeking full stack role to improve my skills together with my contribution for the growth and development of the organization.
               </p>
               
               </div>
            </div>
            <div className='h-height'>
                <img className='h-height w-full' src={Asmitha}/>
            </div>
            
        </div>
    );
};



export default Home;