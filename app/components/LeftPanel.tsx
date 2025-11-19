export default function LeftPanel() {
  return (
    <div className="panel p-6 text-cyan-200 h-full overflow-auto">
      <h2 className="text-xl font-bold neon-text mb-4">
        FLOOD ALERT SYSTEM
      </h2>

      {/* Current Level Banner */}
      <div className="bg-red-600/30 border border-red-500 px-4 py-2 rounded-lg mb-6">
        <p className="text-red-300 font-semibold">CURRENT LEVEL: CRITICAL</p>
      </div>

      {/* Affected Regions */}
      <p className="text-sm tracking-widest mb-4">AFFECTED REGIONS</p>

      <div className="space-y-4">
        <RegionProgress name="Kerala" value={95} color="bg-red-400" />
        <RegionProgress name="Assam" value={78} color="bg-yellow-300" />
        <RegionProgress name="Maharashtra" value={65} color="bg-green-300" />
        <RegionProgress name="Gujarat" value={82} color="bg-yellow-400" />
      </div>

      <p className="mt-10 text-sm tracking-widest">RAINFALL ANOMALY (MM)</p>

      {/* Dummy graph space */}
      <div className="h-40 mt-4 border border-cyan-500/20 rounded"></div>

      <p class="mt-6 tracking-widest text-sm">7-DAY FORECAST TREND</p>
      <div className="h-24 mt-4 border border-cyan-500/20 rounded"></div>
    </div>
  );
}

function RegionProgress({ name, value, color }: any) {
  return (
    <div>
      <div className="flex justify-between">
        <p>{name}</p>
        <p className="text-cyan-300">{value}%</p>
      </div>
      <div className="w-full bg-gray-800 h-2 rounded-full mt-1">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
