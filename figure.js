var canvas  = document.getElementById("my_canvas");
var ctx     = canvas.getContext("2d");
var o_pos   = new vector_2(100, 100);
var my_points = [];

ctx.strokeStyle = "#fff";



const sleep = (ms) => {
    const end = new Date().getTime() + ms;
    while (new Date().getTime() < end) {}
}

function vector_2(x = Number, y = Number) {
    this.x = x;
    this.y = y;
}

function figure_show(nb = Number) {
    if (nb < 1) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    my_points = [];

    for (let i = 0; i < nb; i ++) {
        let A = i / nb * Math.PI * 2, r = 5;
        let pos = new vector_2(Math.cos(A) * 50, Math.sin(A) * 50);
        pos.x += o_pos.x; pos.y += o_pos.y;

        my_points.push(pos)
    }
    console.table(my_points);

    my_points.push(my_points[0]);
    for (let i = 0; i < my_points.length - 1; i ++) {
        ctx.beginPath();
        ctx.moveTo(my_points[i].x, my_points[i].y);
        ctx.lineTo(my_points[i+1].x, my_points[i+1].y);
        ctx.stroke();
    }
}

function figure_style(nb, speed=100) {
    var i = 1;
    for (var n = 0; n < nb; n ++) {
        setTimeout(() => {
            figure_show(i)
            i ++;
        }, speed * n)
    }
}

//figure_show(3)
figure_style(10, 500)