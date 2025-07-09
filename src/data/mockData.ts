import { FIR, Criminal, CrimeAlert } from '../types';

export const mockFIRs: FIR[] = [
  {
    id: 'FIR001',
    title: 'Bike Theft',
    description: 'My motorcycle was stolen from the parking lot',
    crimeType: 'Theft',
    date: '2024-01-15',
    time: '14:30',
    location: 'Main Street Parking',
    pincode: '12345',
    status: 'investigating',
    civilianId: '1',
    civilianName: 'John Citizen',
    assignedOfficer: 'Officer Smith',
    priority: 'medium'
  },
  {
    id: 'FIR002',
    title: 'House Break-in',
    description: 'Someone broke into my house and stole jewelry',
    crimeType: 'Burglary',
    date: '2024-01-14',
    time: '02:00',
    location: 'Elm Street',
    pincode: '12346',
    status: 'pending',
    civilianId: '1',
    civilianName: 'John Citizen',
    priority: 'high'
  },
  {
    id: 'FIR003',
    title: 'Vandalism',
    description: 'My car was vandalized in the parking lot',
    crimeType: 'Vandalism',
    date: '2024-01-13',
    time: '20:15',
    location: 'City Mall',
    pincode: '12347',
    status: 'closed',
    civilianId: '1',
    civilianName: 'John Citizen',
    assignedOfficer: 'Officer Smith',
    priority: 'low'
  }
];

export const mockCriminals: Criminal[] = [
  {
    id: 'C001',
    name: 'James Wilson',
    age: 28,
    crimes: ['Theft', 'Burglary'],
    firIds: ['FIR001'],
    status: 'wanted',
    lastKnownLocation: 'Downtown Area'
  },
  {
    id: 'C002',
    name: 'Mike Johnson',
    age: 35,
    crimes: ['Vandalism', 'Assault'],
    firIds: ['FIR003'],
    status: 'in_custody',
    lastKnownLocation: 'Police Station'
  }
];

export const mockCrimeAlerts: CrimeAlert[] = [
  {
    id: 'A001',
    type: 'Theft',
    location: 'Downtown Area',
    date: '2024-01-15',
    severity: 'medium',
    description: 'Multiple vehicle thefts reported in the area'
  },
  {
    id: 'A002',
    type: 'Burglary',
    location: 'Residential District',
    date: '2024-01-14',
    severity: 'high',
    description: 'House break-ins reported in the neighborhood'
  }
];

export const crimeTypes = [
  'Theft',
  'Burglary',
  'Assault',
  'Vandalism',
  'Fraud',
  'Drug-related',
  'Domestic Violence',
  'Cybercrime',
  'Traffic Violation',
  'Other'
];

export const locations = [
  'Downtown Area',
  'Residential District',
  'Commercial Zone',
  'Industrial Area',
  'Suburban Area',
  'City Center',
  'Airport Area',
  'Railway Station',
  'Bus Terminal',
  'Shopping Mall'
];