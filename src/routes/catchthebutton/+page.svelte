<script>
    let w = $state();
    let h = $state();
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
<div bind:clientHeight={h} bind:clientWidth={w} class="h-svh w-full" style="background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2315758.jpg&f=1&nofb=1&ipt=4012d3d57cbbd7951c4fec8b5b019f277d8101d8493e017213963a227296d4b4&ipo=images)">
    {#if caught}
    <div class="text-9xl absolute bottom-1/2 left-1/3" style="margin:auto" in:spin={{ duration: 8000 }}>YOU WIN!!!</div>
    {/if}
<button style="position: relative; left: 20px; top: 40px;" aria-label="target" onclick={() => caught = true} onpointerentercapture={(e) => {
   setTimeout(() => {
    e.target.style.left=`${Math.random()*w}px`;
    e.target.style.top=`${Math.random()*h}px`;
   }, 200); }}><img class="object-scale-down h-10 w-10" alt="target" src={caught ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F75%2F71%2Fa-sad-crying-emoticon-smiley-face-character-vector-6147571.jpg&f=1&nofb=1&ipt=b0efa4c6206538f439550903e6180efbb2a6aa3b93e5a8409300f0d6d9dda124&ipo=images" : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YzTpUZF_qVIVnhjtS4XOygHaHa%26pid%3DApi&f=1&ipt=0e4dee67442a4ec865673100a8414559e584de6dd4f9b072a141f63797ba99f0&ipo=images"}/></button>
</div>