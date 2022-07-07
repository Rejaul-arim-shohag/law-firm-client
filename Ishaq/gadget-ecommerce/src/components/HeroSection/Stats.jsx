import React from 'react'
import NumberFormat from 'react-number-format';
export default function Stats() {
  const data = [
    { title: "Happy Customers", state: 1200 },
    { title: "Products", state: 1000 },
    // { title: "Partners", state: 30 },
    { title: "Platform followers", state: '2.3k' }
  ]
  return (
    <div className="stats">
      <dl className="grid  grid-cols-3 w-full">
        {
          data?.map((item, index) => (
            <div
              className="flex flex-col text-left rounded-lg"
            >
              <dd className="font-bold text-3xl">
                {item.state}
                {/* <NumberFormat value={item.state} displayType={'text'} thousandsGroupStyle="thousand" suffix="k" /> */}
              </dd>
              <dt className="text-sm text-dark">
                {item.title}
              </dt>


            </div>

          ))
        }
      </dl>
    </div>
  )
}
