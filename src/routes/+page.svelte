<script>
    import Navbar from "./navbar.svelte";
    import Footer from "./footer.svelte";


    const pages = [{
        href: "./teamchecker",
        title: "Team checker"
    },
    {
        href: "./catchthebutton",
        title: "Catch the target!"
    },
    {
        href: "./chessbase-lichess-converter",
        title: "Chessbase pgn to lichess"
    },]

</script>


<div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <!--Left Col-->
    <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
      <h1 class="my-4 text-3xl md:text-5xl text-grey opacity-75 font-bold leading-tight text-center md:text-left">
        Hello! Find here all sort of
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
          Chess tools
        </span>
        and other wacky stuff
      </h1>
      <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
      </p>

    
    </div>
    <!--Right col-->
    <div class="grid grid-rows-2 grid-flow-col gap-4">
        
        <span class="text-5xl font-bold">Here are some of my projects!</span>

        <div id="showcase" class="grid grid-rows-2 grid-flow-col gap-4">
            {#each pages as page}
            <div class="animate-spin duration-700 ease-in-out hover:rotate-6 text-3xl md:text-5xl text-grey bg-gradient-to-r from-green-400 to-pink-500 rounded hover:scale-105 hover:from-green-500 hover:to-pink-600"><a href={page.href}>{page.title}</a></div>
            {/each}


            
        </div>
    </div>
</div>
