import { readdirSync } from "node:fs";
import { join } from "node:path";
import { ArtGallery } from "@/components/art-gallery";
import { SiteShell } from "@/components/site-shell";

const artwork = readdirSync(join(process.cwd(), "public", "img", "artist"))
  .filter((file) => /\.(jpe?g|png)$/i.test(file))
  .sort((a, b) => a.localeCompare(b))
  .map((file) => {
    const name = file
      .replace(/\.[^.]+$/, "")
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return [file, name, "Original artwork"] as const;
  });

export default function ArtistPage() {
  return (
    <SiteShell>
      <header className="page-header artist-header">
        <p className="section-index">03 / Artist</p>
        <h1>Portraits with a<br /><em>personal frequency.</em></h1>
        <p>A selection of sold, donated, and privately collected oil-and-pen works. Heart selections are saved locally.</p>
      </header>
      <ArtGallery items={artwork} />
    </SiteShell>
  );
}
