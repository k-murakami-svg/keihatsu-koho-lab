export function formatDate(value?: string) {
  if (!value) return '準備中'

  try {
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date(value))
  } catch {
    return '準備中'
  }
}
