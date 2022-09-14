<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let timeout: Date | undefined | null;
	export let href: string;

	const start = new Date();

	const duration = timeout ? timeout.getTime() - start.getTime() : null;

	onMount(async () => {
		let timer: NodeJS.Timeout;

		const audio = await import('$lib/audio');

		if (duration) {
			timer = setTimeout(() => {
				audio.playChime();
				goto(href);
			}, duration);
		}

		return () => {
			clearTimeout(timer);
		};
	});
</script>

<a
	{href}
	class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 relative overflow-hidden"
>
	<slot />
	<div class="progress bg-slate-400 h-1" style={`animation-duration: ${duration}ms;`} />
</a>

<style>
	.progress {
		position: absolute;
		bottom: 0;
		left: 0;
		animation-name: progress;
		animation-duration: 2s;
		animation-fill-mode: both;
		animation-timing-function: linear;
	}

	@keyframes progress {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
</style>
