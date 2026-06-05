"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { initialSnakeState, requestDirection, stepSnake, type Direction } from "@/lib/snake";
import { usePortal } from "@/components/theme-provider";

export function SnakeGame() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState(() => initialSnakeState());
  const { preferences, setHighScore } = usePortal();
  const reset = useCallback(() => setState(initialSnakeState()), []);

  useEffect(() => {
    const interval = window.setInterval(() => setState((current) => {
      const next = stepSnake(current);
      if (next.score > current.score) setHighScore("snakeHighScore", next.score);
      return next;
    }), 110);
    return () => window.clearInterval(interval);
  }, [setHighScore]);

  useEffect(() => {
    const keyMap: Record<string, Direction> = { ArrowUp: "up", w: "up", ArrowDown: "down", s: "down", ArrowLeft: "left", a: "left", ArrowRight: "right", d: "right" };
    const onKey = (event: KeyboardEvent) => {
      const direction = keyMap[event.key];
      if (direction) { event.preventDefault(); setState((current) => requestDirection(current, direction)); }
      else if (event.key === " ") { event.preventDefault(); setState((current) => current.gameOver ? current : { ...current, paused: !current.paused }); }
      else if (event.key.toLowerCase() === "r") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [reset]);

  useEffect(() => {
    const context = canvas.current?.getContext("2d");
    if (!context) return;
    context.fillStyle = "#09101a"; context.fillRect(0, 0, 806, 432);
    context.fillStyle = "#142c2a"; context.fillRect(0, 0, 576, 432);
    context.strokeStyle = "rgba(255,255,255,.07)";
    for (let x = 0; x <= 24; x += 1) { context.beginPath(); context.moveTo(x * 24, 0); context.lineTo(x * 24, 432); context.stroke(); }
    for (let y = 0; y <= 18; y += 1) { context.beginPath(); context.moveTo(0, y * 24); context.lineTo(576, y * 24); context.stroke(); }
    state.snake.forEach((cell, index) => {
      context.fillStyle = index === 0 ? "#50e6a6" : `hsl(157 55% ${Math.max(35, 65 - index)}%)`;
      roundedRect(context, cell.x * 24 + 3, cell.y * 24 + 3, 18, 18, 5);
    });
    context.fillStyle = "#ffcd4f"; context.beginPath(); context.arc(state.food.x * 24 + 12, state.food.y * 24 + 12, 8, 0, Math.PI * 2); context.fill();
    context.fillStyle = "#ebf6f1"; context.font = "700 32px Arial"; context.fillText("Snake", 602, 62);
    context.fillStyle = "#9ab5ac"; context.font = "16px Arial"; context.fillText("Neon orchard chase", 602, 92);
    context.fillStyle = "#50e6a6"; context.fillText("SCORE", 602, 156); context.fillStyle = "#ebf6f1"; context.font = "700 28px Arial"; context.fillText(String(state.score), 602, 188);
    context.fillStyle = "#ffcd4f"; context.font = "16px Arial"; context.fillText("LENGTH", 602, 236); context.fillStyle = "#ebf6f1"; context.font = "700 28px Arial"; context.fillText(String(state.snake.length), 602, 268);
    context.fillStyle = "#9ab5ac"; context.font = "15px Arial"; ["Arrow keys or WASD", "Space to pause", "R to restart"].forEach((text, i) => context.fillText(text, 602, 334 + i * 24));
    if (state.paused || state.gameOver) {
      context.fillStyle = "rgba(9,14,24,.82)"; roundedRect(context, 32, 136, 512, 160, 12);
      context.fillStyle = state.gameOver ? "#ff6860" : "#ffcd4f"; context.font = "700 38px Arial"; context.fillText(state.gameOver ? "Game Over" : "Paused", 190, 202);
      context.fillStyle = "#ebf6f1"; context.font = "18px Arial"; context.fillText("Press R to restart", 205, 248);
    }
  }, [state]);

  return <div className="game-wrap snake-wrap"><canvas ref={canvas} width={806} height={432} tabIndex={0} aria-label="Playable Snake game" /><div className="game-meta"><strong>High score</strong><span>{Math.max(state.score, preferences.snakeHighScore)}</span><button onClick={() => setState((current) => current.gameOver ? current : { ...current, paused: !current.paused })} type="button">{state.paused ? "Resume" : "Pause"}</button><button onClick={reset} type="button">Restart game</button></div></div>;
}

function roundedRect(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  context.beginPath(); context.roundRect(x, y, width, height, radius); context.fill();
}
