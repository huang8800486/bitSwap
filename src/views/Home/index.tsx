import styled from 'styled-components'
import { PageMeta } from 'components/Layout/Page'
import BitBanner from './components/BitbankHome/BitBanner'
import FarmsContent from './components/BitbankHome/FarmsContent'
import ReviewsContent from './components/BitbankHome/ReviewsContent'
import Partners from './components/BitbankHome/Partners'

const BitWraper = styled.div`
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.bitbackground};
`
const Home: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <PageMeta />
      <BitWraper>
        <BitBanner />
        <FarmsContent />
        <ReviewsContent />
        {/* <Partners /> */}
      </BitWraper>
    </>
  )
}

export default Home
