import React from 'react'
import Container from '../components/Container'
import Footer from '../components/footer/Footer'
import Layout from '../components/Layout'
import Experience from '../components/skill_experience/Experience'
import Skill from '../components/skill_experience/Skill'
import SkillsContent from '../components/skill_experience/SkillsContent'
import ExperienceContent from '../components/skill_experience/ExperienceContent'

export default function Skills_Experience() {
  return (
    <Layout>
      <Container>
        <div className='my-10 space-y-10 md:my-20'>
          <h1 className='text-3xl font-bold text-center'><span className='text-purple-figma'>Skills</span> & <span className='text-red-figma'>Experience</span> 👨‍🎓</h1>
          <div className='items-start my-10 space-y-10 md:space-y-0 md:gap-10 md:my-20 md:grid md:grid-cols-3'>
            <Skill skills={SkillsContent} />
            <div className='md:col-span-2'>
              <Experience experiences={ExperienceContent} />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}
