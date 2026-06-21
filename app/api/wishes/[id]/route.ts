import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    
    await prisma.wish.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Wish deleted successfully' })
  } catch (error) {
    console.error('Error deleting wish:', error)
    return NextResponse.json({ error: 'Failed to delete wish' }, { status: 500 })
  }
}
