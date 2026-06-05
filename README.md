# Next Resume Portal

A desktop-focused Next.js recreation of the original `jm-mern-resume-portal`, restyled with a new editorial theme and browser-local persistence.

## Features

- Home, programmer resume, artist gallery, about, and games routes
- Versioned `localStorage` preferences for theme, favorite artwork, and game high scores
- Embedded browser ports of the original Python/Pygame Tetris and C++/Raylib Snake games
- Original game source snapshots in `sources/`
- Keyboard controls and restart/pause buttons inside the web app

## Install

```powershell
npm install
```

## Development

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```powershell
npm run build
npm start
```

## Tests And Coverage

```powershell
npm test
npm run test:coverage
```

## Game Controls

### Tetris

- Left / Right: move
- Up: rotate
- Down: soft drop
- Space: hard drop
- R: restart

### Snake

- Arrow keys or WASD: steer
- Space: pause or resume
- R: restart

## Source Integration

Browsers cannot directly embed native Pygame or Raylib windows. The original `tetris.py` and `snake_game.cpp` files are copied into `sources/`, while equivalent TypeScript engines and Canvas renderers provide the playable in-page versions.
