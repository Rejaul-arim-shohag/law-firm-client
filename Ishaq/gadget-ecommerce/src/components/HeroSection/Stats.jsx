import React from 'react'

export default function Stats() {
  const data = [
    { title: "Happy Customers", state: 1200 },
    { title: "Products", state: 10000 },
    { title: "Partners", state: 30 },
    { title: "Platform followers", state: 2343232 }
  ]
  return (
    <div className="stats">
      <section className="">
        <div className="">
          <div className="">
            <dl className="grid  grid-cols-4">
              {
                data?.map((item, index) => (
                  <div
                    className="flex flex-col text-center rounded-lg"
                  >
                    <dd className="">
                      {item.state}
                    </dd>
                    <dt className="">
                      {item.title}
                    </dt>

                    
                  </div>

                ))
              }
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
