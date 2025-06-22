/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MIXPANEL_KEY: string
  readonly VITE_SUBGRAPH_URL: string
  readonly VITE_CONTENTFUL_BEARER_TOKEN: string
  readonly VITE_WALLETCONNECT_ID: string
  readonly VITE_MAINNET_URL: string
  readonly VITE_INFURA: string
  readonly VITE_ALCHEMY: string
  readonly VITE_ANKR: string
  readonly VITE_TENDERLY_USER: string
  readonly VITE_TENDERLY_PROJECT_SLUG: string
  readonly VITE_MAINNET_EXPLORER: string
  readonly VITE_DISABLE_VALIDATION: string
  readonly VITE_STORAGE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}