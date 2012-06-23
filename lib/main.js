String.prototype.times = function(num) {
    var str = this, res = this;
    
    for(var i=0; i < num-1; i++) {
	res += str;
    }

    return res;
};


var colors = {
    black: 30,
    red: 31,
    green: 32,
    brown: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    gray: 37
}

function color(name) {
    return '\033['+colors[name]+'m'+this+'\033[0m'
}

String.prototype.color = color;

function mk_color_cb(c) {
    return function () {
	return this.color(c);
    };
}

for (var c in colors) {
    String.prototype[c] = mk_color_cb(c);    
}


String.prototype.contains = function(containee) {
    return (this.indexOf(containee) != -1);
}
