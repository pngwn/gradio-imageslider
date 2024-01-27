<script lang="ts">
	import Slider from "./Slider.svelte";

	import { BlockLabel, Empty } from "@gradio/atoms";

	import { Image } from "@gradio/icons";
	import { type FileData, normalise_file } from "@gradio/client";
	import type { I18nFormatter } from "@gradio/utils";

	export let value: [null | FileData, null | FileData] = [null, null];
	export let label: string | undefined = undefined;
	export let show_label: boolean;
	export let root: string;
	export let i18n: I18nFormatter;
	export let position: number;
	export let layer_images = true;
	export let show_single = false;

	$: value = normalise_file(value, root, null) as [FileData, FileData];

	$: style = layer_images ? `clip-path: inset(0 0 0 ${position * 100}%)` : "";

	export let el_width: number;
</script>

<BlockLabel {show_label} Icon={Image} label={label || i18n("image.image")} />
{#if (value === null || value[0] === null || value[1] === null) && !show_single}
	<Empty unpadded_box={true} size="large"><Image /></Empty>
{:else}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions-->

	<div class="slider-wrap" bind:clientWidth={el_width}>
		<Slider bind:position>
			<img src={value?.[0]?.url} alt="" loading="lazy" />
			<img
				class:fixed={layer_images}
				class:hidden={!value?.[1]?.url}
				src={value?.[1]?.url}
				alt=""
				loading="lazy"
				{style}
			/>
		</Slider>
	</div>
{/if}

<style>
	.slider-wrap {
		user-select: none;
		max-height: calc(100vh - 40px);
	}
	img {
		width: var(--size-full);
		height: var(--size-full);
		object-fit: cover;
	}

	.fixed {
		position: absolute;
		top: 0;
		left: 0;
	}

	.hidden {
		opacity: 0;
	}
</style>
