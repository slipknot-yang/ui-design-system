"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Badge } from "@workspace/ui/components/badge";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { Separator } from "@workspace/ui/components/separator";
import { Search, Save, X, Building2 } from "lucide-react";

interface CustomsOffice {
  code: string;
  name: string;
  nameEn: string;
  region: string;
  address: string;
  phone: string;
  fax: string;
  director: string;
  established: string;
  status: "Active" | "Inactive";
  type: "본부세관" | "세관" | "출장소";
}

const officeData: CustomsOffice[] = [
  {
    code: "020",
    name: "인천세관",
    nameEn: "Incheon Customs",
    region: "인천광역시",
    address: "인천광역시 중구 축항대로 365",
    phone: "032-452-3114",
    fax: "032-452-3119",
    director: "김수현",
    established: "1883-06-16",
    status: "Active",
    type: "본부세관",
  },
  {
    code: "050",
    name: "부산세관",
    nameEn: "Busan Customs",
    region: "부산광역시",
    address: "부산광역시 중구 충장대로 20",
    phone: "051-620-6114",
    fax: "051-620-6119",
    director: "이민호",
    established: "1878-09-01",
    status: "Active",
    type: "본부세관",
  },
  {
    code: "010",
    name: "서울세관",
    nameEn: "Seoul Customs",
    region: "서울특별시",
    address: "서울특별시 강남구 논현로 174",
    phone: "02-510-1114",
    fax: "02-510-1119",
    director: "박서준",
    established: "1970-07-01",
    status: "Active",
    type: "본부세관",
  },
  {
    code: "030",
    name: "김포공항세관",
    nameEn: "Gimpo Airport Customs",
    region: "서울특별시",
    address: "서울특별시 강서구 하늘길 112",
    phone: "02-2662-5114",
    fax: "02-2662-5119",
    director: "최윤아",
    established: "1958-01-01",
    status: "Active",
    type: "세관",
  },
  {
    code: "040",
    name: "인천공항세관",
    nameEn: "Incheon Airport Customs",
    region: "인천광역시",
    address: "인천광역시 중구 공항로 272",
    phone: "032-722-4114",
    fax: "032-722-4119",
    director: "정해인",
    established: "2001-03-29",
    status: "Active",
    type: "본부세관",
  },
  {
    code: "060",
    name: "대구세관",
    nameEn: "Daegu Customs",
    region: "대구광역시",
    address: "대구광역시 동구 팔공로 155",
    phone: "053-230-5114",
    fax: "053-230-5119",
    director: "강동원",
    established: "1949-11-10",
    status: "Active",
    type: "세관",
  },
  {
    code: "070",
    name: "광주세관",
    nameEn: "Gwangju Customs",
    region: "광주광역시",
    address: "광주광역시 북구 하서로 376",
    phone: "062-975-8114",
    fax: "062-975-8119",
    director: "송중기",
    established: "1946-03-29",
    status: "Active",
    type: "세관",
  },
  {
    code: "080",
    name: "평택직할세관",
    nameEn: "Pyeongtaek Customs",
    region: "경기도",
    address: "경기도 평택시 포승읍 평택항로 111",
    phone: "031-8054-7114",
    fax: "031-8054-7119",
    director: "공유",
    established: "2009-07-01",
    status: "Active",
    type: "세관",
  },
  {
    code: "090",
    name: "속초세관",
    nameEn: "Sokcho Customs",
    region: "강원도",
    address: "강원특별자치도 속초시 중앙로 187",
    phone: "033-639-8114",
    fax: "033-639-8119",
    director: "이준혁",
    established: "1994-07-01",
    status: "Inactive",
    type: "출장소",
  },
  {
    code: "100",
    name: "창원세관",
    nameEn: "Changwon Customs",
    region: "경상남도",
    address: "경상남도 창원시 의창구 원이대로 362",
    phone: "055-210-8114",
    fax: "055-210-8119",
    director: "현빈",
    established: "1974-01-01",
    status: "Active",
    type: "세관",
  },
];

