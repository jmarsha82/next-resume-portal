"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPiece, emptyBoard, clearLines, lineScore, lockPiece, pieceCells, rotateBlocks, SHAPES, validPosition, type PieceName, type TetrisBoard, type TetrisPiece } from "@/lib/tetris";
import { usePortal } from "@/components/theme-provider";

const names = Object.keys(SHAPES) as PieceName[];
const randomPiece = () => createPiece(names[Math.floor(Math.random() * names.length)]);

export function TetrisGame() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [board, setBoard] = useState<TetrisBoard>(() => emptyBoard());
  const [piece, setPiece] = useState<TetrisPiece>(() => randomPiece());
  const [next, setNext] = useState<TetrisPiece>(() => randomPiece());
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const { preferences, setHighScore } = usePortal();

  const reset = useCallback(() => {
    setBoard(emptyBoard()); setPiece(randomPiece()); setNext(randomPiece());
    setScore(0); setLevel(1); setGameOver(false);
  }, []);

  const settle = useCallback((active: TetrisPiece) => {
    const result = clearLines(lockPiece(active, board));
    const added = lineScore(result.cleared, level);
    const newScore = score + added;
    const newLevel = Math.floor(newScore / 1000) + 1;
    setBoard(result.board); setScore(newScore); setLevel(newLevel); setHighScore("tetrisHighScore", newScore);
    const incoming = { ...next, blocks: [...next.blocks] };
    setPiece(incoming); setNext(randomPiece());
    if (!validPosition(incoming, result.board)) setGameOver(true);
  }, [board, level, next, score, setHighScore]);

  const moveDown = useCallback((soft = false) => {
    if (gameOver) return;
    if (validPosition(piece, board, 0, 1)) {
      setPiece((current) => ({ ...current, y: current.y + 1 }));
      if (soft) setScore((current) => current + 1);
    } else settle(piece);
  }, [board, gameOver, piece, settle]);

  useEffect(() => {
    const interval = window.setInterval(() => moveDown(), Math.max(100, 700 - (level - 1) * 60));
    return () => window.clearInterval(interval);
  }, [level, moveDown]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", " "].includes(event.key)) event.preventDefault();
      if (event.key.toLowerCase() === "r") return reset();
      if (gameOver) return;
      if (event.key === "ArrowLeft" && validPosition(piece, board, -1)) setPiece((p) => ({ ...p, x: p.x - 1 }));
      if (event.key === "ArrowRight" && validPosition(piece, board, 1)) setPiece((p) => ({ ...p, x: p.x + 1 }));
      if (event.key === "ArrowDown") moveDown(true);
      if (event.key === "ArrowUp") {
        const rotated = rotateBlocks(piece);
        const kick = [0, -1, 1, -2, 2].find((value) => validPosition(piece, board, value, 0, rotated));
        if (kick !== undefined) setPiece((p) => ({ ...p, x: p.x + kick, blocks: rotated }));
      }
      if (event.key === " ") {
        const dropped = { ...piece };
        let cells = 0;
        while (validPosition(dropped, board, 0, 1)) { dropped.y += 1; cells += 1; }
        setScore((current) => current + cells * 2);
        settle(dropped);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [board, gameOver, moveDown, piece, reset, settle]);

  useEffect(() => {
    const context = canvas.current?.getContext("2d");
    if (!context) return;
    context.fillStyle = "#101218"; context.fillRect(0, 0, 470, 600);
    context.fillStyle = "#1b1f28"; context.fillRect(300, 0, 170, 600);
    for (let y = 0; y < 20; y += 1) for (let x = 0; x < 10; x += 1) {
      context.strokeStyle = "#2a2e3a"; context.strokeRect(x * 30, y * 30, 30, 30);
      const color = board[y][x];
      if (color) drawBlock(context, x * 30, y * 30, color);
    }
    if (!gameOver) pieceCells(piece).forEach(([x, y]) => { if (y >= 0) drawBlock(context, x * 30, y * 30, piece.color); });
    context.fillStyle = "#ecf0f4"; context.font = "700 28px Arial"; context.fillText("TETRIS", 320, 52);
    context.font = "18px Arial"; context.fillText(`Score: ${score}`, 320, 102); context.fillText(`Level: ${level}`, 320, 132);
    context.fillStyle = "#969eac"; context.fillText("Next", 320, 180);
    next.blocks.forEach(([x, y]) => drawBlock(context, 332 + x * 24, 205 + y * 24, next.color, 24));
    ["Left/Right: move", "Up: rotate", "Down: soft drop", "Space: hard drop", "R: restart"].forEach((text, i) => context.fillText(text, 320, 352 + i * 27));
    if (gameOver) {
      context.fillStyle = "rgba(0,0,0,.72)"; context.fillRect(0, 0, 300, 600);
      context.fillStyle = "#fff"; context.font = "700 28px Arial"; context.fillText("GAME OVER", 60, 285);
      context.font = "16px Arial"; context.fillText("Press R to restart", 82, 322);
    }
  }, [board, gameOver, level, next, piece, score]);

  return <div className="game-wrap"><canvas ref={canvas} width={470} height={600} tabIndex={0} aria-label="Playable Tetris game" /><div className="game-meta"><strong>High score</strong><span>{Math.max(score, preferences.tetrisHighScore)}</span><button onClick={reset} type="button">Restart game</button><p>Click the game, then use arrow keys and space.</p></div></div>;
}

function drawBlock(context: CanvasRenderingContext2D, x: number, y: number, color: string, size = 30) {
  context.fillStyle = color; context.fillRect(x, y, size, size);
  context.strokeStyle = "rgba(255,255,255,.75)"; context.strokeRect(x + 4, y + 4, size - 8, size - 8);
  context.strokeStyle = "#101218"; context.strokeRect(x, y, size, size);
}
