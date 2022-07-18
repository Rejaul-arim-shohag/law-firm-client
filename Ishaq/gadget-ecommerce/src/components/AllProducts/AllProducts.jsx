import React from 'react'
import ProductCard from '../ProductSlider/ProductCard'

export default function AllProducts() {
    return (
        <>
            <section className='pt-24'>
                <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                    <div
                        className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start"
                    >
                        <div className="lg:sticky lg:top-4">
                            <details
                                open
                                className="overflow-hidden shadow-xl rounded"
                            >
                                <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                                    <span className="text-sm font-medium">
                                        Toggle Filters
                                    </span>

                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </summary>

                                <form
                                    action=""
                                    className="border-t border-grey-500 lg:border-t-0"
                                >
                                    <fieldset>
                                        <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                                            Type
                                        </legend>

                                        <div className="px-5 py-6 space-y-2">
                                            <div className="flex items-center">
                                                <input
                                                    id="toy"
                                                    type="checkbox"
                                                    name="type[toy]"
                                                    className="w-5 h-5 border-gray-300 rounded"
                                                />

                                                <label
                                                    for="toy"
                                                    className="ml-3 text-sm font-medium"
                                                >
                                                    Toy
                                                </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    id="game"
                                                    type="checkbox"
                                                    name="type[game]"
                                                    className="w-5 h-5 border-gray-300 rounded"
                                                />

                                                <label
                                                    for="game"
                                                    className="ml-3 text-sm font-medium"
                                                >
                                                    Game
                                                </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    id="outdoor"
                                                    type="checkbox"
                                                    name="type[outdoor]"
                                                    className="w-5 h-5 border-gray-300 rounded"
                                                />

                                                <label
                                                    for="outdoor"
                                                    className="ml-3 text-sm font-medium"
                                                >
                                                    Outdoor
                                                </label>
                                            </div>

                                            <div className="pt-2">
                                                <button
                                                    type="button"
                                                    className="text-xs text-gray-500 underline"
                                                >
                                                    Reset Type
                                                </button>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <div>
                                        <fieldset>
                                            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                                                Age
                                            </legend>

                                            <div className="px-5 py-6 space-y-2">
                                                <div className="flex items-center">
                                                    <input
                                                        id="3+"
                                                        type="checkbox"
                                                        name="age[3+]"
                                                        className="w-5 h-5 border-gray-300 rounded"
                                                    />

                                                    <label
                                                        for="3+"
                                                        className="ml-3 text-sm font-medium"
                                                    >
                                                        3+
                                                    </label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input
                                                        id="8+"
                                                        type="checkbox"
                                                        name="age[8+]"
                                                        className="w-5 h-5 border-gray-300 rounded"
                                                    />

                                                    <label
                                                        for="8+"
                                                        className="ml-3 text-sm font-medium"
                                                    >
                                                        8+
                                                    </label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input
                                                        id="12+"
                                                        type="checkbox"
                                                        name="age[12+]"
                                                        className="w-5 h-5 border-gray-300 rounded"
                                                    />

                                                    <label
                                                        for="12+"
                                                        className="ml-3 text-sm font-medium"
                                                    >
                                                        12+
                                                    </label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input
                                                        id="16+"
                                                        type="checkbox"
                                                        name="age[16+]"
                                                        className="w-5 h-5 border-gray-300 rounded"
                                                    />

                                                    <label
                                                        for="16+"
                                                        className="ml-3 text-sm font-medium"
                                                    >
                                                        16+
                                                    </label>
                                                </div>

                                                <div className="pt-2">
                                                    <button
                                                        type="button"
                                                        className="text-xs text-gray-500 underline"
                                                    >
                                                        Reset Age
                                                    </button>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div className="flex justify-between px-5 py-3 border-t border-grey-500">
                                        <button
                                            name="reset"
                                            type="button"
                                            className="text-xs font-medium text-gray-600 underline rounded"
                                        >
                                            Reset All
                                        </button>

                                        <button
                                            name="commit"
                                            type="button"
                                            className="px-5 py-3 text-xs font-medium text-white bg-primary rounded"
                                        >
                                            Apply Filters
                                        </button>
                                    </div>
                                </form>
                            </details>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-500">
                                    <span className="hidden sm:inline">
                                        Showing
                                    </span>
                                    6 of 24 Products
                                </p>

                                <div className="ml-4">
                                    <label
                                        for="SortBy"
                                        className="sr-only"
                                    >
                                        Sort
                                    </label>

                                    <select
                                        id="SortBy"
                                        name="sort_by"
                                        className="text-sm border-gray-100 rounded"
                                    >
                                        <option readonly>Sort</option>
                                        <option value="title-asc">Title, A-Z</option>
                                        <option value="title-desc">Title, Z-A</option>
                                        <option value="price-asc">Price, Low-High</option>
                                        <option value="price-desc">Price, High-Low</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-5 mt-4 bg-gray-200 ">
                            {
                            [...Array(12)].map((item, index) => {
                                return (
                                    <ProductCard />
                                )
                            })
                        }
                        
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <script>
    window.addEventListener('resize', () => {
      const desktopScreen = window.innerWidth < 768

                document.querySelector('details').open = !desktopScreen
    })
            </script> */}
        </>
    )
}