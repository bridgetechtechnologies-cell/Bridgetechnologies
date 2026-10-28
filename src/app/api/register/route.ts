import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';

const DATA_DIR = path.join(process.cwd(), 'data');
const EXCEL_FILE = path.join(DATA_DIR, 'registrations.xlsx');

interface Registration {
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  qualification: string;
  message: string;
}

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readExisting(): Registration[] {
  if (!fs.existsSync(EXCEL_FILE)) return [];
  try {
    const workbook = XLSX.readFile(EXCEL_FILE);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json<Registration>(sheet);
    return data;
  } catch {
    return [];
  }
}

function saveToExcel(records: Registration[]) {
  const worksheet = XLSX.utils.json_to_sheet(records);

  // Set column widths
  worksheet['!cols'] = [
    { wch: 22 }, // Timestamp
    { wch: 25 }, // Name
    { wch: 35 }, // Email
    { wch: 16 }, // Phone
    { wch: 40 }, // Course
    { wch: 20 }, // Qualification
    { wch: 50 }, // Message
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');
  XLSX.writeFile(workbook, EXCEL_FILE);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const registration: Registration = {
      timestamp: body.timestamp || new Date().toISOString(),
      name: String(body.name || '').trim(),
      email: String(body.email || '').trim(),
      phone: String(body.phone || '').trim(),
      course: String(body.course || '').trim(),
      qualification: String(body.qualification || '').trim(),
      message: String(body.message || '').trim(),
    };

    // Basic validation
    if (!registration.name || !registration.email || !registration.phone || !registration.course) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    ensureDataDir();
    const existing = readExisting();
    existing.push(registration);
    saveToExcel(existing);

    return NextResponse.json({ success: true, message: 'Registration saved successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Bridge Technology Registration API is running' });
}

