
export default function ProductFAQ() {
    const faq = [
        {
            q: "Is this 5G?",
            a: "Yeah it is"
        },
        {
            q: "Can it be used internationally?",
            a: "Yes"
        },
        {
            q: "Is 12 pro a dual sim card system ?",
            a: "It has one manual Sim and it has an eSIM to where you can have one main line and an additional line. If you Google dual Sim for Apple products you will find that it goes all the way back to iPhone AX or AR. iPhone X is not compatible with dual Sim technology. It is listed on Apple‘s website and you can have two different providers. If you go under the general settings and the about you will see that there is a Sim and then an eSIM. Hopefully this helps you."
        },
        {
            q: "Is this phone supporting 90fps in bgmi is supporting how much time can run?",
            a: "Yes!! Supported"
        },
        {
            q: "Can we capture photos under the water? If yes, then how much time?",
            a: "Yes you can. For a short span of time."
        },
    ]
    return (
        <>

            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">


                    <div>
                        {
                            faq?.map((item, i) => (
                                <div>
                                    <div className="flex items-center focus:outline-none">
                                        
                                    <p>Q:</p>
                                        <h1 className="mx-4 text-sm text-gray-700 dark:text-white">{item.q}</h1>
                                    </div>

                                    <div className="flex mt-1 mb-5 md:mx-10">
                                        <span className="border border-primary border-r-0 border-opacity-30"></span>

                                        <p className="max-w-3xl text-xs px-4 text-gray-500 dark:text-gray-300">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }

                        <hr className="my-8 border-gray-200 dark:border-gray-700" />


                    </div>
                </div>
            </section>

        </>
    )
}
