
import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

} from '../constants/userConstants'

const URL = 'https://mortuary.herokuapp.com/api'

export const login = (email, password) => async (dispatch) => {
    try{

        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type':'application/json'
            }
        }
        
        const {data} = await axios.post(URL+'/login',
        {'email':email, 'password':password},
        config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })

        if(data.status !== false)
        {
            localStorage.setItem('userInfo', JSON.stringify(data))
        }

    }catch(error)
    {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
}

export const register = (role_id, name, email, password, role_name) => async (dispatch) => {
    try{

        let obj = JSON.parse(localStorage.getItem('userInfo'));
        if(role_id === 1){
            role_name = 'Admin';
        }  
        else if(role_id === 2){role_name = 'Customer Service'}
        else if (role_id === 3){role_name = 'Spord'}
        else if(role_id === 4){role_name = 'Budget'}
        else if(role_id === 5){role_name = 'Accounting'}
        else if(role_id === 6){role_name = 'Supervisor'}
        else if(role_id === 7){role_name = 'Guest'}
        else {role_name = 'Unknown Role'}


        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type':'application/json',
                "Accept": "application/json",
                'Authorization' : `Bearer ${obj.message.original.access_token}`
            }
        }
        
        const {data} = await axios.post(URL+'/register',
        {'name':name, 'email':email, 'password':password, 'role_id':role_id, 'role_name': role_name},
        config
        )

        if(data.success) {
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload:data
            })
        } else {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload:data
            })
        }

    }catch(error)
    {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}