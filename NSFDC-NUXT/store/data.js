// store/data.js
export const state = () => ({
    user: {
      "msg" : "success"
    },
    token : {
      "auth_token" : null,
      "dtoken" : null,
    },
    kinde_details : {
      client_id : process.env.client_id,// "19ff825b368c4ff3a3cf697348c878d4",
      redirect_url : process.env.redirect_url, // "http://localhost:3000/auth",
      host_url : process.env.host_url, // "https://nsfdc.kinde.com"
    },    
    is_authenticated : false
  });
  
  export const mutations = {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user))
    },
    setAuthentication(state, status) {
      state.is_authenticated = status;
    },
    setToken(state, token){
      state.token.auth_token = token
      localStorage.setItem('token', token)
    },

    DecodeToken(state, tk){
      state.token.dtoken = tk
      localStorage.setItem('u', JSON.stringify(tk))
      localStorage.setItem('p', JSON.stringify(tk).permissions)
    }

  };