import React from 'react';
import { Link } from "react-scroll";


const Header = props => {
    const contents = [{id:1,names:"Home"},{id:2,names:"About Me"},{id:3,names:"Experience"},{id:4,names:"Education"},{id:5,names:"Awards & Achievement"},{id:6,names:"Contact"}]
    return (
        <div className='bg-white font-black '>
           <div className='text-center font-bold text-2xl mt-5'>Asmitha Singh</div> 
           <div className='flex items-center justify-center'>
            <div>
            {contents.map((content)=> (
                <p className='float-left text-xl p-2 m-4 hover:scale-110 font-semibold' id={content.id}><Link to={content.names}
                spy={true}smooth={true}offset={-90}duration={500}>{content.names}</Link></p>
            ))} 
            </div>
            </div>
        </div>
        
    );
};



export default Header;