import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, UserCheck, UserPlus, Clock, Activity, TrendingUp } from 'lucide-react';
import { dashboardStats, attendanceRecords, visitors } from '@/data/mockData';

export default function Dashboard() {
  const recentAttendance = attendanceRecords.slice(0, 5);
  const recentVisitors = visitors.slice(0, 3);

  return (
    <DashboardLayout title="Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Employees"
          value={dashboardStats.totalEmployees}
          icon={Users}
          accentColor="primary"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Today's Attendance"
          value={dashboardStats.todayAttendance}
          icon={Clock}
          accentColor="info"
        />
        <StatCard
          title="Present Today"
          value={dashboardStats.presentEmployees}
          icon={UserCheck}
          accentColor="success"
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Today's Visitors"
          value={dashboardStats.todayVisitors}
          icon={UserPlus}
          accentColor="warning"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Attendance */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Recent Attendance
              </CardTitle>
              <CardDescription>Today's check-in activity</CardDescription>
            </div>
            <Badge variant="secondary">Live</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAttendance.map((record, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {record.employeeName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{record.employeeName}</p>
                      <p className="text-sm text-muted-foreground">{record.employeeId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={
                      record.status === 'Present' ? 'present' :
                      record.status === 'Late' ? 'late' : 'absent'
                    }>
                      {record.status}
                    </Badge>
                    {record.checkIn && (
                      <p className="text-sm text-muted-foreground mt-1">
                        In: {record.checkIn}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Visitors */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-warning" />
              Recent Visitors
            </CardTitle>
            <CardDescription>Today's visitor log</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVisitors.map((visitor, index) => (
                <div 
                  key={index}
                  className="p-3 border border-border rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-medium text-foreground">{visitor.name}</p>
                    <Badge variant={visitor.departureTime ? 'secondary' : 'info'}>
                      {visitor.departureTime ? 'Left' : 'Active'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{visitor.purpose}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Arrived: {visitor.arrivalTime}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              Attendance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Present</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-success rounded-full" style={{ width: '75%' }} />
                  </div>
                  <span className="text-sm font-medium">75%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Late</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-warning rounded-full" style={{ width: '15%' }} />
                  </div>
                  <span className="text-sm font-medium">15%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Absent</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-destructive rounded-full" style={{ width: '10%' }} />
                  </div>
                  <span className="text-sm font-medium">10%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Receptionist', count: 1 },
                { name: 'Composers', count: 3 },
                { name: 'Digital Marketers', count: 5 },
                { name: 'Graphic Designers', count: 2 },
                { name: 'Developer', count: 1 },
                { name: 'Administration', count: 3 },
              ].map((dept, index) => (
                <div 
                  key={index}
                  className="p-3 bg-muted/30 rounded-lg text-center"
                >
                  <p className="text-lg font-bold text-foreground">{dept.count}</p>
                  <p className="text-xs text-muted-foreground">{dept.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
