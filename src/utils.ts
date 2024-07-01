const PUNCT = '!:;<=>?,@#%&*+_\\-./^|~{}[\\]\'"'
const SEPARATOR = '[\\s' + PUNCT + ']'
const KEY_PREFIX_REGEX = '(?:(?<=' + SEPARATOR + ')|^)'
const KEY_BODY_REGEX = '([A-Z][A-Z\\d_]{1,255}-\\d{1,100})'
const KEY_POSTFIX_REGEX = '(?:(?=' + SEPARATOR + ')|$)'
const ISSUE_KEY_REGEX = KEY_PREFIX_REGEX + KEY_BODY_REGEX + KEY_POSTFIX_REGEX
// const ISSUE_KEY_MAX_LIMIT = 100;

const NAIVE_PATTERN = ''

export function extractIssueKeys(text: string): string[] {
  return text.match(new RegExp(ISSUE_KEY_REGEX, 'g')) || []
}

export function unique(values: string[]): string[] {
  return Array.from(new Set(values))
}
