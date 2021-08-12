import React from 'react'

// import { Container } from 'react-bootstrap'
import { InputFeild } from '@components'

import './loginForm.css'

const LoginForm = () => {
    return (
        <div>
            <div className='dflex'>
                <h1>login form</h1>
                <InputFeild placeholder="E-mail" />
                <button type='button'>Submit</button>

            </div>
            
        </div>
    )
}

export default LoginForm
