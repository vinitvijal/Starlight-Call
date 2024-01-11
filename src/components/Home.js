import React from 'react'
import bg from '../bg.svg'
import { useNavigate } from "react-router-dom";
import randomstring from 'randomstring'
import app from '../firebase';
import 'firebase/firestore';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


export default function Home() {
    const navigate = useNavigate();
    const db = getFirestore(app);

    
    const createRoom = async() => {
        console.log('create room');
        const id = randomstring.generate(8);
        const roomRef = await addDoc(collection(db, "rooms",id, 'participants'), {
            name: 'Anya',
            id: id
        });

        console.log(roomRef)
        navigate("/" + id);

          
    }


  return (
    <div className='Home flex justify-evenly items-center' style={{ height:'90vh'}}>
        <section style={{width:'50vw', height:'100%',}} className='flex justify-center items-center'>
            <img src={bg} style={{width:'80%', height:'700%',}} alt=""/>
        </section>
        <section className='flex items-center flex-col h-40 justify-evenly'>
            <h1>Video Chat App</h1>
            <h2>Powered by React, TailwindCSS, and WebRTC</h2>
            <button onClick={createRoom} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Room</button>
        </section>
    </div>
  )
}
