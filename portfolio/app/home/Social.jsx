
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const social = [
    {
        icon:<FaGithub/> , path : "https://github.com/ShashmithaBan"
    },
    {
        icon:<FaLinkedinIn/> , path : "https://www.linkedin.com/in/shashmitha-bandara-90180225a/"
    },
    {
        icon:<FaFacebookF/> , path : "https://www.facebook.com/gimansa.bandara"
    },
    {
        icon:<PiInstagramLogoFill/> , path : "https://www.instagram.com/shashmitha_2001/"
    },
]


export const Social = ({containerStyle , iconStyle}) => {
  return (
    <div className={containerStyle}>
        {
            social.map((item , index)=>
            {return (<Link href={item.path} key={index} className={iconStyle}>
                {item.icon}
                </Link>);}
            )
        }
    </div>
  )
}
