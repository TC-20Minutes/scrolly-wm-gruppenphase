<script>
    import { onMount, tick } from 'svelte';

    // =========================================================================
    // INHALTE HIER EINTRAGEN
    // Medien nach public/images bzw. public/videos legen und unten ergänzen.
    // Struktur pro Eintrag:
    //   {
    //     type: 'image' | 'video',
    //     src: '/images/datei.jpg' | '/videos/datei.mp4',
    //     poster: '/images/poster.jpg',   // nur bei Video
    //     alt: 'Kurze Bildbeschreibung',
    //     location: 'Kategorie',          // optional – erscheint im Badge oben links
    //     textboxes: [
    //       {
    //         title: 'Headline',          // optional – Schlagzeile in der Box
    //         text: 'Dein Text',          // Fliesstext
    //         source: ''                  // optional – Quelle/Credits (HTML erlaubt)
    //       }                             // ein Eintrag = ein Scroll-Step
    //     ]
    //   }
    // =========================================================================
    const mediaItems = [
        {
            type: 'image',
            src: '/images/FRESHFOCUS_1576492.jpg',
            alt: 'Stimmungsbild aus der Gruppenphase der Fussball-WM 2026.',
            location: 'Überblick',
            textboxes: [
                {
                    title: 'Grosse <span class="hl">Momente</span> der WM-Gruppenphase 2026',
                    text: 'Tore, Tränen, Überraschungen und virale Szenen: Die Gruppenphase der WM 2026 hat bereits mehr Geschichten geschrieben als manche ganze Turniere. Von Torjägern über Fan-Magnete bis zu spektakulären Rekorden – das sind die Highlights der ersten Turnierwochen.',
                    source: 'Bildquelle: Freshfocus'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/2282803413.jpg',
            alt: 'Lionel Messi bejubelt einen seiner Treffer in der Gruppenphase der WM 2026.',
            location: 'Torschützenkönig',
            textboxes: [
                {
                    title: 'Messi trifft weiter',
                    text: 'Mit fünf Treffern führt Lionel Messi die Torschützenliste nach der Gruppenphase an. Der Argentinier beweist einmal mehr, dass Fussballgesetze für ihn nur bedingt gelten. Während andere Legenden längst zurückgetreten sind, prägt Messi noch immer die grösste Bühne des Sports.',
                    source: 'Bildquelle: GettyImages'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/New-Zealand-Home-Mens-Soccer-Jersey.avif',
            alt: 'Das schwarze Heimtrikot von Neuseeland für die WM 2026.',
            location: 'Schönstes Trikot',
            textboxes: [
                {
                    title: 'Neuseeland gewinnt die Stilwertung',
                    text: 'Nicht die Fussballstars, sondern die 20-Minuten-Community hat entschieden: Über 5000 Leserinnen und Leser kürten das schwarze Heimtrikot von Neuseeland zum schönsten Dress der WM. Dahinter landeten die Schweiz und Kroatien. Bei den Auswärtstrikots teilten sich die Schweiz und Argentinien den ersten Platz.',
                    source: 'Bildquelle: Puma'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/2282271924.jpg',
            alt: 'Spielszene rund um die schwere Verletzung von Ismaël Koné im Spiel von Kanada.',
            location: 'Schwerste Verletzung',
            textboxes: [
                {
                    title: 'Schockmoment für Kanada',
                    text: 'Die schwere Verletzung von Ismaël Koné sorgte für Betroffenheit weit über die kanadische Mannschaft hinaus. Der Zwischenfall überschattete einen der höchsten Siege der Gruppenphase und erinnerte daran, wie schnell sich Fussball von Freude zu Drama wandeln kann.',
                    source: 'Bildquelle: GettyImages'
                }
            ]
        },
        {
            type: 'video',
            src: '/videos/norway-haaland-odegaard-fans.mp4',
            alt: 'Erling Haaland und Martin Ødegaard trommeln nach dem Sieg gegen Senegal gemeinsam mit den norwegischen Fans.',
            location: 'Viraler Moment',
            textboxes: [
                {
                    title: 'Haaland und Ødegaard geben den Takt vor',
                    text: 'Norwegens Stars sorgten nicht nur auf dem Platz für Begeisterung. Nach dem Sieg gegen Senegal griffen Erling Haaland und Martin Ødegaard zu den Trommeln und feierten gemeinsam mit den Fans. Die Bilder verbreiteten sich innert Stunden um die Welt und wurden zu einem der meistgeteilten WM-Momente der Gruppenphase.',
                    source: 'Videoquelle: FIFA Facebook'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/vozinha-kap-verde-goalie.jpg',
            alt: 'Kap-Verde-Torhüter Vozinha im Spiel gegen Spanien an der WM 2026.',
            location: 'Bester Goalie',
            textboxes: [
                {
                    title: 'Vozinha wird zur WM-Sensation',
                    text: '40 Jahre alt, WM-Debütant und plötzlich weltberühmt: Kap-Verde-Goalie Vozinha lieferte gegen Spanien eine Leistung für die Geschichtsbücher ab. Mit sieben Paraden hielt er den Favoriten fast im Alleingang auf und wurde über Nacht zu einem der Gesichter dieser WM.',
                    source: 'Bildquelle: GettyImages'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/seattle-lumen-field-stadion.jpg',
            alt: 'Volles Lumen Field in Seattle während eines WM-Spiels der Gruppenphase 2026.',
            location: 'Tollstes Stadion',
            textboxes: [
                {
                    title: 'Seattle überzeugt mit einer eindrucksvollen Kulisse',
                    text: 'Das Lumen Field bietet die spektakulärste Kulisse mit der Stadt Seattle im Hintergrund. Es gilt als eine der lautesten Fussball- und Football-Arenen Nordamerikas – begünstigt durch steile Tribünen und ein Dach, das den Schall im Stadion hält. Die Nähe zum Spielfeld und die fussballbegeisterte Stadt sorgen für eine Atmosphäre, die selbst neutrale Fans beeindruckt. Wer während der Gruppenphase echte WM-Stimmung suchte, fand sie in Seattle.',
                    source: 'Bildquelle: GettyImages · Quelle: sport.de'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/AFP_B82Z2PJ-1.jpg',
            alt: 'Cristiano Ronaldo bejubelt einen seiner Treffer in der Gruppenphase der WM 2026.',
            location: 'Rekordmann',
            textboxes: [
                {
                    title: 'Ronaldo trifft nach Kritik',
                    text: 'Nachdem Portugal beim enttäuschenden WM-Auftakt gegen DR Kongo ein Remis holte, waren die kritischen Stimmen laut. Sogar Fussballlegende Thierry Henry sprach sich gegen den Angreifer aus. Die Antwort des Superstars? Er traf im nächsten Spiel einfach doppelt und setzte damit ebenfalls einen neuen Rekord. Er ist der erste Spieler, der in sechs Weltmeisterschaften trifft.',
                    source: 'Bildquelle: AFP'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/AFP_B7XT4BF.jpg',
            alt: 'Kylian Mbappé bejubelt einen seiner Treffer in der Gruppenphase der WM 2026.',
            location: 'Rekordjagd',
            textboxes: [
                {
                    title: 'Mbappé auf Messis Spuren',
                    text: 'Gegen Österreich schreibt Messi Geschichte und setzt den neuen Weltrekord für die meisten Treffer an einer WM. Doch Frankreich-Ass Mbappé startet direkt einige Stunden später die Aufholjagd: Gegen Irak gelingt ihm das Doppelpack. Somit fehlen dem Stürmer noch zwei Tore, um den frischen Rekord zu schlagen.',
                    source: 'Bildquelle: AFP'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/2282256937.jpg',
            alt: 'Granit Xhaka zeigt beim Torjubel gegen Bosnien eine Geste in Richtung der Kritiker.',
            location: 'Nati-Statement',
            textboxes: [
                {
                    title: 'Xhaka-Jubel',
                    text: 'Die Nati-Fans staunen nicht schlecht, als Xhaka zum Torjubel gegen Bosnien eine “Redet nur”-Geste zeigt. Es ist eine klare Antwort auf die Kritik im Vorfeld des Spiels, dass die Stimmung der Nati durch die harschen Worte von Captain Xhaka getrübt sei.',
                    source: 'Bildquelle: GettyImages'
                }
            ]
        },
        {
            type: 'video',
            src: '/videos/933518.mp4',
            alt: 'Das niederländische Königspaar feiert mit den Spielern von Curaçao in der Kabine.',
            location: 'Royaler Besuch',
            textboxes: [
                {
                    title: 'Niederländisches Königspaar in Kabine',
                    text: 'Die Welt schaut nicht schlecht, als das Niederländische Königspaar mit Underdog Curaçao überschwänglich in der Kabine feiert. Nach dem 0:0-Unentschieden gegen Ecuador tanzen die Royals ausgelassen mit den Spielern.',
                    source: 'Videoquelle: X/thebluewaveffk'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/AFP_B7L282A-1.jpg',
            alt: 'Johan Manzambi bejubelt seinen Treffer für die Schweizer Nati gegen Bosnien.',
            location: 'Senkrechtstarter',
            textboxes: [
                {
                    title: 'Manzambi',
                    text: 'Nach dem Spiel gegen Bosnien leuchtete ein Stern am Nati-Himmel am allerhellsten: Johan Manzambi. Er war es, der in der 74. Minute als Dosenöffner die ersehnte Erlösung brachte und kurz vor Schluss nochmals nachlegte. Die Gesamtleistung des Youngsters war so überzeugend, dass Thomas Müller dem FC Bayern München riet, ein Auge auf den Mittelfeldspieler zu werfen. Dass der gebürtige Genfer keine Eintagsfliege ist, zeigt er wenige Tage später gegen Kanada, als er erneut trifft.',
                    source: 'Bildquelle: AFP'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/2282560992.jpg',
            alt: 'Hervé Renard als neuer Trainer Tunesiens an der Seitenlinie bei der WM 2026.',
            location: 'Trainerwechsel',
            textboxes: [
                {
                    title: 'Wechsel Renard',
                    text: 'Tunesien zog nach dem gescheiterten WM-Auftakt gegen Schweden die Reissleine. Nach der 5:1-Niederlage wurde Trainer Sabri Lamouch per sofort gefeuert und durch Hervé Renard ersetzt. Doch der Wechsel brachte nichts – Tunesien holte sich wenige Tage später gegen Japan die nächste Klatsche.',
                    source: 'Bildquelle: GettyImages'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/2281564826.jpg',
            alt: 'Spieler und Fans von Curaçao feiern bei der WM 2026.',
            location: 'Aussenseiter',
            textboxes: [
                {
                    title: 'Curaçao-Euphorie',
                    text: 'Der Inselstaat ist die kleinste Nation, die sich jemals für eine WM qualifiziert hat. Im WM-Auftakt konnte die Mannschaft einem der Topfavoriten Deutschland sogar ein Tor abluchsen. Auf der ganzen Welt verfallen Fans der Curaçao-Mania.',
                    source: 'Bildquelle: GettyImages'
                }
            ]
        },
        {
            type: 'image',
            src: '/images/fazit-gruppenphase-wm2026.jpg',
            alt: 'Stimmungsbild zum Abschluss der Gruppenphase der Fussball-WM 2026.',
            location: 'Fazit',
            textboxes: [
                {
                    title: 'Die WM ist lanciert',
                    text: '48 Teams, 104 Spiele und vor dem Turnier viele Fragezeichen: Das neue WM-Format wurde kritisch beäugt. Nach der Gruppenphase steht fest: Stoff für Geschichten gab es bereits reichlich. Curaçao sorgte für eines der schönsten Fussballmärchen, Lionel Messi und Cristiano Ronaldo bewiesen einmal mehr ihre Klasse, Norwegen begeisterte auf und neben dem Platz und auch die Schweizer Nati überzeugte mit starken Auftritten. Die Vorrunde bot Überraschungen, Emotionen und jede Menge Gesprächsstoff. Beste Voraussetzungen also für eine K.-o.-Phase, die diese Geschichten weiterschreiben könnte.',
                    source: 'Bildquelle: Freshfocus'
                }
            ]
        }
    ];

    let allTextboxes = [];
    let textboxIndex = 0;
    mediaItems.forEach((item, mediaIndex) => {
        item.textboxes.forEach((textbox) => {
            allTextboxes.push({
                ...textbox,
                mediaIndex,
                location: item.location,
                textboxIndex: textboxIndex++
            });
        });
    });

    const hasContent = allTextboxes.length > 0;

    // Medien-/Logo-Pfade an den Hosting-Basispfad anpassen (lokal '/', auf GitHub Pages '/<repo>/').
    // So bleiben die Pfade in mediaItems einfach als '/images/…' bzw. '/videos/…' eintragbar.
    const BASE = import.meta.env.BASE_URL;
    const asset = (path) => (path ? BASE.replace(/\/$/, '') + (path.startsWith('/') ? path : '/' + path) : path);

    const cloneMediaItem = (item) => ({ ...(item || {}) });

    let currentMediaIndex = 0;
    let preloaderVisible = true;
    let contentOpacity = 0;
    let activeStepIndex = 0;
    let showScrollPrompt = true;
    let isMediaTransitioning = false;
    let activeMediaLayer = 'primary';
    let pendingMediaIndex = null;
    let primaryMediaItem = cloneMediaItem(mediaItems[0]);
    let secondaryMediaItem = cloneMediaItem(mediaItems[0]);
    let primaryVideoElement;
    let secondaryVideoElement;
    let scroller;

    const getMediaForLayer = (layerName) => (layerName === 'primary' ? primaryMediaItem : secondaryMediaItem);
    const setMediaForLayer = (layerName, item) => {
        if (layerName === 'primary') {
            primaryMediaItem = cloneMediaItem(item);
            return;
        }

        secondaryMediaItem = cloneMediaItem(item);
    };

    const preloadImage = (src) =>
        new Promise((resolve) => {
            const image = new Image();
            image.onload = () => resolve();
            image.onerror = () => resolve();
            image.src = src;
        });

    const prepareVideoElement = (videoElement, item) =>
        new Promise((resolve) => {
            if (!videoElement) {
                resolve();
                return;
            }

            const finish = () => {
                videoElement.currentTime = 0;
                resolve();
            };

            if (videoElement.readyState >= 2) {
                finish();
                return;
            }

            videoElement.addEventListener('loadeddata', finish, { once: true });
            videoElement.addEventListener('error', finish, { once: true });
            videoElement.load();
        });

    const prepareLayerMedia = async (layerName, item) => {
        if (!item || !item.type) return;

        if (item.type === 'image') {
            await preloadImage(asset(item.src));
            return;
        }

        const videoElement = layerName === 'primary' ? primaryVideoElement : secondaryVideoElement;
        await prepareVideoElement(videoElement, item);
    };

    const syncVisibleVideoPlayback = () => {
        const visibleVideo = activeMediaLayer === 'primary' ? primaryVideoElement : secondaryVideoElement;
        const hiddenVideo = activeMediaLayer === 'primary' ? secondaryVideoElement : primaryVideoElement;
        const visibleMedia = getMediaForLayer(activeMediaLayer);

        if (hiddenVideo) hiddenVideo.pause();

        if (visibleVideo && visibleMedia.type === 'video') {
            visibleVideo.currentTime = 0;
            visibleVideo.play().catch(() => {});
        }
    };

    const switchMedia = async (nextMediaIndex) => {
        if (nextMediaIndex === currentMediaIndex || nextMediaIndex === pendingMediaIndex) return;

        isMediaTransitioning = true;
        pendingMediaIndex = nextMediaIndex;

        const nextLayer = activeMediaLayer === 'primary' ? 'secondary' : 'primary';
        const nextItem = mediaItems[nextMediaIndex];

        setMediaForLayer(nextLayer, nextItem);

        await tick();
        await prepareLayerMedia(nextLayer, nextItem);

        if (pendingMediaIndex !== nextMediaIndex) return;

        activeMediaLayer = nextLayer;
        currentMediaIndex = nextMediaIndex;
        pendingMediaIndex = null;
        isMediaTransitioning = false;
        syncVisibleVideoPlayback();
    };

    // Vollbild: nutzt die Fullscreen-API (funktioniert im iframe dank allow="fullscreen").
    let isFullscreen = false;
    const toggleFullscreen = () => {
        const root = document.documentElement;
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            (document.exitFullscreen || document.webkitExitFullscreen)?.call(document);
        } else {
            (root.requestFullscreen || root.webkitRequestFullscreen)?.call(root);
        }
    };

    onMount(() => {
        const initScrollama = () => {
            if (typeof window.scrollama === 'undefined') {
                setTimeout(initScrollama, 100);
                return;
            }

            scroller = window.scrollama();

            scroller
                .setup({
                    step: '.step',
                    offset: 0.5,
                    debug: false
                })
                .onStepEnter((response) => {
                    activeStepIndex = response.index;
                    showScrollPrompt = response.index === 0;
                    const textbox = allTextboxes[response.index];

                    if (textbox.mediaIndex !== currentMediaIndex) {
                        switchMedia(textbox.mediaIndex);
                    } else {
                        syncVisibleVideoPlayback();
                    }
                });
        };

        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        setVh();
        window.addEventListener('resize', setVh);

        const onFsChange = () => {
            isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
            setVh();
            if (scroller) scroller.resize();
        };
        document.addEventListener('fullscreenchange', onFsChange);
        document.addEventListener('webkitfullscreenchange', onFsChange);

        const handleResize = () => {
            if (scroller) scroller.resize();
        };

        if (hasContent) {
            initScrollama();
            window.addEventListener('resize', handleResize);
            prepareLayerMedia('primary', primaryMediaItem).then(syncVisibleVideoPlayback);
        }

        setTimeout(() => {
            preloaderVisible = false;
            setTimeout(() => {
                contentOpacity = 1;
            }, 100);
        }, 300);

        return () => {
            if (scroller) scroller.destroy();
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('resize', setVh);
            document.removeEventListener('fullscreenchange', onFsChange);
            document.removeEventListener('webkitfullscreenchange', onFsChange);
        };
    });
</script>

{#if preloaderVisible}
    <div class="preloader">
        <img class="preloader-logo" src={asset('/images/logo-20min.png')} alt="20 Minuten" />
    </div>
{/if}

<div class="content" style="opacity: {contentOpacity};">
    {#if hasContent}
        <section id="scrolly-media" class="scrolly-container">
            <div class="sticky-thing">
                <div class:is-transitioning={isMediaTransitioning} class="media-frame">
                    <div class="media-stack">
                        <div class="media-layer" class:is-visible={activeMediaLayer === 'primary'}>
                            {#if primaryMediaItem.type === 'image'}
                                <img class="media-background" src={asset(primaryMediaItem.src)} alt={primaryMediaItem.alt} />
                            {:else}
                                <video
                                    bind:this={primaryVideoElement}
                                    class="media-background"
                                    src={asset(primaryMediaItem.src)}
                                    poster={asset(primaryMediaItem.poster)}
                                    muted
                                    loop
                                    playsinline
                                    preload="auto"
                                ></video>
                            {/if}
                        </div>

                        <div class="media-layer" class:is-visible={activeMediaLayer === 'secondary'}>
                            {#if secondaryMediaItem.type === 'image'}
                                <img class="media-background" src={asset(secondaryMediaItem.src)} alt={secondaryMediaItem.alt} />
                            {:else}
                                <video
                                    bind:this={secondaryVideoElement}
                                    class="media-background"
                                    src={asset(secondaryMediaItem.src)}
                                    poster={asset(secondaryMediaItem.poster)}
                                    muted
                                    loop
                                    playsinline
                                    preload="auto"
                                ></video>
                            {/if}
                        </div>
                    </div>

                    <!-- Scrims für Lesbarkeit der Overlays über beliebigen Medien -->
                    <div class="scrim scrim-top" aria-hidden="true"></div>
                    <div class="scrim scrim-bottom" aria-hidden="true"></div>

                    <!-- Orientierung: Step-Zähler + Kapitel -->
                    <div class="media-meta">
                        <span class="meta-step">{activeStepIndex + 1} / {allTextboxes.length}</span>
                        {#if allTextboxes[activeStepIndex].location}
                            <span class="meta-location">{allTextboxes[activeStepIndex].location}</span>
                        {/if}
                    </div>

                    <!-- Marken-Logo (20 Tile) dezent in der Ecke -->
                    <img class="brand-logo" src={asset('/images/logo-20min.png')} alt="20 Minuten" />
                </div>
            </div>

            <div class="steps-container">
                {#each allTextboxes as textbox, index}
                    <div
                        class="step"
                        class:is-active={index === activeStepIndex}
                        class:is-past={index < activeStepIndex}
                        id="step-{index}"
                    >
                        <div class="textbox">
                            {#if textbox.title}
                                <h3 class="slide-title">{@html textbox.title}</h3>
                            {/if}
                            <p class="textbox-body">{textbox.text}</p>
                            {#if textbox.source}
                                <p class="source">{@html textbox.source}</p>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Vollbild-Umschalter (Fullscreen-API) – auf Section-Ebene, damit Klicks nicht von den Steps abgefangen werden -->
            <button
                class="fs-toggle"
                on:click={toggleFullscreen}
                aria-label={isFullscreen ? 'Vollbild beenden' : 'Vollbild'}
            >
                {#if isFullscreen}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span>Schliessen</span>
                {:else}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M9 4H4v5M20 9V4h-5M4 15v5h5M15 20h5v-5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span>Vollbild</span>
                {/if}
            </button>

            {#if showScrollPrompt}
                <div class="banner-wrapper">
                    <div class="scroll-prompt-banner">
                        <span class="prompt-dot"></span>
                        <span>Weiter scrollen</span>
                    </div>
                </div>
            {/if}
        </section>
    {:else}
        <!-- Leerzustand: erscheint, solange mediaItems leer ist -->
        <div class="empty-state">
            <img class="empty-logo" src={asset('/images/logo-20min.png')} alt="20 Minuten" />
            <h1 class="empty-title">WM Gruppenphase – Best Moments</h1>
            <p class="empty-hint">
                Noch keine Inhalte. Lege Bilder/Videos in <code>public/images</code> bzw.
                <code>public/videos</code> ab und ergänze sie in <code>mediaItems</code> in
                <code>App.svelte</code>. Der Scrolly erscheint automatisch, sobald der erste Eintrag da ist.
            </p>
        </div>
    {/if}
</div>

<style>
    @font-face {
        font-family: 'Matter';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('./font/Matter Font/Matter-Light.otf') format('opentype');
    }

    @font-face {
        font-family: 'Matter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./font/Matter Font/Matter-Regular.otf') format('opentype');
    }

    @font-face {
        font-family: 'Matter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./font/Matter Font/Matter-Medium.otf') format('opentype');
    }

    @font-face {
        font-family: 'Matter';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('./font/Matter Font/Matter-SemiBold.otf') format('opentype');
    }

    @font-face {
        font-family: 'Matter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./font/Matter Font/Matter-Bold.otf') format('opentype');
    }

    /* === 20-Minuten Corporate-Design Tokens (offizielle Werte aus den Brand Guidelines) === */
    :global(:root) {
        --c-blue: #2659ff; /* Hero / Akzent / aktiver Zustand */
        --c-mid-blue: #0d2880; /* Flächentiefe / Surface */
        --c-dark-blue: #07184d; /* Seiten-Hintergrund */
        --c-ink-deep: #050f31; /* Basis hinter Cover-Medien */
        --c-ice: #edf4ff; /* Cool Grey / Ice – helle Schrift, heller Banner */
        --c-white: #ffffff;
        --c-cool-blue: #00d0ff; /* Akzent, sparsam */
        --c-red: #ca0016; /* nur Breaking News */

        /* Semantische z-index-Skala */
        --z-media: 0;
        --z-steps: 1;
        --z-overlay: 2;
        --z-prompt: 3;
        --z-controls: 4;
        --z-preloader: 50;

        /* Motion */
        --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
    }

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(body, html) {
        height: 100%;
        font-family: 'Matter', system-ui, sans-serif;
        background-color: var(--c-dark-blue);
        /* Scrollbar ausblenden (Scrollen bleibt möglich) – für immersives Embedding */
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* alte Edge/IE */
    }

    :global(html::-webkit-scrollbar),
    :global(body::-webkit-scrollbar) {
        width: 0;
        height: 0;
        display: none; /* Chrome, Safari, neue Edge */
    }

    .preloader {
        position: fixed;
        inset: 0;
        background-color: var(--c-dark-blue);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: var(--z-preloader);
        transition: opacity 0.5s ease-out;
    }

    .preloader-logo {
        width: 72px;
        height: auto;
        animation: logoPulse 1.6s var(--ease-out) infinite;
    }

    @keyframes logoPulse {
        0%,
        100% {
            opacity: 0.55;
            transform: scale(0.96);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .content {
        transition: opacity 0.35s ease;
    }

    #scrolly-media,
    .scrolly-container {
        position: relative;
    }

    .sticky-thing {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        margin-top: -80vh;
        overflow: hidden;
        z-index: var(--z-media);
    }

    .media-frame {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .media-stack {
        position: absolute;
        inset: 0;
        background: var(--c-ink-deep);
    }

    .media-layer {
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity 0.5s var(--ease-out);
    }

    .media-layer.is-visible {
        opacity: 1;
    }

    .media-background {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }

    /* Scrims: dezenter Verlauf oben/unten, damit Overlays über jedem Motiv lesbar bleiben */
    .scrim {
        position: absolute;
        left: 0;
        right: 0;
        z-index: var(--z-overlay);
        pointer-events: none;
    }

    .scrim-top {
        top: 0;
        height: 28%;
        background: linear-gradient(to bottom, rgba(5, 15, 49, 0.55), rgba(5, 15, 49, 0));
    }

    .scrim-bottom {
        bottom: 0;
        height: 26%;
        background: linear-gradient(to top, rgba(5, 15, 49, 0.5), rgba(5, 15, 49, 0));
    }

    /* === Meta-Badge: Step-Zähler + Kapitel === */
    .media-meta {
        position: absolute;
        top: 18px;
        left: 18px;
        z-index: var(--z-overlay);
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }

    .meta-step {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 6px 10px;
        border-radius: 8px;
        background: var(--c-blue);
        color: var(--c-white);
        font-size: 0.82rem;
        font-weight: 600;
        line-height: 1;
        letter-spacing: 0.01em;
    }

    .meta-location {
        color: var(--c-white);
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1;
        text-shadow: 0 1px 8px rgba(5, 15, 49, 0.6);
    }

    /* === Marken-Logo === */
    .brand-logo {
        position: absolute;
        right: 18px;
        bottom: 16px;
        z-index: var(--z-overlay);
        width: 34px;
        height: auto;
        opacity: 0.92;
        filter: drop-shadow(0 2px 10px rgba(5, 15, 49, 0.5));
    }

    /* === Vollbild-Button === */
    .fs-toggle {
        position: fixed; /* am Viewport-Rand, über den Steps – sonst fangen diese den Klick ab */
        top: 18px;
        right: 18px;
        z-index: var(--z-controls);
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 8px 12px;
        border: 1px solid rgba(237, 244, 255, 0.22);
        border-radius: 8px;
        background: var(--c-mid-blue);
        color: var(--c-white);
        font-family: inherit;
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 1;
        cursor: pointer;
        -webkit-appearance: none;
        appearance: none;
        transition:
            background-color 0.25s var(--ease-out),
            border-color 0.25s var(--ease-out);
    }

    .fs-toggle:hover {
        background: var(--c-blue);
        border-color: var(--c-blue);
    }

    .fs-toggle svg {
        width: 16px;
        height: 16px;
        display: block;
    }

    /* === Steps / Textboxen === */
    .steps-container {
        position: relative;
        z-index: var(--z-steps);
    }

    .step {
        min-height: 100vh;
        min-height: calc(var(--vh, 1vh) * 100);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .textbox {
        background: rgba(7, 24, 77, 0.92);
        border: 1px solid rgba(237, 244, 255, 0.14);
        color: var(--c-white);
        padding: 1.7rem;
        border-radius: 14px;
        max-width: 600px;
        line-height: 1.6;
        font-size: 1.05rem;
        box-shadow: 0 14px 38px rgba(5, 15, 49, 0.4);
        opacity: 0.94;
        transform: translateY(12px);
        transition:
            opacity 0.4s var(--ease-out),
            transform 0.4s var(--ease-out),
            border-color 0.4s var(--ease-out),
            box-shadow 0.4s var(--ease-out),
            background-color 0.4s var(--ease-out);
    }

    .step.is-past .textbox {
        opacity: 0.28;
        transform: translateY(-10px);
        box-shadow: 0 8px 20px rgba(5, 15, 49, 0.24);
    }

    .step.is-active .textbox {
        opacity: 1;
        transform: translateY(0);
        background: rgba(7, 24, 77, 0.96);
        border-color: rgba(38, 89, 255, 0.55);
        box-shadow: 0 18px 46px rgba(5, 15, 49, 0.5);
    }

    .slide-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: var(--c-white);
        line-height: 1.15;
        text-wrap: balance;
    }

    /* Wort-Highlight im CD-Blau (z. B. <span class="hl">Wort</span> im Titel) */
    .slide-title :global(.hl) {
        background: var(--c-blue);
        color: var(--c-white);
        padding: 0 0.14em;
        border-radius: 4px;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    .textbox-body {
        margin-bottom: 0;
        max-width: 36ch;
        color: rgba(237, 244, 255, 0.94);
        text-wrap: pretty;
    }

    .source {
        margin-top: 1rem;
        padding-top: 0.875rem;
        border-top: 1px solid rgba(237, 244, 255, 0.16);
        font-size: 0.8rem;
        font-weight: 300;
        line-height: 1.5;
        color: rgba(237, 244, 255, 0.72);
    }

    .source :global(a) {
        color: var(--c-cool-blue);
    }

    /* === Scroll-Prompt === */
    .banner-wrapper {
        position: fixed; /* am Viewport-Rand, nicht am Ende des hohen Scroll-Containers */
        width: 100%;
        z-index: var(--z-prompt);
        bottom: 16px;
        left: 0;
        right: 0;
        text-align: center;
        pointer-events: none;
    }

    .scroll-prompt-banner {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 12px 22px;
        background-color: var(--c-ice);
        border-radius: 50px;
        box-shadow: 0 10px 28px rgba(5, 15, 49, 0.28);
        animation: promptFloat 1.8s ease-in-out infinite;
    }

    .prompt-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: var(--c-blue);
    }

    .scroll-prompt-banner span {
        color: var(--c-mid-blue);
        font-size: 0.95rem;
        font-weight: 600;
    }

    @keyframes promptFloat {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-4px);
        }
    }

    /* === Leerzustand === */
    .empty-state {
        min-height: 100vh;
        min-height: calc(var(--vh, 1vh) * 100);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1.25rem;
        padding: 2rem;
        color: var(--c-white);
    }

    .empty-logo {
        width: 64px;
        height: auto;
        opacity: 0.95;
    }

    .empty-title {
        font-size: clamp(1.5rem, 4vw, 2.25rem);
        font-weight: 600;
        line-height: 1.15;
        text-wrap: balance;
    }

    .empty-hint {
        max-width: 52ch;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: rgba(237, 244, 255, 0.82);
        text-wrap: pretty;
    }

    .empty-hint code {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.85em;
        padding: 0.1em 0.4em;
        border-radius: 5px;
        background: rgba(38, 89, 255, 0.18);
        color: var(--c-ice);
    }

    @media (max-width: 768px) {
        .step {
            padding: 15px;
        }

        .textbox {
            padding: 20px;
            max-width: 90%;
            font-size: 16px;
            line-height: 1.58;
        }

        .slide-title {
            font-size: 1.3rem;
        }

        .textbox-body {
            max-width: none;
        }

        .media-meta {
            top: 14px;
            left: 14px;
        }

        .fs-toggle {
            top: 14px;
            right: 14px;
        }
    }

    @media (max-width: 480px) {
        .textbox {
            padding: 16px;
            font-size: 16px;
            max-width: 95%;
        }

        .slide-title {
            font-size: 1.2rem;
        }

        .brand-logo {
            width: 30px;
        }

        .fs-toggle span {
            display: none; /* nur Icon auf sehr kleinen Screens */
        }

        .fs-toggle {
            padding: 8px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .content,
        .media-frame,
        .media-layer,
        .textbox,
        .scroll-prompt-banner,
        .preloader-logo {
            animation: none !important;
            transition: none !important;
        }
    }
</style>
