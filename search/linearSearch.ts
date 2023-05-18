function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++){
    let el = haystack[i];
    if (el === needle) return true;
  }
  return false;
}
