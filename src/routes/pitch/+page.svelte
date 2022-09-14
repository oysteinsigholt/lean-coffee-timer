<script lang="ts">
	import { pitchDuration } from '$lib/stores';
	import CountdownButton from '$lib/CountdownButton.svelte';

	const timeout = new Date();
	timeout.setSeconds(timeout.getSeconds() + $pitchDuration);
</script>

<h2 class="text-4xl font-extrabold">💬 Pitch Your Topics</h2>

<small class="font-semibold text-gray-500">{$pitchDuration / 60} minutes</small>

<p class="my-4 text-lg text-gray-500">
	Introduce your topics to the group with a sentence or two per sticky note. Place them in the <i
		>to discuss</i
	> column.
</p>

<CountdownButton {timeout} href="/lean-coffee-timer/vote">Next: Vote for Topics</CountdownButton>
