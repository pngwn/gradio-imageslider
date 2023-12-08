
import gradio as gr
from app import demo
from gradio_paramviewer import ParamViewer



    

_docs = {'ImageSlider': {'description': 'Creates an image component that can be used to upload/draw images (as an input) or display images (as an output).', 'members': {'__init__': {'value': {'default': 'None\n', 'type': 'value: str | PIL.Image.Image | numpy.ndarray | None\n', 'description': 'A PIL Image, numpy array, path or URL for the default value that Image component is going to take. If callable, the function will be called whenever the app loads to set the initial value of the component.'}, 'height': {'default': 'None\n', 'type': 'height: int | None\n', 'description': 'Height of the displayed image in pixels.'}, 'width': {'default': 'None\n', 'type': 'width: int | None\n', 'description': 'Width of the displayed image in pixels.'}, 'type': {'default': '"numpy"\n', 'type': 'type: "numpy" | "pil" | "filepath"\n', 'description': 'The format the image is converted to before being passed into the prediction function. "numpy" converts the image to a numpy array with shape (height, width, 3) and values from 0 to 255, "pil" converts the image to a PIL image object, "filepath" passes a str path to a temporary file containing the image.'}, 'label': {'default': 'None\n', 'type': 'label: str | None\n', 'description': 'component name in interface.'}, 'every': {'default': 'None\n', 'type': 'every: float | None\n', 'description': "If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute."}, 'show_label': {'default': 'None\n', 'type': 'show_label: bool | None\n', 'description': 'if True, will display label.'}, 'show_download_button': {'default': 'True\n', 'type': 'show_download_button: bool\n', 'description': 'If True, will display button to download image.'}, 'container': {'default': 'True\n', 'type': 'container: bool\n', 'description': 'If True, will place the component in a container - providing some extra padding around the border.'}, 'scale': {'default': 'None\n', 'type': 'scale: int | None\n', 'description': 'relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.'}, 'min_width': {'default': '160\n', 'type': 'min_width: int\n', 'description': 'minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.'}, 'interactive': {'default': 'None\n', 'type': 'interactive: bool | None\n', 'description': 'if True, will allow users to upload and edit an image; if False, can only be used to display images. If not provided, this is inferred based on whether the component is used as an input or output.'}, 'visible': {'default': 'True\n', 'type': 'visible: bool\n', 'description': 'If False, component will be hidden.'}, 'elem_id': {'default': 'None\n', 'type': 'elem_id: str | None\n', 'description': 'An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'elem_classes': {'default': 'None\n', 'type': 'elem_classes: list[str] | str | None\n', 'description': 'An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'show_share_button': {'default': 'None\n', 'type': 'show_share_button: bool | None\n', 'description': 'If True, will show a share icon in the corner of the component that allows user to share outputs to Hugging Face Spaces Discussions. If False, icon does not appear. If set to None (default behavior), then the icon appears if this Gradio app is launched on Spaces, but not otherwise.'}}, 'postprocess': {'type': '\n    tuple[\n        numpy.ndarray\n        | PIL.Image.Image\n        | str\n        | pathlib.Path\n        | None,\n        numpy.ndarray\n        | PIL.Image.Image\n        | str\n        | pathlib.Path\n        | None,\n    ]\n    | None\n', 'return': '\n    tuple[\n        gradio.data_classes.FileData | str | None,\n        gradio.data_classes.FileData | str | None,\n    ]\n    | None\n'}, 'preprocess': {'type': 'SliderData\n', 'return': '\n    tuple[\n        numpy.ndarray | PIL.Image.Image | str | None,\n        numpy.ndarray | PIL.Image.Image | str | None,\n    ]\n    | None\n'}}}}
    
with gr.Blocks() as docs:
    gr.Markdown("# gradio_imageslider")
    gr.Markdown("Python library for easily interacting with trained machine learning models")
    demo.render()
    gr.Markdown("## Installation")
    gr.Markdown("""```bash
pip install gradio_imageslider
""")
    gr.Markdown("## Usage")
    gr.Markdown("""```python
import gradio as gr
from gradio_imageslider import ImageSlider


def fn(im):
    return im


with gr.Blocks() as demo:
    img1 = ImageSlider()
    btn = gr.Button("RUN")
    img2 = ImageSlider()
    btn.click(fn, inputs=img1, outputs=img2)

if __name__ == "__main__":
    demo.launch()

""")
    gr.Markdown("## API Reference")
    gr.Markdown("### ImageSlider v0.0.14")
    gr.Markdown("#### Initialization")
    ParamViewer(value=_docs["ImageSlider"]["members"]["__init__"])
    gr.Markdown("#### User function")

docs.launch()


