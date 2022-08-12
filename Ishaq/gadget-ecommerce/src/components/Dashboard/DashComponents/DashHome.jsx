import React from 'react'
import CardBarChart from '../DashDraft/Cards/CardBarChart'
import CardLineChart from '../DashDraft/Cards/CardLineChart'
import CardPageVisits from '../DashDraft/Cards/CardPageVisits'
import CardSocialTraffic from '../DashDraft/Cards/CardSocialTraffic'
import HeaderStats from '../DashDraft/HeaderStats'

export default function DashHome() {
  return (
    <>
      <HeaderStats />

      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart /> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardBarChart /> */}
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  )
}
