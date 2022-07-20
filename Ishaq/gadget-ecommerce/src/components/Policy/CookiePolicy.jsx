import React, { useEffect } from 'react'

export default function CookiePolicy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='bg-[#F4F4F6]'>
            <div className="relative container py-20  flex justify-center flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <h3 className='font-extrabold md:text-3xl text-xl  text-dark bg-hero-vector flex justify-center items-center bg-contain bg-left bg-no-repeat  md:py-1 md:w-96 w-52 md:h-16 h-8 text-center'>
                        Cookie Policy
                    </h3>
                </div>
                <div className="mt-5 relative w-full">
                        Last updated: 20-3-2022

                        These Terms & Conditions governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Your agreement with us includes these Terms and our Privacy Policy. You acknowledge that you have read and understood Agreements, and agree to be bound of them.

                        Purchases

                        · If you wish to purchase any product or service made available through Service, you may be asked to supply certain information relevant to your purchase.

                        · Including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.

                        ·  You represent and warrant that, you have the legal right to use any card or other payment methods in connection with any purchase and that the information you supply to us is true, correct and complete.

                        ·  We may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.

                        ·  We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.

                        ·  We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.


                    </div>
            </div>
        </div>

    )
}
