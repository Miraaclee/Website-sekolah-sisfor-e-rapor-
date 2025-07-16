import { useState } from "react"
import {
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  ClipboardList,
  DollarSign,
  Settings,
  Bell,
  BarChart3,
  FileText,
  UserPlus,
  School,
  ChevronDown,
  Home,
  UserCheck,
  CalendarDays,
  CreditCard,
  Megaphone
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/side"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
    isActive: true
  },
  {
    title: "Master Data",
    icon: Users,
    items: [
      { title: "Data Siswa", url: "/admin/students", icon: GraduationCap },
      { title: "Data Guru & Staf", url: "/admin/teachers", icon: UserCheck },
      { title: "Kelas & Rombel", url: "/admin/classes", icon: School },
      { title: "Mata Pelajaran", url: "/admin/subjects", icon: BookOpen },
    ]
  },
  {
    title: "Akademik",
    icon: Calendar,
    items: [
      { title: "Tahun Ajaran", url: "/admin/academic-year", icon: CalendarDays },
      { title: "Jadwal Pelajaran", url: "/admin/schedule", icon: Calendar },
      { title: "Absensi", url: "/admin/attendance", icon: ClipboardList },
      { title: "E-Rapor", url: "/admin/reports", icon: FileText },
    ]
  },
  {
    title: "Keuangan",
    icon: DollarSign,
    items: [
      { title: "Tagihan SPP", url: "/admin/billing", icon: CreditCard },
      { title: "Laporan Pembayaran", url: "/admin/payments", icon: BarChart3 },
    ]
  },
  {
    title: "Manajemen User",
    url: "/admin/users",
    icon: UserPlus,
  },
  {
    title: "Pengumuman",
    url: "/admin/announcements",
    icon: Megaphone,
  },
  {
    title: "Pengaturan",
    url: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const [openGroups, setOpenGroups] = useState<string[]>(["Master Data", "Akademik"])
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-school-card text-primary-foreground font-medium" : "hover:bg-secondary/80"

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups(prev => 
      prev.includes(groupTitle) 
        ? prev.filter(g => g !== groupTitle)
        : [...prev, groupTitle]
    )
  }

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r bg-card/80 backdrop-blur-sm`}
      collapsible="icon"
    >
      <div className="p-4 border-b">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-school-card rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">EduPortal</h2>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 bg-school-card rounded-lg flex items-center justify-center mx-auto">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
        )}
      </div>

      <SidebarContent className="p-4">
        <SidebarMenu className="space-y-2">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.items ? (
                <Collapsible
                  open={openGroups.includes(item.title)}
                  onOpenChange={() => toggleGroup(item.title)}
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="w-full justify-between hover:bg-secondary/80">
                      <div className="flex items-center">
                        <item.icon className="w-4 h-4 mr-3" />
                        {!collapsed && <span>{item.title}</span>}
                      </div>
                      {!collapsed && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          openGroups.includes(item.title) ? 'rotate-180' : ''
                        }`} />
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-4 mt-2 space-y-1">
                    {item.items.map((subItem) => (
                      <SidebarMenuButton key={subItem.title} asChild>
                        <NavLink 
                          to={subItem.url} 
                          className={getNavCls}
                        >
                          <subItem.icon className="w-4 h-4 mr-3" />
                          {!collapsed && <span className="text-sm">{subItem.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <SidebarMenuButton asChild>
                  <NavLink 
                    to={item.url!} 
                    className={getNavCls}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {!collapsed && <span>{item.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}