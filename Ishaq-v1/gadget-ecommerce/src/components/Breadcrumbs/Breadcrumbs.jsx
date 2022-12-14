import React from 'react'
import { BsHouse } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Breadcrumbs({breadcrumbs}) {
    return (
        <div className="breadcrumbs mx-auto border-8 border-transparent container hidden md:block">
            <div className="flex items-center justify-start  py-4 overflow-y-auto whitespace-nowrap  ">
                <Link to="#" className="text-gray-600 dark:text-gray-200">
                    <BsHouse />
                </Link>
                <span className="mx-5 text-primary dark:text-gray-300">
                    /
                </span>

                {
                    breadcrumbs?.map((item, i) => (
                        <div key={i} className="group">
                            <Link to="/" className="text-gray-600 dark:text-gray-200 hover:text-primary">
                                {item}
                            </Link>

                            <span className="mx-5 text-primary dark:text-gray-300 group-last:hidden">
                                /
                            </span>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
