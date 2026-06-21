import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const wishes = await prisma.wish.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(wishes)
  } catch (error) {
    console.error('Error fetching wishes:', error)
    return NextResponse.json({ error: 'Failed to fetch wishes' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, message, ownerId } = body

    if (!name || !message) {
      return NextResponse.json({ error: 'Name and message are required' }, { status: 400 })
    }

    const newWish = await prisma.wish.create({
      data: {
        name,
        message,
        ownerId
      }
    })

    return NextResponse.json(newWish)
  } catch (error) {
    console.error('Error creating wish:', error)
    return NextResponse.json({ error: 'Failed to create wish' }, { status: 500 })
  }
}
