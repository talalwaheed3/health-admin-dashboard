import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { UserPlus, Search, Clock, UserCheck2 } from 'lucide-react';
import { visitors as initialVisitors, Visitor } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Visitors() {
  const [visitors, setVisitors] = useState<Visitor[]>(initialVisitors);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cnic: '',
    contact: '',
    purpose: '',
    reference: '',
  });

  const generateVisitorId = () => {
    const num = visitors.length + 1;
    return `VIS${String(num).padStart(3, '0')}`;
  };

  const handleAddVisitor = () => {
    if (!formData.name || !formData.cnic || !formData.contact || !formData.purpose) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    const newVisitor: Visitor = {
      id: generateVisitorId(),
      ...formData,
      arrivalTime: timeStr,
      departureTime: null,
    };

    setVisitors([newVisitor, ...visitors]);

    toast({
      title: "Visitor Added",
      description: `${formData.name} has been registered successfully.`,
    });

    setFormData({ name: '', cnic: '', contact: '', purpose: '', reference: '' });
    setIsAddOpen(false);
  };

  const handleMarkDeparture = (visitorId: string) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    setVisitors(visitors.map(v => 
      v.id === visitorId 
        ? { ...v, departureTime: timeStr }
        : v
    ));

    const visitor = visitors.find(v => v.id === visitorId);
    toast({
      title: "Departure Marked",
      description: `${visitor?.name} has left at ${timeStr}`,
    });
  };

  const filteredVisitors = visitors.filter(visitor =>
    visitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    visitor.cnic.toLowerCase().includes(searchQuery.toLowerCase()) ||
    visitor.purpose.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout title="Daily Visitors List">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <UserCheck2 className="w-5 h-5 text-primary" />
                Visitor Management
              </CardTitle>
              <CardDescription>Track and manage daily visitors</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search visitors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-full sm:w-64"
                />
              </div>
              
              <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogTrigger asChild>
                  <Button variant="healthcare">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add Visitor
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card">
                  <DialogHeader>
                    <DialogTitle>Register New Visitor</DialogTitle>
                    <DialogDescription>
                      Enter the visitor details below
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="visitorName">Full Name *</Label>
                      <Input
                        id="visitorName"
                        placeholder="Enter visitor name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cnic">CNIC *</Label>
                        <Input
                          id="cnic"
                          placeholder="35201-1234567-8"
                          value={formData.cnic}
                          onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact">Contact *</Label>
                        <Input
                          id="contact"
                          placeholder="+92 300 1234567"
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Purpose of Visit *</Label>
                      <Input
                        id="purpose"
                        placeholder="e.g., Patient Visit, Consultation"
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reference">Reference (Optional)</Label>
                      <Input
                        id="reference"
                        placeholder="e.g., Dr. Sarah Johnson"
                        value={formData.reference}
                        onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddOpen(false)}>Cancel</Button>
                    <Button variant="healthcare" onClick={handleAddVisitor}>Register Visitor</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[270px]">Name</TableHead>
                  <TableHead className="w-[130px]">CNIC</TableHead>
                  <TableHead className="w-[70px]">Arrival</TableHead>
                  <TableHead className="w-[120px]">Departure</TableHead>
                  <TableHead className="w-[120px]">Purpose</TableHead>
                  <TableHead className="w-[120px]">Action</TableHead>
                </TableRow>
              </TableHeader>
            </Table>
            <ScrollArea className='h-[400px]'>
              <Table>
              <TableBody>
                {filteredVisitors.map((visitor) => (
                  <TableRow key={visitor.id} className="table-row-hover">
                    <TableCell className="w-[260px]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center">
                          <span className="text-xs font-medium text-warning">
                            {visitor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{visitor.name}</p>
                          {visitor.reference && (
                            <p className="text-xs text-muted-foreground">Ref: {visitor.reference}</p>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm w-[180px]">{visitor.cnic}</TableCell>
                    <TableCell className="w-[100px]">
                      <div className="flex items-center gap-1 text-success">
                        <Clock className="w-3 h-3" />
                        {visitor.arrivalTime}
                      </div>
                    </TableCell>
                    <TableCell className="w-[100px]">
                      {visitor.departureTime ? (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {visitor.departureTime}
                        </div>
                      ) : (
                        <Badge variant="info">Active</Badge>
                      )}
                    </TableCell>
                    <TableCell className="w-[120px]">
                      <Badge variant="secondary">{visitor.purpose}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {!visitor.departureTime && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleMarkDeparture(visitor.id)}
                        >
                          Mark Departure
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </ScrollArea>
          </div>

          {filteredVisitors.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No visitors found
            </div>
          )}

          {/* Summary */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-muted/30 rounded-lg">
              <span className="text-sm text-muted-foreground">Total Today: </span>
              <span className="font-semibold">{visitors.length}</span>
            </div>
            <div className="px-4 py-2 bg-info/10 rounded-lg">
              <span className="text-sm text-muted-foreground">Currently Active: </span>
              <span className="font-semibold text-info">{visitors.filter(v => !v.departureTime).length}</span>
            </div>
            <div className="px-4 py-2 bg-success/10 rounded-lg">
              <span className="text-sm text-muted-foreground">Departed: </span>
              <span className="font-semibold text-success">{visitors.filter(v => v.departureTime).length}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
