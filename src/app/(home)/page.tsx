'use client'

import HomeTitle from './components/home-title'
import { HomeBlurLeft, HomeBlurRight } from './components/home-blur'

export default function HomePage() {
  return (
    <div className="bg-white h-full">
      <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
        <HomeBlurLeft />
        <HomeTitle />
        <HomeBlurRight />
      </div>
    </div>
  )
}
