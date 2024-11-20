import Image from "next/image"
import { BarChart3, BookOpen, Calendar, FileText, Image as ImageIcon, Users2, GraduationCap, ClipboardList } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="relative h-48 bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20">
          <div className="container mx-auto px-4 py-6 text-white">
            <h1 className="text-2xl font-bold">Noapara Shankarpasha Govt. Secondary School</h1>
            <p>EIIN -115466</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 overflow-x-auto py-3 text-sm">
            {["প্রথম পাতা", "কার্যক্রম বিবরণ", "পাঠ্যক্রম", "একাডেমিক তথ্য", "ছাত্রছাত্রী", "পিটিপি", "গ্যালারি"].map((item) => (
              <li key={item} className="whitespace-nowrap">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* News */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <FileText className="h-8 w-8 text-green-600 mb-2" />
              <h2 className="text-sm font-medium">News</h2>
            </CardContent>
          </Card>

          {/* Student Management */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Users2 className="h-8 w-8 text-blue-600 mb-2" />
              <h2 className="text-sm font-medium">Student Management</h2>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />
              <h2 className="text-sm font-medium">Statistics</h2>
            </CardContent>
          </Card>

          {/* Academic Calendar */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Calendar className="h-8 w-8 text-orange-600 mb-2" />
              <h2 className="text-sm font-medium">Academic Calendar</h2>
            </CardContent>
          </Card>

          {/* Class Activities */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <BookOpen className="h-8 w-8 text-red-600 mb-2" />
              <h2 className="text-sm font-medium">Class Activities</h2>
            </CardContent>
          </Card>

          {/* Photo Gallery */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <ImageIcon className="h-8 w-8 text-yellow-600 mb-2" />
              <h2 className="text-sm font-medium">Photo Gallery</h2>
            </CardContent>
          </Card>

          {/* Exam Results */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <GraduationCap className="h-8 w-8 text-emerald-600 mb-2" />
              <h2 className="text-sm font-medium">Exam Results</h2>
            </CardContent>
          </Card>

          {/* PTP */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <ClipboardList className="h-8 w-8 text-cyan-600 mb-2" />
              <h2 className="text-sm font-medium">PTP</h2>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
