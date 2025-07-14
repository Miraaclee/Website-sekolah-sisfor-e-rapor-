"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Menu, 
  X, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Star, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  Award,
  Target,
  Heart,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

export default function SchoolWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      title: "Pendidikan Dasar",
      description: "Program pendidikan dasar dengan kurikulum komprehensif untuk membangun fondasi yang kuat.",
      icon: <BookOpen className="w-6 h-6" />,
      badge: "SD",
      features: ["Kurikulum Nasional", "Pembelajaran Interaktif", "Ekstrakurikuler Beragam"]
    },
    {
      title: "Pendidikan Menengah",
      description: "Program pendidikan menengah dengan fokus pada pengembangan akademik dan karakter.",
      icon: <GraduationCap className="w-6 h-6" />,
      badge: "SMP",
      features: ["Persiapan Ujian", "Bimbingan Karir", "Kegiatan Sosial"]
    },
    {
      title: "Pendidikan Tinggi",
      description: "Program persiapan pendidikan tinggi dengan standar internasional.",
      icon: <Award className="w-6 h-6" />,
      badge: "SMA",
      features: ["Kurikulum Cambridge", "Persiapan Universitas", "Program Magang"]
    }
  ];

  const faculty = [
    {
      name: "Dr. Siti Nurhaliza",
      position: "Kepala Sekolah",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      experience: "20+ tahun pengalaman"
    },
    {
      name: "Prof. Ahmad Wijaya",
      position: "Wakil Kepala Sekolah",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      experience: "15+ tahun pengalaman"
    },
    {
      name: "Dra. Maria Indah",
      position: "Koordinator Kurikulum",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      experience: "12+ tahun pengalaman"
    }
  ];

  const news = [
    {
      title: "Pembukaan Tahun Ajaran Baru 2024/2025",
      date: "15 Juli 2024",
      content: "Sekolah kami dengan bangga membuka tahun ajaran baru dengan berbagai program inovatif dan fasilitas terbaru.",
      image: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Prestasi Siswa dalam Olimpiade Sains Nasional",
      date: "10 Juni 2024",
      content: "Siswa-siswi kami meraih juara dalam berbagai bidang olimpiade sains tingkat nasional.",
      image: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Program Pertukaran Pelajar Internasional",
      date: "5 Mei 2024",
      content: "Meluncurkan program pertukaran pelajar dengan sekolah-sekolah mitra di berbagai negara.",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Excelencia",
      description: "Berkomitmen untuk mencapai standar tertinggi dalam pendidikan"
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: "Karakter",
      description: "Membentuk karakter yang kuat dan berintegritas tinggi"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Kolaborasi",
      description: "Menumbuhkan semangat kerjasama dan kepemimpinan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SMA Nusantara</h1>
                <p className="text-xs text-gray-600">Excellence in Education</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tentang</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Program</a>
              <a href="#faculty" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Fakultas</a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Berita</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Kontak</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">Masuk</Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
                Daftar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Beranda</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tentang</a>
                <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Program</a>
                <a href="#faculty" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Fakultas</a>
                <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Berita</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Kontak</a>
              </nav>
              <div className="mt-4 pt-4 border-t flex flex-col space-y-2">
                <Button variant="outline" size="sm">Masuk</Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-emerald-600">Daftar</Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                <Star className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-800">Sekolah Terbaik 2024</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Membangun
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> Masa Depan </span>
                Melalui Pendidikan
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                SMA Nusantara berkomitmen memberikan pendidikan berkualitas tinggi yang mengembangkan potensi siswa secara holistik untuk menghadapi tantangan masa depan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
                  Daftar Sekarang
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Siswa Aktif</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">Guru Berkualitas</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">15+</p>
                  <p className="text-sm text-gray-600">Tahun Pengalaman</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-3xl transform rotate-6"></div>
              <img 
                src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Students in classroom"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang SMA Nusantara</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sejak didirikan pada tahun 2008, SMA Nusantara telah menjadi institusi pendidikan terdepan 
              yang menghasilkan lulusan berkualitas dan siap menghadapi tantangan global.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="School building"
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Visi & Misi Kami</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Visi</h4>
                  <p className="text-gray-600">
                    Menjadi lembaga pendidikan terdepan yang menghasilkan generasi berkarakter, 
                    berintegritas, dan siap bersaing di tingkat global.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Misi</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Memberikan pendidikan berkualitas tinggi dengan kurikulum yang relevan</li>
                    <li>• Mengembangkan karakter siswa melalui nilai-nilai moral dan etika</li>
                    <li>• Memfasilitasi pengembangan bakat dan minat siswa</li>
                    <li>• Menciptakan lingkungan belajar yang kondusif dan inspiratif</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Pendidikan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menawarkan berbagai program pendidikan yang dirancang untuk mengembangkan 
              potensi siswa di berbagai jenjang pendidikan.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {program.icon}
                      </div>
                      <Badge variant="secondary">{program.badge}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Fitur Unggulan:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-sm text-gray-600 flex items-center">
                          <ChevronRight className="w-3 h-3 mr-2 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Pelajari Lebih Lanjut
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Pengajar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guru-guru berkualitas tinggi dengan pengalaman dan dedikasi untuk memberikan 
              pendidikan terbaik bagi siswa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Berita & Pengumuman</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tetap update dengan berita terbaru dan pengumuman penting dari sekolah kami.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  <Button variant="outline" size="sm">
                    Baca Selengkapnya
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami siap membantu menjawab pertanyaan Anda dan memberikan informasi lebih lanjut 
              tentang program pendidikan kami.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Alamat</p>
                      <p className="text-gray-600">Jl. Pendidikan No. 123, Jakarta Selatan 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Telepon</p>
                      <p className="text-gray-600">+62 21 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@smanusantara.sch.id</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Jam Operasional</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Senin - Jumat</span>
                    <span className="text-gray-900">07:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sabtu</span>
                    <span className="text-gray-900">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minggu</span>
                    <span className="text-gray-900">Tutup</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kirim Pesan</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Depan</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Belakang</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Pertanyaan tentang pendaftaran"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">SMA Nusantara</h3>
                  <p className="text-xs text-gray-400">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Membangun masa depan melalui pendidikan berkualitas tinggi dengan pendekatan holistik.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Program</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Pendidikan Dasar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pendidikan Menengah</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pendidikan Tinggi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ekstrakurikuler</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Berita</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 SMA Nusantara. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}