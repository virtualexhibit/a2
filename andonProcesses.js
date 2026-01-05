export function getMockAndonProcesses() {
  return [
    { id: 1, x: 80,  y: 300, status: "ok" },
    { id: 2, x: 150, y: 300, status: "ok" },
    { id: 3, x: 230, y: 260, status: "warning" },
    { id: 4, x: 230, y: 180, status: "ok" },
    { id: 5, x: 230, y: 100, status: "error" },
    { id: 6, x: 320, y: 100, status: "ok" },
    { id: 7, x: 410, y: 100, status: "ok" },
    { id: 8, x: 410, y: 200, status: "warning" },
    { id: 9, x: 410, y: 300, status: "ok" },
    { id: 10, x: 500, y: 300, status: "ok" }
  ];
}
