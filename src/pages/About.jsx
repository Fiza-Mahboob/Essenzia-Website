import React from 'react'
import AboutHero from '../components/About/AboutHero'
import OurStory from '../components/About/OurStory'
import BestSellers from '../components/About/BestSellers'
import MissionVision from '../components/About/MissionVision'
import OurProcess from '../components/About/OurProcess'
import MeetOurTeam from '../components/About/MeetOurTeam'
import OurCoreValues from '../components/About/OurCoreValues'

function About() {
  return (
    <div>
      <AboutHero/>
      <OurStory/>
      <MissionVision/>
      <OurProcess/>
      <MeetOurTeam/>
      <OurCoreValues/>
    </div>
  )
}

export default About