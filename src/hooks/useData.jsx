import { useContext } from "react";
import { Data } from "../context/UserContextProvider";


const useData =()=>{return useContext(Data)}
export default useData;