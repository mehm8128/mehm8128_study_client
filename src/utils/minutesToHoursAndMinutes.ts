export const minutesToHoursAndMinutes = (minutes: number) => {
	const hours = Math.floor(minutes / 60)
	const minutesRemaining = minutes % 60
	return `${hours}時間 ${minutesRemaining}分`
}
