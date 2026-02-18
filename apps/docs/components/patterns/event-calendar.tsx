"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Calendar } from "@workspace/ui/components/calendar";
import { Plus, MapPin, User, Clock, CalendarIcon } from "lucide-react";

type EventType = "Inspection" | "Audit" | "Review" | "Meeting";
type EventStatus = "Scheduled" | "Confirmed" | "Pending" | "Completed";

interface ScheduleEvent {
  id: number;
  date: string;
  title: string;
  type: EventType;
  office: string;
  officer: string;
  time: string;
  status: EventStatus;
  description: string;
}

const typeColors: Record<EventType, { dot: string; badge: string }> = {
  Inspection: {
    dot: "bg-blue-500",
    badge: "bg-blue-500/15 text-blue-700 border-blue-500/25 dark:text-blue-400",
  },
  Audit: {
    dot: "bg-red-500",
    badge: "bg-red-500/15 text-red-700 border-red-500/25 dark:text-red-400",
  },
  Review: {
    dot: "bg-amber-500",
    badge:
      "bg-amber-500/15 text-amber-700 border-amber-500/25 dark:text-amber-400",
  },
  Meeting: {
    dot: "bg-emerald-500",
    badge:
      "bg-emerald-500/15 text-emerald-700 border-emerald-500/25 dark:text-emerald-400",
  },
};

const statusStyles: Record<EventStatus, string> = {
  Scheduled: "bg-blue-500/15 text-blue-700 dark:text-blue-400",
  Confirmed: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  Pending: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  Completed: "bg-muted text-muted-foreground",
};

const scheduleData: ScheduleEvent[] = [
  {
    id: 1,
    date: "2026-02-16",
    title: "Incheon Port Inspection",
    type: "Inspection",
    office: "Incheon",
    officer: "Park Ji-sung",
    time: "09:00 - 12:00",
    status: "Scheduled",
    description: "Monthly container inspection at Incheon Port Terminal 3",
  },
  {
    id: 2,
    date: "2026-02-16",
    title: "Seoul Office Meeting",
    type: "Meeting",
    office: "Seoul",
    officer: "Kim Min-jae",
    time: "14:00 - 15:30",
    status: "Confirmed",
    description: "Quarterly compliance review meeting",
  },
  {
    id: 3,
    date: "2026-02-17",
    title: "Busan Container Audit",
    type: "Audit",
    office: "Busan",
    officer: "Kim Min-jae",
    time: "10:00 - 16:00",
    status: "Confirmed",
    description: "Full audit of container storage facility in Busan",
  },
  {
    id: 4,
    date: "2026-02-18",
    title: "Seoul Warehouse Check",
    type: "Inspection",
    office: "Seoul",
    officer: "Lee Soo-jin",
    time: "09:30 - 11:30",
    status: "Scheduled",
    description: "Bonded warehouse inspection - Seoul Central",
  },
  {
    id: 5,
    date: "2026-02-18",
    title: "Import Document Review",
    type: "Review",
    office: "Incheon",
    officer: "Choi Yun-ah",
    time: "13:00 - 15:00",
    status: "Pending",
    description: "Review pending import declarations for compliance",
  },
  {
    id: 6,
    date: "2026-02-20",
    title: "Gimpo Air Cargo Review",
    type: "Review",
    office: "Gimpo",
    officer: "Choi Yun-ah",
    time: "10:00 - 12:00",
    status: "Pending",
    description: "Air cargo manifest review for suspicious shipments",
  },
  {
    id: 7,
    date: "2026-02-23",
    title: "Quarterly Compliance Meeting",
    type: "Meeting",
    office: "Seoul",
    officer: "Park Ji-sung",
    time: "09:00 - 17:00",
    status: "Confirmed",
    description: "All-office quarterly compliance and performance review",
  },
  {
    id: 8,
    date: "2026-02-25",
    title: "Pyeongtaek Port Audit",
    type: "Audit",
    office: "Pyeongtaek",
    officer: "Kim Min-jae",
    time: "09:00 - 15:00",
    status: "Scheduled",
    description: "Annual port audit - Pyeongtaek International Terminal",
  },
  {
    id: 9,
    date: "2026-02-26",
    title: "Export License Review",
    type: "Review",
    office: "Seoul",
    officer: "Lee Soo-jin",
    time: "10:00 - 12:00",
    status: "Pending",
    description: "Review export license applications for restricted goods",
  },
  {
    id: 10,
    date: "2026-02-27",
    title: "Busan Warehouse Inspection",
    type: "Inspection",
    office: "Busan",
    officer: "Park Ji-sung",
    time: "09:00 - 13:00",
    status: "Scheduled",
    description: "Free trade zone warehouse inspection",
  },
];

function parseDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y!, m! - 1, d!);
}

function formatDateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(2026, 1, 16),
  );
  const [typeFilter, setTypeFilter] = useState("all");

  const selectedDateKey = selectedDate ? formatDateKey(selectedDate) : null;

  const filteredEvents = scheduleData.filter((e) => {
    if (typeFilter !== "all" && e.type !== typeFilter) return false;
    if (selectedDateKey && e.date !== selectedDateKey) return false;
    return true;
  });

  // Build set of dates that have events for dot indicators
  const eventDates = new Map<string, EventType[]>();
  for (const e of scheduleData) {
    const types = eventDates.get(e.date) || [];
    if (!types.includes(e.type)) types.push(e.type);
    eventDates.set(e.date, types);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr]">
      {/* Left: Calendar + Filters */}
      <div className="space-y-4">
        <Card>
          <CardContent className="p-3">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md"
              modifiers={{
                hasEvent: scheduleData.map((e) => parseDate(e.date)),
              }}
              modifiersClassNames={{
                hasEvent:
                  "relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-primary",
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Label>Event Type</Label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Inspection">Inspection</SelectItem>
                  <SelectItem value="Audit">Audit</SelectItem>
                  <SelectItem value="Review">Review</SelectItem>
                  <SelectItem value="Meeting">Meeting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Legend */}
            <div className="space-y-1.5 pt-2">
              <p className="text-xs font-medium text-muted-foreground">
                Legend
              </p>
              {(Object.keys(typeColors) as EventType[]).map((type) => (
                <div key={type} className="flex items-center gap-2 text-xs">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${typeColors[type].dot}`}
                  />
                  <span>{type}</span>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => {
                setSelectedDate(undefined);
                setTypeFilter("all");
              }}
            >
              Show All Events
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Right: Event Cards + New Event */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {selectedDateKey
                ? `Events for ${selectedDateKey}`
                : "All Upcoming Events"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {filteredEvents.length} event(s)
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="me-1.5 h-4 w-4" />
                New Event
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Schedule</DialogTitle>
                <DialogDescription>
                  Add a new inspection, audit, review, or meeting to the
                  calendar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input
                      type="date"
                      defaultValue={selectedDateKey || "2026-02-20"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Type</Label>
                    <Select defaultValue="Inspection">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Inspection">Inspection</SelectItem>
                        <SelectItem value="Audit">Audit</SelectItem>
                        <SelectItem value="Review">Review</SelectItem>
                        <SelectItem value="Meeting">Meeting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input placeholder="Event title..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Office</Label>
                    <Select defaultValue="incheon">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="incheon">Incheon</SelectItem>
                        <SelectItem value="busan">Busan</SelectItem>
                        <SelectItem value="seoul">Seoul</SelectItem>
                        <SelectItem value="gimpo">Gimpo</SelectItem>
                        <SelectItem value="pyeongtaek">Pyeongtaek</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Officer</Label>
                    <Input placeholder="Assigned officer..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Time</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="time"
                      defaultValue="09:00"
                      className="flex-1"
                    />
                    <span className="text-muted-foreground">~</span>
                    <Input
                      type="time"
                      defaultValue="12:00"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Event</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {filteredEvents.length === 0 ? (
            <div className="col-span-full rounded-lg border-2 border-dashed p-8 text-center">
              <CalendarIcon className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No events found</p>
              <p className="text-xs text-muted-foreground">
                Select a different date or clear filters
              </p>
            </div>
          ) : (
            filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="transition-all hover:shadow-md cursor-pointer"
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${typeColors[event.type].dot}`}
                      />
                      <Badge className={typeColors[event.type].badge}>
                        {event.type}
                      </Badge>
                    </div>
                    <Badge className={statusStyles[event.status]}>
                      {event.status}
                    </Badge>
                  </div>
                  <h4 className="font-medium leading-tight">{event.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.office}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {event.officer}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
