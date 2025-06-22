import { Box } from 'theme-ui'
import CompareTokens from './components/CompareTokens'
import ReservationsProtocolAbout from './components/ReservationsProtocolAbout'

/**
 * Main Compare screen
 */
const Compare = () => (
  <Box sx={{ position: 'relative' }}>
    <CompareTokens />
    <ReservationsProtocolAbout />
  </Box>
)

export default Compare
