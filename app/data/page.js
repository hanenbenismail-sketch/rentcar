
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen flex flex-col font-sans overflow-hidden">
@@ -69,18 +70,12 @@ export default function Home() {

          {/* Booking bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="text"
              placeholder="Pick-up location"
              className="flex-1 bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-blue-400 transition-colors"
            />
            <input
              type="date"
              className="bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white outline-none focus:border-blue-400 transition-colors"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-blue-400 transition-colors whitespace-nowrap">
              Find a Car
            </button>
            <Link href="/cars">
              {" "}
              <button className="bg-blue-500 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-blue-400 transition-colors whitespace-nowrap">
                Find a Car
              </button>
            </Link>
          </div>

          {/* Stats */}