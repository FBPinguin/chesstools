<script>
    import { chal } from "$lib/store.js";
    import { send, receive } from './transition.js';
    import { fly } from 'svelte/transition'
 
    let items1 = $state(['Beker 1']);
    let items2 = $state([ 'Beker 2']);
    let selected = $state(['Beker 3']);

    // Function to shuffle all items across the three lists

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



    // Function to shuffle all items across the three lists
    function shuffle() {
        if (Math.random() < 0.5) {
        const temp = items1
        items1 = selected
        selected = temp
        } else {
            const temp = items2
            items2 = selected
            selected = temp
        }
    }

    let duration = 100
    let show = $state(false)
    let round = $state(1)
    let correctNumber = $state(1)
    let correct = '';
    let guess = $state(false);
    let guessing = $state(false);
    let fail = $state(false);

    const startRound = async () => {
        fail = false
        correctNumber = Math.floor(Math.random()*3)
        correct = `Beker ${correctNumber+1}`;
        show = true
        await new Promise(r => setTimeout(r, 5000))
        show = false

        await new Promise(r => setTimeout(r, 600));

        for (let i = 0; i < 20; i++) {
            shuffle()
            await new Promise(r => setTimeout(r, 450));
        }
        guessing = true
    }
    $inspect(guess)
</script>



<!-- Shuffle Button -->
<button onclick={startRound}>Start</button>
{#if show}<span class="px-40">De goede beker is {correctNumber+1}!!!! We beginnen in 5 seconde :)</span>{/if}
{#if $chal.chal3}
<div class="text-9xl absolute bottom-1/2 left-1/3" style="margin:auto" in:spin={{ duration: 8000 }}>Success</div>
{/if}
{#if fail}
<div class="text-9xl absolute bottom-1/2 left-1/3" style="margin:auto" in:fly={{ duration: 8000 }}>Womp womp, fail</div>
{/if}
<!-- Lists -->
<div class="container">
    <!-- First list -->
    <div>
        {#each items1 as item (item)}
            <button
                class="item"
                transition:send={{ key: item, duration }}
                onclick={() => {
                    //items2 = [...items2, item];
                    //items1 = items1.filter(i => i !== item);
                    if (item === correct && guessing) {
                        $chal.chal3 = true;
                        
                    } else if (guessing) {
                        fail = true
                    } guessing = false;
                }}
            >
                <img class="max-h-40" alt="cup" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1403764.png&f=1&nofb=1&ipt=9c65a797933330ae8c7cf350efd5840538c2969e4e0d7492abd4af8fc7f0b227&ipo=images">
                {#if show || fail}{item}{/if}
            </button>
        {/each}
    </div>

    <!-- Second list -->
    <div>
        {#each items2 as item (item)}
            <button
                class="item"
                transition:send={{ key: item, duration }}
                onclick={() => {
                    //items1 = [...items1, item];
                    //items2 = items2.filter(i => i !== item);
                    if (item === correct && guessing) {
                        $chal.chal3 = true;
                        
                    } else if (guessing) {
                        fail = true
                    } guessing = false;
                }}
            >
            <img class="max-h-40" alt="cup" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1403764.png&f=1&nofb=1&ipt=9c65a797933330ae8c7cf350efd5840538c2969e4e0d7492abd4af8fc7f0b227&ipo=images">
                
            {#if show || fail}{item}{/if}
            </button>
        {/each}
    </div>

    <!-- Selected list -->
    <div>
        {#each selected as item (item)}
            <button
                class="item"
                transition:receive={{ key: item, duration }}
                onclick={() => {
                    // if (items1.length <= items2.length) {
                    //     items1 = [...items1, item];
                    // } else {
                    //     items2 = [...items2, item];
                    // }
                    // selected = selected.filter(i => i !== item);
                    if (item === correct && guessing) {
                        $chal.chal3 = true;
                        
                    } else if (guessing) {
                        fail = true
                    } guessing = false;
                }}
            >
            <img class="max-h-40" alt="cup" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1403764.png&f=1&nofb=1&ipt=9c65a797933330ae8c7cf350efd5840538c2969e4e0d7492abd4af8fc7f0b227&ipo=images">
            {#if show || fail}{item}{/if}
            </button>
        {/each}
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }



    .item {
        padding: 0.5rem;
        margin: 0.5rem 0;
        background-color: lightblue;
        cursor: pointer;
        border-radius: 4px;
        text-align: center;
    }

    button {
        margin: 1rem 0;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        background-color: darkblue;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: darkcyan;
    }
</style>