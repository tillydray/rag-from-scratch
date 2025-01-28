export function lowerCase(text: string): string {
    return text.toLowerCase();
}

export function handlePunctuation(text: string): string {
    const punctuationRegex = /[!"#$%&()*+,./:;<=>?@[\\\]^`{|}~]/g;
    return text.replace(punctuationRegex, "");
}
