import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatNumber = (n: any): string =>
    Number(n).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

export const round2 = (num: number): number =>
    parseFloat(num.toFixed(2));

export const formatOffsetDate = (startDate: dayjs.Dayjs, unit: dayjs.ManipulateType, subtractDays = 0): string =>
    dayjs(startDate).tz("America/Vancouver").add(1, unit).subtract(subtractDays, "day").format("YYYY-MM-DD");

export const calcTotalDaysInMonth = (start: dayjs.Dayjs): number => {
    const startVancouver = start.tz("America/Vancouver");
    return startVancouver.add(1, "month").subtract(1, "day").diff(startVancouver, "day") + 1;
};

export const formatVancouverDate = (date: Date): string =>
    dayjs(date).tz("America/Vancouver").format("YYYY-MM-DD");