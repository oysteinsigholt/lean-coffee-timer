<script lang="ts">
	import { breakpointDuration, currentDiscussionRound, numDiscussionRounds } from '$lib/stores';
	import CountdownButton from '$lib/CountdownButton.svelte';

	const timeout = new Date();
	timeout.setSeconds(timeout.getSeconds() + $breakpointDuration);
</script>

<h1 class="text-4xl font-extrabold">
	✋ Breakpoint: Vote
	<small class="font-semibold text-gray-500">
		{$currentDiscussionRound} of {$numDiscussionRounds - 1}
	</small>
</h1>

<small class="font-semibold text-gray-500">{$breakpointDuration / 60} minutes</small>

<p class="my-4 text-lg text-gray-500">
	Vote to determine if the group should continue discussing the current topic or move onto the next.
</p>

<p class="my-4 text-lg text-gray-500">
	If the majority votes 👎, then move the current topic to the <i>discussed</i> column and pick the
	next most highly voted topic from the <i>to discuss</i> column. Otherwise, continue the discussion
	of the current topic.
</p>

<ul class="my-4 space-y-1 max-w-md list-disc list-inside text-gray-500">
	<li>👍 Continue</li>
	<li><span class="inline-block rotate-90">👎</span> Indifferent</li>
	<li>👎 Next Topic</li>
</ul>

<CountdownButton {timeout} href="/lean-coffee-timer/discussion">
	Next: Continue Discussion
</CountdownButton>
