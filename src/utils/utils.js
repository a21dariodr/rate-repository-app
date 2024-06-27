export const formatNumber = number => {
  if (number >= 1000000) return (number/1000000).toFixed(1).toString() + ' M'
  else if (number >= 1000) return (number/1000).toFixed(1).toString() + ' K'
  else return number.toString()
}