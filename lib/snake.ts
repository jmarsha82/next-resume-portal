export const SNAKE_COLUMNS = 24;
export const SNAKE_ROWS = 18;
export type Direction = "up" | "down" | "left" | "right";
export type Cell = { x: number; y: number };
export type SnakeState = {
  snake: Cell[];
  food: Cell;
  direction: Direction;
  nextDirection: Direction;
  score: number;
  paused: boolean;
  gameOver: boolean;
};

export const deltas: Record<Direction, Cell> = {
  up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 }
};

export function sameCell(a: Cell, b: Cell) {
  return a.x === b.x && a.y === b.y;
}

export function areOpposite(a: Direction, b: Direction) {
  return (a === "up" && b === "down") || (a === "down" && b === "up") ||
    (a === "left" && b === "right") || (a === "right" && b === "left");
}

export function initialSnakeState(food: Cell = { x: 18, y: 9 }): SnakeState {
  return {
    snake: [{ x: 12, y: 9 }, { x: 11, y: 9 }, { x: 10, y: 9 }],
    food, direction: "right", nextDirection: "right", score: 0, paused: false, gameOver: false
  };
}

export function requestDirection(state: SnakeState, requested: Direction): SnakeState {
  return areOpposite(state.direction, requested) ? state : { ...state, nextDirection: requested };
}

export function placeFood(snake: Cell[], random = Math.random): Cell {
  const open: Cell[] = [];
  for (let y = 0; y < SNAKE_ROWS; y += 1) for (let x = 0; x < SNAKE_COLUMNS; x += 1) {
    if (!snake.some((cell) => cell.x === x && cell.y === y)) open.push({ x, y });
  }
  return open[Math.min(open.length - 1, Math.floor(random() * open.length))] ?? { x: 0, y: 0 };
}

export function stepSnake(state: SnakeState, random = Math.random): SnakeState {
  if (state.paused || state.gameOver) return state;
  const direction = state.nextDirection;
  const delta = deltas[direction];
  const head = state.snake[0];
  const nextHead = { x: head.x + delta.x, y: head.y + delta.y };
  const eats = sameCell(nextHead, state.food);
  const body = eats ? state.snake : state.snake.slice(0, -1);
  const collision = nextHead.x < 0 || nextHead.x >= SNAKE_COLUMNS || nextHead.y < 0 ||
    nextHead.y >= SNAKE_ROWS || body.some((cell) => sameCell(cell, nextHead));
  if (collision) return { ...state, direction, gameOver: true };
  const snake = [nextHead, ...state.snake];
  if (!eats) snake.pop();
  return { ...state, snake, direction, score: eats ? state.score + 10 : state.score, food: eats ? placeFood(snake, random) : state.food };
}
