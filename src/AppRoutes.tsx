import { Navigate, Route, Routes } from 'react-router-dom'
import RTokenContainer from '@/state/rtoken/RTokenContainer.js'
import { Box } from 'theme-ui'
import { ROUTES } from '@/utils/constants.js'
import Auctions from '@/views/rtoken/auctions/index.js'
import Bridge from '@/views/bridge/index.js'
import Compare from '@/views/compare/index.js'
import Deploy from '@/views/rtoken/deploy/index.js'
import NewDeploy from '@/views/rtoken/new-deploy/index.js'
import EarnWrapper from '@/views/earn/index.js'
import Explorer from '@/views/explorer/index.js'
import Collaterals from '@/views/explorer/components/collaterals/index.js'
import ExploreGovernance from '@/views/explorer/components/governance/index.js'
import AvailableRevenue from '@/views/explorer/components/revenue/index.js'
import ExploreTokens from '@/views/explorer/components/tokens/index.js'
import ExploreTransactions from '@/views/explorer/components/transactions/index.js'
import Governance from '@/views/rtoken/governance/index.js'
import GovernanceProposal from '@/views/rtoken/governance/views/proposal/index.js'
import GovernanceProposalDetail from '@/views/rtoken/governance/views/proposal-detail/index.js'
import Home from '@/views/home/index.js'
import Issuance from '@/views/rtoken/issuance/index.js'
import Overview from '@/views/rtoken/overview/index.js'
import PortfolioWrapper from '@/views/portfolio/index.js'
import Settings from '@/views/rtoken/settings/index.js'
import Staking from '@/views/rtoken/staking/index.js'
import Terms from '@/views/terms/index.js'
import GovernanceSetup from '@/views/rtoken/deploy/components/Governance.js'
import AllTokenList from './views/tokens/Tokens.js'

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.COMPARE} element={<Compare />} />
    <Route path={ROUTES.BRIDGE} element={<Bridge />} />
    <Route path={ROUTES.PORTFOLIO} element={<PortfolioWrapper />} />
    <Route path={ROUTES.EARN} element={<EarnWrapper />} />
    <Route path={ROUTES.DEPLOY} element={<Deploy />} />
    <Route path={ROUTES.NEW_DEPLOY} element={<NewDeploy />} />
    <Route path={ROUTES.TOKENS} element={<AllTokenList />} />
    <Route path={`/:chain/token/:tokenId`} element={<RTokenContainer />}>
      <Route index element={<Navigate replace to={ROUTES.OVERVIEW} />} />
      <Route path={ROUTES.OVERVIEW} element={<Overview />} />
      <Route path={ROUTES.ISSUANCE} element={<Issuance />} />
      <Route path={ROUTES.STAKING} element={<Staking />} />
      <Route path={ROUTES.AUCTIONS} element={<Auctions />} />
      <Route path={ROUTES.GOVERNANCE} element={<Governance />} />
      <Route
        path={ROUTES.GOVERNANCE_PROPOSAL}
        element={<GovernanceProposal />}
      />
      <Route
        path={`${ROUTES.GOVERNANCE_PROPOSAL}/:proposalId`}
        element={<GovernanceProposalDetail />}
      />
      <Route path={ROUTES.GOVERNANCE_SETUP} element={<GovernanceSetup />} />
      <Route path={ROUTES.SETTINGS} element={<Settings />} />
    </Route>
    <Route path={ROUTES.EXPLORER} element={<Explorer />}>
      <Route
        index
        element={<Navigate replace to={ROUTES.EXPLORER_TRANSACTIONS} />}
      />
      <Route path={ROUTES.EXPLORER_COLLATERALS} element={<Collaterals />} />
      <Route path={ROUTES.EXPLORER_TOKENS} element={<ExploreTokens />} />
      <Route
        path={ROUTES.EXPLORER_TRANSACTIONS}
        element={<ExploreTransactions />}
      />
      <Route
        path={ROUTES.EXPLORER_GOVERNANCE}
        element={<ExploreGovernance />}
      />
      <Route path={ROUTES.EXPLORER_REVENUE} element={<AvailableRevenue />} />
    </Route>
    <Route path={ROUTES.TERMS} element={<Terms />} />
    <Route path="*" element={<Box>Not found</Box>} />
  </Routes>
)

export default AppRoutes
