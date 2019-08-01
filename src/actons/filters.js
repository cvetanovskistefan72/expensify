export const setTextFilter = (text = "") => ({
    type: "SET_TEXT",
    text: text
})
//sort
export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
    amountSort: "amount"
})
export const sortByDate = () => ({
    type: "SORT_BY_DATE",
    dateSort: "date"
})

//setDate

export const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
    startDate: startDate
})
export const setEndDate = (endDate = undefined) => ({
    type: "SET_END_DATE",
    endDate: endDate
})