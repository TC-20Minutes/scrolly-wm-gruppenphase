# Finales Scrolly-Template (20 Minuten)

`template_final` ist das wiederverwendbare Scrolly-Template für Bilder und Videos. Es vereint die
beste Mischung aus den früheren Iterationen (`v3` × `template_scrolly_v2`) und ist konsequent aufs
**20-Minuten-Corporate-Design** ausgerichtet (Matter-Font, offizielle Blau-Palette, „20 Tile"-Device).

## Schnellstart

```bash
npm install
npm run dev      # Vite-Dev-Server auf Port 4173
npm run build    # Produktions-Build nach dist/
```

## Medien ablegen

- Bilder in `public/images`
- Videos in `public/videos`

Beispiele:

- `public/images/mein-bild.jpg` wird im Code zu `/images/mein-bild.jpg`
- `public/videos/mein-video.mp4` wird im Code zu `/videos/mein-video.mp4`

**Wichtig:** Die Medien werden formatfüllend dargestellt (`object-fit: cover`). Beachte daher die
Bildvorgaben in [`IMAGE_GUIDELINES.md`](./IMAGE_GUIDELINES.md) – Standardformat **9:16**, Hauptmotiv
in die Mitte, Ränder freihalten.

## Datenstruktur

In `App.svelte` steuerst du alles über `mediaItems`.

Beispiel Bild:

```js
{
  type: 'image',
  src: '/images/mein-bild.jpg',
  alt: 'Kurze Bildbeschreibung',
  location: 'Kapitel 1',          // Kapiteltitel – erscheint einmal pro Location-Gruppe
  textboxes: [
    {
      text: 'Dein Text',
      source: ''                  // optional; HTML erlaubt (z. B. <br>), für Quelle/Credits
    }
  ]
}
```

Beispiel Video:

```js
{
  type: 'video',
  src: '/videos/mein-video.mp4',
  poster: '/images/mein-poster.jpg',
  alt: 'Kurze Videobeschreibung',
  location: 'Kapitel 2',
  textboxes: [
    {
      text: 'Dein Text',
      source: ''
    }
  ]
}
```

### Felder

- `type`: `'image'` oder `'video'`
- `src`: Pfad zum Medium (`/images/…` oder `/videos/…`)
- `poster`: nur bei Video – Vorschaubild
- `alt`: Bildbeschreibung (Barrierefreiheit)
- `location`: Kapiteltitel; wird automatisch nur beim ersten Step einer neuen Location angezeigt
- `textboxes[]`: ein Eintrag pro Scroll-Step mit `text` und optionaler `source`

> Hinweis: Das frühere Feld `label` (Uppercase-Kicker) wurde bewusst entfernt – die Hierarchie ist
> jetzt **Kapiteltitel → Body → Quelle**.

## Step vs. Abschnitt

- **Pro Step:** Jeder Scroll-Schritt kann ein eigenes Medium haben.
- **Pro Abschnitt:** Mehrere Scroll-Schritte (`textboxes`) teilen sich dasselbe Medium.

Das Template ist auf **pro Abschnitt** ausgelegt: Ein `mediaItem` hält ein Medium und beliebig viele
`textboxes`, die beim Scrollen nacheinander erscheinen. Soll ein Medium nur einen Text haben, enthält
`textboxes` einfach einen einzigen Eintrag.

## Corporate Design

Die Farben sind als CSS-Custom-Properties in `App.svelte` hinterlegt (offizielle Werte aus den
20-Minuten Brand Guidelines):

| Token | Wert | Verwendung |
|---|---|---|
| `--c-blue` | `#2659FF` | Hero / Akzent / aktiver Zustand |
| `--c-mid-blue` | `#0D2880` | Flächentiefe / Surface |
| `--c-dark-blue` | `#07184D` | Seiten-Hintergrund |
| `--c-ink-deep` | `#050F31` | Basis hinter Cover-Medien |
| `--c-ice` | `#EDF4FF` | Helle Schrift / heller Banner |
| `--c-white` | `#FFFFFF` | Primärtext auf Dunkel |
| `--c-cool-blue` | `#00D0FF` | Akzent (sparsam, z. B. Links) |
| `--c-red` | `#CA0016` | **nur** Breaking News |

Weitere Brand-Elemente:

- **Schrift:** Matter (Light 300 – Bold 700) liegt in `font/`. Kapiteltitel = SemiBold, Body = Regular.
- **„20 Tile"-Device:** Das Logo (`public/images/logo-20min.png`) sitzt dezent in der Ecke.
- **Logo austauschen:** Eigenes Logo nach `public/images/logo-20min.png` legen oder den Pfad in
  `App.svelte` (Preloader, Eck-Logo, Favicon in `index.html`) anpassen.
