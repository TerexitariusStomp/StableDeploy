import { useCallback, useMemo } from 'react'
import {
  useEstimateGas,
  useSimulateContract,
  UseSimulateContractParameters,
  useWriteContract,
} from 'wagmi'
import { getSafeGasLimit } from './../utils/index'
import type { Abi } from 'abitype'
import { useAtomValue } from 'jotai'
import { isWalletInvalidAtom } from 'state/atoms'
import { ContractFunctionName } from 'viem'

// Extends wagmi to include gas estimate and gas limit multiplier
const useContractWrite = <
  TAbi extends Abi | readonly unknown[],
  TFunctionName extends ContractFunctionName<TAbi, 'nonpayable' | 'payable'>,
>(
  call: UseSimulateContractParameters<TAbi, TFunctionName> = {} as any
) => {
  const isWalletInvalid = useAtomValue(isWalletInvalidAtom)
  const { data, error, isLoading } = useSimulateContract(
    !isWalletInvalid ? (call as UseSimulateContractParameters) : undefined
  )
  const { data: gas } = useEstimateGas(data?.request ? {
    ...data.request,
    type: 'eip1559',
    account: data.request.account as `0x${string}` | Account | undefined,
    gasPrice: undefined,
    maxFeePerBlobGas: undefined,
    maxFeePerGas: undefined,
    maxPriorityFeePerGas: undefined,
    blobs: undefined,
    blobVersionedHashes: undefined,
    accessList: undefined,
    nonce: undefined,
    kzg: undefined,
    sidecars: undefined,
    authorizationList: undefined
  } : undefined)

  const contractWrite = useWriteContract()
  const { writeContract } = contractWrite

  const handleWrite = useCallback(() => {
    if (data?.request && gas) {
      writeContract({
        ...data.request,
        gas: getSafeGasLimit(gas),
        type: 'eip1559',
        account: data.request.account as `0x${string}` | Account | undefined,
        gasPrice: undefined,
        maxFeePerBlobGas: undefined,
        maxFeePerGas: undefined,
        maxPriorityFeePerGas: undefined,
        blobs: undefined,
        blobVersionedHashes: undefined,
        accessList: undefined,
        nonce: undefined,
        kzg: undefined,
        sidecars: undefined,
        authorizationList: undefined
      })
    }
  }, [data?.request, writeContract, gas])

  return useMemo(
    () => ({
      ...contractWrite,
      gas,
      validationError: error,
      isReady: !!gas,
      isLoading: contractWrite.isPending,
      hash: contractWrite.data,
      write: handleWrite,
    }),
    [error, isLoading, contractWrite, gas, handleWrite]
  )
}

export default useContractWrite
