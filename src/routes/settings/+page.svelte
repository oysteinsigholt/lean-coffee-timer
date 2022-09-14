<script lang="ts">
	import Input from '$lib/Input.svelte';
	import {
		writeDuration,
		pitchDuration,
		voteDuration,
		rankDuration,
		discussionDuration,
		breakpointDuration,
		numDiscussionRounds
	} from '$lib/stores';

	$: duration =
		$writeDuration +
		$pitchDuration +
		$voteDuration +
		$rankDuration +
		$discussionDuration * $numDiscussionRounds +
		$breakpointDuration * ($numDiscussionRounds - 1);
</script>

<h2 class="text-4xl font-extrabold">⚙️ Settings</h2>

<p class="my-4 text-lg text-gray-500">Configure session</p>

<div>
	<Input label="Write Phase Duration" bind:value={$writeDuration} />

	<Input label="Pitch Phase Duration" bind:value={$pitchDuration} />

	<Input label="Voting Phase Duration" bind:value={$voteDuration} />

	<Input label="Ranking Phase Duration" bind:value={$rankDuration} />

	<Input label="Discussion Round Duration" bind:value={$discussionDuration} />

	<Input label="Breakpoint Duration" bind:value={$breakpointDuration} />

	<Input label="Number of Discussion Rounds" bind:value={$numDiscussionRounds} />
</div>

<p>Total session duration: {duration / 60} minutes</p>

<a href="/lean-coffee-timer/write">Start</a>
