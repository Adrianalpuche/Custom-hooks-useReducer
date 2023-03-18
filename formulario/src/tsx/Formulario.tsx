// @ts-nocheck
import React, {createContext, useContext, useState,FormEvent,useReducer} from 'react';
import './../css/formulario.css';
import useForm from '../hooks/useForms.ts';

interface Login{
  username:string,
  password:string,
  validating: Boolean,
  token: string | null,
  inter: false,
}

type AuthAction = 
| { type: 'logout' }
| { type: 'login', payload: LoginPayload };

interface LoginPayload {
  username: string,
  password: string,
}

const initialState: Login = {
  username: '',
  password: '',
  validating:true,
  token:null,
};



function authReducer(state: Login, action: AuthAction): Login {
  switch (action.type) {
    case "login":
      return { ...state, validating: false, token: "1234567890",inter:true };
    case "logout":
      return { ...state, validating: true, token: null,inter:false };
    default:
      return state;
  }
}


function Formulario(){

  const [values, handleChange] = useForm(initialState);
  const [submit, setSubmit] = useState(false);
  const [state, dispatch] = useReducer(authReducer, initialState);


  const login = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (values.username === "JohnM" && values.password === "Lpas") {
        dispatch({ type: "login", payload: { username: values.username, password: values.password } });
        setSubmit(true)
      } else {
        alert("Invalid username or password");
      }
  }
  const logout = () => {
    dispatch({ type: "logout" });
    setSubmit(false);
  };

        return(
            <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
              <form className="bg-white	shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={login}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm  mb-2">Username</label>
                  <input
                   className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bor" 
                   type="text" 
                   placeholder='User' 
                   name='username'  
                   value={values.username} onChange ={(e) => handleChange (e) } />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm  mb-2">Password</label>
                  <input
                   className="border py-2 px-4 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" 
                   placeholder='Password' 
                   name='password'
                    value={values.password} onChange ={(e) => handleChange (e) }/>
                </div>
                <div className="flex justify-center">
                  <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value='Login' />
                </div>
                <div className="flex justify-center pt-1 ">
                  <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value='Logout' onClick={logout}/>
                </div>
                {submit && <h4> Welcome {values.username}</h4>} 
              </form>
            </div>
          </div>          
        );
}

export default Formulario