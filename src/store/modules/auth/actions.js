export default {
    login(){

    },
    async signup(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+process.env.VUE_APP_FIREBASE_API_KEY,{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })
        const responseData = await response.json();
        if(!response.ok){
            console.log(responseData)
            const error = new Error(responseData.message || 'Failed to authenticate');
            throw error;
        }
        console.log(responseData);
        context.commit('setUser',{
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    }

}