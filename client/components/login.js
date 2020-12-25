import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../assets/scss/login.scss'

const Login = () => {
  const [loginData, setLoginData] = useState([])
  const [loginValid, setLoginValid] = useState('/')
  const checkLoginInfo = () => {
    if (loginData.username === 'admin' && loginData.password === 'admin') {
      setLoginValid('/projects')
    } else {
      console.log('you messed up')
    }
  }
  return (
    <div className="flex justify-center h-screen">
      <form action={`${loginValid}`} className="login__form flex flex-col mt-40 w-1/4">
        <label htmlFor="username" className="login__label ml-3 mb-2 ">
          Логин
        </label>
        <input
          type="text"
          id="username"
          required
          placeholder="Логин"
          className=" border border-grey-700 outline-none py-2 px-3 mb-4 text-lg"
          onChange={(e) => {
            setLoginData({ ...loginData, username: e.target.value })
          }}
        />
        <label htmlFor="password" className="ml-3 mb-2">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          required
          placeholder="Пароль"
          className=" border border-grey-700 outline-none py-2 px-3 text-lg"
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value })
          }}
        />
        <div className="py-3">
          <label htmlFor="passRem" className="passRememberLabel text-lg cursor-pointer">
            <input type="checkbox" id="passRem" className="mr-2 cursor-pointer" />
            <span className="passRememberCheckmark" />
            Запомнить пароль
          </label>
        </div>
        <button
          type="submit"
          className="loginBtn text-white text-center py-2 transition duration-500 ease-in-out focus:outline-none"
          onClick={() => {
            checkLoginInfo()
          }}
        >
          Войти
        </button>
        <Link to="#" className="forgotPass mt-4 transition duration-500 ease-in-out">
          Забыли пароль?
        </Link>
      </form>
    </div>
  )
}

export default Login
