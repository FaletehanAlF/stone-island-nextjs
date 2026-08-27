"use client"

import { useState, useEffect } from "react"

export default function ProductPage() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await fetch("http://localhost:8000/api/songs")
        const responseJson = await response.json()
        setSongs(responseJson.data)
      } catch (err) {
        console.error("Failed to fetch songs:", err)
      }
    }
    fetchSongs()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-white/40">
            <th className="p-3">Nomor</th>
            <th className="p-3">Title</th>
            <th className="p-3">Artist</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((item, index) => (
            <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="p-3 text-white/50">{index + 1}</td>
              <td className="p-3">{item.title}</td>
              <td className="p-3 text-white/60">{item.artist}</td>
              <td className="p-3">
                <button className="mr-3 text-xs text-white/40 hover:text-white transition-colors cursor-pointer">edit</button>
                <button className="text-xs text-white/40 hover:text-red-400 transition-colors cursor-pointer">delete</button>
              </td>
            </tr>
          ))}
          {songs.length === 0 && (
            <tr>
              <td colSpan={4} className="p-8 text-center text-white/20 text-sm">
                No songs found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
