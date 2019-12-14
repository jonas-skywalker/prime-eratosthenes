let vals = [];
var k = 2;
var n = 200;
var max_val;


function setup() {
  createCanvas(700, 700);
  n = int(prompt("Insert a number: ", "100"));
  for (var i = 0; i < n; i++) {
    vals.push([true, color(255)]);
  }
  frameRate(1);
  colorMode(HSB, 100);
  max_val = int(sqrt(n));
}

function draw() {
  background(200);
  if (vals[k - 2][0]) {
    for (var i = k*k; i < n + 2; i++) {
      if (i % k == 0) {
        vals[i - 2][0] = false;
        vals[i - 2][1] = color(k/max_val * 100, 100, 100);
      }
    }
  }
  draw_array(vals, k - 2);
  if (k == max_val) {
    let foo = "";
    for (var i = 0; i < vals.length; i++) {
      if (vals[i][0]) {
        foo += str(i+2) + ", ";
      }
    }
    alert(foo);
    noLoop();
  }
  k++;
}

function draw_array(nums, highlighted) {
  let len = ceil(sqrt(nums.length));
  for (var x = 0; x < len; x++) {
    for (var y = 0; y < len; y++) {
      let index = len*y + x;
      if (index < n) {
        fill(nums[index][1]);
      } else {
        fill(0);
      }
      if (index == highlighted) {
        fill(0, 100, 100);
      }
      rect(x * width/len, y * height/len, width/len, height/len);
      fill(0);
      text(str(index + 2), x * width/len + 2, y * height/len + 12)
    }
  }
}
