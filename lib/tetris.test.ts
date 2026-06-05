import { describe, expect, it } from "vitest";
import { clearLines, createPiece, emptyBoard, lineScore, lockPiece, pieceCells, rotateBlocks, validPosition } from "./tetris";

describe("tetris engine", () => {
  it("creates pieces and computes their cells", () => {
    const piece = createPiece("T");
    expect(pieceCells(piece)).toContainEqual([4, 0]);
    expect(piece.color).toBe("#b15dff");
  });

  it("rotates pieces while keeping O unchanged", () => {
    expect(rotateBlocks(createPiece("O"))).toEqual(createPiece("O").blocks);
    expect(rotateBlocks(createPiece("I"))).toEqual([[0, 0], [0, 1], [0, 2], [0, 3]]);
  });

  it("validates walls, floor, and occupied cells", () => {
    const board = emptyBoard();
    const piece = createPiece("O");
    expect(validPosition(piece, board)).toBe(true);
    expect(validPosition({ ...piece, x: -3 }, board)).toBe(false);
    expect(validPosition({ ...piece, y: 19 }, board)).toBe(false);
    board[0][4] = "#fff";
    expect(validPosition(piece, board)).toBe(false);
  });

  it("locks pieces without mutating the board", () => {
    const board = emptyBoard();
    const locked = lockPiece(createPiece("O"), board);
    expect(locked[0][4]).toBe("#ffd60a");
    expect(board[0][4]).toBeNull();
  });

  it("clears full lines and scores them", () => {
    const board = emptyBoard();
    board[19].fill("#fff");
    board[18].fill("#fff");
    const result = clearLines(board);
    expect(result.cleared).toBe(2);
    expect(result.board[0].every((cell) => cell === null)).toBe(true);
    expect(lineScore(2, 3)).toBe(900);
  });
});
