<script>
	import Navbar from "./navbar.svelte";
	import Footer from "./footer.svelte";
	import '../app.css';
	let { children } = $props();
</script>


<div class="flex flex-col h-screen justify-between">
	<Navbar />
	<main>
	{@render children()}
	</main>
	<Footer />
</div>