import {createContext, useContext, useEffect, useState} from "react";

//? 1- Defining


export const UserContext = createContext()



//? 3- Cosume function (custom hook), contexti hook olarak yakaladık, bu da bir yöntem
export const useUserContext = () => {
  return useContext(UserContext)
}


// ? 2-ProviderComponent
const UserContextProvider = ({children})=>{

    const [users, setUsers] = useState([]);




  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const changeWidth = (id, width) => {
    setUsers(
      users.map((user) =>
       user.id === id ? { ...user, width: width } : user
      ))
  }




const values={users, changeWidth}

return  (
    <UserContext.Provider value={values}>        
 {children}
    </UserContext.Provider>
    
    
    
    )}


    export default UserContextProvider;   
