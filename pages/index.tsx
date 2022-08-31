import type { NextPage } from 'next'
import { Author } from '../components/Home/Author'
import { Concept } from '../components/Home/Concepts'
import { Contacts } from '../components/Home/Contacts'
import { MySkills } from '../components/Home/MySkills'
import { MyWorks } from '../components/Home/MyWorks'
import { Profile } from '../components/Home/Profile'
import { Layout } from '../components/common/Layout/index'

const Index: NextPage = () => {
  return (
    <div className="container">
      <Layout>
        <Author/>
        <Concept/>
        <MyWorks/>
        <MySkills/>
        <Profile/>      
        <Contacts/>
      </Layout>
    </div>
  )
}

export default Index
