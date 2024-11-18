<script>
    import { blur, fly } from 'svelte/transition'

    function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}


    let name = $state("sbo")
    let colorwhite = $state(true);
    let fen = $state("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1")
    let data = $state([]);
    let disabled = $state(false)
    $inspect(data)
</script>



    <div class="container-fluid container border">
        <form onsubmit={async () => {
            data = [];
            disabled = true;
            const response = await fetch('http://192.168.178.10:5000', {
			method: 'POST',
			body: JSON.stringify({
                       team: name,
                        fen: fen,
                        white: !colorwhite 
                    }),
			headers: {
				'Content-Type': 'application/json'
            }});
            data = await response.json()
            disabled = false;
        }}>
            <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Lichess team name:</label>
            <input class={disabled ? "bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"} autocomplete="off"  id="name" placeholder="Name" type="text" {disabled} bind:value={name} required>
        </div>
        <div>
            <label for="fen" class="block mb-2 text-sm font-medium text-gray-900">Position FEN:</label>
            <input class={disabled ? "bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"} autocomplete="off"  id="fen" placeholder="FEN" type="text" {disabled} bind:value={fen} required>
        </div>
        <div class="relative">
            <label for="checkbox" class="block mb-2 text-sm font-medium text-gray-900">Playing with:</label>
            <label class="inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" bind:checked={colorwhite} class="sr-only peer" {disabled}>
                <div class={"relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-black" + (disabled ? " cursor-not-allowed" : "")}></div>
                <span class="ms-3 text-sm font-medium text-gray-900">{colorwhite ? "Black" : "White"}</span>
              </label>
              <button class={disabled ? "absolute right-4 top-4 bg-red text-red-700 font-semibold  py-2 px-4 border border-red-500 cursor-not-allowed rounded" : "absolute right-4 top-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"} type="submit" id="submit-button" {disabled}>Search</button>
        </div>

            
        </form>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Games played</th>
              </tr>
            </thead>
            <tbody id="results">
                {#each data as info,i}
                    <tr in:fly={{ x:200+20*i, duration: 2000+100*i}} out:blur class="odd:bg-white even:bg-gray-50 border-b">  
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{i+1}</th>
                        <td class="px-6 py-4"><a class="text-blue-600 dark:text-blue-500 hover:underline" href={"https://lichess.org/@/" + info.name} target="_blank">{info.name}</a></td>
                        <td class="px-6 py-4">{info.games}</td>
                    </tr>
                {/each}
            </tbody>
          </table>
          {#if disabled}
            <p in:typewriter={{speed: 0.3}}>
                I am loading...
            </p>
          {/if}
    </div>


<style>
    .container {
    max-width: 400px;
    background-color: azure;
}
</style>