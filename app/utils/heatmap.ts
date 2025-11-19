export function getHeatColor(value: number): string {
  if (value >= 75) return "#ff0000";      // red
  if (value >= 50) return "#ff8800";      // orange
  if (value >= 25) return "#ffee00";      // yellow
  return "#22ff22";                       // green
}
