import React, { useState } from 'react'
    import { FiSun, FiMoon, FiUser, FiLock, FiMail } from 'react-icons/fi'
    import ConnectionIcon from './components/ConnectionIcon'

    export default function App() {
      const [darkMode, setDarkMode] = useState(false)

      return (
        <div className={darkMode ? 'dark' : ''}>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-end">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {darkMode ? (
                    <FiSun className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                  ) : (
                    <FiMoon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                  )}
                </button>
              </div>

              <div className="max-w-md mx-auto mt-20 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl dark:shadow-white/10">
                <div className="flex justify-center mb-4">
                  <ConnectionIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
                  Welcome Back
                </h1>

                <form className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                        Remember me
                      </span>
                    </label>

                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors duration-200"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
