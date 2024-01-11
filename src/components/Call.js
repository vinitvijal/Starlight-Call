import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function Call() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const getUserMedia = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({video: true});
          videoRef.current.srcObject = stream;
        } catch (err) {
          console.log(err);
        }
      };


      
    useEffect(() => {
        getUserMedia();
      }, []);

      function vidOff() {
        var stream = videoRef.current.srcObject;
      
        if(videoRef.current.srcObject != null){
            var tracks = stream.getTracks();
            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                track.stop();
              }
              videoRef.current.srcObject = null;

        }else{
            getUserMedia();
        }


        
      
      }
      




  return (
    <div style={{height:'90vh'}} className='flex justify-center items-center'>

            <div style={{width:'95%', height:'95%', position:'relative', borderRadius:'15px', border:'1px solid grey'}}>
            </div>
            <div style={{position:'absolute', right:'6vw', bottom:'10vh', width:'16%', borderRadius:'15px', border:'1px solid grey'}}>
                <video style={{width:'100%', objectFit:'cover', borderRadius:'15px'}} ref={videoRef} autoPlay></video>
            </div>
            <div style={{position:'absolute', bottom:'10px'}}>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-full outline-none text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">Mute</button>
            <button type="button" onClick={vidOff} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">Camera On</button>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">ShareScreen</button>

            <button type="button" onClick={()=>{navigate('/')}} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 ">
                End Call
            </button>

            </div>
    </div>
  )
}
