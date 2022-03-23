export const dateFormatter = (date: string) => {
	const splittedDate = date.split("T")[0]
	const time = date.split("T")[1]
	return (
		splittedDate.split("-")[0] +
		"年" +
		splittedDate.split("-")[1] +
		"月" +
		splittedDate.split("-")[2] +
		"日" +
		" " +
		time.split(":")[0] +
		":" +
		time.split(":")[1]
	)
	//todo:何分前表示
}
