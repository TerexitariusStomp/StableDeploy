import { Box } from 'theme-ui'
import Portfolio from './components/Portfolio'
import ReservationsProtocolAbout from 'views/compare/components/ReservationsProtocolAbout'

const PortfolioWrapper = () => {
  return (
    <>
      <Box variant="layout.wrapper" px={[1, 4]} py={[1, 8]}>
        <Portfolio />
      </Box>
      <ReservationsProtocolAbout />
    </>
  )
}

export default PortfolioWrapper
