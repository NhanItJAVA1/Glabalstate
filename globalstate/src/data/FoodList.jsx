import { foodItems } from "../data/foodItems"
import { useDispatch } from "react-redux"
import { addItem } from "../store/cartSlice"

export default function FoodList() {
    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Thực đơn của chúng tôi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {foodItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    >
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            <img src="" alt="" />
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-lg font-bold text-emerald-600">{item.price.toLocaleString()} VND</p>
                                {item.category && (
                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{item.category}</span>
                                )}
                            </div>
                            <button
                                onClick={() => handleAddItem(item)}
                                className="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition duration-300 flex items-center justify-center gap-2 font-medium"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                                </svg>
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
