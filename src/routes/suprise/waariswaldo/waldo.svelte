<script>
    import { chal } from "$lib/store.js";

    import { elasticOut } from 'svelte/easing';
    let caught = $state(false)

    function spin(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`;
			}
		};
	}
</script>

<div>
 
<img class="max-w-max max-h-max" style="position: absolute; left:0px; top:100px;" alt="wheres waldo?" src="https://c.wallhere.com/photos/7d/9d/Waldo_cartoon_Where's_Wally-1400885.jpg!d"/>
<button aria-label="waldo" class="py-5 hover:bg-red-300/70 text-blue-600/0" style="position: absolute; left: 970px; top:480px;" onclick={() => {$chal.chal2 = true}}>1231</button>
{#if $chal.chal2}
<div class="text-9xl absolute bottom-1/2 left-1/3" style="margin:auto" in:spin={{ duration: 8000 }}>NIICCCEE!!!</div>
{/if}
</div>