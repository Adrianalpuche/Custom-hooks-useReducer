import React, {createContext, useContext, useState,FormEvent} from 'react'


function Formulario2(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState(false);

    const login = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmit(true)
    }


    return(
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
              <form className="bg-white	shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm  mb-2">Username</label>
                  <input className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" type="text" placeholder='User'  value={username} onChange ={(e) => setUsername (e.target.value)} />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm  mb-2">Password</label>
                  <input className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" placeholder='Password' value={password} onChange ={(e) => setPassword (e.target.value) }/>
                </div>
                <div className="flex justify-center">
                  <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value='Login' />
                </div>
              </form>
            </div>
          </div>        
    );
}

export default Formulario2;