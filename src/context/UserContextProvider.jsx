import React, { createContext, useState } from "react";

const Data = createContext();

function UserContextProvider({ children }) {
  const [users, setusers] = useState([{
    Fullname: "defaultname",
    useremail: "defaultemail",
    userpass: "defaultpass"
  }]);

  const [loginuser, setloginuser] = useState("");

  const [prodcard, setprodcard] = useState([]);

  return (
    <div>
      <Data.Provider value={{ users, setusers, loginuser, setloginuser, prodcard, setprodcard }} >
        {children}
      </Data.Provider>
    </div>
  )
}

export default UserContextProvider;
export { Data };