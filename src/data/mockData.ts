export interface Employee {
  id: string;
  name: string;
  cnic: string;
  contact: string;
  role: string;
  department: string;
}

export interface AttendanceRecord {
  employeeId: string;
  employeeName: string;
  date: string;
  checkIn: string | null;
  checkOut: string | null;
  status: 'Present' | 'Absent' | 'Late';
}

export interface Visitor {
  id: string;
  name: string;
  cnic: string;
  contact: string;
  purpose: string;
  reference: string;
  arrivalTime: string;
  departureTime: string | null;
}

export const employees: Employee[] = [
  { id: 'EMP001', name: 'Dr. Sarah Johnson', cnic: '35201-1234567-8', contact: '+92 300 1234567', role: 'Doctor', department: 'Cardiology' },
  { id: 'EMP002', name: 'Dr. Ahmed Khan', cnic: '35202-2345678-9', contact: '+92 301 2345678', role: 'Doctor', department: 'Neurology' },
  { id: 'EMP003', name: 'Nurse Maria Lopez', cnic: '35203-3456789-0', contact: '+92 302 3456789', role: 'Nurse', department: 'Emergency' },
  { id: 'EMP004', name: 'John Smith', cnic: '35204-4567890-1', contact: '+92 303 4567890', role: 'Technician', department: 'Radiology' },
  { id: 'EMP005', name: 'Fatima Ali', cnic: '35205-5678901-2', contact: '+92 304 5678901', role: 'Receptionist', department: 'Front Desk' },
  { id: 'EMP006', name: 'Dr. Michael Brown', cnic: '35206-6789012-3', contact: '+92 305 6789012', role: 'Doctor', department: 'Orthopedics' },
  { id: 'EMP007', name: 'Nurse Emily Davis', cnic: '35207-7890123-4', contact: '+92 306 7890123', role: 'Nurse', department: 'Pediatrics' },
  { id: 'EMP008', name: 'Robert Wilson', cnic: '35208-8901234-5', contact: '+92 307 8901234', role: 'Admin', department: 'Administration' },
  { id: 'EMP001', name: 'Dr. Sarah Johnson', cnic: '35201-1234567-8', contact: '+92 300 1234567', role: 'Doctor', department: 'Cardiology' },
  { id: 'EMP002', name: 'Dr. Ahmed Khan', cnic: '35202-2345678-9', contact: '+92 301 2345678', role: 'Doctor', department: 'Neurology' },
  { id: 'EMP003', name: 'Nurse Maria Lopez', cnic: '35203-3456789-0', contact: '+92 302 3456789', role: 'Nurse', department: 'Emergency' },
  { id: 'EMP004', name: 'John Smith', cnic: '35204-4567890-1', contact: '+92 303 4567890', role: 'Technician', department: 'Radiology' },
  { id: 'EMP005', name: 'Fatima Ali', cnic: '35205-5678901-2', contact: '+92 304 5678901', role: 'Receptionist', department: 'Front Desk' },
  { id: 'EMP006', name: 'Dr. Michael Brown', cnic: '35206-6789012-3', contact: '+92 305 6789012', role: 'Doctor', department: 'Orthopedics' },
  { id: 'EMP007', name: 'Nurse Emily Davis', cnic: '35207-7890123-4', contact: '+92 306 7890123', role: 'Nurse', department: 'Pediatrics' },
  { id: 'EMP008', name: 'Robert Wilson', cnic: '35208-8901234-5', contact: '+92 307 8901234', role: 'Admin', department: 'Administration' },
  { id: 'EMP001', name: 'Dr. Sarah Johnson', cnic: '35201-1234567-8', contact: '+92 300 1234567', role: 'Doctor', department: 'Cardiology' },
  { id: 'EMP002', name: 'Dr. Ahmed Khan', cnic: '35202-2345678-9', contact: '+92 301 2345678', role: 'Doctor', department: 'Neurology' },
  { id: 'EMP003', name: 'Nurse Maria Lopez', cnic: '35203-3456789-0', contact: '+92 302 3456789', role: 'Nurse', department: 'Emergency' },
  { id: 'EMP004', name: 'John Smith', cnic: '35204-4567890-1', contact: '+92 303 4567890', role: 'Technician', department: 'Radiology' },
  { id: 'EMP005', name: 'Fatima Ali', cnic: '35205-5678901-2', contact: '+92 304 5678901', role: 'Receptionist', department: 'Front Desk' },
  { id: 'EMP006', name: 'Dr. Michael Brown', cnic: '35206-6789012-3', contact: '+92 305 6789012', role: 'Doctor', department: 'Orthopedics' },
  { id: 'EMP007', name: 'Nurse Emily Davis', cnic: '35207-7890123-4', contact: '+92 306 7890123', role: 'Nurse', department: 'Pediatrics' },
  { id: 'EMP008', name: 'Robert Wilson', cnic: '35208-8901234-5', contact: '+92 307 8901234', role: 'Admin', department: 'Administration' },
];

