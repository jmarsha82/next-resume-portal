import Link from "next/link";
import { ArrowLeft } from "@/components/icons";
import { SiteShell } from "@/components/site-shell";
import { SnakeGame } from "@/components/snake-game";

export default function SnakePage() {
  return <SiteShell><div className="game-page"><Link className="back-link" href="/games"><ArrowLeft size={18} /> All games</Link><header><p>C++ source port</p><h1>Neon Orchard Snake</h1></header><SnakeGame /></div></SiteShell>;
}
