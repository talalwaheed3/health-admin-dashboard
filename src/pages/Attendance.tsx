import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Fingerprint, LogIn, LogOut, Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  attendanceRecords as initialRecords,
  employees,
  AttendanceRecord,
} from "@/data/mockData";
import { toast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Attendance() {
  const [records, setRecords] = useState<AttendanceRecord[]>(initialRecords);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCheckIn = () => {
    if (!selectedEmployee) {
      toast({
        title: "Select Employee",
        description: "Please select an employee to check in.",
        variant: "destructive",
      });
      return;
    }

    const employee = employees.find((e) => e.id === selectedEmployee);
    if (!employee) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const isLate = now.getHours() >= 9;

    const existingIndex = records.findIndex(
      (r) => r.employeeId === selectedEmployee
    );

    if (existingIndex >= 0 && records[existingIndex].checkIn) {
      toast({
        title: "Already Checked In",
        description: `${employee.name} has already checked in today.`,
        variant: "destructive",
      });
      return;
    }

    if (existingIndex >= 0) {
      const updated = [...records];
      updated[existingIndex] = {
        ...updated[existingIndex],
        checkIn: timeStr,
        status: isLate ? "Late" : "Present",
      };
      setRecords(updated);
    } else {
      setRecords([
        {
          employeeId: selectedEmployee,
          employeeName: employee.name,
          date: new Date().toISOString().split("T")[0],
          checkIn: timeStr,
          checkOut: null,
          status: isLate ? "Late" : "Present",
        },
        ...records,
      ]);
    }

    toast({
      title: "Check-in Successful",
      description: `${employee.name} checked in at ${timeStr}`,
    });
    setSelectedEmployee("");
  };

  const handleCheckOut = () => {
    if (!selectedEmployee) {
      toast({
        title: "Select Employee",
        description: "Please select an employee to check out.",
        variant: "destructive",
      });
      return;
    }

    const employee = employees.find((e) => e.id === selectedEmployee);
    if (!employee) return;

    const existingIndex = records.findIndex(
      (r) => r.employeeId === selectedEmployee
    );

    if (existingIndex < 0 || !records[existingIndex].checkIn) {
      toast({
        title: "Not Checked In",
        description: `${employee.name} has not checked in today.`,
        variant: "destructive",
      });
      return;
    }

    if (records[existingIndex].checkOut) {
      toast({
        title: "Already Checked Out",
        description: `${employee.name} has already checked out today.`,
        variant: "destructive",
      });
      return;
    }

    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const updated = [...records];
    updated[existingIndex] = {
      ...updated[existingIndex],
      checkOut: timeStr,
    };
    setRecords(updated);

    toast({
      title: "Check-out Successful",
      description: `${employee.name} checked out at ${timeStr}`,
    });
    setSelectedEmployee("");
  };

  const filteredRecords = records.filter(
    (record) =>
      record.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.employeeId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout title="Attendance Management">
      {/* Biometric Simulation Card */}
      <Card className="mb-6 shadow-card border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Fingerprint className="w-5 h-5 text-primary" />
            Biometric Check-in/Check-out
          </CardTitle>
          <CardDescription>
            Simulate biometric attendance for employees
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              value={selectedEmployee}
              onValueChange={setSelectedEmployee}
            >
              <SelectTrigger className="w-full sm:w-64">
                <SelectValue placeholder="Select Employee" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                {employees.map((employee) => (
                  <SelectItem key={employee.id} value={employee.id}>
                    {employee.name} ({employee.id})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button
                onClick={handleCheckIn}
                variant="success"
                className="flex-1 sm:flex-none"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Simulate Check-in
              </Button>
              <Button
                onClick={handleCheckOut}
                variant="secondary"
                className="flex-1 sm:flex-none"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Simulate Check-out
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Table */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Attendance Records
              </CardTitle>
              <CardDescription>Today's attendance log</CardDescription>
              {/* <CardDescription>Total Present: {records.filter(r => r.status === 'Present').length}</CardDescription>
              <CardDescription>Total Late: {records.filter(r => r.status === 'Late').length}</CardDescription>
              <CardDescription>Total Absent: {records.filter(r => r.status === 'Absent').length}</CardDescription> */}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search employee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            {/* Fixed Header */}
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[140px]">Employee ID</TableHead>
                  <TableHead className="w-[200px]">Employee Name</TableHead>
                  <TableHead className="w-[120px]">Date</TableHead>
                  <TableHead className="w-[120px]">Check-in</TableHead>
                  <TableHead className="w-[120px]">Check-out</TableHead>
                  <TableHead className="w-[120px]">Status</TableHead>
                </TableRow>
              </TableHeader>
            </Table>

            {/* Scrollable Body */}
            <ScrollArea className="h-[400px]">
              <Table>
                <TableBody>
                  {filteredRecords.map((record, index) => (
                    <TableRow key={index} className="hover:bg-muted/40">
                      <TableCell className="w-[140px] font-medium">
                        {record.employeeId}
                      </TableCell>
                      <TableCell className="w-[200px]">
                        {record.employeeName}
                      </TableCell>
                      <TableCell className="w-[120px]">{record.date}</TableCell>
                      <TableCell className="w-[120px]">
                        {record.checkIn ?? (
                          <span className="text-muted-foreground">--:--</span>
                        )}
                      </TableCell>
                      <TableCell className="w-[120px]">
                        {record.checkOut ?? (
                          <span className="text-muted-foreground">--:--</span>
                        )}
                      </TableCell>
                      <TableCell className="w-[120px]">
                        <Badge
                          variant={
                            record.status === "Present"
                              ? "present"
                              : record.status === "Late"
                              ? "late"
                              : "absent"
                          }
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>

          {filteredRecords.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No attendance records found
            </div>
          )}
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
