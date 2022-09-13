import type { NextPage } from 'next'
import { Author } from '../components/Home/Author'
import { Concept } from '../components/Home/Concepts'
import { Contacts } from '../components/Home/Contacts'
import { MySkills } from '../components/Home/MySkills'
import { MyWorks } from '../components/Home/MyWorks'
import { Profile } from '../components/Home/Profile'

const Index: NextPage = () => {
  return (
    <div className="container">      
        <Author/>
        <Concept/>
        <MyWorks/>
        <MySkills/>
        <Profile/>      
        <Contacts/>      
    </div>
  )
}

export default Index
