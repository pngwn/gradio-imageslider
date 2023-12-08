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

	$: value = normalise_file(value, root, null) as [FileData, FileData];
</script>

<BlockLabel {show_label} Icon={Image} label={label || i18n("image.image")} />
{#if value === null || value[0] === null || value[1] === null}
	<Empty unpadded_box={true} size="large"><Image /></Empty>
{:else}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions-->

	<div class="slider-wrap">
		<Slider bind:position>
			<img src={value?.[0]?.url} alt="" loading="lazy" />
			<img
				class="fixed"
				src={value?.[1]?.url}
				alt=""
				loading="lazy"
				style="clip-path: inset(0 0 0 {position * 100}%)"
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
		object-fit: contain;
	}

	.fixed {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