export const attendanceRecords: AttendanceRecord[] = [
  { employeeId: 'EMP001', employeeName: 'Dr. Sarah Johnson', date: '2024-01-15', checkIn: '08:45', checkOut: '17:30', status: 'Present' },
  { employeeId: 'EMP002', employeeName: 'Dr. Ahmed Khan', date: '2024-01-15', checkIn: '09:15', checkOut: '18:00', status: 'Late' },
  { employeeId: 'EMP003', employeeName: 'Nurse Maria Lopez', date: '2024-01-15', checkIn: '07:00', checkOut: '15:30', status: 'Present' },
  { employeeId: 'EMP004', employeeName: 'John Smith', date: '2024-01-15', checkIn: null, checkOut: null, status: 'Absent' },
  { employeeId: 'EMP005', employeeName: 'Fatima Ali', date: '2024-01-15', checkIn: '08:55', checkOut: '17:00', status: 'Present' },
  { employeeId: 'EMP006', employeeName: 'Dr. Michael Brown', date: '2024-01-15', checkIn: '08:30', checkOut: '16:45', status: 'Present' },
  { employeeId: 'EMP007', employeeName: 'Nurse Emily Davis', date: '2024-01-15', checkIn: '09:30', checkOut: null, status: 'Late' },
  { employeeId: 'EMP008', employeeName: 'Robert Wilson', date: '2024-01-15', checkIn: '08:00', checkOut: '17:00', status: 'Present' },
  { employeeId: 'EMP001', employeeName: 'Dr. Sarah Johnson', date: '2024-01-15', checkIn: '08:45', checkOut: '17:30', status: 'Present' },
  { employeeId: 'EMP002', employeeName: 'Dr. Ahmed Khan', date: '2024-01-15', checkIn: '09:15', checkOut: '18:00', status: 'Late' },
  { employeeId: 'EMP003', employeeName: 'Nurse Maria Lopez', date: '2024-01-15', checkIn: '07:00', checkOut: '15:30', status: 'Present' },
  { employeeId: 'EMP004', employeeName: 'John Smith', date: '2024-01-15', checkIn: null, checkOut: null, status: 'Absent' },
  { employeeId: 'EMP005', employeeName: 'Fatima Ali', date: '2024-01-15', checkIn: '08:55', checkOut: '17:00', status: 'Present' },
  { employeeId: 'EMP006', employeeName: 'Dr. Michael Brown', date: '2024-01-15', checkIn: '08:30', checkOut: '16:45', status: 'Present' },
  { employeeId: 'EMP007', employeeName: 'Nurse Emily Davis', date: '2024-01-15', checkIn: '09:30', checkOut: null, status: 'Late' },
  { employeeId: 'EMP008', employeeName: 'Robert Wilson', date: '2024-01-15', checkIn: '08:00', checkOut: '17:00', status: 'Present' },
  { employeeId: 'EMP001', employeeName: 'Dr. Sarah Johnson', date: '2024-01-15', checkIn: '08:45', checkOut: '17:30', status: 'Present' },
  { employeeId: 'EMP002', employeeName: 'Dr. Ahmed Khan', date: '2024-01-15', checkIn: '09:15', checkOut: '18:00', status: 'Late' },
  { employeeId: 'EMP003', employeeName: 'Nurse Maria Lopez', date: '2024-01-15', checkIn: '07:00', checkOut: '15:30', status: 'Present' },
  { employeeId: 'EMP004', employeeName: 'John Smith', date: '2024-01-15', checkIn: null, checkOut: null, status: 'Absent' },
  { employeeId: 'EMP005', employeeName: 'Fatima Ali', date: '2024-01-15', checkIn: '08:55', checkOut: '17:00', status: 'Present' },
  { employeeId: 'EMP006', employeeName: 'Dr. Michael Brown', date: '2024-01-15', checkIn: '08:30', checkOut: '16:45', status: 'Present' },
  { employeeId: 'EMP007', employeeName: 'Nurse Emily Davis', date: '2024-01-15', checkIn: '09:30', checkOut: null, status: 'Late' },
  { employeeId: 'EMP008', employeeName: 'Robert Wilson', date: '2024-01-15', checkIn: '08:00', checkOut: '17:00', status: 'Present' },
];

