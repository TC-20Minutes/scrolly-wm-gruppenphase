# Bildvorgaben Fuer Das Scrolly

Diese Scrolly-Version nutzt bildschirmfuellende Medien mit `object-fit: cover`.
Dadurch werden Bilder auf Desktop und Mobile immer ueber die ganze Flaeche gezogen, aber je nach Bildschirm links/rechts oder oben/unten leicht beschnitten.

## Empfohlenes Format

- Standardformat: `9:16`
- Ideale Aufloesung: `1080 x 1920 px`
- Fuer mehr Reserven: `1440 x 2560 px`

Warum: `9:16` funktioniert auf Mobile nahezu perfekt und bleibt auf Desktop stabil, wenn das Bild ueber die volle Hoehe laeuft.

## Safe Area

Wichtige Bildinhalte sollten nicht am Rand liegen.

- Hauptmotiv moeglichst im mittleren Bereich platzieren
- Kritische Details nicht ganz oben oder ganz unten
- Gesichter, Objekte, Logos und Text nicht in die aeussersten 15 Prozent des Bildes setzen
- Die sicherste Zone ist die mittlere Spalte und etwa das mittlere Drittel in der Hoehe

## Was Vermeiden

- Querformat wie `16:9`, wenn nur ein einziges Asset genutzt wird
- Bilder mit Text am Rand
- Motive, die nur ueber die volle Breite funktionieren

Warum: Querformat wird auf Mobile stark beschnitten. Sehr randlastige Motive verlieren auf kleineren Screens schnell ihren Fokus.

## Wenn Ein Motiv Sehr Breit Ist

- Wenn moeglich zwei Versionen vorbereiten:
- eine Mobile-Version in `9:16`
- eine Desktop-Version mit mehr horizontalem Raum

Wenn nur ein Asset gepflegt werden soll, immer das Motiv auf Hochformat optimieren.

## Kurzregel Fuer Das Team

- Erst an `9:16` denken
- Hauptmotiv in die Mitte
- Raender frei halten
- Keine wichtigen Infos in die Randzonen legen
