<script>
    import { createEventDispatcher } from 'svelte';
    

    let { hint, answer } = $props();


    let count = $state(0);
    let success = $state(false);
    let failure = $state(false);
    let value = $state('');


    const dispatch = createEventDispatcher();


    function handleInputChange() {
        if (value.toLowerCase() === answer.toLowerCase()) {
            success = true;
            failure = false;
            dispatch('correct');  
        } else if (success) {
            failure = true;
            success = false;
            dispatch('wrong'); 
        }
        else {
            failure = true;
            success = false;
            count += 1;
        }
    }
</script>

<div class="inline-block">
    <form>
        <!-- Success case -->
        {#if success}
        <div>
            <input 
                type="text" 
                id="success" 
                class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-green-500" 
                bind:value 
                onchange={handleInputChange}
            >
        </div>
        {/if}

        <!-- Default state before success or failure -->
        {#if !success && !failure}
        <div>
            <input 
                type="text" 
                id="error" 
                class="bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-gray-500 block p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" 
                bind:value 
                onchange={handleInputChange}
            >
        </div>
        {/if}

        <!-- Failure case -->
        {#if failure}
        <div>
            <input 
                type="text" 
                id="error" 
                class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" 
                bind:value 
                onchange={handleInputChange}
            >
            {#if count > 3}
            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">Hint:</span> {hint}
            </p>
            {/if}
            {#if count > 6}
            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">Hint:</span> het antwoord is: {answer}
            </p>
            {/if}
        </div>
        {/if}
    </form>
</div>
