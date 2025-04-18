"use client"

import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/authSlice"

export default function UserGreeting() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="md:flex">
                <div className="md:shrink-0 bg-emerald-500 md:w-24 md:h-auto h-24 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{user.name.charAt(0)}</span>
                    </div>
                </div>
                <div className="p-8 md:flex-1">
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Chào mừng, {user.name}!</h1>
                            <p className="text-gray-600 mt-1">{user.email}</p>
                        </div>

                        <div className="border-t border-gray-100 pt-4">
                            <p className="text-lg text-gray-700 mb-4">Bạn đã đăng nhập thành công.</p>

                            <div className="flex space-x-3">
                                <button
                                    onClick={handleLogout}
                                    className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 flex items-center gap-2"
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

                                <button className="py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300">
                                    Trang cá nhân
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
