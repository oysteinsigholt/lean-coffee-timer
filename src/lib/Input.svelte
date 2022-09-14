<script lang="ts">
	export let label: string;
	export let value: number;
</script>

<div class="mb-6">
	<label for="email" class="block mb-2 text-sm font-medium text-gray-900">{label}</label>
	<input
		bind:value
		type="number"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
		required
	/>
</div>
