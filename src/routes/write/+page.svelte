<script lang="ts">
	import { writeDuration } from '$lib/stores';
	import CountdownButton from '$lib/CountdownButton.svelte';

	const timeout = new Date();
	timeout.setSeconds(timeout.getSeconds() + $writeDuration);
</script>

<h1 class="text-4xl font-extrabold">📝Write Down Topics</h1>

<small class="font-semibold text-gray-500">{$writeDuration / 60} minutes</small>

<p class="my-4 text-lg text-gray-500">
	Write down topics that you would like to discuss, share or ask a question about onto sticky notes
	(one topic per sticky note).
</p>

<CountdownButton {timeout} href="/lean-coffee-timer/pitch">Next: Pitch your topics</CountdownButton>
