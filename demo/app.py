import gradio as gr
from gradio_imageslider import ImageSlider
from pathlib import Path
import os


def fn(im):
    return im


# get absolute path


dir_path = Path(os.path.realpath(__file__)).parent / "images"

print(dir_path)

with gr.Blocks() as demo:
    img1 = ImageSlider()
    btn = gr.Button("RUN")
    img2 = ImageSlider()
    btn.click(fn, inputs=img1, outputs=img2)

    # gr.Examples(
    #     [
    #         (
    #             Path("demo/images/puppy_color_opt.jpg"),
    #             Path("demo/images/puppy_bw_opt.jpg"),
    #         )
    #     ],
    #     img1,
    #     label="Example images",
    # )


demo.launch()
