<script lang="ts">
	import { breakpointDuration, currentDiscussionRound, numDiscussionRounds } from '$lib/stores';
	import CountdownButton from '$lib/CountdownButton.svelte';

	const timeout = new Date();
	timeout.setSeconds(timeout.getSeconds() + $breakpointDuration);
</script>

<h1 class="text-4xl font-extrabold">
	✋ Breakpoint Vote
	<small class="font-semibold text-gray-500">
		{$currentDiscussionRound} of {$numDiscussionRounds}
	</small>
</h1>

<small class="font-semibold text-gray-500">{$breakpointDuration / 60} minutes</small>

<p class="my-4 text-lg text-gray-500">
	Vote to continue discussing the current topic or move onto the next
</p>

<CountdownButton {timeout} href="/discussion">Next: Discussion</CountdownButton>
