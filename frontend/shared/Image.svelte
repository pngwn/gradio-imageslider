<script lang="ts">
	import Slider from "../shared/Slider.svelte";
	import { createEventDispatcher, tick, onMount } from "svelte";
	import { BlockLabel } from "@gradio/atoms";
	import { Image } from "@gradio/icons";
	import { type SelectData } from "@gradio/utils";
	import { clamp } from "./utils";

	import { Upload } from "@gradio/upload";

	import { type FileData, normalise_file } from "@gradio/client";

	export let value: [FileData | null, FileData | null];

	export let label: string | undefined = undefined;
	export let show_label: boolean;
	export let root: string;
	export let position: number;

	let value_: [FileData | null, FileData | null] = [null, null];

	function handle_upload({ detail }: CustomEvent<FileData[]>, n: number): void {
		if (detail.length > 1) {
			value_[0] = normalise_file(detail[0], root, null);
			value_[1] = normalise_file(detail[1], root, null);
		} else {
			value_[n] = normalise_file(detail[0], root, null);
		}

		dispatch("upload", value[n]);
	}

	$: if (value !== value_) {
		value_ = value;
		normalise_file(value_, root, null);
	}

	const dispatch = createEventDispatcher<{
		change: string | null;
		stream: string | null;
		edit: undefined;
		clear: undefined;
		drag: boolean;
		upload: FileData;
		select: SelectData;
	}>();

	let dragging = false;

	$: dispatch("drag", dragging);
</script>

<BlockLabel {show_label} Icon={Image} label={label || "Image"} />

<div data-testid="image" class="image-container">
	<Slider position={clamp(position, 0, 1)} disabled>
		<div class="upload-wrap">
			{#if !value_[0]}
				<Upload
					bind:dragging
					filetype="image/*"
					on:load={(e) => handle_upload(e, 0)}
					disable_click={!!value?.[0]}
					{root}
					file_count="multiple"
				>
					<slot />
				</Upload>
			{:else}
				<img src={value_[0].url} alt="" />
			{/if}

			{#if !value_[1]}
				<Upload
					bind:dragging
					filetype="image/*"
					on:load={(e) => handle_upload(e, 1)}
					disable_click={!!value?.[1]}
					{root}
					file_count="multiple"
				>
					<slot />
				</Upload>
			{:else}
				<img src={value_[1].url} alt="" />
			{/if}
		</div>
	</Slider>
</div>

<style>
	.upload-wrap {
		display: flex;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
	.image-container,
	img {
		width: var(--size-full);
		height: var(--size-full);
	}
	img {
		object-fit: cover;
	}
</style>
