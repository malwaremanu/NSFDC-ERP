// store/data.js
export const state = () => ({
    user: {
      "msg" : "success"
    },
    token : null,
    is_authenticated : false
  });
  
  export const mutations = {
    setUser(state, user) {
      state.user = user;
      if (process.client) {
        localStorage.setItem('user', JSON.stringify(user))
      }
      
    },
    setAuthentication(state, status) {
      state.is_authenticated = status;
    },
    
    setToken(state, token){
      state.token = token;
      if (process.client) {
        localStorage.setItem('token', JSON.stringify(token)); // Store in localStorage
      }      
    },
  };