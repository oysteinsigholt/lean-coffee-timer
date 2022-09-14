<script lang="ts">
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

<div>
	<h1 class="text-4xl font-extrabold">📜 Introduction</h1>

	<p class="my-4 text-lg text-gray-500">
		Lean Coffee is a structured, but agenda-less meeting. Participants gather, build an agenda, and
		begin talking. Conversations are directed and productive because the agenda for the meeting was
		democratically generated (from <a href="https://leancoffee.org/">leancoffee.org</a>)
	</p>

	<h2 class="mt-4 mb-2 text-lg font-semibold text-gray-900">👥 Each group needs</h2>
	<ul class="space-y-1 max-w-xl list-disc list-inside text-gray-500">
		<li>
			A discussion board with columns for topics to discuss, what is currently being discussed, and
			already discussed items
		</li>
	</ul>

	<h2 class="mt-4 mb-2 text-lg font-semibold text-gray-900">🧍 Each participant needs:</h2>
	<ul class="space-y-1 max-w-md list-disc list-inside text-gray-500">
		<li>A marker or a pen</li>
		<li>A stack of sticky notes</li>
		<li>Three voting dots</li>
	</ul>

	<p class="my-4 text-md text-gray-500">
		Session duration: {duration / 60} minutes
	</p>

	<div>
		<a
			href="/lean-coffee-timer/write"
			class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
		>
			Start
		</a>

		<a
			href="/lean-coffee-timer/settings"
			class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 hover:bg-slate-200"
		>
			Back
		</a>
		<button
			on:click={testChime}
			class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 hover:bg-slate-200"
			>Test Chime</button
		>
	</div>
</div>
