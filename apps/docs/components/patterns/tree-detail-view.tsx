"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Badge } from "@workspace/ui/components/badge";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { Separator } from "@workspace/ui/components/separator";
import {
  ChevronRight,
  ChevronDown,
  FolderOpen,
  Folder,
  FileText,
  Search,
  Save,
  X,
  Package,
} from "lucide-react";

// ---------------------------------------------------------------------------
// HS Code Tree Data Types
// ---------------------------------------------------------------------------

interface HsNode {
  code: string;
  name: string;
  nameEn: string;
  children?: HsNode[];
  /** Leaf-only fields */
  unit?: string;
  dutyRate?: string;
  vatRate?: string;
  description?: string;
  notes?: string;
}

// ---------------------------------------------------------------------------
// Sample HS Code Hierarchy (Korean Customs Tariff)
// ---------------------------------------------------------------------------

const hsTree: HsNode[] = [
  {
    code: "01",
    name: "산 동물",
    nameEn: "Live Animals",
    children: [
      {
        code: "0101",
        name: "말·당나귀·노새",
        nameEn: "Live horses, asses, mules and hinnies",
        children: [
          {
            code: "0101.21",
            name: "순종 번식용",
            nameEn: "Purebred breeding animals",
            unit: "마리 (HEAD)",
            dutyRate: "0%",
            vatRate: "10%",
            description:
              "혈통 등록 기관에 등록된 순종 번식용 말. CITES 허가가 필요할 수 있음.",
            notes: "검역 증명서 필수. 별도 관세양허 대상.",
          },
          {
            code: "0101.29",
            name: "기타",
            nameEn: "Other",
            unit: "마리 (HEAD)",
            dutyRate: "8%",
            vatRate: "10%",
            description: "순종 번식용 외의 기타 살아있는 말.",
            notes: "검역 증명서 필수.",
          },
          {
            code: "0101.30",
            name: "당나귀",
            nameEn: "Asses",
            unit: "마리 (HEAD)",
            dutyRate: "8%",
            vatRate: "10%",
            description: "살아있는 당나귀.",
            notes: "검역 증명서 필수.",
          },
        ],
      },
      {
        code: "0102",
        name: "소",
        nameEn: "Live bovine animals",
        children: [
          {
            code: "0102.21",
            name: "순종 번식용",
            nameEn: "Purebred breeding animals",
            unit: "마리 (HEAD)",
            dutyRate: "0%",
            vatRate: "10%",
            description: "혈통 등록 기관에 등록된 순종 번식용 소.",
            notes: "검역 증명서 필수. 별도 관세양허 대상.",
          },
          {
            code: "0102.29",
            name: "기타",
            nameEn: "Other",
            unit: "마리 (HEAD)",
            dutyRate: "40%",
            vatRate: "10%",
            description: "순종 번식용 외의 기타 살아있는 소.",
            notes: "TRQ 할당 관세 적용 가능.",
          },
        ],
      },
      {
        code: "0103",
        name: "돼지",
        nameEn: "Live swine",
        children: [
          {
            code: "0103.10",
            name: "순종 번식용",
            nameEn: "Purebred breeding animals",
            unit: "마리 (HEAD)",
            dutyRate: "0%",
            vatRate: "10%",
            description: "혈통 등록 기관에 등록된 순종 번식용 돼지.",
            notes: "검역 증명서 필수.",
          },
          {
            code: "0103.91",
            name: "50kg 미만",
            nameEn: "Weighing less than 50 kg",
            unit: "마리 (HEAD)",
            dutyRate: "18%",
            vatRate: "10%",
            description: "체중 50kg 미만의 살아있는 돼지.",
            notes: "검역 증명서 필수.",
          },
          {
            code: "0103.92",
            name: "50kg 이상",
            nameEn: "Weighing 50 kg or more",
            unit: "마리 (HEAD)",
            dutyRate: "25%",
            vatRate: "10%",
            description: "체중 50kg 이상의 살아있는 돼지.",
            notes: "검역 증명서 필수.",
          },
        ],
      },
    ],
  },
  {
    code: "02",
    name: "육과 식용 설육",
    nameEn: "Meat and Edible Meat Offal",
    children: [
      {
        code: "0201",
        name: "쇠고기 (신선·냉장)",
        nameEn: "Meat of bovine animals, fresh or chilled",
        children: [
          {
            code: "0201.10",
            name: "도체·반도체",
            nameEn: "Carcasses and half-carcasses",
            unit: "kg",
            dutyRate: "40%",
            vatRate: "10%",
            description: "신선 또는 냉장한 소의 도체 및 반도체.",
            notes: "TRQ 적용. 위생증명서 필수.",
          },
          {
            code: "0201.20",
            name: "뼈붙은 절단육",
            nameEn: "Other cuts with bone in",
            unit: "kg",
            dutyRate: "40%",
            vatRate: "10%",
            description: "뼈가 붙은 상태의 신선 또는 냉장 쇠고기 절단육.",
            notes: "TRQ 적용. 위생증명서 필수.",
          },
          {
            code: "0201.30",
            name: "뼈없는 절단육",
            nameEn: "Boneless",
            unit: "kg",
            dutyRate: "40%",
            vatRate: "10%",
            description: "뼈를 제거한 신선 또는 냉장 쇠고기.",
            notes: "TRQ 적용. 위생증명서 필수.",
          },
        ],
      },
      {
        code: "0202",
        name: "쇠고기 (냉동)",
        nameEn: "Meat of bovine animals, frozen",
        children: [
          {
            code: "0202.10",
            name: "도체·반도체",
            nameEn: "Carcasses and half-carcasses",
            unit: "kg",
            dutyRate: "40%",
            vatRate: "10%",
            description: "냉동한 소의 도체 및 반도체.",
            notes: "TRQ 적용. 위생증명서 필수.",
          },
          {
            code: "0202.20",
            name: "뼈붙은 절단육",
            nameEn: "Other cuts with bone in",
            unit: "kg",
            dutyRate: "40%",
            vatRate: "10%",
            description: "뼈가 붙은 상태의 냉동 쇠고기 절단육.",
            notes: "TRQ 적용. 위생증명서 필수.",
          },
          {
            code: "0202.30",
            name: "뼈없는 절단육",
            nameEn: "Boneless",
            unit: "kg",
            dutyRate: "40%",
            vatRate: "10%",
            description: "뼈를 제거한 냉동 쇠고기.",
            notes: "TRQ 적용. 위생증명서 필수.",
          },
        ],
      },
    ],
  },
  {
    code: "84",
    name: "원자로·보일러·기계류",
    nameEn: "Nuclear Reactors, Boilers, Machinery",
    children: [
      {
        code: "8471",
        name: "자동자료처리기계",
        nameEn: "Automatic data processing machines",
        children: [
          {
            code: "8471.30",
            name: "휴대용 자동자료처리기계",
            nameEn: "Portable digital automatic data processing machines",
            unit: "대 (UNIT)",
            dutyRate: "0%",
            vatRate: "10%",
            description:
              "중량 10kg 이하의 휴대용 자동자료처리기계 (노트북, 태블릿 등).",
            notes: "ITA 양허 대상 (관세 0%).",
          },
          {
            code: "8471.41",
            name: "기타 디지털 자동자료처리기계",
            nameEn:
              "Other digital automatic data processing machines, comprising a processing unit, input/output unit",
            unit: "대 (UNIT)",
            dutyRate: "0%",
            vatRate: "10%",
            description:
              "처리장치, 입력장치 및 출력장치를 갖춘 것 (데스크톱 PC 등).",
            notes: "ITA 양허 대상.",
          },
          {
            code: "8471.49",
            name: "기타 (시스템 형태)",
            nameEn: "Other, presented in the form of systems",
            unit: "대 (UNIT)",
            dutyRate: "0%",
            vatRate: "10%",
            description: "기타 시스템 형태로 제시되는 자동자료처리기계.",
            notes: "ITA 양허 대상.",
          },
          {
            code: "8471.50",
            name: "처리장치",
            nameEn: "Processing units",
            unit: "대 (UNIT)",
            dutyRate: "0%",
            vatRate: "10%",
            description:
              "저장장치, 입력장치 또는 출력장치를 갖추지 않은 처리장치 (서버 CPU 모듈 등).",
            notes: "ITA 양허 대상.",
          },
        ],
      },
      {
        code: "8473",
        name: "부분품·부속품",
        nameEn: "Parts and accessories for data processing machines",
        children: [
          {
            code: "8473.30",
            name: "제8471호 기계의 부분품·부속품",
            nameEn: "Parts and accessories of machines of heading 84.71",
            unit: "kg",
            dutyRate: "0%",
            vatRate: "10%",
            description: "자동자료처리기계(8471호)의 부분품 및 부속품.",
            notes: "ITA 양허 대상.",
          },
        ],
      },
    ],
  },
  {
    code: "85",
    name: "전기기기·음향기기",
    nameEn: "Electrical Machinery and Equipment",
    children: [
      {
        code: "8517",
        name: "전화기·통신기기",
        nameEn: "Telephone sets and other apparatus for transmission",
        children: [
          {
            code: "8517.12",
            name: "셀룰러 네트워크용 전화기",
            nameEn: "Telephones for cellular networks or wireless networks",
            unit: "대 (UNIT)",
            dutyRate: "0%",
            vatRate: "10%",
            description:
              "셀룰러 네트워크 또는 기타 무선 네트워크용 전화기 (스마트폰 포함).",
            notes: "ITA 양허 대상. KC인증 필수.",
          },
          {
            code: "8517.62",
            name: "수신·변환·송신·재생 기기",
            nameEn:
              "Machines for reception, conversion, transmission or regeneration",
            unit: "대 (UNIT)",
            dutyRate: "0%",
            vatRate: "10%",
            description:
              "음성, 영상, 데이터의 수신·변환·송신·재생 기기 (라우터, 스위치 등).",
            notes: "ITA 양허 대상.",
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Flatten helpers
// ---------------------------------------------------------------------------

function findNode(nodes: HsNode[], code: string): HsNode | undefined {
  for (const n of nodes) {
    if (n.code === code) return n;
    if (n.children) {
      const found = findNode(n.children, code);
      if (found) return found;
    }
  }
  return undefined;
}

function isLeaf(node: HsNode): boolean {
  return !node.children || node.children.length === 0;
}

function getAncestorCodes(nodes: HsNode[], target: string): Set<string> {
  const set = new Set<string>();
  function walk(ns: HsNode[], path: string[]): boolean {
    for (const n of ns) {
      if (n.code === target) {
        path.forEach((c) => set.add(c));
        return true;
      }
      if (n.children && walk(n.children, [...path, n.code])) return true;
    }
    return false;
  }
  walk(nodes, []);
  return set;
}

// ---------------------------------------------------------------------------
// Tree Node Component
// ---------------------------------------------------------------------------

function TreeNode({
  node,
  level,
  selectedCode,
  expanded,
  onSelect,
  onToggle,
}: {
  node: HsNode;
  level: number;
  selectedCode: string;
  expanded: Set<string>;
  onSelect: (code: string) => void;
  onToggle: (code: string) => void;
}) {
  const leaf = isLeaf(node);
  const isExpanded = expanded.has(node.code);
  const isSelected = selectedCode === node.code;

  return (
    <div>
      <button
        onClick={() => {
          onSelect(node.code);
          if (!leaf) onToggle(node.code);
        }}
        className={`flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
          isSelected
            ? "bg-primary/10 text-primary font-medium"
            : "hover:bg-muted/50"
        }`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        {/* Expand/collapse icon */}
        {!leaf ? (
          isExpanded ? (
            <ChevronDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          )
        ) : (
          <span className="w-3.5 shrink-0" />
        )}

        {/* Node icon */}
        {!leaf ? (
          isExpanded ? (
            <FolderOpen className="h-4 w-4 shrink-0 text-amber-500" />
          ) : (
            <Folder className="h-4 w-4 shrink-0 text-amber-500" />
          )
        ) : (
          <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}

        {/* Code */}
        <span className="font-mono text-xs text-muted-foreground shrink-0">
          {node.code}
        </span>

        {/* Name */}
        <span className="truncate">{node.name}</span>
      </button>

      {/* Children */}
      {!leaf && isExpanded && (
        <div>
          {node.children!.map((child) => (
            <TreeNode
              key={child.code}
              node={child}
              level={level + 1}
              selectedCode={selectedCode}
              expanded={expanded}
              onSelect={onSelect}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Detail Panel
// ---------------------------------------------------------------------------

function DetailPanel({ node }: { node: HsNode }) {
  const leaf = isLeaf(node);

  return (
    <ScrollArea className="h-full">
      <div className="p-4 lg:p-6">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {leaf ? (
                <Package className="h-5 w-5 text-primary" />
              ) : (
                <FolderOpen className="h-5 w-5 text-amber-500" />
              )}
              <h3 className="text-lg font-semibold">{node.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{node.nameEn}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={leaf ? "default" : "secondary"}>
              {leaf
                ? "소호 (Subheading)"
                : node.code.length <= 2
                  ? "류 (Chapter)"
                  : "호 (Heading)"}
            </Badge>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Code info */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
          <div className="space-y-2">
            <Label>HS Code</Label>
            <Input
              value={node.code}
              readOnly
              className="bg-muted font-mono text-base"
            />
          </div>
          <div className="space-y-2">
            <Label>품명 (Korean)</Label>
            <Input defaultValue={node.name} />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label>영문명 (English)</Label>
            <Input defaultValue={node.nameEn} />
          </div>
        </div>

        {/* Leaf-specific fields */}
        {leaf && (
          <>
            <Separator className="mb-6" />
            <h4 className="text-sm font-semibold mb-4">관세 정보</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
              <div className="space-y-2">
                <Label>단위 (Unit)</Label>
                <Input defaultValue={node.unit} />
              </div>
              <div className="space-y-2">
                <Label>관세율 (Duty Rate)</Label>
                <Input defaultValue={node.dutyRate} />
              </div>
              <div className="space-y-2">
                <Label>부가세율 (VAT Rate)</Label>
                <Input defaultValue={node.vatRate} />
              </div>
            </div>

            <Separator className="mb-6" />
            <h4 className="text-sm font-semibold mb-4">설명 및 비고</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>품목 설명</Label>
                <textarea
                  className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue={node.description}
                />
              </div>
              <div className="space-y-2">
                <Label>비고 (Notes)</Label>
                <textarea
                  className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue={node.notes}
                />
              </div>
            </div>
          </>
        )}

        {/* Branch: show children summary */}
        {!leaf && node.children && (
          <>
            <Separator className="mb-6" />
            <h4 className="text-sm font-semibold mb-4">
              하위 항목 ({node.children.length}건)
            </h4>
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-3 py-2 text-left font-medium">코드</th>
                    <th className="px-3 py-2 text-left font-medium">품명</th>
                    <th className="px-3 py-2 text-left font-medium">영문명</th>
                    <th className="px-3 py-2 text-center font-medium">유형</th>
                  </tr>
                </thead>
                <tbody>
                  {node.children.map((child) => (
                    <tr key={child.code} className="border-b last:border-0">
                      <td className="px-3 py-2 font-mono text-xs">
                        {child.code}
                      </td>
                      <td className="px-3 py-2">{child.name}</td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {child.nameEn}
                      </td>
                      <td className="px-3 py-2 text-center">
                        <Badge variant="outline" className="text-[10px]">
                          {isLeaf(child) ? "소호" : "호"}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Action buttons */}
        {leaf && (
          <div className="mt-6 flex gap-2">
            <Button>
              <Save className="me-1.5 h-4 w-4" />
              저장
            </Button>
            <Button variant="outline">취소</Button>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export function TreeDetailView() {
  const defaultCode = "8471.30";
  const [selectedCode, setSelectedCode] = useState(defaultCode);
  const [searchQuery, setSearchQuery] = useState("");

  // Auto-expand ancestors of selected node
  const ancestors = getAncestorCodes(hsTree, selectedCode);
  const [manualExpanded, setManualExpanded] = useState<Set<string>>(
    () => new Set([...ancestors]),
  );

  // Merge: ancestors of selected + manually toggled
  const expanded = new Set([...manualExpanded, ...ancestors]);

  function handleToggle(code: string) {
    setManualExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });
  }

  function handleSelect(code: string) {
    setSelectedCode(code);
    // Auto-expand ancestors of newly selected node
    const newAncestors = getAncestorCodes(hsTree, code);
    setManualExpanded((prev) => {
      const next = new Set(prev);
      newAncestors.forEach((c) => next.add(c));
      return next;
    });
  }

  // Filter tree based on search
  function filterTree(nodes: HsNode[], query: string): HsNode[] {
    if (!query) return nodes;
    const q = query.toLowerCase();
    return nodes.reduce<HsNode[]>((acc, node) => {
      const matches =
        node.code.includes(q) ||
        node.name.includes(query) ||
        node.nameEn.toLowerCase().includes(q);
      const filteredChildren = node.children
        ? filterTree(node.children, query)
        : [];
      if (matches || filteredChildren.length > 0) {
        acc.push({
          ...node,
          children:
            filteredChildren.length > 0 ? filteredChildren : node.children,
        });
      }
      return acc;
    }, []);
  }

  const filteredTree = filterTree(hsTree, searchQuery);
  const selectedNode = findNode(hsTree, selectedCode);

  // Count all leaf nodes
  function countLeaves(nodes: HsNode[]): number {
    return nodes.reduce(
      (sum, n) =>
        sum + (isLeaf(n) ? 1 : n.children ? countLeaves(n.children) : 0),
      0,
    );
  }

  return (
    <>
      {/* Desktop: side-by-side */}
      <div className="hidden lg:flex h-[calc(100vh-12rem)] min-h-[500px] rounded-lg border">
        {/* Left: Tree */}
        <div className="w-[360px] shrink-0 border-e flex flex-col overflow-hidden">
          <div className="border-b p-3 space-y-2">
            <div className="relative">
              <Search className="text-muted-foreground absolute start-2.5 top-2.5 h-4 w-4" />
              <Input
                placeholder="HS 코드 또는 품명 검색..."
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
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{countLeaves(filteredTree)} items</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 text-xs px-2"
                onClick={() => {
                  // Expand all
                  const all = new Set<string>();
                  function walk(nodes: HsNode[]) {
                    nodes.forEach((n) => {
                      if (n.children) {
                        all.add(n.code);
                        walk(n.children);
                      }
                    });
                  }
                  walk(hsTree);
                  setManualExpanded(all);
                }}
              >
                모두 펼치기
              </Button>
            </div>
          </div>
          <ScrollArea className="flex-1 min-h-0">
            <div className="py-1">
              {filteredTree.map((node) => (
                <TreeNode
                  key={node.code}
                  node={node}
                  level={0}
                  selectedCode={selectedCode}
                  expanded={expanded}
                  onSelect={handleSelect}
                  onToggle={handleToggle}
                />
              ))}
              {filteredTree.length === 0 && (
                <p className="p-4 text-center text-sm text-muted-foreground">
                  검색 결과가 없습니다.
                </p>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Right: Detail */}
        <div className="flex-1 min-w-0 overflow-hidden">
          {selectedNode ? (
            <DetailPanel node={selectedNode} />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              좌측 트리에서 항목을 선택하세요.
            </div>
          )}
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="space-y-4 lg:hidden">
        {/* Tree */}
        <div className="rounded-lg border">
          <div className="border-b p-3">
            <div className="relative">
              <Search className="text-muted-foreground absolute start-2.5 top-2.5 h-4 w-4" />
              <Input
                placeholder="HS 코드 또는 품명 검색..."
                className="ps-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="h-[300px]">
            <div className="py-1">
              {filteredTree.map((node) => (
                <TreeNode
                  key={node.code}
                  node={node}
                  level={0}
                  selectedCode={selectedCode}
                  expanded={expanded}
                  onSelect={handleSelect}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </ScrollArea>
        </div>

        <Separator />

        {/* Detail */}
        <div className="rounded-lg border">
          {selectedNode ? (
            <DetailPanel node={selectedNode} />
          ) : (
            <div className="flex h-[200px] items-center justify-center text-muted-foreground">
              트리에서 항목을 선택하세요.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
