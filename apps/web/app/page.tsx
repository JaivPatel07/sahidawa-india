import {
  Camera,
  Mic,
  MapPin,
  Bell,
  History,
  Home,
  User,
  ShieldCheck,
  AlertTriangle,
  Globe,
  ChevronRight,
  Activity,
  Search,
} from "lucide-react";
import Link from "next/link";

export default function SahiDawaHome() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
              <ShieldCheck size={24} strokeWidth={2.5} aria-hidden="true" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">
              SahiDawa
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600" aria-label="Main navigation">
              <button className="hover:text-emerald-600 transition-colors">
                How it Works
              </button>
              <button className="hover:text-emerald-600 transition-colors">
                Alerts
              </button>
              <button className="hover:text-emerald-600 transition-colors">
                Pharmacy Map
              </button>
            </nav>
            <button aria-label="Change language, currently English" className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 bg-slate-100 border border-slate-200 text-slate-700 rounded-full hover:bg-slate-200 transition-colors shadow-sm">
              <Globe size={16} aria-hidden="true" className="text-emerald-600" />
              <span className="hidden sm:inline">English</span>
              <span className="sm:hidden" aria-hidden="true">EN</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto px-4 md:px-6 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-10">
            <section className="space-y-4 max-w-2xl" aria-labelledby="hero-heading">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold tracking-wide">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                GSSoC 2026 Initiative
              </div>
              <h2 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Your Health, <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
                  Verified &amp; Protected.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                India&#39;s open-source citizen platform to instantly verify
                medicine authenticity, find safe pharmacies, and receive
                critical health alerts.
              </p>
            </section>

            <Link href="/scan" aria-label="Scan medicine — point camera at packaging or barcode" className="w-full sm:w-auto min-w-[300px] group relative overflow-hidden rounded-4xl bg-emerald-600 text-white p-8 shadow-xl shadow-emerald-600/20 transition-all active:scale-[0.98] hover:shadow-emerald-600/40 border border-emerald-500 text-left flex items-center justify-between">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-700 to-emerald-500 z-0"></div>
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" aria-hidden="true"></div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner">
                  <Camera aria-hidden="true" className="text-white drop-shadow-md w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-bold tracking-wide drop-shadow-sm">Scan Medicine</span>
                  <span className="block text-emerald-100 text-sm md:text-base font-medium opacity-90 mt-1">Point camera at packaging or barcode</span>
                </div>
              </div>
              <ChevronRight size={32} aria-hidden="true" className="relative z-10 text-emerald-200 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all hidden sm:block" />
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/scan" className="flex items-center gap-5 bg-white border border-slate-200 p-6 rounded-3xl active:scale-95 transition-all group hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 text-left">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  <Globe size={28} strokeWidth={2.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Upload Photo</h3>
                  <p className="text-slate-500 text-sm mt-0.5 font-medium leading-snug">Select from gallery</p>
                </div>
              </Link>

              <Link href="/voice" className="flex items-center gap-5 bg-white border border-slate-200 p-6 rounded-3xl active:scale-95 transition-all group hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 text-left">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  <Mic size={28} strokeWidth={2.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Voice Triage</h3>
                  <p className="text-slate-500 text-sm mt-0.5 font-medium leading-snug">Speak symptoms</p>
                </div>
              </Link>

              <Link href="/map" className="flex items-center gap-5 bg-white border border-slate-200 p-6 rounded-3xl active:scale-95 transition-all group hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 text-left">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  <MapPin size={28} strokeWidth={2.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Pharmacy Map</h3>
                  <p className="text-slate-500 text-sm mt-0.5 font-medium leading-snug">Find verified stores</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <aside className="lg:col-span-5 space-y-6 mt-8 lg:mt-0" aria-label="Alerts and search">
            <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-200 flex items-center focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all" role="search">
              <div className="pl-4 text-slate-400" aria-hidden="true">
                <Search size={20} aria-hidden="true" />
              </div>
              <label htmlFor="medicine-search-home" className="sr-only">Search medicine or batch number</label>
              <input id="medicine-search-home" type="text" placeholder="Search medicine or batch..." aria-label="Search medicine or batch number" className="w-full bg-transparent border-none outline-none px-4 py-3 text-slate-700 font-medium placeholder:text-slate-400" />
              <button className="bg-slate-900 text-white px-5 sm:px-6 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-colors text-sm sm:text-base">Search</button>
            </div>

            <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex flex-col h-[400px]" aria-labelledby="cdsco-alerts-heading">
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <Activity size={20} aria-hidden="true" className="text-red-500" />
                  <h2 id="cdsco-alerts-heading" className="text-lg font-bold text-slate-800">Live CDSCO Alerts</h2>
                </div>
                <span className="text-xs font-bold bg-red-100 text-red-600 px-2.5 py-1 rounded-full uppercase tracking-wider hidden sm:block">India Region</span>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/30" role="feed" aria-label="Drug safety alerts">
                <article className="bg-white border border-red-100 rounded-2xl p-4 shadow-sm flex items-start gap-4 relative overflow-hidden group hover:shadow-md transition-shadow" aria-label="Alert: Augmentin 625 Duo batch B23059 reported suspicious">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500" aria-hidden="true"></div>
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                    <AlertTriangle size={20} strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-slate-800 leading-tight">Augmentin 625 Duo</h3>
                      <span className="text-[11px] font-medium text-slate-400"><time>2h ago</time></span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1 font-medium leading-snug">Batch No. <span className="font-bold text-slate-700">B23059</span> reported suspicious by 12 users.</p>
                  </div>
                </article>

                <article className="bg-white border border-orange-100 rounded-2xl p-4 shadow-sm flex items-start gap-4 relative overflow-hidden group hover:shadow-md transition-shadow" aria-label="Alert: Pan 40 substandard quality in UP region">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-400" aria-hidden="true"></div>
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                    <AlertTriangle size={20} strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-slate-800 leading-tight">Pan 40</h3>
                      <span className="text-[11px] font-medium text-slate-400"><time>5h ago</time></span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1 font-medium leading-snug">Substandard quality detected in UP region. Batch <span className="font-bold text-slate-700">UP992</span>.</p>
                  </div>
                </article>

                <article className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-start gap-4 relative overflow-hidden group hover:shadow-md transition-shadow" aria-label="System update: New pharmacy data synced">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-400" aria-hidden="true"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                    <History size={20} strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-slate-800 leading-tight">System Update</h3>
                      <span className="text-[11px] font-medium text-slate-400"><time>1d ago</time></span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1 font-medium leading-snug">New pharmacy data synced from Ministry of Health.</p>
                  </div>
                </article>
              </div>
              <div className="p-4 bg-white border-t border-slate-100">
                <button className="w-full py-3 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-colors">View Full Alert Log</button>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <div className="h-16 md:hidden" aria-hidden="true"></div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200/60 flex justify-around px-2 py-3 items-center z-50 pb-safe" aria-label="Mobile navigation">
        <button aria-label="Home — current page" aria-current="page" className="flex flex-col items-center gap-1.5 w-16 group">
          <div className="text-emerald-600 group-hover:-translate-y-1 transition-transform">
            <Home size={24} strokeWidth={2.5} aria-hidden="true" />
          </div>
          <span className="text-[11px] font-bold text-emerald-600">Home</span>
        </button>

        <button aria-label="View scan history" className="flex flex-col items-center gap-1.5 w-16 group text-slate-400 hover:text-slate-600 transition-colors">
          <div className="group-hover:-translate-y-1 transition-transform">
            <History size={24} strokeWidth={2} aria-hidden="true" />
          </div>
          <span className="text-[11px] font-semibold">Scans</span>
        </button>

        <button aria-label="View alerts — new notifications available" className="flex flex-col items-center gap-1.5 w-16 group text-slate-400 hover:text-slate-600 transition-colors">
          <div className="relative group-hover:-translate-y-1 transition-transform">
            <Bell size={24} strokeWidth={2} aria-hidden="true" />
            <span className="absolute top-0 right-0.5 w-2 h-2 bg-red-500 border border-white rounded-full" aria-hidden="true"></span>
            <span className="sr-only">New notifications available</span>
          </div>
          <span className="text-[11px] font-semibold">Alerts</span>
        </button>

        <button aria-label="View profile" className="flex flex-col items-center gap-1.5 w-16 group text-slate-400 hover:text-slate-600 transition-colors">
          <div className="group-hover:-translate-y-1 transition-transform">
            <User size={24} strokeWidth={2} aria-hidden="true" />
          </div>
          <span className="text-[11px] font-semibold">Profile</span>
        </button>
      </nav>
    </div>
  );
}
