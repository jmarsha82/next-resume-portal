import Link from "next/link";
import { ArrowLeft } from "@/components/icons";
import { SiteShell } from "@/components/site-shell";
import { TetrisGame } from "@/components/tetris-game";

export default function TetrisPage() {
  return <SiteShell><div className="game-page"><Link className="back-link" href="/games"><ArrowLeft size={18} /> All games</Link><header><p>Python source port</p><h1>Color Shape Tetris</h1></header><TetrisGame /></div></SiteShell>;
}
