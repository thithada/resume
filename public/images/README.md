# Project image folders

Place each screenshot inside its matching folder under `public/images/projects/`. File names use the folder name followed by their display order.

```text
projects/
|-- check-pd/            check-pd1.png through check-pd7.png
|-- gen-h/               gen-h1.png through gen-h5.png
|-- nashgui/             nashgui1.png through nashgui6.png
|-- aurum/               aurum1.png through aurum6.png
|-- project-nutrition/   project-nutrition1.png through project-nutrition6.png
|-- autocar/             autocar1.png through autocar5.png
`-- repair-report/       repair-report1.png through repair-report3.png
```

The number controls the gallery order, so `autocar1.png` is shown before `autocar2.png`. To add another image, continue with the next number and add its path to the matching list in `app/project-images.ts`.

PNG and WebP are supported. The current uploaded files use PNG. Landscape screenshots fill the gallery frame; portrait LINE/mobile screenshots are detected automatically and shown inside a contained phone-friendly frame. Keep files ideally under 500 KB and avoid screenshots containing real personal or health data.

The `.gitkeep` files only preserve empty folders in Git and can remain after adding images.
