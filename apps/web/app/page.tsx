'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { Typography } from '@/components/typography'
import PlayerSearch, { Player } from '@/components/PlayerSearch'
import PlayerCard from '@/components/PlayerCard'
import { useRouter } from 'next/navigation'

type PlayersFormState = {
  player1?: Player
  player2?: Player
}

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1)
  const [players, setPlayers] = useState<PlayersFormState>({})
  const router = useRouter()

  function handleSubmit() {
    console.log('handleSubmit')
    const player1Id = players.player1?.id
    const player2Id = players.player2?.id

    if (player1Id && player2Id) {
      router.push(`/predictions?player1=${player1Id}&player2=${player2Id}`)
    } else {
      console.error('Both players must be selected.')
    }
  }

  return (
    <form className='w-100' onSubmit={event => event.preventDefault()}>
      {currentStep === 1 ? (
        <ChoosePlayerStep
          dataKey='player1'
          players={players}
          setPlayers={setPlayers}
          handleNextStep={() => setCurrentStep(2)}
        />
      ) : null}
      {currentStep === 2 ? (
        <ChoosePlayerStep
          dataKey='player2'
          players={players}
          setPlayers={setPlayers}
          handleNextStep={() => handleSubmit()}
        />
      ) : null}
    </form>
  )
}

type ChoosePlayerStepProps = {
  dataKey: keyof PlayersFormState
  players: PlayersFormState
  setPlayers: Dispatch<SetStateAction<PlayersFormState>>
  handleNextStep: () => void
}

function ChoosePlayerStep({
  dataKey,
  players,
  setPlayers,
  handleNextStep
}: ChoosePlayerStepProps) {
  const player = players[dataKey]

  if (player) {
    return (
      <PlayerCard
        player={player}
        clearPlayer={() =>
          setPlayers(prev => ({ ...prev, [dataKey]: undefined }))
        }
        handleNextStep={handleNextStep}
      />
    )
  }

  return (
    <div className='flex flex-col gap-5'>
      <Typography variant='h1'>Choose first player for head to head</Typography>
      <PlayerSearch
        setValue={item => setPlayers(prev => ({ ...prev, [dataKey]: item }))}
      />
    </div>
  )
}
