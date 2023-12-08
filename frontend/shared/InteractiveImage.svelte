<svelte:options accessors={true} />

<script lang="ts">
	import type { Gradio, SelectData, ShareData } from "@gradio/utils";
	import Image from "./Image.svelte";

	import { Block } from "@gradio/atoms";

	import { StatusTracker } from "@gradio/statustracker";
	import type { LoadingStatus } from "@gradio/statustracker";
	import { UploadText } from "@gradio/atoms";
	import type { FileData } from "@gradio/client";
	import { clamp } from "./utils";

	export let elem_id = "";
	export let elem_classes: string[] = [];
	export let visible = true;
	export let value: [FileData | null, FileData | null] = [null, null];

	export let label: string;
	export let show_label: boolean;

	export let height: number | undefined;
	export let width: number | undefined;
	export let container = true;
	export let scale: number | null = null;
	export let min_width: number | undefined = undefined;
	export let loading_status: LoadingStatus;
	export let root: string;
	export let position: number;

	export let gradio: Gradio<{
		change: never;
		error: string;
		edit: never;
		stream: never;
		drag: never;
		upload: never;
		clear: never;
		select: SelectData;
		share: ShareData;
	}>;

	$: value, gradio.dispatch("change");
	let dragging: boolean;
	const FIXED_HEIGHT = 340;

	$: value = !value ? null : value;
</script>

<Block
	{visible}
	variant={value === null ? "dashed" : "solid"}
	border_mode={dragging ? "focus" : "base"}
	padding={false}
	{elem_id}
	{elem_classes}
	height={height || FIXED_HEIGHT}
	{width}
	allow_overflow={false}
	{container}
	{scale}
	{min_width}
>
	<StatusTracker
		autoscroll={gradio.autoscroll}
		i18n={gradio.i18n}
		{...loading_status}
	/>

	<Image
		{position}
		bind:value
		{root}
		on:edit={() => gradio.dispatch("edit")}
		on:clear={() => gradio.dispatch("clear")}
		on:stream={() => gradio.dispatch("stream")}
		on:drag={({ detail }) => (dragging = detail)}
		on:upload={() => gradio.dispatch("upload")}
		on:select={({ detail }) => gradio.dispatch("select", detail)}
		on:share={({ detail }) => gradio.dispatch("share", detail)}
		{label}
		{show_label}
	>
		<UploadText i18n={gradio.i18n} type="image" />
	</Image>
</Block>
