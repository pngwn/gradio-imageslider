import gradio as gr
from gradio_imageslider import ImageSlider
from PIL import ImageFilter


def fn(im):
    if not im or not im[0]:
        return im
    return (im[0], im[0].filter(filter=ImageFilter.GaussianBlur(radius=10)))


with gr.Blocks() as demo:
    with gr.Group():
        img1 = ImageSlider(label="Blur image", type="pil")
        img1.upload(fn, inputs=img1, outputs=img1)

if __name__ == "__main__":
    demo.launch()
