import React from 'react'
import Container from '../components/Container'
import Footer from '../components/footer/Footer'
import Layout from '../components/Layout'
import Experience from '../components/skill_experience/Experience'
import Skill from '../components/skill_experience/Skill'
import { skills, basicSkill } from '../components/skill_experience/SkillsContent'
import ExperienceContent from '../components/skill_experience/ExperienceContent'
import Head from 'next/head'
import Sertifikat from '../components/skill_experience/Sertifikat'
import Pagination from '../components/Pagination'

export default function Skills_Experience() {
  return (
    <Layout>
      <Head>
        <title>Skill & Experience</title>
        <meta charSet='UTF-8' />
        <meta name='description' content='Skill yang telah saya kuasai dan juga pengalaman dalam dunia kerja saya' />
        <meta name='keywords' content='Rahmatullah Ashar, Mamat, website pribadi, website portfolio, contoh web portfolio, mamat' />
        <meta name='author' content='Rahmatullah Ashar' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Container>
        <div className='my-10 space-y-10 md:my-20'>
          <h1 className='text-3xl font-bold text-center'><span className='text-purple-figma'>Skills</span> & <span className='text-red-figma'>Experience</span> 👨‍🎓</h1>
          <div className='flex items-center justify-center text-gray-500'>
            {/* <div className='mx-4 text-justify'>Saya mempunyai berbagai macam skills dan pengalaman kerja di bidang teknologi front-end web.</div> */}
          </div>
          <div className='items-start my-10 space-y-10 md:space-y-0 md:gap-10 md:my-20 md:grid md:grid-cols-3'>
            <Skill skills={skills} />
            <div className='md:col-span-2 space-y-8'>
              <Experience experiences={ExperienceContent} />
              <Sertifikat />
            </div>
          </div>
          <Pagination />
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}
