"use client"
import React from 'react'
import Landing from '../../core/components/landing/Landing';
import styles from './Login.module.scss';
import { useRouter } from 'next/navigation';
import badge from '@/assets/badge.png'
import { authUtil } from "@/core/utils/auth.util";

const LoginPage = () => {
    const router = useRouter();

    const handleLogin = () => {
        authUtil.setAuthToken('jrsmth', 'password');
        router.push('/');
    }

    return (
        <main>
            <Landing></Landing>
            <h1 id={styles.backingHeader}>Cardinal</h1>
            <section id={styles.loginSection}>
                <img id={styles.badge} src={badge.src} alt="badge"></img>
                <h2>Login</h2>
                <form action="" method="post" id="login-form">
                    <div className="form-control">
                        <input type="text"
                               placeholder="Username"
                               id="username"
                               name="username"
                               autoFocus
                               spellCheck="false"
                               autoComplete="off"
                               className={styles.loginInput}>
                        </input>
                    </div>
                    <div className="form-control">
                        <input type="password"
                               placeholder="Password"
                               id="password"
                               name="password"
                               autoFocus
                               autoComplete="off"
                               className={styles.loginInput}>
                        </input>
                        <p>Lost Password? <span>reset</span></p>
                    </div>
                    <div className={styles.formControl}>
                        <button type="button" onClick={handleLogin}>Enter</button>
                        <p>Don’t have an account? <span>register</span></p>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default LoginPage;
