import React, { useEffect, useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
import Card from '../components/card/Card'
import Container from '../components/Container'
import Layout from '../components/Layout'
import content from '../components/card/content'
import Footer from '../components/footer/Footer'
import Head from 'next/head'
import Pagination from '../components/Pagination'

export default function Projects() {
  const [projects, setProject] = useState([])
  useEffect(() => {
    setProject(content.projects1)
  }, [content])

  const transitions = useTransition(projects, {
    from: { opacity: 0, y: -100 },
    enter: { opacity: 1, y: 0 }
  })
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
          <div className='space-y-4 md:space-y-0 md:gap-4 md:grid md:grid-cols-3'>
            {
              transitions((style, item) => (
                <animated.div style={style}>
                  <Card project1={item} />
                </animated.div>
              ))
            }
          </div>
          <Pagination />
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}
