import { describe, expect, it } from "vitest";
import { areOpposite, initialSnakeState, placeFood, requestDirection, sameCell, stepSnake } from "./snake";

describe("snake engine", () => {
  it("compares cells and directions", () => {
    expect(sameCell({ x: 1, y: 2 }, { x: 1, y: 2 })).toBe(true);
    expect(sameCell({ x: 1, y: 2 }, { x: 2, y: 2 })).toBe(false);
    expect(areOpposite("up", "down")).toBe(true);
    expect(areOpposite("left", "right")).toBe(true);
    expect(areOpposite("up", "left")).toBe(false);
  });

  it("blocks reverse direction and accepts turns", () => {
    const state = initialSnakeState();
    expect(requestDirection(state, "left")).toBe(state);
    expect(requestDirection(state, "up").nextDirection).toBe("up");
  });

  it("moves, eats, grows, and places food", () => {
    const state = initialSnakeState({ x: 13, y: 9 });
    const next = stepSnake(state, () => 0);
    expect(next.score).toBe(10);
    expect(next.snake).toHaveLength(4);
    expect(next.food).toEqual({ x: 0, y: 0 });
  });

  it("does not update paused or completed games", () => {
    const paused = { ...initialSnakeState(), paused: true };
    expect(stepSnake(paused)).toBe(paused);
    const over = { ...initialSnakeState(), gameOver: true };
    expect(stepSnake(over)).toBe(over);
  });

  it("detects wall and self collisions", () => {
    const wall = { ...initialSnakeState(), snake: [{ x: 23, y: 0 }], direction: "right" as const, nextDirection: "right" as const };
    expect(stepSnake(wall).gameOver).toBe(true);
    const self = {
      ...initialSnakeState(),
      snake: [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 2 }],
      direction: "down" as const,
      nextDirection: "down" as const,
      food: { x: 2, y: 3 }
    };
    expect(stepSnake(self).gameOver).toBe(true);
  });

  it("selects an open food cell", () => {
    expect(placeFood([{ x: 0, y: 0 }], () => 0)).toEqual({ x: 1, y: 0 });
  });
});
