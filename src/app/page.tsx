'use client'
import { useState } from "react"
import axios from "axios"

export default function Index() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const sendDataToMailer = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post('/api/sendEmail', {name, email})
    }
    catch(err) {
      console.error(err)      
    }
  }

  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col p-4 w-1/2 h-1/3">
        <input 
          type="text" 
          placeholder="Enter name"
          className="p-2 outline-none border-sky-700 border-[1.4px] my-2"
          onChange={e => setName(e.target.value)}
          />
        <input 
          type="email" 
          placeholder="Enter email"
          className="p-2 outline-none border-sky-700 border-[1.4px] my-2"
          onChange={e => setEmail(e.target.value)}
        />
        <button 
          className="p-2 bg-sky-700 text-white my-3 border border-black"
          onClick={(e) => sendDataToMailer(e)}
        >
          Send
        </button>
      </div>
    </main>
  )
}