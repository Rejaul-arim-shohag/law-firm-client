import { BsDot } from 'react-icons/bs'
import ProductFAQ from './ProductFAQ'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import ProductReviews from './ProductReviews';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductTabs() {
    let categories = ['Details','Reviews', 'FAQ']
    let about = [
        {
            label: "HTML",
            value: "html",
            title: "Unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.)."
        },
        {
            title: "Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity."
        },
        {
            title: "Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information."
        },
        {
            title: "Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card."
        },
        {
            title: "Backed by a one-year satisfaction guarantee."
        }


    ]
    let specifications = [
        {
            title: "In the box",
            des: "iPhone, USB-C to Lightning Cable, Documentation"
        },
        {
            title: "Model Number",
            des: "MNCY3HN/A"
        },
        {
            title: "Model Name",
            des: "iPhone 13 Pro Max"
        },
        {
            title: "Color",
            des: "Alpine Green"
        },
        {
            title: "Browse Type",
            des: "Smartphones"
        },
        {
            title: "SIM Type",
            des: "Dual Sim"
        },
    ]
    return (
        <div className="w-full  px-2 pb-16 sm:px-0">
            <Tabs value="Details">
                <TabsHeader className="flex  rounded bg-white w-1/2 mx-auto ">
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            value={category}
                            className="w-full py-2.5  text-sm border last:border-l-0 last:rounded-r first:border-r-0 first:rounded-l  focus:outline-none  border-grey-300 font-medium leading-5 shadow-none productTab  "
                        >
                            {category}

                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody className="mt-2">
                    <TabPanel
                        className={classNames(
                            'rounded-xl bg-white p-3',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                        )}
                        value="Details"
                    >
                        <div className='flex flex-col md:flex-row'>

                            <div className="w-full md:w-1/2 mx-auto p-5">
                                {
                                    specifications?.map((item, i) => (
                                        <div className="flex items-center py-3  justify-between text-gray-800 dark:text-gray-200" key={i}>
                                            <p className='text-sm flex justify-center items-center font-semibold'>{item.title}</p>
                                            <p className=' text-sm '>{item.des}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-2 p-5">
                                <h2 className='font-semibold'>About this item</h2>
                                {
                                    about.map((item, i) => (
                                        <div className="">
                                            <p className="text-xs  flex flex-wrap items-center"><BsDot className='text-primary text-3xl w-1/12 block' /> <span className='block w-11/12 font-semibold'>{item.title}</span></p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel
                        value="Reviews"
                        className={classNames(
                            'rounded-xl bg-white p-3',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                        )}
                    >
                        <>
                            <div className="  mx-auto">
                                <ProductReviews />
                            </div>
                        </>
                    </TabPanel>
                    <TabPanel
                        value="FAQ"
                        className={classNames(
                            'rounded-xl bg-white p-3',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                        )}
                    >
                        <>
                            <ProductFAQ />
                        </>
                    </TabPanel>

                </TabsBody>
            </Tabs>
        </div>
    )
}
