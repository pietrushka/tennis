import { useEffect, useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from './ui/command'
import useDebounce from '../hooks/useDebounce'

type PlayerSearchProps = {
  setValue: (value: Player) => void
}

export type Player = {
  age: number
  atp_page_url: string
  created_at: string
  flag_img: string
  full_name: string
  id: string
  points: number
  rank: number
}

// TODO add loading state
export default function PlayerSearch({ setValue }: PlayerSearchProps) {
  const [searchString, setSearchString] = useState<string>('')
  const [options, setOptions] = useState<Player[]>([])
  const searchStringDebounced = useDebounce(searchString, 500)

  useEffect(() => {
    async function getOptions() {
      if (!searchStringDebounced || searchStringDebounced.length < 3) {
        return
      }

      const params = new URLSearchParams({ searchStringDebounced })
      const url = `/api/players?${params.toString()}`
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      })

      if (response) {
        const data = (await response.json()) as Player[]
        if (data) {
          setOptions(data)
        }
      }
    }
    getOptions()
  }, [searchStringDebounced])

  function handleSelect(id: string) {
    setValue(options.find(x => x.id === id)!)
  }

  return (
    <Command shouldFilter={false}>
      <CommandInput
        placeholder='Search players...'
        value={searchString}
        onValueChange={value => {
          setSearchString(value)
        }}
      />
      <CommandGroup>
        <ScrollArea>
          <CommandList>
            {options.map(option => (
              <CommandItem
                key={option.id}
                value={option.id}
                onSelect={handleSelect}
              >
                {option.full_name}
              </CommandItem>
            ))}
          </CommandList>
        </ScrollArea>
      </CommandGroup>
    </Command>
  )
}
