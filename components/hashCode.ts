// https://stackoverflow.com/a/7616484/15930948

const hashCode = (text: string): string => {
    var hash = 0,
        i, chr;
    if (text.length === 0) return `${hash}`;
    for (i = 0; i < text.length; i++) {
        chr = text.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }

    return hash.toString(16);
}

export default hashCode;