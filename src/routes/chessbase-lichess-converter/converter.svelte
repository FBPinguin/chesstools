<script>
    let chessbasepgn = $state('');
    let lichesspgn = $state('')


    const convertertolichess = (text) => {
        const regex = /{\n*?(?<time>\d+)\n*?\s*\n*?(?<comment>[^}]*)\n*?}/ig;
        
        let match;
        while ((match = regex.exec(text)) !== null) {
            let time = new Date(parseInt(match.groups.time) * 1000).toISOString().slice(11, 19);
            time = ` {[%clk ${time}]}`;
            const returnstring = time + (match.groups.comment ? ` { ${match.groups.comment} }` : '');
            text = text.replace(match[0], returnstring)
        }
        lichesspgn = text;

    };

    const convertertochessbase = (text) => {
        //const regex = /(?:{\[%clk (?<time>[\d:]+)\]}(?: { (?<comment>\D+)})?)/ig;
        const regex = /\{\[%clk (?<time>\d{2}:\d{2}:\d{2})\]\}/ig;
        console.log(1)
        let match;
        while ((match = regex.exec(text)) !== null) {
            console.log(match);
            const timeString = match.groups.time;
            const arr = timeString.split(":");
            const seconds = arr[0]*3600+arr[1]*60+(+arr[2]);
            const returnstring = `{${seconds} ${match.groups.comment ?  match.groups.comment : ''}}`
            console.log(match.groups.comment)
            console.log(match[0])
            console.log(returnstring)
            text = text.replace(match[0], returnstring)
            console.log(text)
        }
        chessbasepgn = text;

    };



</script>

<span class="grid grid-cols-3">
<span>
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chessbase</label>
<textarea id="message" rows="4" class="p-2.5 w-full h-screen text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PGN" bind:value={chessbasepgn} onchange={() => {convertertolichess(chessbasepgn)}}></textarea>
</span>

<span class="place-self-center grid grid-rows-2">
<p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pl-4"><strong>This is a converter for Chessbase PGN to lichess PGN.</strong> Because lichess uses a different (better) PGN format than chessbase the time you can add in chessbase doesnt get added in lichess. Therefore this converter! <span class="italic">ps. the converter from lichess to chessbase is currently broken :/</span></p>
<button id="convert-button" class="rounded-full bg-blue-200 place-self-center p-4" aria-label="switch"><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5.65681 7.75728C5.26629 7.36675 4.63312 7.36675 4.2426 7.75728L1.41426 10.5857C0.633215 11.3667 0.633121 12.6331 1.41417 13.4141L4.24269 16.2425C4.63321 16.633 5.26638 16.633 5.6569 16.2425C6.04743 15.852 6.04743 15.2188 5.6569 14.8283L3.82849 12.9999L17.9998 12.9999L18.0015 12.9999H20.1714L18.3429 14.8283C17.9524 15.2188 17.9524 15.852 18.3429 16.2425C18.7335 16.633 19.3666 16.633 19.7572 16.2425L22.5856 13.4141C23.3666 12.633 23.3668 11.3667 22.5857 10.5857L19.7573 7.75725C19.3668 7.36672 18.7336 7.36672 18.3431 7.75725C17.9526 8.14777 17.9526 8.78094 18.3431 9.17146L20.1715 10.9999L3.82842 10.9999L5.65681 9.17149C6.04734 8.78097 6.04734 8.1478 5.65681 7.75728Z" fill="#0F0F0F"/>
    </svg></button>
</span>
<span>
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lichess</label>
<textarea id="message" rows="4" class="p-2.5 w-full h-screen text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PGN" bind:value={lichesspgn} onchange={() => {convertertochessbase(lichesspgn)}}></textarea>
</span>
</span>