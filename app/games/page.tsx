import Link from "next/link";
import { ArrowRight, Gamepad2 } from "@/components/icons";
import { SiteShell } from "@/components/site-shell";

const games = [
  { href: "/games/tetris", number: "01", title: "Color Shape Tetris", source: "Python / Pygame", copy: "Stack seven colored tetrominoes, clear lines, and chase a locally saved high score." },
  { href: "/games/snake", number: "02", title: "Neon Orchard Snake", source: "C++ / Raylib", copy: "Guide the mint snake through a dark orchard grid without touching the walls or yourself." }
];

export default function GamesPage() {
  return (
    <SiteShell>
      <header className="page-header">
        <p className="section-index">05 / Games</p>
        <h1>Desktop originals,<br /><em>rebuilt for the web.</em></h1>
        <p>The original Python and C++ source lives in this repository. These browser-native ports play inline without opening another window.</p>
      </header>
      <div className="game-list">
        {games.map((game) => (
          <Link href={game.href} key={game.href}>
            <span>{game.number}</span>
            <Gamepad2 size={34} />
            <div><small>{game.source}</small><h2>{game.title}</h2><p>{game.copy}</p></div>
            <ArrowRight size={28} />
          </Link>
        ))}
      </div>
    </SiteShell>
  );
}