export function MasterDetailView() {
  const [selectedCode, setSelectedCode] = useState("020");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOffices = officeData.filter(
    (o) =>
      o.name.includes(searchQuery) ||
      o.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.code.includes(searchQuery) ||
      o.region.includes(searchQuery),
  );

  const selected = officeData.find((o) => o.code === selectedCode)!;

  return (
    <>
      {/* Desktop: side-by-side layout */}
      <div className="hidden lg:flex h-[calc(100vh-12rem)] min-h-[500px] rounded-lg border">
        {/* Left Panel - Master List */}
        <div className="w-[340px] shrink-0 border-e flex flex-col overflow-hidden">
          <div className="border-b p-3">
            <div className="relative">
              <Search className="text-muted-foreground absolute start-2.5 top-2.5 h-4 w-4" />
              <Input
                placeholder="Search offices..."
                className="ps-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute end-1 top-1 h-7 w-7"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>
            <p className="text-muted-foreground mt-2 text-xs">
              {filteredOffices.length} offices
            </p>
          </div>
          <ScrollArea className="flex-1 min-h-0">
            <div className="space-y-0.5 p-2">
              {filteredOffices.map((office) => (
                <button
                  key={office.code}
                  onClick={() => setSelectedCode(office.code)}
                  className={`flex w-full items-start gap-3 rounded-md px-3 py-2.5 text-left transition-colors ${
                    office.code === selectedCode
                      ? "bg-primary/10 border-primary/20 border"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`mt-0.5 rounded-md p-1.5 ${
                      office.code === selectedCode
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-0.5 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-sm font-medium">
                        {office.name}
                      </span>
                      <Badge
                        variant={
                          office.status === "Active" ? "default" : "secondary"
                        }
                        className="shrink-0 text-[10px] px-1.5 py-0"
                      >
                        {office.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-mono">{office.code}</span>
                      <span>·</span>
                      <span className="truncate">{office.region}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground truncate">
                      {office.nameEn}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Right Panel - Detail Form */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <DetailForm office={selected} scrollHeight="h-full" />
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="space-y-4 lg:hidden">
        {/* Search + List */}
        <div className="rounded-lg border">
          <div className="border-b p-3">
            <div className="relative">
              <Search className="text-muted-foreground absolute start-2.5 top-2.5 h-4 w-4" />
              <Input
                placeholder="Search offices..."
                className="ps-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="h-[300px]">
            <div className="space-y-0.5 p-2">
              {filteredOffices.map((office) => (
                <button
                  key={office.code}
                  onClick={() => setSelectedCode(office.code)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors ${
                    office.code === selectedCode
                      ? "bg-primary/10 border-primary/20 border"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <Building2 className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="truncate text-sm font-medium">
                    {office.name}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {office.code}
                  </span>
                  <Badge
                    variant={
                      office.status === "Active" ? "default" : "secondary"
                    }
                    className="ms-auto shrink-0 text-[10px] px-1.5 py-0"
                  >
                    {office.status}
                  </Badge>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <Separator />

        {/* Detail */}
        <div className="rounded-lg border">
          <DetailForm office={selected} />
        </div>
      </div>
    </>
  );
}

function DetailForm({
  office,
  scrollHeight,
}: {
  office: CustomsOffice;
  scrollHeight?: string;
}) {
  return (
    <ScrollArea className={scrollHeight ?? "h-auto"}>
      <div className="p-4 lg:p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{office.name}</h3>
            <p className="text-sm text-muted-foreground">{office.nameEn}</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm">
              <Save className="me-1.5 h-4 w-4" />
              Save
            </Button>
            <Button size="sm" variant="outline">
              Cancel
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Office Code</Label>
            <Input
              value={office.code}
              readOnly
              className="bg-muted font-mono"
            />
          </div>
          <div className="space-y-2">
            <Label>Type</Label>
            <Input value={office.type} readOnly className="bg-muted" />
          </div>
          <div className="space-y-2">
            <Label>Office Name (KR)</Label>
            <Input defaultValue={office.name} />
          </div>
          <div className="space-y-2">
            <Label>Office Name (EN)</Label>
            <Input defaultValue={office.nameEn} />
          </div>
          <div className="space-y-2">
            <Label>Region</Label>
            <Input defaultValue={office.region} />
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Input defaultValue={office.status} />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label>Address</Label>
            <Input defaultValue={office.address} />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input defaultValue={office.phone} />
          </div>
          <div className="space-y-2">
            <Label>Fax</Label>
            <Input defaultValue={office.fax} />
          </div>
          <div className="space-y-2">
            <Label>Director</Label>
            <Input defaultValue={office.director} />
          </div>
          <div className="space-y-2">
            <Label>Established</Label>
            <Input type="date" defaultValue={office.established} />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
