# My Figures
HTML page with javascript to create a figure.

## How does it work
### Figure Show
Figure Show function is used to show the figure with `n` points, for example if `n = 3`, it will show a triangle.
```js
let n = 3;
figure_show(n);
```
<img src="images/mon_image.png">

### Figure Style
Figure Style is the function that will show each state from 0 to `n`, with a `x` delay in milli seconds.
So for example, with `x = 1000` and `n = 5`, it will show n = 1, 2, ... 5 and shows the figures with it.
```js
let n = 10;
let x = 500;
figure_style(n, x);
```
