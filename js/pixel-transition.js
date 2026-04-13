/* ========================================
   Pixel Transition — Core JS
   Uses DOM pixel-cell grid + staggered CSS animation.
   No external lib required for enter transition.

   Usage:
     pixelEnter(overlayBg)  — animate pixels IN (reveal page)
   ======================================== */

(function () {
    const CONTAINER_ID = 'pixel-landing';

    /* ── DOM helpers ── */
    function createOverlay() {
        const old = document.getElementById(CONTAINER_ID);
        if (old) old.remove();
        const div = document.createElement('div');
        div.id = CONTAINER_ID;
        document.body.appendChild(div);
        return div;
    }

    /* ── Grid config ── */
    const GRID = 14; // grid cells per row (14×14 = 196 cells)

    /* ── pixelEnter: dissolve overlay away → reveal page ── */
    function pixelEnter(overlayBg) {
        const overlay = createOverlay();
        overlay.style.background = overlayBg || '#0a0a0a';

        const W = window.innerWidth;
        const H = window.innerHeight;
        const cw = W / GRID;
        const ch = H / GRID;

        const cells = [];
        for (let row = 0; row < GRID; row++) {
            for (let col = 0; col < GRID; col++) {
                const cell = document.createElement('div');
                cell.className = 'pixel-cell';
                cell.style.cssText = [
                    `width:${cw}px`,
                    `height:${ch}px`,
                    `left:${col * cw}px`,
                    `top:${row * ch}px`,
                    `background:${overlayBg || '#0a0a0a'}`,
                    `transform-origin:${col * cw + cw / 2}px ${row * ch + ch / 2}px`,
                ].join(';');
                overlay.appendChild(cell);
                cells.push(cell);
            }
        }

        /* stagger delay based on distance from center */
        const cx = GRID / 2, cy = GRID / 2;
        cells.forEach((cell, i) => {
            const r = Math.floor(i / GRID), c = i % GRID;
            const dist = Math.hypot(r - cy, c - cx);
            const maxDist = Math.hypot(cx, cy);
            const delay = (dist / maxDist) * 500; // ms, up to 500ms stagger
            cell.style.transition = `transform 0.5s cubic-bezier(0.5,0,0.8,1) ${delay}ms, opacity 0.5s ease ${delay}ms`;
            cell.style.opacity = '1';
            /* start: scale(1) */
            requestAnimationFrame(() => {
                cell.style.transform = 'scale(0)';
                cell.style.opacity = '0';
            });
        });

        return new Promise(resolve => {
            /* total animation = 500ms + max stagger 500ms + buffer */
            const total = 500 + 500 + 100;
            setTimeout(() => {
                overlay.remove();
                resolve();
            }, total);
        });
    }

    /* ── expose global ── */
    window.pixelEnter = pixelEnter;
})();
