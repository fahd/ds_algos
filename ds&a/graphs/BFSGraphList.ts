export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  while (q.length) {
    // using arraylist as a queue => this function is actually dequeue
    const curr = q.shift() as number;
    if (curr === needle) break;

    const adjs = graph[curr];

    for (let i = 0; i < adjs.length; i++){
      if (adjs[i] === 0) continue;
      if (seen[i]) continue;
      seen[i] = true;
      prev[i] = curr;
      q.push(i)
    }
    seen[curr] = true;
  }

  if (prev[needle] === 1) return null;

  let curr = needle;
  const out: number[] = [];
  while (prev[curr] !== -1) {
    // keep looping until we found a point that has no more parent
    out.push(curr);
    // set to parent => whoever added me to search
    curr = prev[curr];
  }

  return out.length ? [source].concat(out.reverse()) : null;
}