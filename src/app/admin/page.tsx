"use client"

import { useEffect, useState, useCallback } from 'react'
import {
  Search,
  CheckCircle2,
  Clock,
  Inbox,
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  User,
  ExternalLink,
  MessageSquare,
  Database,
  RefreshCw,
  FileText,
  Loader2
} from 'lucide-react'

interface Query {
  id: string
  full_name: string
  phone: string
  email?: string
  service: string
  city: string
  project_details?: string
  status: string
  created_at: string
}

interface Summaries {
  total: number
  new: number
  in_progress: number
  resolved: number
}

const STATUS_OPTIONS = ['New', 'In Progress', 'Resolved']

export default function AdminDashboard() {
  const [queries, setQueries] = useState<Query[]>([])
  const [summaries, setSummaries] = useState<Summaries>({ total: 0, new: 0, in_progress: 0, resolved: 0 })
  const [activeQuery, setActiveQuery] = useState<Query | null>(null)
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  const openDrawer = (query: Query) => {
    setActiveQuery(query)
    setTimeout(() => {
      setDrawerOpen(true)
    }, 50)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
    setTimeout(() => {
      setActiveQuery(null)
    }, 300)
  }

  // Filters & Pagination State
  const [activeTab, setActiveTab] = useState<string>('All')
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  // Fetch queries
  const fetchQueries = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (activeTab !== 'All') params.append('status', activeTab)
      if (search) params.append('search', search)
      params.append('page', page.toString())

      const res = await fetch(`/api/admin/queries?${params.toString()}`)
      if (!res.ok) throw new Error('Failed to fetch queries')

      const data = await res.json()
      setQueries(data.queries || [])
      setTotalCount(data.count || 0)
      if (data.summaries) {
        setSummaries(data.summaries)
      }
    } catch (error) {
      console.error('Fetch Queries Error:', error)
    } finally {
      setLoading(false)
    }
  }, [activeTab, search, page])

  useEffect(() => {
    fetchQueries()
  }, [fetchQueries])

  // Handle Search Input Change (reset page to 1)
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)
  }

  // Handle Tab Change (reset page to 1)
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setPage(1)
  }

  // Optimistic Status Update
  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id)

    // Save previous state for rollback
    const previousQueries = [...queries]
    const previousSummaries = { ...summaries }

    // Apply Optimistic Update in UI
    setQueries(prev =>
      prev.map(q => {
        if (q.id === id) {
          return { ...q, status: newStatus }
        }
        return q
      })
    )

    // Recalculate summary stats optimistically
    const targetQuery = queries.find(q => q.id === id)
    if (targetQuery) {
      const oldStatus = targetQuery.status
      setSummaries(prev => {
        const updated = { ...prev }
        // Decrement old status
        if (oldStatus === 'New') updated.new = Math.max(0, updated.new - 1)
        if (oldStatus === 'In Progress') updated.in_progress = Math.max(0, updated.in_progress - 1)
        if (oldStatus === 'Resolved') updated.resolved = Math.max(0, updated.resolved - 1)

        // Increment new status
        if (newStatus === 'New') updated.new++
        if (newStatus === 'In Progress') updated.in_progress++
        if (newStatus === 'Resolved') updated.resolved++

        return updated
      })
    }

    try {
      const res = await fetch(`/api/admin/queries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!res.ok) {
        throw new Error('Failed to update status')
      }

      const data = await res.json()
      // If active query is open, sync it
      if (activeQuery && activeQuery.id === id) {
        setActiveQuery(data.query)
      }
    } catch (error) {
      console.error('Status Update Error:', error)
      // Rollback on failure
      setQueries(previousQueries)
      setSummaries(previousSummaries)
      alert('Failed to update status. Rolled back changes.')
    } finally {
      setUpdatingId(null)
    }
  }

  // Paginated details
  const totalPages = Math.ceil(totalCount / 20) || 1

  // Helper for Status Badge styling
  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20 focus:ring-blue-500/30'
      case 'In Progress':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20 focus:ring-amber-500/30'
      case 'Resolved':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 focus:ring-emerald-500/30'
      default:
        return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20 focus:ring-neutral-500/30'
    }
  }

  // Helper for Avatar generation
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()
  }

  return (
    <div className="space-y-8 relative pb-12">
      {/* Header Info Section */}
      <div className="flex h-38 flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xlfont-extrabold tracking-tight text-white flex items-center gap-2">
            <span className='text-white'>Inquiries Dashboard</span>
            <span className="text-xs bg-neutral-900 border border-neutral-800 text-neutral-400 px-2 py-0.5 rounded font-mono font-medium">
              v1.0
            </span>
          </h1>
          <p className="text-xs text-neutral-450 mt-1">
            Manage, track, and follow up on client consultation queries for Conceptual Studio Ranchi.
          </p>
        </div>

        <button
          onClick={fetchQueries}
          disabled={loading}
          className="admin-refresh flex items-center gap-2 text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-neutral-350 hover:text-white rounded-xl border border-neutral-800 transition active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* Stats Summary Widgets */}
      <div className="main-process-box grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* Total Widget */}
        <div className="progress-box bg-[#0b0b0d] border border-neutral-900/80 rounded-2xl p-6 relative overflow-hidden group hover:border-neutral-800 transition-all duration-300 shadow-md">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-600/5 rounded-full group-hover:scale-125 transition-transform duration-500 blur-xl"></div>
          <div className="flex justify-between items-start">
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">Total inquiries</span>
            <span className="p-1.5 bg-purple-950/20 text-purple-400 rounded-lg border border-purple-900/20">
              <Database className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-black text-white mt-4">{summaries.total}</div>
        </div>

        {/* New Widget */}
        <div className="progress-box bg-[#0b0b0d] border border-neutral-900/80 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-900/30 transition-all duration-300 shadow-md">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/5 rounded-full group-hover:scale-125 transition-transform duration-500 blur-xl"></div>
          <div className="flex justify-between items-start">
            <span className="text-neutral-550 text-xs font-semibold uppercase tracking-wider">New</span>
            <span className="p-1.5 bg-blue-950/20 text-blue-400 rounded-lg border border-blue-900/20 relative">
              <Inbox className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></span>
            </span>
          </div>
          <div className="text-3xl font-black text-blue-400 mt-4">{summaries.new}</div>
        </div>

        {/* In Progress Widget */}
        <div className="progress-box bg-[#0b0b0d] border border-neutral-900/80 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-900/30 transition-all duration-300 shadow-md">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-500/5 rounded-full group-hover:scale-125 transition-transform duration-500 blur-xl"></div>
          <div className="flex justify-between items-start">
            <span className="text-neutral-555 text-xs font-semibold uppercase tracking-wider">In progress</span>
            <span className="p-1.5 bg-amber-950/20 text-amber-400 rounded-lg border border-amber-900/20">
              <Clock className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-black text-amber-400 mt-4">{summaries.in_progress}</div>
        </div>

        {/* Resolved Widget */}
        <div className="progress-box bg-[#0b0b0d] border border-neutral-900/80 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-900/30 transition-all duration-300 shadow-md">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-500/5 rounded-full group-hover:scale-125 transition-transform duration-500 blur-xl"></div>
          <div className="flex justify-between items-start">
            <span className="text-neutral-555 text-xs font-semibold uppercase tracking-wider">Resolved</span>
            <span className="p-1.5 bg-emerald-950/20 text-emerald-400 rounded-lg border border-emerald-900/20">
              <CheckCircle2 className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-black text-emerald-400 mt-4">{summaries.resolved}</div>
        </div>
      </div>

      {/* Control bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-[#0b0b0d] border border-neutral-900/80 p-4 rounded-2xl shadow-sm">
        {/* Search */}
        <div className="w-full lg:max-w-md relative">
          <input
            type="text"
            placeholder="Search by client name, phone, or city..."
            value={search}
            onChange={handleSearchChange}
            className="w-full bg-[#050507] border border-neutral-850 rounded-xl px-4 py-2.5 pl-10 text-xs font-medium text-neutral-200 placeholder-neutral-550 focus:outline-none focus:border-orange-500/40 focus:ring-1 focus:ring-orange-500/20 transition-all"
          />
          <Search className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-neutral-550 pointer-events-none" />
        </div>

        {/* Tabs */}
        <div className="flex bg-[#050507] p-1 border border-neutral-850 rounded-xl gap-1 w-full lg:w-auto overflow-x-auto">
          {['All', 'New', 'In Progress', 'Resolved'].map(tab => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`flex-1 lg:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all duration-250 cursor-pointer select-none ${activeTab === tab
                ? 'bg-neutral-900 border border-neutral-800 text-white shadow-sm'
                : 'text-neutral-500 hover:text-neutral-350 border border-transparent'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table Card */}
      <div className="bg-[#0b0b0d] border border-neutral-900/80 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-900 bg-[#070709]">
                <th className="px-6 py-4.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Client Name</th>
                <th className="px-6 py-4.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Phone Number</th>
                <th className="px-6 py-4.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Service Required</th>
                <th className="px-6 py-4.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">City</th>
                <th className="px-6 py-4.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Status Badge</th>
                <th className="px-6 py-4.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Date Received</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900/60 text-xs">
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-20 text-neutral-500 font-mono text-xs">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
                      <span>Loading records from database...</span>
                    </div>
                  </td>
                </tr>
              ) : queries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-20 text-neutral-500 font-mono text-xs">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <AlertCircle className="w-6 h-6 text-neutral-600" />
                      <span>No lead inquiries found matching the filters.</span>
                    </div>
                  </td>
                </tr>
              ) : (
                queries.map(q => (
                  <tr
                    key={q.id}
                    className="hover:bg-neutral-900/20 transition-all cursor-pointer group"
                    onClick={() => openDrawer(q)}
                  >
                    <td className="px-6 py-4.5 font-bold text-neutral-100 group-hover:text-orange-450 transition duration-150">
                      {q.full_name}
                    </td>
                    <td className="px-6 py-4.5 text-neutral-400 font-mono font-medium">{q.phone}</td>
                    <td className="px-6 py-4.5 text-neutral-300 font-medium">{q.service}</td>
                    <td className="px-6 py-4.5 text-neutral-300 font-medium">{q.city}</td>
                    <td className="px-6 py-4.5" onClick={e => e.stopPropagation()}>
                      <div className="relative inline-block">
                        <select
                          value={q.status}
                          disabled={updatingId === q.id}
                          onChange={e => handleStatusChange(q.id, e.target.value)}
                          className={`appearance-none border rounded-full px-3.5 py-1.5 pr-8 text-[11px] font-bold cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-black transition-all ${getStatusBadgeStyles(
                            q.status
                          )}`}
                        >
                          {STATUS_OPTIONS.map(opt => (
                            <option key={opt} value={opt} className="bg-[#0b0b0d] text-neutral-200">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <span className="absolute right-2.5 top-2 pointer-events-none text-neutral-500">
                          <ChevronRight className="w-3.5 h-3.5 rotate-90" />
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4.5 text-[10px] text-neutral-500 font-mono">
                      {new Date(q.created_at).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Card */}
        {!loading && totalPages > 1 && (
          <div className="border-t border-neutral-900 bg-[#070709] px-6 py-4 flex items-center justify-between">
            <span className="text-[10px] text-neutral-500 font-mono font-medium">
              Showing page {page} of {totalPages} ({totalCount} total entries)
            </span>
            <div className="flex gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
                className="flex items-center gap-1 px-3 py-1.5 bg-[#0b0b0d] border border-neutral-800 hover:border-neutral-700 rounded-xl text-xs font-bold text-neutral-350 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition duration-150 active:scale-95"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage(p => p + 1)}
                className="flex items-center gap-1 px-3 py-1.5 bg-[#0b0b0d] border border-neutral-800 hover:border-neutral-700 rounded-xl text-xs font-bold text-neutral-350 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition duration-150 active:scale-95"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Side Slide Drawer for Query Details */}
      {activeQuery && (
        <>
          {/* Backdrop click mask */}
          <div
            className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out ${drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            onClick={closeDrawer}
          ></div>

          {/* Drawer container */}
          <div
            className={`fixed top-0 right-0 h-screen w-full max-w-lg bg-[#08080a]/95 backdrop-blur-xl border-l border-neutral-900/80 z-50 shadow-2xl p-7 md:p-9 flex flex-col justify-between transform transition-transform duration-300 ease-out overflow-y-auto ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="space-y-7">
              {/* Drawer header */}
              <div className="flex justify-between items-start border-b border-neutral-900 pb-5">
                <div className="flex items-center gap-4">
                  {/* Dynamic gradient avatar */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500 to-purple-600 flex items-center justify-center text-white font-black text-sm tracking-wide shadow-md">
                    {getInitials(activeQuery.full_name)}
                  </div>
                  <div>
                    <span className="text-[9px] bg-neutral-900 text-orange-400 font-bold border border-orange-500/10 px-2 py-0.5 rounded-full font-mono tracking-widest uppercase">
                      Client Details
                    </span>
                    <h3 className="text-xl font-black text-white mt-1.5 tracking-tight leading-tight">
                      {activeQuery.full_name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={closeDrawer}
                  className="p-2 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800/85 hover:text-white text-neutral-500 transition duration-150 cursor-pointer active:scale-95"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Communication Shortcut Actions */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${activeQuery.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 hover:border-emerald-500/30 text-emerald-400 text-xs font-extrabold rounded-xl transition duration-150 active:scale-97 text-center cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Phone</span>
                </a>
                <a
                  href={`https://wa.me/${activeQuery.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-green-500/10 hover:bg-green-500/15 border border-green-500/20 hover:border-green-500/30 text-green-400 text-xs font-extrabold rounded-xl transition duration-150 active:scale-97 text-center cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Drawer body details */}
              <div className="space-y-5 text-xs text-neutral-350">
                {/* Phone Contact Block */}
                <div className="bg-neutral-900/20 border border-neutral-900 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-neutral-500" />
                    <div>
                      <span className="block text-[9px] font-mono uppercase text-neutral-500 leading-tight">Phone number</span>
                      <span className="text-neutral-200 font-bold text-xs mt-0.5 block">{activeQuery.phone}</span>
                    </div>
                  </div>
                  <a
                    href={`tel:${activeQuery.phone}`}
                    className="text-neutral-500 hover:text-white p-1 hover:bg-neutral-850 rounded-lg border border-transparent hover:border-neutral-800 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Email Contact Block */}
                <div className="bg-neutral-900/20 border border-neutral-900 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-neutral-500" />
                    <div className="min-w-0 flex-1">
                      <span className="block text-[9px] font-mono uppercase text-neutral-500 leading-tight">Email address</span>
                      <span className="text-neutral-200 font-bold text-xs mt-0.5 block truncate">
                        {activeQuery.email || 'Not Provided'}
                      </span>
                    </div>
                  </div>
                  {activeQuery.email && (
                    <a
                      href={`mailto:${activeQuery.email}`}
                      className="text-neutral-500 hover:text-white p-1 hover:bg-neutral-850 rounded-lg border border-transparent hover:border-neutral-800 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Project Parameters Card */}
                <div className="grid grid-cols-2 gap-4 bg-neutral-900/20 border border-neutral-900 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-neutral-500" />
                    <div>
                      <span className="block text-[9px] font-mono uppercase text-neutral-500 leading-tight">Target City</span>
                      <span className="text-neutral-200 font-bold text-xs mt-0.5 block">{activeQuery.city}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-neutral-500" />
                    <div>
                      <span className="block text-[9px] font-mono uppercase text-neutral-500 leading-tight">Required Service</span>
                      <span className="text-neutral-200 font-bold text-xs mt-0.5 block">{activeQuery.service}</span>
                    </div>
                  </div>
                </div>

                {/* Status Switcher Block */}
                <div className="bg-neutral-900/20 border border-neutral-900 p-4 rounded-xl">
                  <span className="block text-[9px] font-mono uppercase text-neutral-550 mb-2">Process status</span>
                  <div className="relative inline-block w-full">
                    <select
                      value={activeQuery.status}
                      disabled={updatingId === activeQuery.id}
                      onChange={e => handleStatusChange(activeQuery.id, e.target.value)}
                      className={`appearance-none w-full border rounded-xl px-4 py-2.5 pr-10 text-xs font-extrabold cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-black transition-all ${getStatusBadgeStyles(
                        activeQuery.status
                      )}`}
                    >
                      {STATUS_OPTIONS.map(opt => (
                        <option key={opt} value={opt} className="bg-[#0c0c0e] text-neutral-200">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-3.5 top-3 pointer-events-none text-neutral-500">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </span>
                  </div>
                </div>

                {/* Details Box */}
                <div className="border-t border-neutral-900 pt-5">
                  <span className="block text-[9px] font-mono uppercase text-neutral-500 mb-2">Project details & requirements</span>
                  <div className="bg-[#050507] border border-neutral-900/80 rounded-xl p-4 min-h-[140px] text-neutral-300 text-xs leading-relaxed whitespace-pre-wrap font-medium">
                    {activeQuery.project_details || 'No additional details were specified by the client.'}
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer footer details */}
            <div className="border-t border-neutral-900 pt-4 mt-8 flex justify-between items-center text-[10px] text-neutral-600 font-mono">
              <span className="flex items-center gap-1">
                <span>ID:</span>
                <span className="font-bold text-neutral-500">{activeQuery.id.slice(0, 8)}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(activeQuery.created_at).toLocaleDateString()}</span>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
