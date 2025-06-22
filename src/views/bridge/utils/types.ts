export type WithdrawalMessage = {
  nonce: bigint
  sender: `0x${string}`
  target: `0x${string}`
  value: bigint
  gasLimit: bigint
  data: `0x${string}`
}

export type WithdrawalPhase =
  | 'PROPOSING_ON_CHAIN'
  | 'PROVE'
  | 'CHALLENGE_WINDOW'
  | 'FINALIZE'
  | 'FUNDS_WITHDRAWN'
