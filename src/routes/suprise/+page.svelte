<script>
    import { chal } from "$lib/store.js";
    import img1 from "$lib/suprise/1.png"
    import img2 from "$lib/suprise/2.png"
    import img3 from "$lib/suprise/3.png"
    import img4 from "$lib/suprise/4.png"



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
    import {onMount} from 'svelte';
    let ready = $state(false);
    onMount(() => {ready = true});

</script>



<!-- <button onclick={() => $chal.chal1 = true}>get CHAL1</button>
<button onclick={() => $chal.chal2 = true}>get CHAL2</button>
<button onclick={() => $chal.chal3 = true}>get CHAL3</button>
<button onclick={() => $chal.chal4 = true}>get CHAL4</button>
<button onclick={() => {$chal = {
    chal1: false,
    chal2: false,
    chal3: false,
    chal4: false
}}}>RESET</button> -->


{#if $chal.chal1 && $chal.chal2 && $chal.chal3 && $chal.chal4 && ready}
<div class="text-9xl absolute bottom-1/2 left-1/3" style="margin:auto" in:spin={{ duration: 8000 }}>Super gedaan! ga maar opzoek naar jouw cadeau!!!</div>
{/if}

<div class="grid grid-rows-2 grid-cols-2 gap-0 ">
    <a class={$chal.chal1 ? "justify-self-end select-none" : "justify-self-end blur-3xl select-none"} href="./catchthebutton">
    <img class={$chal.chal1 ? "max-h-96" : "blur-3xl max-h-96"} src={img1} alt="cool person"/>
    </a>
    <a href="./suprise/waariswaldo">
    <img class={$chal.chal2 ? "max-h-96" : "blur-3xl max-h-96"} src={img2} alt="cool person"/>
    </a >
    <a class="justify-self-end" href="./suprise/balletjeballetje">
    <img class={$chal.chal3 ? "max-h-80" : "blur-3xl max-h-80"} src={img3} alt="cool person"/>
    </a>
    <a href="./suprise/quiz">
    <img class={$chal.chal4 ? "max-h-80" : "blur-3xl max-h-80"} src={img4} alt="cool person"/>
    </a>
</div>