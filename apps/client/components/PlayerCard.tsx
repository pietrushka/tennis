import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Player } from '@/components/PlayerSearch'

type PlayerCardProps = {
  player: Player
  clearPlayer: () => void
  handleNextStep: () => void
}

export default function PlayerCard({
  player,
  clearPlayer,
  handleNextStep
}: PlayerCardProps) {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>{player.full_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='max-h-80 overflow-hidden'>
          <Image 
            alt='player photo'
            src={`https://www.atptour.com/-/media/alias/player-gladiator-headshot/${player.id}`}
          />
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>ATP Rank</TableCell>
              <TableCell>{player.rank}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ATP Points</TableCell>
              <TableCell>{player.points}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nationality</TableCell>
              <TableCell>
                <Image
                  className='w-8'
                  alt='flag'
                  src={'https://www.atptour.com' + player.flag_img}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>{player.age}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline' onClick={clearPlayer}>
          Clear
        </Button>
        <Button onClick={handleNextStep}>Compare</Button>
      </CardFooter>
    </Card>
  )
}
