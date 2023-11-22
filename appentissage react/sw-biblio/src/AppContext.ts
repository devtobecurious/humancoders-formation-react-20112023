import React from "react";

export const AuthContext = React.createContext({
    isLogged: false
})

// export const AppContext = () => {
//     return (
//         <AuthContext.Provider>
//             // Ici seront les composants
//         </AuthContext.Provider>
//     );
// }