import {useState, React} from "react";
import Complementry from "../../assets/img/complementry.jpeg";
import Exchange from "../../assets/img/easy_exchange.jpeg";
import Wrapping from "../../assets/img/gift_wrapping.jpeg";
import GlassPanel from "../GlassPanel/GlassPanel";
import { Expand } from "lucide-react";

const Items = () => {
  const panelItem = [
    {id:1,
      text:"fas",
      header:'head'
    }
  ]


  const [click, setClick] = useState(false);

  const setAction = ()=>{

  }

  return (
      <div className=" relative bg-[#F9F9F9] min-h-[12rem] min-w-full m-0 border-2 border-black grid grid-cols-3 gap-4">
       
       <button onClick={setAction}>
        <img
          src={Complementry}
          className="overflow-hidden  hover:-translate-y-2 transition-tranform ease-in-out duration-300 hover:cursor-pointer"
          alt="complementry_item"
        />
       </button>
        
        <button onClick={setAction}>
          <img
          src={Wrapping}
          className="overflow-hidden  hover:-translate-y-2 transition-tranform ease-in-out duration-300 hover:cursor-pointer"
          alt="Wrapping"
        />
        </button>
        
        <button onClick={setAction}>
          <img
          src={Exchange}
          className="overflow-hidden  hover:-translate-y-2 transition-tranform ease-in-out duration-300 hover:cursor-pointer"
          alt="exchange"
        /> 
        </button>
        
        {click &&
        <GlassPanel />
        }
      </div>
      
  
  );
};

export default Items;
