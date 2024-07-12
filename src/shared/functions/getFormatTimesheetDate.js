export function getFormatTimesheetDate(date){
    return `${date.slice(8, 10)}-${date.slice(5, 7)}-${date.slice(2,4)}`
}