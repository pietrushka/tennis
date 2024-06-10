import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const searchString = url.searchParams.get('searchString')

  if (!searchString) {
    return NextResponse.json([])
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const res = await supabase
    .from('players-men')
    .select()
    .textSearch('full_name', searchString)
  return NextResponse.json(res.data)
}
