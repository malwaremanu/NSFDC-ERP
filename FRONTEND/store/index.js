// store/index.js
export const state = () => ({
    user: null,
    org_id : 'ccvkwpl41wm1',
    auth_domain : 'https://auth0.manupal.dev',
  })
  
  export const mutations = {
    setUser(state, user) {
      state.user = user
    },
  }