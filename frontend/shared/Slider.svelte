<script>
	import { onMount } from "svelte";

	export let position = 0.5;
	export let disabled = false;

	let active = false;
	let el;
	let inner;
	let box;
	let px = 0;
	let offset = 0;

	function handle_mousedown(e) {
		if (disabled) return;
		active = true;
		box = el.getBoundingClientRect();
		const innerbox = inner.getBoundingClientRect();
		offset = e.clientX - innerbox.left;
	}

	function handle_mouseup(e) {
		active = false;
	}

	function handle_mousemove(e) {
		if (!active) return;
		px = clamp(e.clientX - offset - box.left, -10, box.width - 10);
		position = round((px + 10) / box.width, 5);
	}

	function clamp(n, min, max) {
		return n < min ? min : n > max ? max : n;
	}

	function round(n, points) {
		const mod = Math.pow(10, points);
		return Math.round((n + Number.EPSILON) * mod) / mod;
	}

	function set_position() {
		box = el.getBoundingClientRect();
		px = box.width * position - 10;
	}

	onMount(set_position);
</script>

<svelte:window
	on:resize={set_position}
	on:mousemove={handle_mousemove}
	on:mouseup={handle_mouseup}
/>

<div class="wrap" bind:this={el}>
	<slot />
	<div
		class="outer"
		class:disabled
		on:mousedown={handle_mousedown}
		on:mouseup={handle_mouseup}
		bind:this={inner}
		role="none"
		style="transform: translateX({px}px)"
	>
		<div class="inner"></div>
	</div>
</div>

<style>
	.wrap {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.outer {
		width: 20px;
		height: 100%;
		position: absolute;
		cursor: grab;
		position: absolute;
		top: 0;
		left: 0;
	}

	.inner {
		box-shadow: -1px 0px 6px 1px rgba(0, 0, 0, 0.2);
		width: 1px;
		height: 100%;
		background: #555;
		position: absolute;
		left: calc((100% - 2px) / 2);
	}

	.disabled {
		cursor: auto;
	}

	.disabled .inner {
		box-shadow: none;
	}
</style>
