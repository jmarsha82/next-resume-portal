export const TETRIS_COLUMNS = 10;
export const TETRIS_ROWS = 20;

export type TetrisColor = string;
export type TetrisBoard = Array<Array<TetrisColor | null>>;
export type Block = readonly [number, number];
export type PieceName = keyof typeof SHAPES;
export type TetrisPiece = {
  name: PieceName;
  color: TetrisColor;
  blocks: Block[];
  x: number;
  y: number;
};

export const SHAPES = {
  I: { color: "#00d8ff", blocks: [[0, 1], [1, 1], [2, 1], [3, 1]] },
  O: { color: "#ffd60a", blocks: [[1, 0], [2, 0], [1, 1], [2, 1]] },
  T: { color: "#b15dff", blocks: [[1, 0], [0, 1], [1, 1], [2, 1]] },
  S: { color: "#2dd679", blocks: [[1, 0], [2, 0], [0, 1], [1, 1]] },
  Z: { color: "#ff5050", blocks: [[0, 0], [1, 0], [1, 1], [2, 1]] },
  J: { color: "#3a86ff", blocks: [[0, 0], [0, 1], [1, 1], [2, 1]] },
  L: { color: "#ff922b", blocks: [[2, 0], [0, 1], [1, 1], [2, 1]] }
} as const;

export function emptyBoard(): TetrisBoard {
  return Array.from({ length: TETRIS_ROWS }, () => Array<TetrisColor | null>(TETRIS_COLUMNS).fill(null));
}

export function createPiece(name: PieceName): TetrisPiece {
  return { name, color: SHAPES[name].color, blocks: SHAPES[name].blocks.map(([x, y]) => [x, y]), x: 3, y: 0 };
}

export function pieceCells(piece: TetrisPiece, xOffset = 0, yOffset = 0, blocks = piece.blocks) {
  return blocks.map(([x, y]) => [piece.x + x + xOffset, piece.y + y + yOffset] as Block);
}

export function rotateBlocks(piece: TetrisPiece): Block[] {
  if (piece.name === "O") return piece.blocks;
  const rotated = piece.blocks.map(([x, y]) => [3 - y, x] as Block);
  const minX = Math.min(...rotated.map(([x]) => x));
  const minY = Math.min(...rotated.map(([, y]) => y));
  return rotated.map(([x, y]) => [x - minX, y - minY] as Block);
}

export function validPosition(piece: TetrisPiece, board: TetrisBoard, xOffset = 0, yOffset = 0, blocks = piece.blocks) {
  return pieceCells(piece, xOffset, yOffset, blocks).every(([x, y]) =>
    x >= 0 && x < TETRIS_COLUMNS && y < TETRIS_ROWS && (y < 0 || board[y][x] === null)
  );
}

export function lockPiece(piece: TetrisPiece, board: TetrisBoard) {
  const next = board.map((row) => [...row]);
  pieceCells(piece).forEach(([x, y]) => { if (y >= 0 && y < TETRIS_ROWS) next[y][x] = piece.color; });
  return next;
}

export function clearLines(board: TetrisBoard) {
  const remaining = board.filter((row) => row.some((cell) => cell === null));
  const cleared = TETRIS_ROWS - remaining.length;
  return {
    board: [...Array.from({ length: cleared }, () => Array<TetrisColor | null>(TETRIS_COLUMNS).fill(null)), ...remaining],
    cleared
  };
}

export function lineScore(cleared: number, level: number) {
  return [0, 100, 300, 500, 800][cleared] * level;
}
