
import gradio as gr
from app import demo as app
import os

_docs = {'ImageSlider': {'description': 'Creates an image slider component that can be used to compare two images', 'members': {'__init__': {'value': {'type': 'tuple[str, str]\n    | tuple[PIL.Image.Image, PIL.Image.Image]\n    | tuple[numpy.ndarray, numpy.ndarray]\n    | None', 'default': 'None', 'description': 'A PIL Image, numpy array, path or URL for the default value that Image component is going to take. If callable, the function will be called whenever the app loads to set the initial value of the component.'}, 'position': {'type': 'int', 'default': '0.5', 'description': 'The position of the slider, between 0 and 1.'}, 'upload_count': {'type': 'int', 'default': '1', 'description': 'The number of images that can be uploaded to the component. 1 or 2.'}, 'height': {'type': 'int | None', 'default': 'None', 'description': 'Height of the displayed image in pixels.'}, 'width': {'type': 'int | None', 'default': 'None', 'description': 'Width of the displayed image in pixels.'}, 'type': {'type': '"numpy" | "pil" | "filepath"', 'default': '"numpy"', 'description': 'The format the image is converted to before being passed into the prediction function. "numpy" converts the image to a numpy array with shape (height, width, 3) and values from 0 to 255, "pil" converts the image to a PIL image object, "filepath" passes a str path to a temporary file containing the image.'}, 'label': {'type': 'str | None', 'default': 'None', 'description': 'component name in interface.'}, 'every': {'type': 'float | None', 'default': 'None', 'description': "If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute."}, 'show_label': {'type': 'bool | None', 'default': 'None', 'description': 'if True, will display label.'}, 'show_download_button': {'type': 'bool', 'default': 'True', 'description': 'If True, will display button to download image.'}, 'container': {'type': 'bool', 'default': 'True', 'description': 'If True, will place the component in a container - providing some extra padding around the border.'}, 'scale': {'type': 'int | None', 'default': 'None', 'description': 'relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.'}, 'min_width': {'type': 'int', 'default': '160', 'description': 'minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.'}, 'interactive': {'type': 'bool | None', 'default': 'None', 'description': 'if True, will allow users to upload and edit an image; if False, can only be used to display images. If not provided, this is inferred based on whether the component is used as an input or output.'}, 'visible': {'type': 'bool', 'default': 'True', 'description': 'If False, component will be hidden.'}, 'elem_id': {'type': 'str | None', 'default': 'None', 'description': 'An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'elem_classes': {'type': 'list[str] | str | None', 'default': 'None', 'description': 'An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'show_share_button': {'type': 'bool | None', 'default': 'None', 'description': 'If True, will show a share icon in the corner of the component that allows user to share outputs to Hugging Face Spaces Discussions. If False, icon does not appear. If set to None (default behavior), then the icon appears if this Gradio app is launched on Spaces, but not otherwise.'}}, 'postprocess': {'y': {'type': 'tuple[str, str]\n    | tuple[PIL.Image.Image, PIL.Image.Image]\n    | tuple[numpy.ndarray, numpy.ndarray]\n    | None', 'description': 'image as a numpy array, PIL Image, string/Path filepath, or string URL'}, 'value': {'type': 'tuple[str, str]\n    | tuple[PIL.Image.Image, PIL.Image.Image]\n    | tuple[numpy.ndarray, numpy.ndarray]\n    | None', 'description': 'image as a numpy array, PIL Image, string/Path filepath, or string URL'}}, 'preprocess': {'return': {'type': 'tuple[str, str]\n    | tuple[PIL.Image.Image, PIL.Image.Image]\n    | tuple[numpy.ndarray, numpy.ndarray]\n    | None', 'description': 'tuple of images in the requested format.'}, 'value': None}}, 'events': {'change': {'type': None, 'default': None, 'description': 'Triggered when the value of the ImageSlider changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input.'}, 'upload': {'type': None, 'default': None, 'description': 'This listener is triggered when the user uploads a file into the ImageSlider.'}}}, '__meta__': {'additional_interfaces': {}, 'user_fn_refs': {'ImageSlider': []}}}
    
abs_path = os.path.join(os.path.dirname(__file__), "css.css")

with gr.Blocks(
    css=abs_path,
    theme=gr.themes.Default(
        font_mono=[
            gr.themes.GoogleFont("Inconsolata"),
            "monospace",
        ],
    ),
) as demo:
    gr.Markdown(
"""
# `gradio_imageslider`

<div style="display: flex; gap: 7px;">
<a href="https://pypi.org/project/gradio_imageslider/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_imageslider"></a> <a href="https://github.com/pngwn/gradio-imageslider/issues" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/Issues-white?logo=github&logoColor=black"></a> 
</div>

A Gradio component for comparing two images.

This component can be used in several ways:

- as a **unified input / output** where users will upload a single image and an inference function will generate an image it can be compared to (see demo),
- as a **manual upload input** allowing users to compare two of their own images (which can then be passed along elsewhere, e.g. to a model), 
- as **static output component** allowing users to compare two images generated by an inference function.

""", elem_classes=["md-custom"], header_links=True)
    app.render()
    gr.Markdown(
"""
## Installation

```bash
pip install gradio_imageslider
```

## Usage

```python
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

```
""", elem_classes=["md-custom"], header_links=True)


    gr.Markdown("""
## `ImageSlider`

### Initialization
""", elem_classes=["md-custom"], header_links=True)

    gr.ParamViewer(value=_docs["ImageSlider"]["members"]["__init__"], linkify=[])


    gr.Markdown("### Events")
    gr.ParamViewer(value=_docs["ImageSlider"]["events"], linkify=['Event'])




    gr.Markdown("""

### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function. 
- When used as an output, the component only impacts the return signature of the user function. 

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As input:** Is passed, tuple of images in the requested format.
- **As output:** Should return, image as a numpy array, PIL Image, string/Path filepath, or string URL.

 ```python
def predict(
    value: tuple[str, str]
    | tuple[PIL.Image.Image, PIL.Image.Image]
    | tuple[numpy.ndarray, numpy.ndarray]
    | None
) -> tuple[str, str]
    | tuple[PIL.Image.Image, PIL.Image.Image]
    | tuple[numpy.ndarray, numpy.ndarray]
    | None:
    return value
```
""", elem_classes=["md-custom", "ImageSlider-user-fn"], header_links=True)




    demo.load(None, js=r"""function() {
    const refs = {};
    const user_fn_refs = {
          ImageSlider: [], };
    requestAnimationFrame(() => {

        Object.entries(user_fn_refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}-user-fn`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
        
        Object.entries(refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
    })
}

""")

demo.launch()
