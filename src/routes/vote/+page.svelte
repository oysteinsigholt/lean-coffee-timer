<script lang="ts">
	import { voteDuration } from '$lib/stores';
	import CountdownButton from '$lib/CountdownButton.svelte';

	const timeout = new Date();
	timeout.setSeconds(timeout.getSeconds() + $voteDuration);
</script>

<h2 class="text-4xl font-extrabold">🗳️ Vote for Topics</h2>

<small class="font-semibold text-gray-500">{$voteDuration / 60} minutes</small>

<p class="my-4 text-lg text-gray-500">
	Each participant gets three dot votes. Place your votes onto the sticky notes that you would like
	to discuss. You may spend multiple votes on the same topic.
</p>

<CountdownButton {timeout} href="/rank">Next: Ranking</CountdownButton>
