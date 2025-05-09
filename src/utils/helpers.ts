export const formatNumber = (n: any): string =>
    Number(n).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

export const round2 = (num: number): number => parseFloat(num.toFixed(2));