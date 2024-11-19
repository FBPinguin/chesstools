import { crossfade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

export const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 2000),
    fallback(node, { from, to }) {
        // Calculate the position differences (dx, dy)
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;

        const dx = (from?.left || 0) - (to?.left || 0);
        const dy = (from?.top || 0) - (to?.top || 0);

        return {
            duration: 600,
            easing: quintOut,
            css: (t) => `
                transform: ${transform} translate(${t * dx}px, ${t * dy}px);
                opacity: ${t};
            `,
        };
    },
});
