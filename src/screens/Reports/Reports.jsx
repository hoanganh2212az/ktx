import React, { useState } from "react";
import { SearchIcon, Download, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import ReportCard from "../../components/ReportCard";
import BigReportCard from "../../components/BigReportCard";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";

export const Reports = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Tình trạng phòng");
  const [selectedArea, setSelectedArea] = useState("Khu");
  const [selectedFloor, setSelectedFloor] = useState("Tầng");

  // Navigation menu items data
  const menuItems = [
    {
      id: 1,
      title: "Thanh toán & Hoá đơn",
      path: "/",
      active: false,
    },
    {
      id: 2,
      title: "Giám sát tiêu thụ điện",
      path: "/power-monitoring",
      active: false,
    },
    {
      id: 3,
      title: "Báo cáo & Thống kê",
      path: "/reports",
      active: true,
    },
  ];

  // Room status options
  const roomStatuses = [
    "Phòng trống",
    "Phòng đã có người ở",
    "Phòng đầy",
    "Phòng đang chờ duyệt đăng ký",
    "Phòng đang bảo trì",
    "Phòng bị tạm khóa"
  ];

  // Areas data
  const areas = ["A", "B1", "B2", "B5"];

  // Floors data
  const floors = ["Tầng 1", "Tầng 2", "Tầng 3", "Tầng 4", "Tầng 5"];

  // Room data
  const roomsData = [
    {
      id: 1,
      area: "Khu A",
      number: "203",
      needsMaintenance: false,
      occupants: [
        { id: 1, name: "Nguyễn Văn An", gender: "male" },
        { id: 3, name: "Lê Quang Anh", gender: "male" },
        { id: 1, name: "Nguyễn Văn Bình", gender: "male" },
        { id: 3, name: "Phạm Văn Đức", gender: "male" }
      ]
    },
    {
      id: 2,
      area: "Khu A",
      number: "204",
      needsMaintenance: true,
      occupants: [
        { id: 2, name: "Nguyễn Thị Xuân Anh", gender: "female" },
        { id: 4, name: "Trần Thị Vân Anh", gender: "female" },
        { id: 2, name: "Trần Thị Mai", gender: "female" },
        { id: 4, name: "Lê Thị Hoa", gender: "female" }
      ]
    },
    {
      id: 3,
      area: "Khu A",
      number: "205",
      needsMaintenance: false,
      occupants: [
        { id: 1, name: "Trần Văn Cường", gender: "male" },
        { id: 3, name: "Lê Văn Dũng", gender: "male" },
        { id: 1, name: "Nguyễn Văn Tùng", gender: "male" },
        { id: 3, name: "Lê Văn Hoàng", gender: "male" }
      ]
    },
    {
      id: 4,
      area: "Khu A",
      number: "206",
      needsMaintenance: true,
      occupants: [
        { id: 1, name: "Phạm Văn Nam", gender: "male" },
        { id: 2, name: "Nguyễn Văn Hùng", gender: "male" },
        { id: 3, name: "Trần Văn Mạnh", gender: "male" },
        { id: 4, name: "Lê Văn Phong", gender: "male" }
      ]
    },
    {
      id: 5,
      area: "Khu A",
      number: "207",
      needsMaintenance: false,
      occupants: [
        { id: 1, name: "Nguyễn Thị Hương", gender: "female" },
        { id: 2, name: "Trần Thị Thảo", gender: "female" },
        { id: 3, name: "Lê Thị Hà", gender: "female" },
        { id: 4, name: "Phạm Thị Mai", gender: "female" }
      ]
    },
    {
      id: 6,
      area: "Khu A",
      number: "208",
      needsMaintenance: false,
      occupants: [
        { id: 2, name: "Nguyễn Thị Lan", gender: "female" },
        { id: 2, name: "Trần Thị Linh", gender: "female" }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      {/* Sidebar */}
      <div className="w-[400px] bg-[#1e1e1e] p-8 text-white">
        {/* User Profile */}
        <div className="flex items-center gap-4 mb-12">
          <Avatar className="w-16 h-16 bg-[#a40000] text-white">
            <span className="text-2xl">LA</span>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold">Lê Hoàng Anh</h2>
            <span className="px-3 py-1 bg-[#E0E7FF] text-[#1e1e1e] text-sm rounded-full">Admin</span>
          </div>
        </div>

        {/* System Name */}
        <div className="mb-12">
          <h1 className="text-[#a40000] text-2xl font-semibold mb-2">PHÒNG TRỌ PTIT</h1>
          <div className="h-0.5 bg-[#a40000] w-full"></div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full text-left px-6 py-4 rounded-xl text-lg font-medium ${
                item.active
                  ? "bg-[#a40000] text-white"
                  : "text-white hover:bg-[#2d2d2d]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-[#a40000] text-3xl font-semibold mb-8">
          BÁO CÁO & THỐNG KÊ
        </h1>

        {/* Search Bar */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              className="pl-12 py-3 bg-white rounded-xl border-none"
              placeholder="Tìm kiếm phòng"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="px-6 py-3 bg-[#a40000] text-white border-none rounded-xl flex items-center gap-2 hover:bg-[#8a0000]"
              >
                {selectedArea}
                <ChevronDown className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {areas.map((area) => (
                <DropdownMenuItem
                  key={area}
                  onClick={() => setSelectedArea(`Khu ${area}`)}
                >
                  Khu {area}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="px-6 py-3 bg-[#a40000] text-white border-none rounded-xl flex items-center gap-2 hover:bg-[#8a0000]"
              >
                {selectedFloor}
                <ChevronDown className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {floors.map((floor) => (
                <DropdownMenuItem
                  key={floor}
                  onClick={() => setSelectedFloor(floor)}
                >
                  {floor}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Room Status Selection and Export */}
        <div className="flex justify-between items-center mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="px-6 py-3 bg-[#a40000] text-white border-none rounded-xl text-lg font-medium flex items-center gap-2 hover:bg-[#8a0000]"
              >
                {selectedStatus}
                <ChevronDown className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {roomStatuses.map((status) => (
                <DropdownMenuItem
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                >
                  {status}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            className="px-6 py-3 bg-[#a40000] text-white border-none rounded-xl hover:bg-[#8a0000] flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Xuất file danh sách
          </Button>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-3 gap-6 relative">
          {roomsData.map((room) => (
            <div key={room.id} className="relative">
              <ReportCard
                room={room}
                onClick={() => setSelectedRoom(room)}
              />
              {selectedRoom?.id === room.id && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <BigReportCard
                    room={room}
                    onClose={() => setSelectedRoom(null)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};