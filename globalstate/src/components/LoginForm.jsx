"use client"
import { useSelector, useDispatch } from "react-redux"
import { login, logout } from "../store/authSlice"

function LoginForm() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const user = useSelector((state) => state.auth.user)

    const handleLogin = () => {
        const userInfo = { name: "Trọng Nhân", email: "nhantnpt2609@gmail.com" }
        dispatch(login(userInfo))
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="p-8">
                {isLoggedIn ? (
                    <div className="flex flex-col items-center space-y-6">
                        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                            <span className="text-3xl font-bold text-emerald-600">{user.name.charAt(0)}</span>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">Chào mừng, {user.name}!</h1>
                            <p className="text-gray-600 mb-4">{user.email}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="py-2 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 flex items-center gap-2 font-medium"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7z"
                                    clipRule="evenodd"
                                />
                                <path d="M4 8a1 1 0 011-1h4a1 1 0 110 2H5a1 1 0 01-1-1z" />
                            </svg>
                            Đăng xuất
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-6">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">Vui lòng đăng nhập!</h1>
                            <p className="text-gray-600 mb-4">Đăng nhập để tiếp tục sử dụng dịch vụ</p>
                        </div>
                        <button
                            onClick={handleLogin}
                            className="py-2 px-6 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition duration-300 flex items-center gap-2 font-medium"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 011 1v12a1 1 0 01-1 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7z"
                                    clipRule="evenodd"
                                />
                                <path d="M9 8a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" />
                            </svg>
                            Đăng nhập
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LoginForm
