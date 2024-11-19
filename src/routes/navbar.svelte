<script>
    const pages = [{
        href: "/teamchecker",
        title: "Team checker"
    },
    {
        href: "/catchthebutton",
        title: "Catch the target!"
    },
    {
        href: "/chessbase-lichess-converter",
        title: "Chessbase pgn to lichess"
    },]
</script>

<header class="header flex items-center  px-4 py-4">
    <span>
        <a href="/" class="text-2xl font-semibold whitespace-nowrap flex">
            <img class="h-10" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2Fpi5%2FxL8%2Fpi5xL85LT.png&f=1&nofb=1&ipt=95bd8499ec26e46be6d8668e5b2565a7e0fcec35c932b93eafd7f52a5ef5c831&ipo=images" alt="penguin pfp"/>
            FBPenguin
        </a>
    </span>
    <nav class="nav-items justify-between text-gray-500 order-3 w-full md:w-auto md:order-2 flex">
        {#each pages as page}
            <a class="md:mx-20  p-2 border-double border-4 border-red-500 bg-red-300 rounded-lg hover:bg-red-200" href={page.href}>{page.title}</a>
        {/each}
            <a class="md:mx-20  p-2 text-transparent hover:text-black" href={"/suprise"}>Surpise!</a>
    </nav>
</header>