export const visitors: Visitor[] = [
  { id: 'VIS001', name: 'Ali Hassan', cnic: '35301-1111111-1', contact: '+92 310 1111111', purpose: 'Patient Visit', reference: 'Dr. Sarah Johnson', arrivalTime: '09:30', departureTime: '11:00' },
  { id: 'VIS002', name: 'Zainab Malik', cnic: '35302-2222222-2', contact: '+92 311 2222222', purpose: 'Medical Checkup', reference: 'Dr. Ahmed Khan', arrivalTime: '10:15', departureTime: null },
  { id: 'VIS003', name: 'Omar Farooq', cnic: '35303-3333333-3', contact: '+92 312 3333333', purpose: 'Lab Results', reference: 'John Smith', arrivalTime: '11:00', departureTime: '11:45' },
  { id: 'VIS004', name: 'Ayesha Siddiqui', cnic: '35304-4444444-4', contact: '+92 313 4444444', purpose: 'Consultation', reference: 'Dr. Michael Brown', arrivalTime: '14:00', departureTime: null },
  { id: 'VIS005', name: 'Imran Ahmed', cnic: '35305-5555555-5', contact: '+92 314 5555555', purpose: 'Emergency', reference: 'Emergency Dept', arrivalTime: '08:45', departureTime: '12:30' },
  { id: 'VIS001', name: 'Ali Hassan', cnic: '35301-1111111-1', contact: '+92 310 1111111', purpose: 'Patient Visit', reference: 'Dr. Sarah Johnson', arrivalTime: '09:30', departureTime: '11:00' },
  { id: 'VIS002', name: 'Zainab Malik', cnic: '35302-2222222-2', contact: '+92 311 2222222', purpose: 'Medical Checkup', reference: 'Dr. Ahmed Khan', arrivalTime: '10:15', departureTime: null },
  { id: 'VIS003', name: 'Omar Farooq', cnic: '35303-3333333-3', contact: '+92 312 3333333', purpose: 'Lab Results', reference: 'John Smith', arrivalTime: '11:00', departureTime: '11:45' },
  { id: 'VIS004', name: 'Ayesha Siddiqui', cnic: '35304-4444444-4', contact: '+92 313 4444444', purpose: 'Consultation', reference: 'Dr. Michael Brown', arrivalTime: '14:00', departureTime: null },
  { id: 'VIS005', name: 'Imran Ahmed', cnic: '35305-5555555-5', contact: '+92 314 5555555', purpose: 'Emergency', reference: 'Emergency Dept', arrivalTime: '08:45', departureTime: '12:30' },
  { id: 'VIS001', name: 'Ali Hassan', cnic: '35301-1111111-1', contact: '+92 310 1111111', purpose: 'Patient Visit', reference: 'Dr. Sarah Johnson', arrivalTime: '09:30', departureTime: '11:00' },
  { id: 'VIS002', name: 'Zainab Malik', cnic: '35302-2222222-2', contact: '+92 311 2222222', purpose: 'Medical Checkup', reference: 'Dr. Ahmed Khan', arrivalTime: '10:15', departureTime: null },
  { id: 'VIS003', name: 'Omar Farooq', cnic: '35303-3333333-3', contact: '+92 312 3333333', purpose: 'Lab Results', reference: 'John Smith', arrivalTime: '11:00', departureTime: '11:45' },
  { id: 'VIS004', name: 'Ayesha Siddiqui', cnic: '35304-4444444-4', contact: '+92 313 4444444', purpose: 'Consultation', reference: 'Dr. Michael Brown', arrivalTime: '14:00', departureTime: null },
  { id: 'VIS005', name: 'Imran Ahmed', cnic: '35305-5555555-5', contact: '+92 314 5555555', purpose: 'Emergency', reference: 'Emergency Dept', arrivalTime: '08:45', departureTime: '12:30' },
];

export const dashboardStats = {
  totalEmployees: employees.length,
  todayAttendance: attendanceRecords.length,
  presentEmployees: attendanceRecords.filter(r => r.status === 'Present').length,
  todayVisitors: visitors.length,
};
