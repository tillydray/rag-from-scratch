import { lowerCase, handlePunctuation } from "./normalization";

export function tokenize(text: string): string[] {
  return splitIntoSegments(lowerCase(text)).map(handlePunctuation);
}

function splitIntoSegments(text: string): string[] {
  return text.split(/[\s-_]+/);
}

// function handleSpecialCases(text: string): string {
//     return "";
// }
