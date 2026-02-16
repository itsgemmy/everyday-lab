# fairy-dust 🧚🏻‍♀️

Flow-field particles: Perlin noise drives a 2D field; particles follow it and draw trails.  
**Click** to add turbulence; **press `s`** to save a PNG.

## run locally

From this folder:

```bash
# Python 3
python3 -m http.server 8080

# or Node (if you have npx)
npx serve -p 8080
```

Then open **http://localhost:8080** in your browser.

You can also open `index.html` directly in a browser. Some features may work better over a local server.

## tweaking

- **`inc`** (in `sketch.js`) — flow resolution (smaller = finer, slower).
- **`zoff += 0.004`** — animation speed.
- **`fieldStrength`** — how strongly particles follow the field.
- **Particle count** — change `280` in the `for` loop in `setup()`.
- **Colors** — `hue` is in HSB; adjust the `random(220, 280)` range.

## demo
<img width="1289" height="702" alt="image" src="https://github.com/user-attachments/assets/63a48e20-96b3-46d9-9710-39e9cee70938" />
