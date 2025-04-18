import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../store/cartSlice"
import { selectCartItems } from "../store/cartSlice"

export default function Cart() {
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Giỏ hàng của bạn</h2>

            {cartItems.length === 0 ? (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-700 mb-2">Giỏ hàng trống</h3>
                    <p className="text-gray-500 mb-6">Hãy thêm món ăn vào giỏ hàng của bạn</p>
                </div>
            ) : (
                <>
                    <div className="space-y-4 mb-8">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col sm:flex-row justify-between gap-4"
                            >
                                <div className="flex gap-4 items-center">
                                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                                        <img
                                            src={item.image || `/placeholder.svg?height=80&width=80`}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <span className="font-medium">{item.quantity} x</span>
                                            <span>{item.price.toLocaleString()} VND</span>
                                        </div>
                                        <p className="font-bold text-emerald-600 mt-1">
                                            {(item.price * item.quantity).toLocaleString()} VND
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => handleRemoveItem(item)}
                                        className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 flex items-center gap-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">Tổng cộng</h3>
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Số lượng:</span>
                                <span className="font-medium">{totalQuantity} món</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Tạm tính:</span>
                                <span className="font-medium">{totalAmount.toLocaleString()} VND</span>
                            </div>
                        </div>
                        <div className="pt-4 border-t">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-800">Tổng tiền:</span>
                                <span className="text-xl font-bold text-emerald-600">{totalAmount.toLocaleString()} VND</span>
                            </div>
                            <button className="w-full mt-4 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition duration-300 font-medium">
                                Tiến hành thanh toán
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
