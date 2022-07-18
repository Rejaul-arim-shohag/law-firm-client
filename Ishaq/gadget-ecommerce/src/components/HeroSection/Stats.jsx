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
          data?.map((item, i) => (
            <div
              className="flex flex-col md:text-left text-center rounded-lg"
              key={i}
            >
              <dd className="font-bold md:text-3xl text-xl">
                {item.state}
                {/* <NumberFormat value={item.state} displayType={'text'} thousandsGroupStyle="thousand" suffix="k" /> */}
              </dd>
              <dt className="md:text-sm text-xs text-dark">
                {item.title}
              </dt>


            </div>

          ))
        }
      </dl>
    </div>
  )
}
