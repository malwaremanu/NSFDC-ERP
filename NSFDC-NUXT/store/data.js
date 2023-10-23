// store/data.js
export const state = () => ({
    user: {
      "msg" : "success"
    },
    kinde_details : {
      client_id : "19ff825b368c4ff3a3cf697348c878d4",
      redirect_url : "http://localhost:3000/auth",
      host_url : "https://nsfdc.kinde.com"
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