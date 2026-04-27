import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

// Path ke file penyimpanan
const dataFilePath = path.join(process.cwd(), 'data', 'wishes.json')

// Helper: Memastikan folder & file data/wishes.json ada
function ensureDataFileExists() {
  const dirPath = path.dirname(dataFilePath)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]), 'utf8')
  }
}

// Helper: Membaca ucapan
function getWishes() {
  try {
    ensureDataFileExists()
    const fileContent = fs.readFileSync(dataFilePath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error('Error reading wishes:', error)
    return []
  }
}

// Helper: Menyimpan ucapan
function saveWishes(data: any[]) {
  try {
    ensureDataFileExists()
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8')
  } catch (error) {
    console.error('Error saving wishes:', error)
  }
}

export async function GET() {
  try {
    const wishes = getWishes()
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

    const newWish = {
      id: Date.now().toString(),
      name,
      message,
      ownerId,
      createdAt: new Date().toISOString()
    }

    const wishes = getWishes()
    wishes.unshift(newWish) // Taruh di paling atas
    saveWishes(wishes)

    return NextResponse.json(newWish)
  } catch (error) {
    console.error('Error creating wish:', error)
    return NextResponse.json({ error: 'Failed to create wish' }, { status: 500 })
  }
}
