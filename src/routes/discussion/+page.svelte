<script lang="ts">
	import { discussionDuration, currentDiscussionRound, numDiscussionRounds } from '$lib/stores';
	import CountdownButton from '$lib/CountdownButton.svelte';

	const timeout = new Date();
	timeout.setSeconds(timeout.getSeconds() + $discussionDuration);

	$currentDiscussionRound++;
</script>

<h1 class="text-4xl font-extrabold">
	💬 Discussion Round
	<small class="font-semibold text-gray-500">
		{$currentDiscussionRound} of {$numDiscussionRounds}
	</small>
</h1>

<small class="font-semibold text-gray-500">{$discussionDuration / 60} minutes</small>

<p class="my-4 text-lg text-gray-500">Discuss your chosen topic!</p>

{#if $currentDiscussionRound >= $numDiscussionRounds}
	<CountdownButton {timeout} href="/end">Next: End of session</CountdownButton>
{:else}
	<CountdownButton {timeout} href="/breakpoint">Next: Breakpoint</CountdownButton>
{/if}
