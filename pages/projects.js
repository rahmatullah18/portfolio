import React from 'react'
import Card from '../components/card/Card'
import Container from '../components/Container'
import Layout from '../components/Layout'
import content from '../components/card/content'
import Title from '../components/content/Title'
import Footer from '../components/footer/Footer'
import Head from 'next/head'

export default function projects() {
  return (
    <Layout>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='description' content='kumpulan project yang telah saya buat ' />
        <meta name='keywords' content='Project, website project, portfolio, rahmatullah ashar' />
        <meta name='author' content='Rahmatullah Ashar' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Project Rahmatullah Ashar</title>
      </Head>
      <Container>
        <div className='my-10 space-y-10 md:md:my-20'>
          <h1 className='text-3xl font-bold text-center'>My  Project 👨‍💻</h1>
          <div className='flex items-center justify-center text-gray-500'>
            <div className='mx-4 text-justify'>Ini adalah kumpulan project yang telah saya buat, mulai dari project client hingga project latihan dan experimen</div>
          </div>
          <div className='space-y-4 md:space-y-0 md:gap-2 md:grid md:grid-cols-3'>
            {content?.projects1.map((project1, idx) => {
              return (
                <Card project1={project1} key={idx} />
              )
            })}
          </div>
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}
