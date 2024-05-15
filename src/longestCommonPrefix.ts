function longestCommonPrefix(strs: string[]) {
    if (strs.length === 0) return "";

    let shortest = strs.reduce((acc, str) => str.length < acc.length ? str : acc, strs[0]);

    for (let i = 0; i < shortest.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== shortest[i]) {
                return shortest.substring(0, i);
            }
        }
    }

    return shortest;
}


module.exports = longestCommonPrefix;