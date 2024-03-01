function formatDate(): string {
  const [date, time] = new Date().toISOString().split('T')
  return `${date} ${time.substring(0, 8)}`
}

export { formatDate }
