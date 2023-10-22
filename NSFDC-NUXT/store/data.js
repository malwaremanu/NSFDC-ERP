// // store/counter.js
// export const state = () => ({
//     user: {
//         "msg" : "success"
//     },
//     kinde_details : {
//         client_id : "ee19eb7d7d684369a75ae4264cab5907",
//         redirect_url : "http://localhost:3000/auth",
//         host_url : "https://nsfdc-dev.eu.kinde.com"
//     },    
//     is_authenticated : false
//   });
  

// store/data.js
export const state = () => ({
    user: {
      "msg" : "success"
    },
    kinde_details : {
      client_id : "ee19eb7d7d684369a75ae4264cab5907",
      redirect_url : "http://localhost:3000/auth",
      host_url : "https://nsfdc-dev.eu.kinde.com"
    },    
    is_authenticated : false
  });
  
  export const mutations = {
    setUser(state, user) {
      state.user = user;
    },
    setAuthentication(state, status) {
      state.is_authenticated = status;
    },
  };