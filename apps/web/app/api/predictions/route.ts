import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const { playerIds } = await request.json()

    if (!playerIds?.length) {
      return new NextResponse('Player IDs not provided or invalid', {
        status: 400
      })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const res = await supabase.from('players-men').select().in('id', playerIds)
    console.log('res', res)

    if (res.error || res.data.length < 2) {
      return new NextResponse(`Error fetching data`, {
        status: 500
      })
    }

    return new NextResponse(JSON.stringify({ message: 'ok' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (e) {
    console.error(e)
    return new NextResponse('Invalid JSON or bad request', { status: 400 })
  }
}

// {
//   id: 'db59',
//   created_at: '2024-05-04T16:58:23.692256+00:00',
//   rank: 205,
//   age: 30,
//   points: 298,
//   flag_img: '/en/~/media/images/flags/aut.svg',
//   full_name: 'Dennis Novak',
//   atp_page_url: '/en/players/dennis-novak/db59/overview'
// },
