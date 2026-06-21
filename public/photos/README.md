# Photos folder (optional)

This app is built to work **without any photographs**. Every illustration in the
guide is a hand-drawn SVG diagram created in code, so there are **no copyrighted
images bundled** with the project and nothing here is required for it to run.

## Why no photos by default?

- It keeps the project free of any image licensing questions.
- SVG diagrams are tiny, always sharp, and load instantly on a phone.
- The teaching diagrams (reading a creek bend, the panning motion, what's in the
  pan) are clearer than most stock photos for a beginner.

## Want to add your own photos?

You can absolutely personalize this for your mom and her friends with real
pictures — for example, snapshots from your own trips.

1. Drop image files into this folder (`public/photos/`), e.g. `creek.jpg`.
2. Reference them in a component with a root-relative path. Because Vite copies
   everything in `public/` to the site root, the URL is just `/photos/creek.jpg`:

   ```tsx
   <img src="/photos/creek.jpg" alt="Panning on the creek" />
   ```

3. Rebuild (`npm run build`) and redeploy.

## Please only use images you have the right to use

- Your **own** photographs are ideal.
- Otherwise use images that are clearly **public domain** or **licensed** for
  your use (and keep the attribution the license requires).
- Do **not** drop in random images found through a search engine — most are
  copyrighted.

If you keep things as-is, you're all set: the app is complete and ready to use
with its built-in diagrams.
