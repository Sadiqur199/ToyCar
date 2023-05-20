import { useEffect } from "react";

const UseTitle = event=>{
  useEffect(()=>{
   document.title = event
  },[event])
}
export default UseTitle