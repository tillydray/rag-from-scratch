function tokenize(text: string): string[] {
    return splitIntoSegments(lowerCase(text)).map(handlePunctuation);
}

function handlePunctuation(text: string): string {
    const punctuationRegex = /[!"#$%&()*+,./:;<=>?@[\\\]^`{|}~]/g;
    return text.replace(punctuationRegex, "");
}

function lowerCase(text: string): string {
    return text.toLowerCase();
}

function splitIntoSegments(text: string): string[] {
    return text.split(/[\s-_]+/);
}

// function handleSpecialCases(text: string): string {
//     return "";
// }
