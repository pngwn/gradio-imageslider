import gradio as gr
from gradio_imageslider import ImageSlider


def fn(im):
    return im


with gr.Blocks() as demo:
    img1 = ImageSlider()

if __name__ == "__main__":
    demo.launch()
