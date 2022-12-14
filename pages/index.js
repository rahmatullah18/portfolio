import { useSpring, animated } from '@react-spring/web'
import Head from 'next/head'
import Container from '../components/Container'
import Content from '../components/content/Content'
import Footer from '../components/footer/Footer'
import Layout from '../components/Layout'
import PictureHeader from '../components/picture-header/PictureHeader'


export default function Home() {
  const fade = useSpring({
    from: { opacity: 0, x: -600 },
    to: { opacity: 1, x: 0 },
  })
  return (
    <Layout>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='description' content='Selamat datang di website portfolio saya, Perkenalkan nama saya Rahmatullah Ashar - Front-End Developer' />
        <meta name='keywords' content='Rahmatullah Ashar, Mamat, website pribadi, website portfolio, contoh web portfolio, mamat' />
        <meta name='author' content='Rahmatullah Ashar' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Rahmatullah Ashar | Front-End Developer</title>
      </Head>
      <div className='md:flex '>
        <animated.div style={fade} className='w-full md:min-h-full h-4/6'>
          <PictureHeader />
        </animated.div>
        <div className='md:flex md:flex-col md:justify-between'>
          {/* <Container> */}
          <Content />
          {/* </Container> */}
          <Footer />
        </div>
      </div>
    </Layout>
  )
}
