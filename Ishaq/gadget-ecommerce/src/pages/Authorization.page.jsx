import React, { useEffect } from 'react'
import Registration from '../components/Authorization/Registration'

export default function AuthorizationPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='bg-secondary h-screen pt-24'>
            <div className=" relative w-full">
                <Registration />
            </div>
        </div>

    )
}
