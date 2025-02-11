import React, { useEffect, useRef, useState } from 'react'
import VIDEO from "./video.mp4" 
const RefExample = () => {
    const [play,setPlay] = useState(true);
    const eleRef = useRef();
    let videoRef = useRef();
    //console.log(eleRef);
    useEffect(()=>{
        eleRef.current.style.color="crimson";
        eleRef.current.innerText="React Ref"
    })

    let playORpause=()=>{
        if(play == true){
            videoRef.current.play();
            console.log(play);
            setPlay(false);
        }else{
            videoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
  return (
    <div>
        <h1 ref={eleRef}></h1>
        <video src={VIDEO} ref={videoRef} onClick={playORpause} width={100} height={100}></video>
        <button onClick={playORpause}></button>
        RefExample</div>
  )
}

export default RefExample