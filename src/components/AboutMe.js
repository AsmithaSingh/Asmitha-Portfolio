import React from 'react';


const AboutMe = props => {
    return (
        <div  name="About Me">
            <div>
            <p className='font-bold text-xl ml-5'>Technical Skills</p> 
            
            <b className='bg-black text-white rounded-sm ml-6 '>MySQL</b>
            <b className='bg-black text-white rounded-sm ml-6 '>SQL</b>
            <b className='bg-black text-white rounded-sm ml-6 '>Java</b>
            <b className='bg-black text-white rounded-sm ml-6 '>SpringBoot</b>
            <b className='bg-black text-white rounded-sm ml-6 '>Angular</b>
            <b className='bg-black text-white rounded-sm ml-6 '>ReactJS</b>
            <b className='bg-black text-white rounded-sm ml-6 '>Git</b>
            
            </div><br></br>
            <div>
            <p className='font-bold text-xl ml-5'>Soft Skills</p>
            <b className='bg-black text-white rounded-sm ml-6 '>Adaptability to Environment</b>
            <b className='bg-black text-white rounded-sm ml-6 '>Leadership</b>
            <b className='bg-black text-white rounded-sm ml-6 '>Team work</b>
            <b className='bg-black text-white rounded-sm ml-6 '>Taking responsibility</b>
            <b className='bg-black text-white rounded-sm ml-6 '>Self motivated</b>
            <b className='bg-black text-white rounded-sm ml-6 '>Communication</b>
            </div>
        </div>
    );
};



export default AboutMe;