import { Trans, t } from '@lingui/macro'
import { Box, BoxProps, Grid, Link, Text } from 'theme-ui'
import { DISCORD_INVITE } from 'utils/constants'

interface Props extends BoxProps {
  title: string
}

const Question = ({ title, children, ...props }: Props) => (
  <Box {...props} ml={4} mb={4}>
    <Text variant="strong" mb={2} sx={{ fontSize: 3 }}>
      {title}
    </Text>
    <Text as="p" variant="legend">
      {children}
    </Text>
  </Box>
)

const BridgeFaq = () => (
  <Box p={4} variant="layout.wrapper" id="bridge-faq">
    <Text ml={4} variant="sectionTitle" mt={[2, 7]} mb={7}>
      <Trans>Need help bridging?</Trans>
    </Text>
    <Grid columns={[1, 2]} gap={[0, 4]}>
      <Box>
        <Question title={t`What is Reservations Protocol L2 Bridge?`}>
          <Trans>
            Reservations Protocol L2 Bridge enables the transfer of certain digital assets
            and other data back and forth between Ethereum and Base.
          </Trans>
        </Question>
        <Question title={t`How fast will my tokens arrive?`}>
          <Trans>
            Deposits: a few minutes usually, only requires 1x transaction.
            Withdrawals: 7 days, 3 transactions.
          </Trans>
        </Question>
        <Question title={t`How do withdrawals work?`}>
          <Text>
            <Trans>
              Transferring from Base to Ethereum takes approximately 7 days and
              requires 3 transactions.
            </Trans>
          </Text>

          <Text sx={{ display: 'block' }} mt={2}>
            <Trans>
              After your withdrawal request is proposed onchain (transaction 1)
              you must verify (transaction 2) and complete (transaction 3) the
              withdrawal in order to access your funds. You can track your
              progress in the transactions table under Withdrawals.
            </Trans>
          </Text>
        </Question>
        <Question title={t`What wallet can I use?`}>
          <Trans>
            You can use popular Ethereum wallets like Metamask, Rabby, Coinbase
            Wallet, and Rainbow Wallet to name a few.
          </Trans>
        </Question>
        <Question title={t`What if I have a question, issue or problem?`}>
          <Link
            href={DISCORD_INVITE}
            target="_blank"
            sx={{ textDecoration: 'underline' }}
          >
            The Preserve Discord
          </Link>{' '}
          <Trans>
            community is available around the clock for general questions,
            assistance and support!
          </Trans>
        </Question>
      </Box>
      <Box>
        <Question title={t`Are there any fees involved in using Base Bridge?`}>
          <Trans>
            There are network fees involved which are used to pay for the gas
            costs on Ethereum and Base. There are no additional fees.
          </Trans>
        </Question>
        <Question title={t`Can I cancel a withdrawal?`}>
          <Trans>
            No, if a withdrawal has already been initiated on the Withdraw page
            it is not possible to cancel it. Once withdrawn, the process needs
            to be completed.
          </Trans>
        </Question>
        <Question title={t`Why does it take seven days to withdraw?`}>
          <Text>
            <Trans>
              This seven day bridge duration is in place as a challenge period
              security measure built into the OP Stack.
            </Trans>
          </Text>
          <Text sx={{ display: 'block' }} mt={2}>
            <Trans>
              If you prefer not to wait, instead of making a withdrawal using
              Reservations Protocol L2 Bridge, you also have the option to utilize a
              third-party bridge for quicker withdrawals.
            </Trans>
          </Text>
        </Question>
        <Question title={t`How do I verify my withdrawal transaction?`}>
          <Trans>
            Navigate to the Withdrawal tab and view transactions below. Next to
            your transaction, use the button to complete the next available
            action. This action will ask you to complete the next required step
            to move your transaction forward and receive your withdrawn tokens
            in your wallet.
          </Trans>
        </Question>
      </Box>
    </Grid>
  </Box>
)

export default BridgeFaq
