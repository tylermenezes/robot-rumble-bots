export function cartesianProduct<T, U>(arrA: T[], arrB: U[]): [T, U][] {
  return (<[T, U][]>[]).concat(
    ...arrA.map((a) => (<[T, U][]>[]).concat(
      arrB.map((b) => <[T, U]>[a, b])
    ))
  )
}
