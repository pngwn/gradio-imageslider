import gradio as gr
from gradio_imageslider import ImageSlider


def fn(im):
    return im


with gr.Blocks() as demo:
    img1 = ImageSlider()
    btn = gr.Button("RUN")
    img2 = ImageSlider(position=0.75)
    btn.click(fn, inputs=img1, outputs=img2)

if __name__ == "__main__":
    demo.launch()
