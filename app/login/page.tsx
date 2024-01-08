import React from 'react'
import Landing from '../components/landing/Landing';
import styles from './Login.module.css';

const LoginPage = () => {
    return (
        <main>
            <Landing></Landing>
            <h1>Cardinal</h1>
            <section className="login-section">
                <img src="assets/badge.png" alt="badge"></img>
                <h2>Login</h2>
                <form action="" method="post" id="login-form">
                    <div className="form-control">
                        <input type="text"
                               placeholder="Username"
                               id="username"
                               name="username"
                               autoFocus
                               spellCheck="false"
                               autoComplete="off">
                        </input>
                    </div>
                    <div className="form-control">
                        <input type="password"
                               placeholder="Password"
                               id="password"
                               name="password"
                               autoFocus
                               autoComplete="off">
                        </input>
                        <p>Lost Password? <span>reset</span></p>
                    </div>
                    <div className="form-control">
                        <button type="button">Enter</button>
                        <p>Don’t have an account? <span>register</span></p>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default LoginPage;
