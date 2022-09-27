import Container from '../components/Container'
import Content from '../components/content/Content'
import Layout from '../components/Layout'
import PictureHeader from '../components/picture-header/PictureHeader'


export default function Home() {
  return (
    <Layout>
      <PictureHeader />
      <Container>
        <Content />
      </Container>
    </Layout>
  )
}
