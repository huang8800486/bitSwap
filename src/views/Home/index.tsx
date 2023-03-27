import styled from 'styled-components'
import { PageMeta } from 'components/Layout/Page'
import BitBanner from './components/BitbankHome/BitBanner'
import FarmsContent from './components/BitbankHome/FarmsContent'
import ReviewsContent from './components/BitbankHome/ReviewsContent'
import Partners from './components/BitbankHome/Partners'

const Home: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <PageMeta />
      <BitBanner />
      <FarmsContent />
      <ReviewsContent />
      <Partners />
    </>
  )
}

export default Home
