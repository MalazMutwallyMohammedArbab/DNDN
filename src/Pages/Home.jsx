import React from 'react'
import About from './About'
import Contact from './Contact'
import Features from './Features'
import Letter from './Letter'
import Objects from './Objects'
import Products from './Products'
import Vision from './Vision'

export default function Home() {
  return (
    <div>
      <About />
      <Vision />
      <Letter />
      <Products />
      <Features />
      <Objects />
      <Contact />
    </div>
  )
}
