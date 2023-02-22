
import { IconContext } from 'react-icons';

import { IoIosSearch  } from 'react-icons/io';
import { GoMarkGithub , GoLocation , GoPrimitiveDot } from 'react-icons/go';
import { HiOutlineMail , HiOutlinePhone } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { DiHtml5 , DiCss3 , DiJavascript1 , DiReact , DiDotnet  } from 'react-icons/di';
import { RiEnglishInput } from 'react-icons/ri';

import { FaNodeJs } from 'react-icons/fa';


export const ChooseIcon = keyword => {
    const CheckWord = keyword.toUpperCase() ;
    switch( CheckWord ){
        case "GIT":{
            return <GoMarkGithub />
        }
        case "LK":{
            return <BsLinkedin />
        }
        case "MAIL":{
            return <HiOutlineMail />
        }
        case "CALL":{
            return <HiOutlinePhone />
        }
        case "LOCATION":{
            return <GoLocation />
        }
        case "HTML":{
            return <DiHtml5 />
        }
        case "CSS":{
            return <DiCss3 />
        }
        case "JS":{
            return <DiJavascript1 />
        }
        case "REACT":{
            return <DiReact />
        }
        case "DONET":{
            return <DiDotnet />
        }
        case "NODEJS":{
            return <FaNodeJs />
        }
        case "EN":{
            return <RiEnglishInput />
        }
        case"SEARCH":{
            return <IoIosSearch />
        }
        default:{
            return <GoPrimitiveDot />
        }
    } 
}

export default function StyleIcon({ keyword="" , color , size=16 }){
    
    return (
        <IconContext.Provider value={{ color: color , size : size }}>
            { ChooseIcon(keyword) }
        </IconContext.Provider>
    )
    
}