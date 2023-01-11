
## Text to Image using Stable Diffusion, even on CPU-only Box

> We would be using Stable Diffusion opensource model, write less than 100 lines of Python to generate images like these and anything else you like.


![ALT TXT: missing Grinch's Image](/blogs/img/2023-01-11-grinch.png "Stable Diffusion generated Portrait of Grinch")
![ALT TXT: missing Judy Garland's Image](/blogs/img/2023-01-11-judy-garland.png "Stable Diffusion generated Photo Portrait of Judy Garland")

### Prepare Dependencies

* would suggest to get new Virtualenv to try locally

```
virtualenv virtualenv --python=python3 .venv_sd
source ./.venv_sd/bin/activate
```

* install required python packages

```
pip install diffusers==0.10.0
pip install transformers scipy ftfy accelerate
pip install "ipywidgets>=7,<8"
```


### Few lines of Code, to run the Model

* save code below as `gen-image.py`; or download [from github](https://github.com/abhishekkr/tutorials_as_code/blob/master/talks-articles/machine-learning/example-code/stable-diffusion-simple.py)

```
#!python3

import torch
from diffusers import StableDiffusionPipeline
import sys


def sd_model():
    torch_device = "cuda" if torch.cuda.is_available() else "cpu"
    torch_dtype = torch.float32 if torch_device == "cpu" else torch.float16
    model = StableDiffusionPipeline.from_pretrained(
              "CompVis/stable-diffusion-v1-4",
              revision="fp16",
              torch_dtype=torch_dtype
            )
    return model.to(torch_device) #this box don't have cuda


def gen_img(model, prompt, imgname):
    images = model(prompt).images  # image here is in PIL format
    images[0].save(imgname)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(f"usage: {sys.argv[0]} img-to-save-as.png 'prompt explaining what image to generate'")
        sys.exit(123)
    imgname = sys.argv[1]
    prompt = " ".join(sys.argv[2:])
    model = sd_model()
    gen_img(model, prompt, imgname)
```


### Run & Generate Images from Text

* you'd notice, time take per iteration is a bit more here as ran on a simple laptop with CPU only while several browser tabs are open on the side

```
$ python3 gen-image.py grinch.png 'masterpiece, portrait of grinch, drinking hot tea next to a table, candies all over the place'

Fetching 16 files: 100%|██████████████████████████████████████████████████████████| 16/16 [00:00<00:00, 12104.77it/s]
100%|████████████████████████████████████████████████████████████████████████████████| 50/50 [08:07<00:00,  9.75s/it]
```

* let's generate one more of a real known person, which might have been used in training material

```
$ python3 gen-image.py judy-garland.png 'masterpiece, elegant photo, portrait of judy garland drinking hot tea next to a table'
```

> when ran for the first time, it downloads couple GBs worth of Model from [huggingface.co](https://huggingface.co/); for consecutive runs it uses the local cached copy of it

> output from above runs for me are the ones listed at beginning of this blog, now go ahead and generate your own images by playing with prompt text passed to the program

---
