import type { NextPage } from 'next'
import { Footer } from '../components/Footer'
import { Author } from '../components/Home/Author'
import { Concept } from '../components/Home/Concepts'
import { Contacts } from '../components/Home/Contacts'
import { MySkills } from '../components/Home/MySkills'
import { MyWorks } from '../components/Home/MyWorks'
import { Profile } from '../components/Home/Profile'
import { Navbar } from '../components/Navbar'

const Index: NextPage = () => {
  return (
    <div className="container">
      <Navbar/>
      <Author/>
      <Concept/>
      <MyWorks/>
      <MySkills/>
      <Profile/>      
      <Contacts/>
      <Footer/>      
    </div>
  )
}

export default Index
