<script>
    import Waldo from "./waldo.svelte";
    import Modal from "./modal.svelte";
    import { onMount } from "svelte";
    let showModal = $state(false);
    onMount(() => {
        showModal = true
    })
</script>

<button onclick={() => (showModal = true)}> show modal </button>

<Modal bind:showModal>
    Vind waldo!!!
    <img class="h-64" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fvsbattles%2Fimages%2Fb%2Fb6%2F9fsGLcZ.png%2Frevision%2Flatest%3Fcb%3D20171110160025&f=1&nofb=1&ipt=bc6ff4a7776df596732358236535ceec0d4b54222aa0c13692c8985239c4f6b8&ipo=images" alt="waldo"/>
</Modal>


<Waldo/>