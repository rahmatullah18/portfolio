import Container from '../components/Container'
import Content from '../components/content/Content'
import Footer from '../components/footer/Footer'
import Layout from '../components/Layout'
import PictureHeader from '../components/picture-header/PictureHeader'


export default function Home() {
  return (
    <Layout>
      <div className='md:grid md:grid-cols-2'>
        <PictureHeader />
        <div className=''>
          <Container>
            <Content />
          </Container>
          <Footer />
        </div>
      </div>
    </Layout>
  )
}
