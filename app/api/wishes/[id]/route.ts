import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'wishes.json')

function getWishes() {
  try {
    if (!fs.existsSync(dataFilePath)) return []
    const fileContent = fs.readFileSync(dataFilePath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error('Error reading wishes:', error)
    return []
  }
}

function saveWishes(data: any[]) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8')
  } catch (error) {
    console.error('Error saving wishes:', error)
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    const wishes = getWishes()
    
    // Hapus ucapan dengan id tersebut
    const filteredWishes = wishes.filter((wish: any) => wish.id !== id)
    saveWishes(filteredWishes)

    return NextResponse.json({ message: 'Wish deleted successfully' })
  } catch (error) {
    console.error('Error deleting wish:', error)
    return NextResponse.json({ error: 'Failed to delete wish' }, { status: 500 })
  }
}
