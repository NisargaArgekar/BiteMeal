import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";


const Categories =[
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className="text-green-600 w-[60px] h-[60px]" />

    },
    {
        id:2,
        name:"breakfast",
        icon:<MdOutlineFreeBreakfast className="text-green-600 w-[60px] h-[60px]"/>
    },
    {
        id:3,
        name:"soups",
        icon:<LuSoup className="text-green-600 w-[60px] h-[60px]" />
    },
    {
        id:4,
        name:"pasta",
        icon:<CiBowlNoodles className="text-green-600 w-[60px] h-[60px]" />
    },
    {
        id:5,
        name:"main_course",
        icon:<GiForkKnifeSpoon className="text-green-600 w-[60px] h-[60px]" />
    },
    {
        id:6,
        name:"pizza",
        icon:<GiFullPizza className="text-green-600 w-[60px] h-[60px]" />
    },
    {
        id:7,
        name:"burger",
        icon:<GiHamburger className="text-green-600 w-[60px] h-[60px]" />
    }
 ]

 export default Categories