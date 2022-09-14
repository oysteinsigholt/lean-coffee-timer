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

	const testChime = async () => {
		const audio = await import('$lib/audio');
		audio.playChime();
	};
</script>

<div class="w-96">
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

	<p class="my-4 text-md text-gray-500">
		Session duration: {duration / 60} minutes
	</p>

	<div>
		<a
			href="/lean-coffee-timer/introduction"
			class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
		>
			Go to Introduction
		</a>
		<button
			on:click={testChime}
			class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4  hover:bg-slate-200"
			>Test Chime</button
		>
	</div>
</div>
