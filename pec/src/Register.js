import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div class="form-container">
                <center> <p class="regtitle">Register </p></center>
                <center><p class="message">Signup now and get full access to our app. </p></center>
                <form class="form">
                    <input type="email" class="input" placeholder="Email" />
                    <input type="password" class="input" placeholder="Password" />
                    <input type="password" class="input" placeholder="Confirm Password" />

                    <button class="regbutton">
                        Register
                        <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                            <path
                                clip-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </form>
                <p class="sign-up-label">
                    Already have an account?<span class="sign-up-link"><Link to='/login'>Sign In</Link></span>
                </p>
            </div>

        </>
    )
}
