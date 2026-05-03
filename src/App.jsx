import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Store,
  User,
  ChevronLeft,
  ChevronRight,
  Package,
  DollarSign,
  LogIn,
  Clock,
  Coffee,
  QrCode,
  Wallet,
  ArrowRight,
  Minus,
  Plus,
  Lock,
  Settings,
  Home,
  List,
  LayoutDashboard,
} from "lucide-react";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [timeLeft, setTimeLeft] = useState(900);

  // Countdown statis
  useEffect(() => {
    if (currentPage === 5 && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [currentPage, timeLeft]);

  const formatTime = (s) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  // Komponen Navigasi Pelanggan (Halaman 1 & 5)
  const CustomerBottomNav = () => (
    <div className="absolute bottom-6 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 h-20 flex items-center justify-around px-6 pb-2 z-50 rounded-b-[42px]">
      <button
        onClick={() => setCurrentPage(1)}
        className={`flex flex-col items-center gap-1 transition-all ${currentPage === 1 ? "text-red-800" : "text-gray-300"}`}
      >
        <Home size={20} strokeWidth={currentPage === 1 ? 3 : 2} />
        <span className="text-[9px] font-bold uppercase tracking-tighter">
          Menu
        </span>
      </button>

      <button
        onClick={() => setCurrentPage(5)}
        className={`flex flex-col items-center gap-1 transition-all ${currentPage === 5 ? "text-red-800" : "text-gray-300"}`}
      >
        <Clock size={20} strokeWidth={currentPage === 5 ? 3 : 2} />
        <span className="text-[9px] font-bold uppercase tracking-tighter">
          Status
        </span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-300 opacity-50 cursor-not-allowed">
        <Settings size={20} />
        <span className="text-[9px] font-bold uppercase tracking-tighter">
          Setting
        </span>
      </button>
    </div>
  );

  // Komponen Navigasi Admin (Halaman 7 & 8)
  const AdminBottomNav = () => (
    <div className="absolute bottom-6 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 h-20 flex items-center justify-around px-6 pb-2 z-50 rounded-b-[42px]">
      <button
        onClick={() => setCurrentPage(7)}
        className={`flex flex-col items-center gap-1 transition-all ${currentPage === 7 ? "text-red-800" : "text-gray-300"}`}
      >
        <List size={20} strokeWidth={currentPage === 7 ? 3 : 2} />
        <span className="text-[9px] font-bold uppercase tracking-tighter">
          Antrean
        </span>
      </button>

      <button
        onClick={() => setCurrentPage(8)}
        className={`flex flex-col items-center gap-1 transition-all ${currentPage === 8 ? "text-red-800" : "text-gray-300"}`}
      >
        <LayoutDashboard size={20} strokeWidth={currentPage === 8 ? 3 : 2} />
        <span className="text-[9px] font-bold uppercase tracking-tighter">
          Panel
        </span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-300 opacity-50 cursor-not-allowed">
        <Settings size={20} />
        <span className="text-[9px] font-bold uppercase tracking-tighter">
          Setting
        </span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F4F4F4] font-['Lexend',sans-serif] flex flex-col items-center justify-center py-10 gap-8">
      {/* Tombol Kontrol Luar */}
      <div className="flex items-center gap-6 bg-white p-4 rounded-3xl shadow-xl border border-gray-100">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="p-4 bg-red-50 text-red-700 rounded-2xl hover:bg-red-100 transition-all flex items-center gap-2 font-bold active:scale-95"
        >
          <ChevronLeft size={20} /> Back
        </button>
        <div className="text-center px-4">
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
            Halaman
          </p>
          <p className="text-lg font-black text-red-950">{currentPage} / 8</p>
        </div>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 8))}
          className="p-4 bg-red-900 text-white rounded-2xl hover:bg-red-800 transition-all flex items-center gap-2 font-bold shadow-lg shadow-red-900/20 active:scale-95"
        >
          Next <ChevronRight size={20} />
        </button>
      </div>

      {/* Bingkai HP (375x812) */}
      <div className="w-[375px] h-[812px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.15)] rounded-[50px] relative flex flex-col overflow-hidden border-[8px] border-[#1a1a1a]">
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        {/* Kontainer Utama */}
        <div className="flex-grow overflow-y-auto no-scrollbar bg-[#FDFDFD] relative">
          {/* 1. KATALOG (Header Fixed/Sticky) */}
          {currentPage === 1 && (
            <div className="animate-in fade-in duration-500 pb-32">
              {/* HEADER FIXED/STICKY */}
              <div className="sticky top-0 z-[60] bg-white/80 backdrop-blur-md px-6 py-5 border-b border-gray-50 flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-black text-red-950 leading-none">
                    Primadona
                  </h1>
                  <p className="text-[10px] font-bold text-amber-600 tracking-[0.2em] uppercase mt-1">
                    Honey Grilled Chicken
                  </p>
                </div>
                <div
                  onClick={() => setCurrentPage(3)}
                  className="bg-red-50 p-3 rounded-2xl text-red-700 relative cursor-pointer active:scale-90 transition-transform"
                >
                  <ShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white font-bold">
                    1
                  </span>
                </div>
              </div>

              {/* LIST MENU */}
              <div className="p-6 space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentPage(2)}
                    className="relative rounded-[2.5rem] overflow-hidden shadow-lg h-48 group cursor-pointer active:scale-[0.98] transition-transform"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-4 rounded-3xl flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">
                          Ayam Bakar Madu
                        </h3>
                        <p className="text-red-800 font-black text-xs">
                          Rp 25.000
                        </p>
                      </div>
                      <div className="bg-red-700 text-white p-2 rounded-xl">
                        <Plus size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. CUSTOM */}
          {currentPage === 2 && (
            <div className="flex flex-col animate-in slide-in-from-right duration-500 h-full">
              <div className="h-[45%] relative">
                <img
                  src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
              <div className="flex-grow p-8 -mt-12 relative bg-white rounded-t-[3.5rem] space-y-8 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
                <div>
                  <div className="w-12 h-1 bg-gray-100 rounded-full mx-auto mb-6"></div>
                  <h1 className="text-2xl font-black text-red-950 leading-tight">
                    Sesuaikan
                  </h1>
                  <p className="text-gray-400 text-xs font-medium mt-2">
                    Pilih bagian dan sambal favoritmu.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    Pilih Bagian{" "}
                    <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                  </p>
                  <div className="flex gap-4">
                    {["Dada", "Paha"].map((opt) => (
                      <div
                        key={opt}
                        className={`flex-1 text-center py-4 rounded-2xl border-2 font-bold text-sm transition-all ${opt === "Dada" ? "border-red-700 bg-red-50 text-red-900 shadow-sm" : "border-gray-100 text-gray-400"}`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => setCurrentPage(3)}
                    className="w-full bg-red-900 text-white py-5 rounded-[2rem] font-black text-sm shadow-xl active:scale-95 transition-transform tracking-widest uppercase"
                  >
                    Tambah Ke Keranjang
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. KERANJANG */}
          {currentPage === 3 && (
            <div className="p-8 h-full flex flex-col animate-in fade-in">
              <h2 className="text-2xl font-black text-red-950 mb-10 tracking-tighter">
                Keranjang
              </h2>
              <div className="flex-grow space-y-6">
                <div className="flex items-center gap-4 bg-white p-2 rounded-3xl border border-gray-50 shadow-sm">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=100"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-xs text-red-950">
                      Ayam Bakar Madu
                    </h4>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                      Dada • Terasi
                    </p>
                    <p className="font-black text-amber-600 text-xs mt-1">
                      Rp 25.000
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pr-2 font-black text-xs">
                    <Minus size={14} className="text-gray-300" /> 1{" "}
                    <Plus size={14} className="text-red-900" />
                  </div>
                </div>
              </div>
              <div className="mt-8 p-8 bg-red-950 rounded-[3rem] text-white space-y-5 shadow-2xl">
                <div className="flex justify-between items-center text-xs">
                  <span className="opacity-50 font-bold">Total</span>
                  <span className="text-xl font-black">Rp 25.000</span>
                </div>
                <button
                  onClick={() => setCurrentPage(4)}
                  className="w-full bg-white text-red-950 py-4 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                  PEMBAYARAN <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* 4. PEMBAYARAN */}
          {currentPage === 4 && (
            <div className="p-8 space-y-8 animate-in slide-in-from-bottom">
              <h2 className="text-2xl font-black text-red-950 tracking-tighter">
                Pembayaran
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {["DANA", "GoPay", "OVO", "Shopee"].map((m) => (
                  <div
                    key={m}
                    className={`p-5 rounded-[2rem] border-2 flex flex-col items-center gap-3 ${m === "DANA" ? "border-amber-500 bg-amber-50 shadow-sm" : "border-gray-50 bg-white"}`}
                  >
                    <div className="bg-white p-3 rounded-2xl shadow-sm">
                      <Wallet className="text-red-700" size={20} />
                    </div>
                    <span className="font-black text-[10px] text-gray-800">
                      {m}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-50 flex flex-col items-center gap-6">
                <div className="p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                  <QrCode size={120} />
                </div>
                <button
                  onClick={() => setCurrentPage(5)}
                  className="w-full bg-green-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest"
                >
                  KONFIRMASI LUNAS
                </button>
              </div>
            </div>
          )}

          {/* 5. STATUS */}
          {currentPage === 5 && (
            <div className="flex flex-col items-center justify-center p-8 h-full text-center animate-in zoom-in duration-500 pb-32">
              <div className="relative mb-10">
                <div className="w-44 h-44 rounded-full border-[8px] border-gray-50 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full border-[8px] border-red-700 border-t-transparent animate-spin"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                    Estimasi
                  </p>
                  <h3 className="text-3xl font-black text-red-950 font-mono tracking-tighter">
                    {formatTime(timeLeft)}
                  </h3>
                </div>
              </div>
              <h2 className="text-2xl font-black text-red-950 mb-2 uppercase tracking-tighter">
                Proses Bakar
              </h2>
              <p className="text-[11px] text-gray-400 font-medium px-6 mb-10">
                Sabar ya, ayam madumu sedang kami siapkan.
              </p>
              <div className="w-full bg-amber-50 p-6 rounded-[2.5rem] border border-amber-100 flex items-center gap-4">
                <div className="bg-amber-500 text-white p-4 rounded-2xl font-black text-2xl shadow-lg shadow-amber-500/20">
                  A-08
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">
                    Antrean
                  </p>
                  <p className="text-xs font-bold text-gray-800">
                    Tunjukkan ini ke Kasir.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 6. ADMIN LOGIN */}
          {currentPage === 6 && (
            <div className="flex flex-col items-center justify-center h-full p-10 animate-in fade-in">
              <div className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm w-full max-w-[300px]">
                <h2 className="text-xl font-black text-red-950 mb-8 text-center uppercase tracking-tight">
                  Admin Login
                </h2>
                <div className="space-y-6">
                  <div className="relative group">
                    <User
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-red-700 transition-colors"
                    />
                    <input
                      type="text"
                      className="w-full p-4 pl-12 bg-gray-50 rounded-2xl font-bold text-gray-900 text-xs border-2 border-transparent focus:border-red-700 focus:bg-white outline-none transition-all shadow-inner"
                    />
                  </div>
                  <div className="relative group">
                    <Lock
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-red-700 transition-colors"
                    />
                    <input
                      type="password"
                      size={16}
                      className="w-full p-4 pl-12 bg-gray-50 rounded-2xl font-bold text-gray-900 text-xs border-2 border-transparent focus:border-red-700 focus:bg-white outline-none transition-all shadow-inner"
                    />
                  </div>
                  <button
                    onClick={() => setCurrentPage(7)}
                    className="w-full bg-red-950 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
                  >
                    MASUK
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 7. QUEUE (ADMIN) */}
          {currentPage === 7 && (
            <div className="p-8 space-y-6 animate-in slide-in-from-right pb-32">
              <h2 className="text-2xl font-black text-red-950 tracking-tighter">
                Antrean
              </h2>
              {[1, 2, 3].map((id) => (
                <div
                  key={id}
                  className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-50 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-900 text-white flex items-center justify-center rounded-2xl font-black">
                      A-0{id}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-950 text-xs uppercase">
                        Pelanggan #{id}
                      </h3>
                      <p className="text-[9px] font-black text-green-600 uppercase">
                        LUNAS • DANA
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-gray-500 bg-gray-50 p-3 rounded-xl uppercase tracking-tighter leading-tight font-medium">
                    2x Ayam Madu Dada • Sambal Terasi
                  </p>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-red-50 text-red-700 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest">
                      Siapkan
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest">
                      Selesai
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 8. PANEL (ADMIN) */}
          {currentPage === 8 && (
            <div className="p-8 space-y-10 animate-in fade-in pb-32">
              <div className="bg-red-950 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden text-center shadow-red-900/20">
                <p className="text-amber-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-1">
                  Omzet Hari Ini
                </p>
                <h1 className="text-3xl font-black tracking-tighter">
                  Rp 1.250.000
                </h1>
              </div>
              <div className="space-y-5">
                <h3 className="font-black text-red-950 text-sm px-2 uppercase tracking-tighter flex items-center gap-2">
                  Ketersediaan Menu{" "}
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                </h3>
                {["Ayam Dada", "Paket Nasi", "Ayam Paha"].map((name, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 rounded-3xl border border-gray-100 flex justify-between items-center shadow-sm"
                  >
                    <span className="text-[11px] font-bold text-gray-700 uppercase">
                      {name}
                    </span>
                    <div
                      className={`w-12 h-6 ${i === 2 ? "bg-gray-200" : "bg-green-600"} rounded-full p-1 relative transition-colors`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-sm ${i === 2 ? "mr-auto" : "ml-auto"}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Home Indicator */}
        <div className="h-8 bg-white flex items-center justify-center pb-2 relative z-50">
          <div className="w-32 h-1.5 bg-gray-200 rounded-full opacity-40"></div>
        </div>

        {/* NAVBAR LOGIC */}
        {(currentPage === 1 || currentPage === 5) && <CustomerBottomNav />}
        {(currentPage === 7 || currentPage === 8) && <AdminBottomNav />}
      </div>
    </div>
  );
};

export default App;
