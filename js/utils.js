export async function loadCSV(path) {
    const response = await fetch(path);
    const text = await response.text();
    const rows = text.trim().split('\n').map(line => line.split(','));
    const [header, ...data] = rows;
    return data.map(row => {
        const obj = {};
        header.forEach((h, i) => obj[h] = row[i]);
        return obj;
    });
}

export function fmtNumber(num) {
    return Number(num).toLocaleString();
}
