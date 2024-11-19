
<script>
    import Question from "./question.svelte";
    import { chal } from "$lib/store.js";


    import { elasticOut } from 'svelte/easing';
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

    let correctAnswers = $state(0)
    $effect(() => {
        if (correctAnswers === 4) {
            $chal.chal4 = true;
        }
    })
</script>


{#if correctAnswers === 4}

<div class="text-9xl absolute bottom-1/2 left-1/3" style="margin:auto" in:spin={{ duration: 8000 }}>NIICCCEE!!!</div>
{/if}
{correctAnswers}

<p>Lieve Joris, <Question hint={"de man met de meiter"} answer={"sinterklaas"} on:correct={() => {correctAnswers +=1 }} on:wrong={() => {correctAnswers -=1 }}/> is hier,<br />Met een gedicht vol plezier.<br />Ik hoorde dat je houdt van wandelen, zo fijn,<br />Door bossen en velden, in zonneschijn.</p>
<p>&nbsp;</p>
<p>De <Question hint={"wat is buiten :)"} answer={"natuur"} on:correct={() => {correctAnswers +=1 }} on:wrong={() => {correctAnswers -=1 }}/> is jouw favoriete plek,<br />Met bomen, bloemen, een rustig trek.<br />En tijdens je wandelingen, heel bedaard,<br />Geniet je van alles daar met je goede kameraad.</p>
<p>&nbsp;</p>
<p>Ook schaken doe je met veel plezier,<br />Strategisch denken, keer op keer.<br />Je slaat je zetten met bedachtzaamheid,<br />Een meester in het denkwerk, altijd bereid.</p>
<p>&nbsp;</p>
<p><Question hint={"Ze praten je na :)"} answer={"papegaaien"} on:correct={() => {correctAnswers +=1 }} on:wrong={() => {correctAnswers -=1 }}/> maken je dag compleet,<br />Met hun gekwetter, vrolijk en heet.<br />Kleurrijk en luid, een feest om te zien,<br />Ze vliegen rond, als een vrolijk schijn.</p>
<p>&nbsp;</p>
<p>Sinterklaas weet precies wat jij graag doet,<br />Daarom dit cadeau, dat past bij jouw zoet.<br />Het is iets voor de natuur, of voor je spel,<br />Dus open het snel, en wees niet te fel!</p>
<p>&nbsp;</p>
<p>Veel plezier met alles wat je doet,<br />En Sinterklaas wenst je geluk en moed!</p>

Laatste vraag, van wie was deze suprise? <Question hint={"man-o-man wat een triest gebeuren"} answer={"floris"} on:correct={() => {correctAnswers +=1 }} on:wrong={() => {correctAnswers -=1 }}/>