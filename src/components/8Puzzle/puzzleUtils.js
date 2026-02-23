export const GOAL = [1,2,3,4,5,6,7,8,null]

export function shuffle(arr) {
  let copy = arr.slice()

  do {
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
  } while (!isSolvable(copy) || isSolved(copy))

  return copy
}

export function isSolvable(p) {
  let inv = 0
  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (p[i] && p[j] && p[i] > p[j]) inv++
    }
  }
  return inv % 2 === 0
}

export function isSolved(p) {
  return p.every((v, i) => v === GOAL[i])
}

export function canMove(i, empty) {
  const r1 = Math.floor(i / 3)
  const c1 = i % 3
  const r2 = Math.floor(empty / 3)
  const c2 = empty % 3

  return Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1
}

export function manhattan(p) {
  let dist = 0

  for (let i = 0; i < 9; i++) {
    const tile = p[i]
    if (tile === null) continue

    const goalIndex = GOAL.indexOf(tile)

    const r1 = Math.floor(i / 3)
    const c1 = i % 3
    const r2 = Math.floor(goalIndex / 3)
    const c2 = goalIndex % 3

    dist += Math.abs(r1 - r2) + Math.abs(c1 - c2)
  }

  return dist
}