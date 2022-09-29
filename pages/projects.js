import React from 'react'
import Card from '../components/card/Card'
import Container from '../components/Container'
import Layout from '../components/Layout'
import content from '../components/card/content'
import Title from '../components/content/Title'
import Footer from '../components/footer/Footer'

export default function projects() {
  return (
    <Layout>
      <Container>
        <div className='my-10 space-y-10 md:md:my-20'>
          <h1 className='text-3xl font-bold text-center'>My  Project 👨‍💻</h1>
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
