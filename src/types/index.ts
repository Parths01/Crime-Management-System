export interface User {
  id: string;
  name: string;
  email: string;
  role: 'civilian' | 'police' | 'admin';
  phone?: string;
  badgeNumber?: string;
  area?: string;
  avatar?: string;
}

export interface FIR {
  id: string;
  title: string;
  description: string;
  crimeType: string;
  date: string;
  time: string;
  location: string;
  pincode: string;
  status: 'pending' | 'investigating' | 'closed';
  civilianId: string;
  civilianName: string;
  assignedOfficer?: string;
  evidence?: string[];
  priority: 'low' | 'medium' | 'high';
}

export interface Criminal {
  id: string;
  name: string;
  age: number;
  photo?: string;
  crimes: string[];
  firIds: string[];
  status: 'in_custody' | 'wanted' | 'released';
  lastKnownLocation?: string;
}

export interface CrimeAlert {
  id: string;
  type: string;
  location: string;
  date: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
}