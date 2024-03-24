import React from 'react'
import AboutBanner from './Section/01_/AboutBanner'
import AboutInnovate from './Section/02_/AboutInnovate'
import AboutVision from './Section/03_/AboutVision'
import Leadership from './Section/04_/Leadership'
import Countries from './Section/05_/Countries'
import Navbar from '../Navbar/Navbar'


function About() {
  return (
    <div>
        <AboutBanner/>
        <AboutInnovate/>
        <AboutVision/>
        <Leadership/>
        <Countries/>
    </div>
  )
}

export default About