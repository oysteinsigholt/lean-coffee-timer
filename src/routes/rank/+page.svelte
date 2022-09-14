<script lang="ts">
	import { rankDuration } from '$lib/stores';
	import CountdownButton from '$lib/CountdownButton.svelte';

	const timeout = new Date();
	timeout.setSeconds(timeout.getSeconds() + $rankDuration);
</script>

<h2 class="text-4xl font-extrabold">📈 Rank Topics</h2>

<small class="font-semibold text-gray-500">{$rankDuration / 60} minutes</small>

<p class="my-4 text-lg text-gray-500">
	Rank the sticky notes by number of votes. Move the highest voted sticky note to the
	<i>discussing</i>
	column in preparation for the next phase.
</p>

<CountdownButton {timeout} href="/lean-coffee-timer/discussion">Next: Discussion</CountdownButton>
