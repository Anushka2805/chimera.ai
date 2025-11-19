export default function RightPanel() {
  return (
    <div className="panel p-6 text-cyan-200 h-full overflow-auto">
      <h2 className="text-xl font-bold neon-text mb-4">
        EVACUATION PRIORITY
      </h2>

      <p className="text-sm tracking-widest mb-2">RISK ASSESSMENT LEVEL</p>

      {/* Gauge (static image style) */}
      <div className="w-full flex justify-center my-4">
        <div className="w-48 h-24 rounded-full border border-cyan-500/20 relative">
          <div className="absolute w-full h-full flex justify-center items-end">
            <p className="neon-red text-xl font-bold">85%</p>
          </div>
        </div>
      </div>

      <p className="text-center text-red-400 font-bold text-lg">ALERT LEVEL</p>

      {/* Live feed box */}
      <p className="mt-8 text-sm tracking-widest">LIVE FEED: KERALA</p>
      <div className="h-40 bg-black/20 border border-cyan-500/20 rounded mt-2 p-3">
        <p className="text-xs">SECTOR: 7A</p>
        <div className="h-full mt-2 border border-cyan-500/10 rounded"></div>
      </div>

      {/* District data */}
      <div className="mt-6">
        <div className="flex justify-between text-sm">
          <p>DISTRICT</p>
          <p>Surat</p>
        </div>

        <div className="flex justify-between text-sm mt-2">
          <p>WATER LEVEL</p>
          <p className="neon-green">4.1m</p>
        </div>

        <div className="flex justify-between text-sm mt-2">
          <p>POPULATION AFFECTED</p>
          <p className="neon-red text-xl">1.2M</p>
        </div>
      </div>
    </div>
  );
}
