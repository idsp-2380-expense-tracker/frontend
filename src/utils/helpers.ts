import dayjs from "dayjs";

export const formatNumber = (n: any): string =>
    Number(n).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

export const round2 = (num: number): number =>
    parseFloat(num.toFixed(2));

export const formatOffsetDate = (
    startDate: dayjs.Dayjs,
    unit: dayjs.ManipulateType,
    subtractDays = 0
): string => dayjs(startDate).add(1, unit).subtract(subtractDays, "day").format("YYYY-MM-DD");

export const calcTotalDaysInMonth = (start: dayjs.Dayjs): number =>
    start.add(1, "month").subtract(1, "day").diff(start, "day") + 1;  