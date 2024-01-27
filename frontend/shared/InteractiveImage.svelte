<svelte:options accessors={true} />

<script lang="ts">
	import type { Gradio, SelectData, ShareData } from "@gradio/utils";
	import Image from "./Image.svelte";
	import { normalise_file } from "@gradio/client";

	import { Block } from "@gradio/atoms";

	import { StatusTracker } from "@gradio/statustracker";
	import type { LoadingStatus } from "@gradio/statustracker";
	import { UploadText } from "@gradio/atoms";
	import type { FileData } from "@gradio/client";

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
	export let upload_count: number = 2;
	export let layer_images = true;

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

	$: value = !value
		? null
		: (normalise_file(value, root, null) as [FileData, FileData]);

	async function handle_upload({
		detail
	}: CustomEvent<[FileData, FileData]>): Promise<void> {
		value = detail;
		gradio.dispatch("upload");
	}

	$: console.log(height);
</script>

<Block
	{visible}
	variant={value === null ? "dashed" : "solid"}
	border_mode={dragging ? "focus" : "base"}
	padding={false}
	{elem_id}
	{elem_classes}
	{height}
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
		on:upload={handle_upload}
		on:select={({ detail }) => gradio.dispatch("select", detail)}
		on:share={({ detail }) => gradio.dispatch("share", detail)}
		{label}
		{show_label}
		{upload_count}
		{layer_images}
	>
		<UploadText i18n={gradio.i18n} type="image" />
	</Image>
</Block>
