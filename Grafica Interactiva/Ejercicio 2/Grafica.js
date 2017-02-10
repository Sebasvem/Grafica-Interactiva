(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 700,
	height: 355,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Grafica_atlas_.png?1480096144751", id:"Grafica_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Grafica_atlas_", frames: [[1602,0,332,227],[1936,37,25,36],[1936,179,22,35],[1965,73,21,33],[1963,37,24,34],[1927,229,28,38],[0,359,1600,355],[0,0,1600,357],[1602,229,323,108],[1936,110,25,32],[1936,75,27,33],[1990,0,23,33],[1989,71,22,32],[1936,0,27,35],[1602,339,130,125],[2015,0,22,34],[1936,144,24,33],[1965,0,23,35],[2015,36,21,34],[1989,37,24,32]]}
];


// symbols:



(lib.arrowkeysfade = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.down1 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.down2 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.down3 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.down4 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.down5 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fondo1 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fondo2 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.key_space_bar_small = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.left1 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.left2 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.left3 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.left4 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.left5 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Oaks_Letter_Sprite = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.right1 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.right2 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.right3 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.right4 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.right5 = function() {
	this.spriteSheet = ss["Grafica_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Izquierda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.left5();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-15.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.left4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11,-15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_2 = new lib.left3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11.5,-14.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 2
	this.instance_3 = new lib.left2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-13.5,-15.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_4 = new lib.left1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12.5,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-15,25,32);


(lib.instruccionesbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instruccionesbtn = new cjs.Text("instrucciones", "22px 'Arial'", "#FFFF00");
	this.instruccionesbtn.name = "instruccionesbtn";
	this.instruccionesbtn.textAlign = "center";
	this.instruccionesbtn.lineHeight = 27;
	this.instruccionesbtn.lineWidth = 265;
	this.instruccionesbtn.parent = this;
	this.instruccionesbtn.setTransform(134.5,2);

	this.timeline.addTween(cjs.Tween.get(this.instruccionesbtn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269,33.3);


(lib.iniciarjuegobtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.iniciarjuegobtn = new cjs.Text("Iniciar juego", "22px 'Arial'", "#FFFF00");
	this.iniciarjuegobtn.name = "iniciarjuegobtn";
	this.iniciarjuegobtn.textAlign = "center";
	this.iniciarjuegobtn.lineHeight = 27;
	this.iniciarjuegobtn.lineWidth = 265;
	this.iniciarjuegobtn.parent = this;
	this.iniciarjuegobtn.setTransform(134.5,2);

	this.timeline.addTween(cjs.Tween.get(this.iniciarjuegobtn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269,33.3);


(lib.infobtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.creditosbtn = new cjs.Text("info", "22px 'Arial'", "#FFFF00");
	this.creditosbtn.name = "creditosbtn";
	this.creditosbtn.textAlign = "center";
	this.creditosbtn.lineHeight = 27;
	this.creditosbtn.lineWidth = 265;
	this.creditosbtn.parent = this;
	this.creditosbtn.setTransform(134.5,2);

	this.timeline.addTween(cjs.Tween.get(this.creditosbtn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269,33.3);


(lib.fondo2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fondo2();
	this.instance.parent = this;
	this.instance.setTransform(-827,-198.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-827,-198.5,1600,357);


(lib.fondo1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fondo1();
	this.instance.parent = this;
	this.instance.setTransform(-849.9,-193.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-849.9,-193.5,1600,355);


(lib.Derecha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.right5();
	this.instance.parent = this;
	this.instance.setTransform(-12,-16);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.right4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11.5,-16);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_2 = new lib.right3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11.5,-15.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 2
	this.instance_3 = new lib.right2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12,-16.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_4 = new lib.right1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-15,22,34);


(lib.creditosbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.creditosbtn = new cjs.Text("creditos", "22px 'Arial'", "#FFFF00");
	this.creditosbtn.name = "creditosbtn";
	this.creditosbtn.textAlign = "center";
	this.creditosbtn.lineHeight = 27;
	this.creditosbtn.lineWidth = 265;
	this.creditosbtn.parent = this;
	this.creditosbtn.setTransform(134.5,2);

	this.timeline.addTween(cjs.Tween.get(this.creditosbtn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269,33.3);


(lib.carta4abierta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape.setTransform(56.3,120.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_1.setTransform(44.7,120.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_2.setTransform(29.5,120);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_3.setTransform(14.1,120.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_4.setTransform(5.3,120);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_5.setTransform(-5.5,120.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAPAAALAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgNAIQgLAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQAAATAJALQAKAKAMAAQALAAAJgKQAJgLAAgVQABgWgKgKQgJgLgLAAQgMgBgJAMg");
	this.shape_6.setTransform(-17.4,122.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_7.setTransform(-29.4,120.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_8.setTransform(-41,120.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_9.setTransform(-59.3,120.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJBOIAAiJIg0AAIAAgSIB7AAIAAASIg0AAIAACJg");
	this.shape_10.setTransform(-72.1,118);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_11.setTransform(28.9,98.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAIgDIARgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_12.setTransform(19.6,93.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYBIQgLgIgGgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAIAAAJADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAKAKAKAAQANAAAIgKQAJgKAAgVQAAgWgJgKQgIgLgOAAQgLAAgJAKg");
	this.shape_13.setTransform(7,91.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_14.setTransform(-4.9,93.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_15.setTransform(-13.7,93.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_16.setTransform(-21.2,91.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_17.setTransform(-30.6,93.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_18.setTransform(-42.8,93.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQgBAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_19.setTransform(172,67.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_20.setTransform(163.4,64.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_21.setTransform(148.7,67.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_22.setTransform(139.7,65.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_23.setTransform(131,67.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_24.setTransform(119.4,67.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_25.setTransform(101,67.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMAAAKgKQAIgKABgVQgBgWgIgKQgKgLgNAAQgLAAgIAKg");
	this.shape_26.setTransform(88.4,65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_27.setTransform(76.5,67.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_28.setTransform(67.5,65.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_29.setTransform(58.8,67.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgOAAQgMAAgJAJg");
	this.shape_30.setTransform(47.2,67.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_31.setTransform(28.8,66.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_32.setTransform(16.6,67.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_33.setTransform(4.3,67.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QAMgQASABQAKAAAKADQAJAFAGAIQAGAHAEALQADAJAAAMQAAAdgPAQQgOARgUgBQgTAAgLgRgAgVgKQgKAKAAATQABAUAFAKQAKAOAPAAQALAAAJgLQAJgKAAgWQAAgVgIgKQgKgLgLAAQgMAAgJAMg");
	this.shape_34.setTransform(-7.6,65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_35.setTransform(-26.3,66.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_36.setTransform(-38.5,67.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_37.setTransform(-56.9,67.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_38.setTransform(-65.9,65.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_39.setTransform(-74.6,67.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_40.setTransform(-86.2,67.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_41.setTransform(-104.6,67.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_42.setTransform(-116.9,67.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgSABgPgRQgPgQAAgaQAAgRAHgOQAFgOAMgGQALgIANABQATAAAMARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAJALQAKALALAAQAMAAAIgKQAKgLgBgSQABgYgKgLQgJgMgNABQgKAAgJALg");
	this.shape_43.setTransform(-129.4,69.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_44.setTransform(-147.4,67.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_45.setTransform(-156.4,65.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_46.setTransform(-165.2,67.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_47.setTransform(-176.8,67.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgwBQIAAicIASAAIAAAPQAGgJAHgFQAJgDAIAAQAQAAAKAHQAMAIAFANQAGAOAAAQQAAARgGANQgHANgMAIQgMAHgMAAQgIAAgIgDQgIgFgFgGIAAA4gAgVg0QgJALAAAXQgBATAKALQAIAKANAAQALAAAJgKQAKgLAAgVQgBgWgIgKQgJgLgMAAQgLgBgKAMg");
	this.shape_48.setTransform(-188.7,69.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_49.setTransform(168.3,38.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_50.setTransform(159.7,40.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKAAgVQAAgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_51.setTransform(147.1,38.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_52.setTransform(129.1,40.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_53.setTransform(116.5,38.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_54.setTransform(104.6,40.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_55.setTransform(96,38.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_56.setTransform(85,38.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_57.setTransform(76.5,40.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_58.setTransform(58.1,40.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_59.setTransform(49.1,38.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_60.setTransform(40.4,40.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_61.setTransform(28.7,40.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgUBkIADgRIAJABQAGAAACgDQACgFAAgPIAAh2IATAAIAAB2QAAAWgFAIQgHALgOgBQgIAAgHgBgAAChOIAAgXIATAAIAAAXg");
	this.shape_62.setTransform(19,40.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgpBNIgCgSIALACQAHAAAEgCIAGgGIAGgPIACgFIgshwIAVAAIAYBCIAGAZQADgMAFgMIAYhDIAUAAIgsByIgIAaQgGAKgGAEQgHAFgJAAQgGAAgHgDg");
	this.shape_63.setTransform(6.3,42.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_64.setTransform(-11.6,40.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_65.setTransform(-20.6,38.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_66.setTransform(-29.9,40.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_67.setTransform(-42.2,40.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_68.setTransform(-54.5,40.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAOAAAMAHQAKAIAHANQAFAOAAAQQAAARgGANQgHANgLAIQgMAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQABATAIALQAKAKAMAAQALAAAJgKQAJgLAAgVQABgWgKgKQgJgLgLAAQgMgBgJAMg");
	this.shape_69.setTransform(-66.3,42.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_70.setTransform(-81.4,38.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_71.setTransform(-89.9,40.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAJAFAFAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_72.setTransform(-102.5,38.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_73.setTransform(-120.5,40.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_74.setTransform(-129.1,38.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_75.setTransform(-136.7,40.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_76.setTransform(-145,38.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_77.setTransform(-153.6,40.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_78.setTransform(-162.1,38.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_79.setTransform(-173.2,38.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_80.setTransform(-181.7,40.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_81.setTransform(186,14);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_82.setTransform(174.4,14);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_83.setTransform(162.8,14);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_84.setTransform(153.9,13.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_85.setTransform(142.8,16.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_86.setTransform(130.9,14);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_87.setTransform(122.1,13.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAIQgFAHgHAEg");
	this.shape_88.setTransform(108.3,20.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgRBPIAAhwIARAAIAABwgAgSgwIAOgeIAXAAIgVAeg");
	this.shape_89.setTransform(103.2,11.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_90.setTransform(93,14.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAeBQIAAg4QgFAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAHgOQAFgOALgGQAMgIANABQAUAAAMARIAAgPIARAAIAACcgAgTg0QgJAKAAAWQAAAUAJALQAKALALAAQAMAAAJgKQAJgLAAgSQAAgYgJgLQgKgMgNABQgLAAgIALg");
	this.shape_91.setTransform(80.4,16);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAJAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_92.setTransform(68.5,14);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_93.setTransform(50.2,14);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMAAAKgKQAIgKABgVQgBgWgIgKQgKgLgNAAQgLAAgIAKg");
	this.shape_94.setTransform(37.6,11.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_95.setTransform(19.6,14);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_96.setTransform(8.3,14);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_97.setTransform(-0.3,13.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_98.setTransform(-11,14);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_99.setTransform(-22.3,14);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgpBNIgCgSIALACQAHAAAEgCIAGgGIAGgPIACgFIgshwIAVAAIAYBCIAGAZQADgMAFgMIAYhDIAUAAIgsByIgIAaQgGAKgGAEQgHAFgJAAQgGAAgHgDg");
	this.shape_100.setTransform(-39.6,16.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_101.setTransform(-51.4,14.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_102.setTransform(-66.6,13.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_103.setTransform(-87.5,14);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_104.setTransform(-99.1,14);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_105.setTransform(-114.3,13.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_106.setTransform(-129.7,14);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAHgMAGgEQADgEAIAAQAJAAAKAGIgHASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_107.setTransform(-138.5,13.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_108.setTransform(-146,12);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_109.setTransform(-155.4,13.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_110.setTransform(-167.6,14);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_111.setTransform(-178.9,14);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_112.setTransform(-190.9,13.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_113.setTransform(-203.1,14);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_114.setTransform(159.7,-12.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_115.setTransform(148.1,-12.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_116.setTransform(135.9,-12.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAHQgFAIgHAEg");
	this.shape_117.setTransform(120.6,-6.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_118.setTransform(111.4,-12.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AglBBQgPgPAAgeQAAgdASgPQAOgNAUAAQAXAAAPAPQAPAPAAAaQAAAWgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXgLQgJALAAAUQAAAXAJALQAKAKANAAQAOAAAKgLQAJgLAAgWQAAgUgJgKQgKgLgOAAQgNAAgKAKgAgJgxIAMgeIAZAAIgXAeg");
	this.shape_119.setTransform(99.2,-14.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_120.setTransform(90.6,-14.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_121.setTransform(83,-12.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAGAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_122.setTransform(71,-12.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_123.setTransform(59.8,-12.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_124.setTransform(51.5,-14.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QANgQAQABQALAAAJADQAKAFAGAIQAGAHADALQAEAJAAAMQAAAdgOAQQgPARgUgBQgSAAgMgRgAgVgKQgKAKAAATQAAAUAGAKQAJAOAQAAQAKAAAKgLQAJgKAAgWQAAgVgJgKQgIgLgMAAQgMAAgJAMg");
	this.shape_125.setTransform(43.2,-14.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_126.setTransform(30.6,-12.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAJAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_127.setTransform(12.3,-12.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAHAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_128.setTransform(3.4,-12.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_129.setTransform(-4.1,-14.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_130.setTransform(-12.8,-12.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_131.setTransform(-24.4,-12.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_132.setTransform(-36.7,-12.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_133.setTransform(-48.9,-12.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_134.setTransform(-66.7,-12.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_135.setTransform(-78.3,-12.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_136.setTransform(-93.5,-12.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_137.setTransform(-108.9,-12.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_138.setTransform(-117.7,-12.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_139.setTransform(-128.5,-12.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_140.setTransform(-137.1,-14.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_141.setTransform(-145.6,-12.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_142.setTransform(-157.2,-12.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_143.setTransform(-168.9,-12.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_144.setTransform(-177.7,-12.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_145.setTransform(180.6,-39.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_146.setTransform(171.6,-41.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_147.setTransform(156.1,-39.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_148.setTransform(147.5,-41.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgHAAQgHAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_149.setTransform(136.3,-39.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_150.setTransform(125.5,-39.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgwBQIAAicIASAAIAAAPQAGgJAHgFQAJgDAIAAQAPAAALAHQAMAIAFANQAGAOAAAQQAAARgGANQgHANgMAIQgMAHgMAAQgJAAgHgDQgIgFgEgGIAAA4gAgVg0QgJALAAAXQAAATAJALQAIAKANAAQALAAAJgKQAKgLAAgVQgBgWgIgKQgJgLgMAAQgLgBgKAMg");
	this.shape_151.setTransform(113.6,-37.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_152.setTransform(94.9,-39.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_153.setTransform(86.4,-41.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_154.setTransform(81.2,-39.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_155.setTransform(74.1,-41.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAIADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQAMAAAJgKQAJgKAAgVQAAgWgJgKQgIgLgOAAQgLAAgIAKg");
	this.shape_156.setTransform(65.2,-41.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_157.setTransform(53.3,-39.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_158.setTransform(41,-39.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_159.setTransform(32.2,-39.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_160.setTransform(15.3,-39.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_161.setTransform(3.7,-39.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_162.setTransform(-14,-39.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_163.setTransform(-26.3,-39.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_164.setTransform(-44.6,-39.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_165.setTransform(-56.9,-39);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgSABgPgRQgPgQAAgaQAAgRAGgOQAGgOAMgGQALgIANABQATAAAMARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAKALQAIALALAAQANAAAIgKQAJgLAAgSQAAgYgJgLQgJgMgNABQgKAAgJALg");
	this.shape_166.setTransform(-69.5,-37.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_167.setTransform(-87.5,-39.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_168.setTransform(-99.7,-39.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_169.setTransform(-112,-39.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_170.setTransform(-123.6,-39.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_171.setTransform(-131.8,-39.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_172.setTransform(-142.6,-39.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgwBQIAAicIASAAIAAAPQAGgJAHgFQAJgDAIAAQAQAAAKAHQAMAIAFANQAGAOAAAQQAAARgGANQgHANgMAIQgMAHgMAAQgIAAgIgDQgIgFgFgGIAAA4gAgVg0QgJALAAAXQgBATAKALQAIAKANAAQALAAAJgKQAKgLAAgVQgBgWgIgKQgJgLgMAAQgLgBgKAMg");
	this.shape_173.setTransform(-154.5,-37.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_174.setTransform(-173.2,-39.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_175.setTransform(-185.4,-39.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_176.setTransform(-197.7,-39);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_177.setTransform(190.9,-65.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_178.setTransform(179.3,-65.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_179.setTransform(170.5,-65.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_180.setTransform(159.7,-65.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_181.setTransform(141.4,-65.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_182.setTransform(129.1,-65.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAeBQIAAg4QgFAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAHgOQAFgOAMgGQALgIANABQAUAAALARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAJALQAKALALAAQAMAAAIgKQAKgLgBgSQABgYgKgLQgJgMgNABQgLAAgIALg");
	this.shape_183.setTransform(116.5,-63.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_184.setTransform(98.5,-65.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_185.setTransform(85.9,-67.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_186.setTransform(68.5,-65.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_187.setTransform(56.9,-65.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_188.setTransform(48.1,-65.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_189.setTransform(37.3,-65.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_190.setTransform(24.7,-63.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_191.setTransform(12.8,-65.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_192.setTransform(1.2,-65.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_193.setTransform(-13.1,-65.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_194.setTransform(-23.9,-65.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_195.setTransform(-32.9,-67.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_196.setTransform(-41.6,-65.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_197.setTransform(-53.2,-65.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_198.setTransform(-71,-65.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_199.setTransform(-82.6,-65.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_200.setTransform(-97.8,-65.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_201.setTransform(-113.2,-65.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QANgQAQABQALAAAJADQAKAFAGAIQAGAHADALQAEAJAAAMQAAAdgOAQQgPARgUgBQgSAAgMgRgAgVgKQgKAKAAATQAAAUAGAKQAJAOAQAAQAKAAAKgLQAJgKAAgWQAAgVgJgKQgIgLgMAAQgMAAgJAMg");
	this.shape_202.setTransform(-125.1,-67.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_203.setTransform(-137.7,-65.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_204.setTransform(-146.7,-67.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_205.setTransform(-152.3,-67.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_206.setTransform(-160.3,-65.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_207.setTransform(-171.9,-65.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_208.setTransform(-183.2,-65.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_209.setTransform(-195.2,-65.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_210.setTransform(-207.4,-65.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAHQgFAIgHAEg");
	this.shape_211.setTransform(155.5,-86.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_212.setTransform(146.9,-92.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAIgGQAHgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_213.setTransform(135.3,-92.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_214.setTransform(123,-92.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_215.setTransform(110.8,-92.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_216.setTransform(102.2,-94.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_217.setTransform(94.6,-92.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_218.setTransform(83.6,-92.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_219.setTransform(71.6,-92.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_220.setTransform(62.8,-92.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_221.setTransform(55.3,-94.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_222.setTransform(46.5,-92.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_223.setTransform(34.9,-92.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_224.setTransform(26.4,-94.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_225.setTransform(15.1,-92.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_226.setTransform(8,-94.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_227.setTransform(-0.6,-92.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_228.setTransform(-13.2,-90);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_229.setTransform(-25.1,-92.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_230.setTransform(-36.7,-92.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_231.setTransform(-53.8,-92.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_232.setTransform(-65.4,-92.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QAMgQASABQAKAAAKADQAJAFAGAIQAGAHAEALQADAJAAAMQAAAdgPAQQgOARgUgBQgTAAgLgRgAgVgKQgKAKAAATQABAUAFAKQAKAOAPAAQALAAAJgLQAJgKAAgWQAAgVgIgKQgKgLgLAAQgMAAgJAMg");
	this.shape_233.setTransform(-77.3,-94.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_234.setTransform(-89.9,-92.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_235.setTransform(-101.6,-92.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_236.setTransform(-119.3,-92.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_237.setTransform(-131.6,-92.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAeBQIAAg4QgFAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAHgOQAFgOALgGQAMgIANABQAUAAAMARIAAgPIARAAIAACcgAgTg0QgJAKAAAWQAAAUAJALQAKALALAAQAMAAAJgKQAJgLAAgSQAAgYgJgLQgKgMgNABQgLAAgIALg");
	this.shape_238.setTransform(-144.1,-90.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_239.setTransform(-158.4,-94.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgeBLQgPgHgHgMQgJgNAAgPIAUgCQABAMAFAHQAFAIALAFQALAEALAAQAMAAAJgDQAJgEAFgGQAEgGAAgIQAAgHgEgFQgEgGgLgEQgFgCgVgFQgVgGgJgCQgLgGgFgJQgGgJAAgLQAAgLAGgLQAIgKAMgGQANgFAQAAQAQAAAOAGQAMAFAIALQAHALAAAOIgTACQgCgPgJgIQgKgIgRAAQgRAAgKAHQgIAHAAAKQAAAJAGAFQAGAGAYAFQAZAGAKAEQANAFAHAJQAGAKAAANQAAAMgHAMQgHALgOAGQgNAGgRAAQgUAAgOgGg");
	this.shape_240.setTransform(-168.2,-94.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("EgksAXbMAAAgu2MBJZAAAMAAAAu2g");
	this.shape_241.setTransform(-3,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.9,-135,470,328);


(lib.carta3abierta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape.setTransform(56.3,120.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_1.setTransform(44.7,120.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_2.setTransform(29.5,120);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_3.setTransform(14.1,120.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_4.setTransform(5.3,120);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_5.setTransform(-5.5,120.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAPAAALAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgNAIQgLAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQAAATAJALQAKAKAMAAQALAAAJgKQAJgLAAgVQABgWgKgKQgJgLgLAAQgMgBgJAMg");
	this.shape_6.setTransform(-17.4,122.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_7.setTransform(-29.4,120.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_8.setTransform(-41,120.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_9.setTransform(-59.3,120.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJBOIAAiJIg0AAIAAgSIB7AAIAAASIg0AAIAACJg");
	this.shape_10.setTransform(-72.1,118);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_11.setTransform(46.7,98.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFALAAQAJAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_12.setTransform(37.4,93.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_13.setTransform(28.8,91.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_14.setTransform(23.6,93.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_15.setTransform(12.9,93.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_16.setTransform(4,93.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_17.setTransform(-3.5,91.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_18.setTransform(-12.8,93.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_19.setTransform(-25.1,93.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_20.setTransform(-36.3,93.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_21.setTransform(-48.3,93.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_22.setTransform(-60.6,93.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAJAAAIgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_23.setTransform(159.1,67.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_24.setTransform(150.3,66.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_25.setTransform(139.5,67.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAOAAAMAHQAKAIAHANQAFAOAAAQQAAARgGANQgHANgLAIQgMAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQABATAIALQAKAKAMAAQALAAAJgKQAJgLAAgVQABgWgKgKQgJgLgLAAQgMgBgJAMg");
	this.shape_26.setTransform(127.6,69.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAHAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_27.setTransform(112.3,66.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_28.setTransform(101.6,67.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_29.setTransform(89.9,67.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_30.setTransform(78.3,67.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_31.setTransform(69.5,66.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_32.setTransform(58.4,69.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_33.setTransform(46.5,67.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAHAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_34.setTransform(37.6,66.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_35.setTransform(20.8,67.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_36.setTransform(8.5,67.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAeBQIAAg4QgFAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAHgOQAFgOAMgGQALgIANABQAUAAALARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAJALQAKALALAAQAMAAAIgKQAKgLgBgSQABgYgKgLQgJgMgNABQgLAAgIALg");
	this.shape_37.setTransform(-4.1,69.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_38.setTransform(-21.5,67.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_39.setTransform(-33.1,67.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_40.setTransform(-45.3,66.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_41.setTransform(-57.6,67.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_42.setTransform(-66.1,64.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_43.setTransform(-71.5,65.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAHQgFAIgHAEg");
	this.shape_44.setTransform(-83.8,73.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMAAAKgKQAIgKABgVQgBgWgIgKQgKgLgNAAQgLAAgIAKg");
	this.shape_45.setTransform(-93.4,65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_46.setTransform(-105.3,67.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_47.setTransform(-114.3,65.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_48.setTransform(-119.9,64.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_49.setTransform(-131.5,66.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_50.setTransform(-153,67.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_51.setTransform(-161.6,64.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_52.setTransform(-176.2,67.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_53.setTransform(181.8,40.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAIAAAJADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQANAAAJgKQAIgKABgVQgBgWgIgKQgJgLgOAAQgLAAgIAKg");
	this.shape_54.setTransform(169.2,38.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_55.setTransform(161,38.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_56.setTransform(152.4,40.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_57.setTransform(141.2,40.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_58.setTransform(123.1,40.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAbBOIAAhIQgBgNgGgGQgGgHgLAAQgHAAgIAFQgHAEgEAIQgCAFAAAOIAAA+IgUAAIAAibIAUAAIAAA4QANgPASAAQANAAAKAFQAJAFAEAIQAEAJAAAPIAABIg");
	this.shape_59.setTransform(110.9,38.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_60.setTransform(92.5,40.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_61.setTransform(80.2,40.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAGgOQAGgOALgGQAMgIANABQAUAAAMARIAAgPIARAAIAACcgAgTg0QgJAKAAAWQAAAUAKALQAJALAKAAQANAAAJgKQAIgLABgSQgBgYgIgLQgKgMgNABQgKAAgJALg");
	this.shape_62.setTransform(67.6,42.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_63.setTransform(49.6,40.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_64.setTransform(40.6,38.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_65.setTransform(31.9,40.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_66.setTransform(20.3,40.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAOAAAMAHQALAIAGANQAFAOAAAQQAAARgGANQgHANgLAIQgMAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQABATAIALQAKAKAMAAQALAAAJgKQAJgLAAgVQABgWgKgKQgJgLgLAAQgMgBgJAMg");
	this.shape_67.setTransform(8.4,42.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_68.setTransform(-10.3,40.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_69.setTransform(-22.6,40.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_70.setTransform(-40.9,40.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAIAAAJADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQANAAAJgKQAIgKABgVQgBgWgIgKQgJgLgOAAQgLAAgIAKg");
	this.shape_71.setTransform(-53.5,38.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_72.setTransform(-71.5,40.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgUBkIADgRIAJABQAGAAACgDQACgFAAgPIAAh2IATAAIAAB2QAAAWgFAIQgHALgOgBQgIAAgHgBgAAChOIAAgXIATAAIAAAXg");
	this.shape_73.setTransform(-81.3,40.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_74.setTransform(-88.7,40.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QANgQAQABQALAAAKADQAJAFAGAIQAGAHADALQAEAJAAAMQAAAdgPAQQgOARgUgBQgSAAgMgRgAgVgKQgJAKAAATQgBAUAGAKQAJAOAQAAQAKAAAKgLQAJgKAAgWQAAgVgIgKQgJgLgMAAQgMAAgJAMg");
	this.shape_75.setTransform(-100.6,38.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_76.setTransform(-113.2,40.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMAAAKgKQAIgKABgVQgBgWgIgKQgKgLgNAAQgLAAgIAKg");
	this.shape_77.setTransform(-125.8,38.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_78.setTransform(-143.8,40.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_79.setTransform(-152.8,38.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_80.setTransform(-162.1,40.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_81.setTransform(-174.4,40.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_82.setTransform(-186.7,40.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAJAAQAPAAAMAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgMAIQgMAHgNAAQgJAAgHgDQgHgFgFgGIAAA4gAgVg0QgKALAAAXQABATAIALQAJAKANAAQALAAAJgKQAJgLAAgVQABgWgKgKQgIgLgMAAQgLgBgKAMg");
	this.shape_83.setTransform(-198.5,42.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_84.setTransform(186.6,11.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_85.setTransform(178.1,14);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAKgKQAJgKAAgVQAAgWgJgKQgKgLgNAAQgLAAgJAKg");
	this.shape_86.setTransform(165.5,11.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_87.setTransform(147.5,14);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_88.setTransform(138.9,11.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_89.setTransform(131.3,14);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_90.setTransform(123,11.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_91.setTransform(114.4,13.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_92.setTransform(105.9,11.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_93.setTransform(94.8,11.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_94.setTransform(86.3,14);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_95.setTransform(67.9,14);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_96.setTransform(59.1,13.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_97.setTransform(51.6,12);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_98.setTransform(42.2,13.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAIgGQAHgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_99.setTransform(30,14);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_100.setTransform(17.7,14.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_101.setTransform(6.5,14);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_102.setTransform(-5.5,13.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_103.setTransform(-17.8,14);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_104.setTransform(-36.1,14);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_105.setTransform(-47.8,14);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_106.setTransform(-65.5,14);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_107.setTransform(-74.5,12);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_108.setTransform(-83.2,14);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_109.setTransform(-94.8,14);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAIQgEAHgIAEg");
	this.shape_110.setTransform(-110.1,20.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_111.setTransform(-119.3,13.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AglBBQgPgPAAgeQAAgdASgPQAOgNAUAAQAXAAAPAPQAPAPAAAaQAAAWgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXgLQgJALAAAUQAAAXAJALQAKAKANAAQAOAAAKgLQAJgLAAgWQAAgUgJgKQgKgLgOAAQgNAAgKAKgAgJgxIAMgeIAZAAIgXAeg");
	this.shape_112.setTransform(-131.5,11.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_113.setTransform(-140.1,11.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_114.setTransform(-147.7,14);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_115.setTransform(-159.7,14);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_116.setTransform(-170.9,14);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_117.setTransform(-179.2,11.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QAMgQASABQAKAAAJADQAKAFAGAIQAGAHAEALQADAJAAAMQAAAdgOAQQgPARgUgBQgSAAgMgRgAgVgKQgKAKAAATQABAUAFAKQAKAOAPAAQALAAAJgLQAJgKAAgWQAAgVgJgKQgJgLgLAAQgMAAgJAMg");
	this.shape_118.setTransform(-187.5,11.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_119.setTransform(-200.1,14.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAJAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_120.setTransform(167.1,-12.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAHAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_121.setTransform(158.2,-12.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_122.setTransform(150.7,-14.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_123.setTransform(142,-12.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_124.setTransform(130.4,-12.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_125.setTransform(118.1,-12.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_126.setTransform(105.9,-12.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgpBHQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgEAHgDIASgCQAWgDAKgEIAAgFQABgKgGgEQgHgHgOAAQgMAAgHAFQgGAFgEALIgSgCQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABAQIAAAZQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAcQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgIQgKAFgTADgAgJgxIAMgeIAZAAIgXAeg");
	this.shape_127.setTransform(87.5,-14.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_128.setTransform(78.5,-14.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_129.setTransform(69.8,-12.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_130.setTransform(58.2,-12.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_131.setTransform(39.8,-12.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_132.setTransform(27.5,-12.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAGgOQAGgOALgGQAMgIANABQAUAAAMARIAAgPIARAAIAACcgAgTg0QgJAKAAAWQAAAUAKALQAJALAKAAQANAAAJgKQAIgLABgSQgBgYgIgLQgKgMgNABQgKAAgJALg");
	this.shape_133.setTransform(15,-10.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAJAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_134.setTransform(-3,-12.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_135.setTransform(-11.6,-14.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_136.setTransform(-26.3,-12.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_137.setTransform(-38.5,-12.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_138.setTransform(-56.9,-12.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_139.setTransform(-65.9,-14.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_140.setTransform(-71.8,-12.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_141.setTransform(-82.6,-12.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_142.setTransform(-93.8,-12.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAJAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_143.setTransform(-111.9,-12.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_144.setTransform(-124.2,-12.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_145.setTransform(-136.5,-12.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_146.setTransform(-154.8,-12.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_147.setTransform(-163.8,-14.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_148.setTransform(-169.5,-14.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_149.setTransform(-178,-12.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgPBPIAAhhIgRAAIAAgOIARAAIAAgNQAAgLACgGQADgIAHgEQAFgFANABQAIAAAKACIgDAQIgMgBQgIAAgEAEQgEAEAAAKIAAALIAXAAIAAAOIgXAAIAABhg");
	this.shape_150.setTransform(-186.6,-14.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_151.setTransform(168.9,-39.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_152.setTransform(157.7,-39.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_153.setTransform(145.7,-39.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAbBOIAAhIQAAgNgHgGQgGgHgMAAQgGAAgIAFQgHAEgEAIQgCAFAAAOIAAA+IgUAAIAAibIAUAAIAAA4QANgPATAAQAMAAAJAFQAKAFAEAIQAEAJAAAPIAABIg");
	this.shape_154.setTransform(133.5,-41.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_155.setTransform(115.1,-39.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_156.setTransform(106.5,-41.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_157.setTransform(97.9,-39.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_158.setTransform(86.3,-39.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_159.setTransform(69.2,-39.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_160.setTransform(57.6,-39.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_161.setTransform(45.3,-39.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_162.setTransform(36.5,-39.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEABAFQgBAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_163.setTransform(25.7,-39.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_164.setTransform(16.9,-39.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_165.setTransform(9.4,-41.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_166.setTransform(0,-39.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_167.setTransform(-12.2,-39.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_168.setTransform(-23.5,-39.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_169.setTransform(-35.5,-39.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_170.setTransform(-47.7,-39.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_171.setTransform(-66.1,-39.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAJAFAFAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_172.setTransform(-78.7,-41.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_173.setTransform(-96.7,-39.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_174.setTransform(-107.9,-39.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_175.setTransform(-116.5,-39.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_176.setTransform(-127.3,-39.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_177.setTransform(-138.5,-39.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_178.setTransform(-156,-39.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_179.setTransform(-167.6,-39.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_180.setTransform(-182.9,-39.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_181.setTransform(188.4,-65.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_182.setTransform(176.8,-65.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_183.setTransform(167.8,-67.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_184.setTransform(159.1,-65.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_185.setTransform(147.5,-65.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgxA4IAAgPIBHhSIgWABIgtAAIAAgPIBbAAIAAAMIg7BGIgNAOIAZgBIAzAAIAAAQg");
	this.shape_186.setTransform(129.8,-65.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_187.setTransform(118.1,-65.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_188.setTransform(106.6,-65.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAJAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_189.setTransform(88.8,-65.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAIAAAIADQAJAFAEAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQANAAAJgKQAIgKABgVQgBgWgIgKQgJgLgOAAQgLAAgIAKg");
	this.shape_190.setTransform(76.2,-67.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_191.setTransform(64.3,-65.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_192.setTransform(53,-65.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAHQgFAIgHAEg");
	this.shape_193.setTransform(38,-59.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_194.setTransform(29.4,-65.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_195.setTransform(17.8,-65.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_196.setTransform(5.6,-65.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_197.setTransform(-6.7,-65.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_198.setTransform(-15.2,-67.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_199.setTransform(-22.8,-65.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_200.setTransform(-33.8,-65.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_201.setTransform(-45.9,-65.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_202.setTransform(-54.7,-65.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_203.setTransform(-62.2,-67.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_204.setTransform(-70.9,-65.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_205.setTransform(-82.5,-65.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_206.setTransform(-91.1,-67.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_207.setTransform(-105.2,-65.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_208.setTransform(-116.8,-65.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_209.setTransform(-125.4,-67.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_210.setTransform(-140,-65.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAIADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQAMAAAJgKQAJgKAAgVQAAgWgJgKQgIgLgOAAQgLAAgIAKg");
	this.shape_211.setTransform(-152.6,-67.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_212.setTransform(-160.8,-67.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_213.setTransform(-169.5,-65.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_214.setTransform(-182,-63.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_215.setTransform(-193.9,-65.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_216.setTransform(-205.6,-65.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_217.setTransform(157.2,-92.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAJAAAIgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_218.setTransform(145.6,-92.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAaBOIAAhIQAAgNgFgGQgHgHgLAAQgHAAgHAFQgIAEgDAIQgEAFAAAOIAAA+IgTAAIAAibIATAAIAAA4QAOgPASAAQANAAAJAFQAKAFAEAIQAEAJAAAPIAABIg");
	this.shape_219.setTransform(133.4,-94.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_220.setTransform(115.6,-92.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_221.setTransform(104,-92.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_222.setTransform(91.7,-92.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAeBQIAAg4QgFAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAHgOQAFgOAMgGQALgIANABQAUAAALARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAJALQAKALALAAQAMAAAIgKQAKgLgBgSQABgYgKgLQgJgMgNABQgLAAgIALg");
	this.shape_223.setTransform(79.2,-90.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_224.setTransform(61.2,-92.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_225.setTransform(42.8,-92.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAJAFAFAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_226.setTransform(30.2,-94.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_227.setTransform(22,-94.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QAMgQASABQAKAAAJADQAKAFAGAIQAGAHAEALQADAJAAAMQAAAdgOAQQgPARgUgBQgTAAgLgRgAgVgKQgKAKAAATQABAUAFAKQAKAOAPAAQAKAAAKgLQAJgKAAgWQAAgVgJgKQgJgLgLAAQgMAAgJAMg");
	this.shape_228.setTransform(13.8,-94.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAHgGQAIgFAEgMIAVACQgFARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_229.setTransform(1.2,-92.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAIAAAJADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAKAKAKAAQANAAAIgKQAJgKAAgVQAAgWgJgKQgIgLgOAAQgLAAgJAKg");
	this.shape_230.setTransform(-11.4,-94.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_231.setTransform(-28.8,-92.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_232.setTransform(-40.4,-92.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgRBPIAAhwIARAAIAABwgAgSgwIAOgeIAXAAIgVAeg");
	this.shape_233.setTransform(-54.7,-94.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_234.setTransform(-64.9,-92.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgSABgPgRQgPgQAAgaQAAgRAGgOQAGgOALgGQAMgIANABQAUAAALARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAKALQAIALALAAQANAAAIgKQAJgLAAgSQAAgYgJgLQgJgMgNABQgKAAgJALg");
	this.shape_235.setTransform(-77.5,-90.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_236.setTransform(-89.4,-92.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_237.setTransform(-107.1,-92.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_238.setTransform(-118.7,-92.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_239.setTransform(-127.7,-94.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_240.setTransform(-136.5,-92.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_241.setTransform(-148.1,-92.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_242.setTransform(-162.7,-94.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgeBLQgPgHgHgMQgJgNAAgPIATgCQACAMAFAHQAFAIALAFQALAEALAAQAMAAAJgDQAJgEAFgGQAEgGAAgIQAAgHgEgFQgFgGgKgEQgFgCgVgFQgVgGgJgCQgLgGgGgJQgFgJAAgLQAAgLAGgLQAHgKANgGQANgFAQAAQAQAAANAGQANAFAIALQAHALAAAOIgUACQgBgPgJgIQgJgIgSAAQgSAAgIAHQgJAHAAAKQAAAJAGAFQAGAGAYAFQAZAGAKAEQANAFAGAJQAHAKAAANQAAAMgHAMQgHALgNAGQgOAGgRAAQgUAAgOgGg");
	this.shape_243.setTransform(-172.5,-94.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("EgksAXbMAAAgu2MBJZAAAMAAAAu2g");
	this.shape_244.setTransform(-3,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.9,-135,470,328);


(lib.carta2abierta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape.setTransform(56.3,93.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_1.setTransform(44.7,93.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_2.setTransform(29.5,93.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_3.setTransform(14.1,93.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_4.setTransform(5.3,93.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_5.setTransform(-5.5,93.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAPAAALAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgNAIQgLAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQAAATAJALQAKAKAMAAQALAAAJgKQAJgLAAgVQABgWgKgKQgJgLgLAAQgMgBgJAMg");
	this.shape_6.setTransform(-17.4,95.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_7.setTransform(-29.4,93.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_8.setTransform(-41,93.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_9.setTransform(-59.3,93.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJBOIAAiJIg0AAIAAgSIB7AAIAAASIg0AAIAACJg");
	this.shape_10.setTransform(-72.1,91.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_11.setTransform(125,71.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_12.setTransform(115.7,67.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_13.setTransform(106.7,65.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_14.setTransform(100.8,66.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_15.setTransform(90,67.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_16.setTransform(78.8,67.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_17.setTransform(60.7,67.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_18.setTransform(52.1,64.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_19.setTransform(37.4,67.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAbBNIAAhFQAAgKgDgFQgCgHgGgDQgFgDgIgBQgKABgJAHQgJAIAAAUIAAA+IgUAAIAAhvIASAAIAAAPQAMgSAWAAQAKAAAJAEQAJADAEAHQAEAFACAIIABASIAABFgAgfgzQAAgMAGgGQAGgHAKAAQAGAAAKAGQAGADAEAAQADAAACgBQACgDABgGIAOAAQgBANgFAGQgGAGgJAAQgHAAgLgGQgFgEgEABQgDAAgDACQgCADAAAFg");
	this.shape_20.setTransform(25.2,65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_21.setTransform(12.9,67.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAKgKQAJgKAAgVQAAgWgJgKQgKgLgNAAQgLAAgJAKg");
	this.shape_22.setTransform(0.3,65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_23.setTransform(-17.7,67.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_24.setTransform(-29.3,67.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_25.setTransform(-47,67.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_26.setTransform(-59.3,67.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAGgOQAGgOALgGQAMgIANABQAUAAAMARIAAgPIARAAIAACcgAgTg0QgJAKAAAWQAAAUAKALQAJALAKAAQANAAAJgKQAIgLABgSQgBgYgIgLQgKgMgNABQgKAAgJALg");
	this.shape_27.setTransform(-71.9,69.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_28.setTransform(-89.9,67.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAIAAAIADQAJAFAEAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQANAAAJgKQAIgKABgVQgBgWgIgKQgJgLgOAAQgLAAgIAKg");
	this.shape_29.setTransform(-102.5,65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_30.setTransform(-114.4,67.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_31.setTransform(-126.7,67.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAPAAALAHQAKAIAGANQAGAOAAAQQAAARgGANQgHANgMAIQgMAHgMAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQAAATAJALQAKAKAMAAQALAAAJgKQAKgLAAgVQAAgWgJgKQgKgLgLAAQgMgBgJAMg");
	this.shape_32.setTransform(-138.5,69.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_33.setTransform(185.5,40.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_34.setTransform(173.2,40.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAeBQIAAg4QgFAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAHgOQAFgOAMgGQALgIANABQAUAAAMARIAAgPIARAAIAACcgAgTg0QgJAKAAAWQAAAUAJALQAKALALAAQAMAAAIgKQAKgLAAgSQAAgYgKgLQgJgMgNABQgLAAgIALg");
	this.shape_35.setTransform(160.6,42.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_36.setTransform(152.1,40.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_37.setTransform(141.4,40.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgwBQIAAicIASAAIAAAPQAGgJAHgFQAJgDAIAAQAQAAAKAHQAMAIAFANQAGAOAAAQQAAARgGANQgHANgMAIQgMAHgMAAQgIAAgIgDQgIgFgFgGIAAA4gAgVg0QgJALAAAXQgBATAKALQAIAKANAAQALAAAJgKQAKgLAAgVQgBgWgIgKQgJgLgMAAQgLgBgKAMg");
	this.shape_38.setTransform(129.5,42.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_39.setTransform(110.8,40.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_40.setTransform(101.8,38.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_41.setTransform(92.4,40.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgHgEgHAAQgGAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_42.setTransform(83.6,40.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_43.setTransform(72.8,40.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_44.setTransform(61.2,40.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_45.setTransform(49.6,40.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_46.setTransform(40.7,40.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAPAAALAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgNAIQgLAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQAAATAJALQAKAKAMAAQALAAAJgKQAKgLgBgVQABgWgKgKQgJgLgLAAQgMgBgJAMg");
	this.shape_47.setTransform(30.3,42.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_48.setTransform(17.7,40.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAHQgFAIgHAEg");
	this.shape_49.setTransform(2.5,46.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_50.setTransform(-6.7,40.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_51.setTransform(-15.6,40.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_52.setTransform(-26.3,40.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_53.setTransform(-35.3,38.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_54.setTransform(-44.7,40.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_55.setTransform(-53.5,40.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgHgEgHAAQgGAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_56.setTransform(-60.9,40.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_57.setTransform(-71.6,40.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_58.setTransform(-82.9,40.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_59.setTransform(-101,40.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_60.setTransform(-109.6,38.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_61.setTransform(-124.2,40.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_62.setTransform(-136.8,38.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_63.setTransform(-148.7,40.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAJAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_64.setTransform(-161,40.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgxA4IAAgPIBGhSIgVABIgtAAIAAgPIBbAAIAAAMIg8BGIgLAOIAYgBIAzAAIAAAQg");
	this.shape_65.setTransform(-172.5,40.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_66.setTransform(-184.3,40.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_67.setTransform(-193.1,40.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_68.setTransform(-202.8,40.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_69.setTransform(161,14);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_70.setTransform(152,12);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_71.setTransform(143.3,14);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_72.setTransform(131.7,14);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgOAAQgMAAgJAJg");
	this.shape_73.setTransform(113.3,14);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_74.setTransform(101,14.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgSABgPgRQgPgQAAgaQAAgRAHgOQAFgOAMgGQALgIANABQATAAAMARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAKALQAIALAMAAQAMAAAIgKQAJgLAAgSQAAgYgJgLQgJgMgNABQgKAAgJALg");
	this.shape_75.setTransform(88.5,16);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_76.setTransform(70.5,14);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_77.setTransform(58.2,14.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_78.setTransform(45.6,16.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_79.setTransform(33.7,14);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_80.setTransform(19,11.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_81.setTransform(10.5,14);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAIAAAIADQAJAFAEAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQANAAAJgKQAIgKABgVQgBgWgIgKQgJgLgOAAQgLAAgIAKg");
	this.shape_82.setTransform(-2.1,11.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_83.setTransform(-20.1,14);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgUBkIADgRIAJABQAGAAACgDQACgFAAgPIAAh2IATAAIAAB2QAAAWgFAIQgHALgOgBQgIABgHgCgAAChOIAAgXIATAAIAAAXg");
	this.shape_84.setTransform(-29.9,14.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_85.setTransform(-37.3,14);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QAMgQARABQALAAAKADQAJAFAGAIQAGAHADALQAEAJAAAMQAAAdgPAQQgOARgUgBQgSAAgMgRgAgVgKQgJAKAAATQgBAUAGAKQAKAOAPAAQAKAAAKgLQAJgKAAgWQAAgVgIgKQgJgLgMAAQgMAAgJAMg");
	this.shape_86.setTransform(-49.2,11.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_87.setTransform(-61.8,14);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAKgKQAJgKAAgVQAAgWgJgKQgKgLgNAAQgLAAgJAKg");
	this.shape_88.setTransform(-74.4,11.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_89.setTransform(-92.4,14);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_90.setTransform(-101.2,13.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_91.setTransform(-108.7,12);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_92.setTransform(-118.1,13.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_93.setTransform(-130.3,14);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_94.setTransform(-142.6,14.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_95.setTransform(-153.8,14);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_96.setTransform(-165.8,13.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_97.setTransform(-178.1,14);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_98.setTransform(145,-12.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_99.setTransform(133.3,-12.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_100.setTransform(115.6,-12.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_101.setTransform(106.6,-14.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_102.setTransform(97.9,-12.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_103.setTransform(86.3,-12.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAHQgFAIgHAEg");
	this.shape_104.setTransform(71,-6.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_105.setTransform(62.4,-12.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_106.setTransform(50.8,-12.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_107.setTransform(38.6,-12.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_108.setTransform(26.3,-12.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_109.setTransform(17.8,-14.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_110.setTransform(10.2,-12.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_111.setTransform(-0.8,-12.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_112.setTransform(-12.9,-12.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_113.setTransform(-21.7,-12.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_114.setTransform(-29.2,-14.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_115.setTransform(-37.9,-12.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_116.setTransform(-49.5,-12.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_117.setTransform(-58.1,-14.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_118.setTransform(-72.2,-12.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_119.setTransform(-83.8,-12.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_120.setTransform(-96,-12.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_121.setTransform(-107.3,-12.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_122.setTransform(-125.4,-12.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_123.setTransform(-134.4,-14.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAHgMAGgEQADgEAIAAQAJAAAKAGIgHASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_124.setTransform(-140.3,-12.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAJAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_125.setTransform(-151.1,-12.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_126.setTransform(-162.3,-12.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAHgGQAIgFAEgMIAVACQgFARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_127.setTransform(165.9,-39.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_128.setTransform(156.9,-41.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_129.setTransform(147.5,-39.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAIgGQAHgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_130.setTransform(135.3,-39.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_131.setTransform(126.7,-41.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_132.setTransform(118.1,-39);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_133.setTransform(105.5,-36.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_134.setTransform(97.3,-41.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_135.setTransform(89.3,-39.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_136.setTransform(71.6,-39.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_137.setTransform(63,-41.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_138.setTransform(51.8,-39.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_139.setTransform(41,-39.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_140.setTransform(32.2,-39.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_141.setTransform(24.7,-41.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_142.setTransform(15.3,-39.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_143.setTransform(3.1,-39.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_144.setTransform(-8.2,-39.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_145.setTransform(-20.2,-39.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_146.setTransform(-32.4,-39.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_147.setTransform(-50.8,-39.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_148.setTransform(-63.1,-39);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAeBQIAAg4QgFAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAHgOQAFgOAMgGQALgIANABQAUAAALARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAJALQAKALALAAQAMAAAIgKQAKgLgBgSQABgYgKgLQgJgMgNABQgLAAgIALg");
	this.shape_149.setTransform(-75.6,-37.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_150.setTransform(-93,-39.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_151.setTransform(-104.6,-39.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_152.setTransform(-116.9,-39.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_153.setTransform(-129.1,-39.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_154.setTransform(-137.7,-41.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_155.setTransform(-143,-41.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_156.setTransform(-158.5,-39.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_157.setTransform(-170.8,-39);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgSABgPgRQgPgQAAgaQAAgRAGgOQAGgOAMgGQALgIANABQATAAAMARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAKALQAIALALAAQANAAAIgKQAJgLAAgSQAAgYgJgLQgJgMgNABQgKAAgJALg");
	this.shape_158.setTransform(-183.3,-37.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_159.setTransform(169.6,-65.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_160.setTransform(161,-67.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgHgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_161.setTransform(149.7,-65.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_162.setTransform(139,-65.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAPAAALAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgNAIQgLAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQAAATAJALQAKAKAMAAQALAAAJgKQAKgLAAgVQAAgWgKgKQgJgLgLAAQgMgBgJAMg");
	this.shape_163.setTransform(127.1,-63.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_164.setTransform(108.4,-65.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AglBBQgPgPAAgeQAAgdASgPQAOgNAUAAQAXAAAPAPQAPAPAAAaQAAAWgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXgLQgJALAAAUQAAAXAJALQAKAKANAAQAOAAAKgLQAJgLAAgWQAAgUgJgKQgKgLgOAAQgNAAgKAKgAgJgxIAMgeIAZAAIgXAeg");
	this.shape_165.setTransform(96.1,-67.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_166.setTransform(87.6,-67.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_167.setTransform(80,-65.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_168.setTransform(68,-65.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_169.setTransform(56.7,-65.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_170.setTransform(48.4,-67.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QANgQAQABQALAAAJADQAKAFAGAIQAGAHADALQAEAJAAAMQAAAdgPAQQgOARgUgBQgSAAgMgRgAgVgKQgKAKABATQgBAUAGAKQAJAOAQAAQAKAAAKgLQAJgKAAgWQAAgVgJgKQgJgLgLAAQgMAAgJAMg");
	this.shape_171.setTransform(40.2,-67.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_172.setTransform(27.5,-65.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_173.setTransform(9.2,-65.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgHAAQgHAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_174.setTransform(0.4,-65.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_175.setTransform(-7.1,-67.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_176.setTransform(-15.9,-65.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_177.setTransform(-27.5,-65.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_178.setTransform(-39.8,-65.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_179.setTransform(-52,-65.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_180.setTransform(-66.9,-65.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_181.setTransform(-77.7,-65.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAIAAAJADQAIAFAEAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAKAKAKAAQANAAAIgKQAKgKgBgVQABgWgKgKQgIgLgOAAQgLAAgJAKg");
	this.shape_182.setTransform(-90.3,-67.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_183.setTransform(-107.7,-65.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_184.setTransform(-119.3,-65.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_185.setTransform(-134.5,-65.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_186.setTransform(-149.9,-65.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_187.setTransform(-162.5,-67.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_188.setTransform(-174.4,-65.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAHgFQAJgDAIAAQAPAAALAHQALAIAHANQAFAOAAAQQAAARgGANQgGANgMAIQgMAHgNAAQgJAAgHgDQgIgFgEgGIAAA4gAgVg0QgKALAAAXQABATAIALQAJAKANAAQALAAAJgKQAJgLAAgVQAAgWgJgKQgIgLgMAAQgLgBgKAMg");
	this.shape_189.setTransform(-186.3,-63.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_190.setTransform(173.2,-92.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_191.setTransform(164.2,-94.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_192.setTransform(148.8,-92.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_193.setTransform(136.5,-92.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_194.setTransform(118.2,-92.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgYBMQgJgEgEgGQgFgFgBgJQgCgFAAgNIAAhEIAUAAIAAA9QAAAPABAFQACAHAGAFQAFAEAJABQAHgBAIgEQAHgFADgHQADgIAAgPIAAg6IAUAAIAABvIgRAAIAAgRQgOAUgVAAQgKAAgIgEgAgKgxIAMgeIAaAAIgYAeg");
	this.shape_195.setTransform(105.9,-94.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_196.setTransform(93.7,-92.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAHQgEAIgIAEg");
	this.shape_197.setTransform(78.4,-86.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgRBPIAAhwIARAAIAABwgAgSgwIAOgeIAXAAIgVAeg");
	this.shape_198.setTransform(73.3,-94.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_199.setTransform(63.1,-92.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAGgOQAGgOALgGQAMgIANABQAUAAAMARIAAgPIARAAIAACcgAgTg0QgJAKAAAWQAAAUAKALQAJALAKAAQANAAAJgKQAIgLABgSQgBgYgIgLQgKgMgNABQgKAAgJALg");
	this.shape_200.setTransform(50.5,-90.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_201.setTransform(38.6,-92.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_202.setTransform(20.3,-92.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_203.setTransform(11.3,-94.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_204.setTransform(2.5,-92.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_205.setTransform(-9.1,-92.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_206.setTransform(-21.7,-90);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_207.setTransform(-33.6,-92.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_208.setTransform(-42.2,-94.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_209.setTransform(-47.1,-94.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_210.setTransform(-61.7,-92.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_211.setTransform(-74,-92.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgSABgPgRQgPgQAAgaQAAgRAGgOQAGgOAMgGQALgIANABQATAAAMARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAKALQAIALALAAQANAAAIgKQAJgLAAgSQAAgYgJgLQgJgMgNABQgKAAgJALg");
	this.shape_212.setTransform(-86.6,-90.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_213.setTransform(-104.6,-92.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_214.setTransform(-113.4,-92.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_215.setTransform(-124.5,-90);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_216.setTransform(-136.4,-92.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_217.setTransform(-145,-94.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_218.setTransform(-153.6,-92.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_219.setTransform(-171.9,-92.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AA2BOIAAiCIgtCCIgRAAIgtiEIAACEIgUAAIAAibIAeAAIAmBtIAFAYIAJgaIAlhrIAcAAIAACbg");
	this.shape_220.setTransform(-187.2,-94.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("EgksAXbMAAAgu2MBJZAAAMAAAAu2g");
	this.shape_221.setTransform(-3,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.9,-135,470,328);


(lib.carta1abierta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape.setTransform(56.3,120.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_1.setTransform(44.7,120.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_2.setTransform(29.5,120);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_3.setTransform(14.1,120.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_4.setTransform(5.3,120);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_5.setTransform(-5.5,120.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAPAAALAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgNAIQgLAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQAAATAJALQAKAKAMAAQALAAAJgKQAJgLAAgVQABgWgKgKQgJgLgLAAQgMgBgJAMg");
	this.shape_6.setTransform(-17.4,122.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_7.setTransform(-29.4,120.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_8.setTransform(-41,120.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_9.setTransform(-59.3,120.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJBOIAAiJIg0AAIAAgSIB7AAIAAASIg0AAIAACJg");
	this.shape_10.setTransform(-72.1,118);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_11.setTransform(79.7,98.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_12.setTransform(71,93.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_13.setTransform(59.4,93.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_14.setTransform(47.1,93.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_15.setTransform(34.9,93.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_16.setTransform(26.3,91.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_17.setTransform(18.7,93.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_18.setTransform(7.7,93.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_19.setTransform(-4.3,93.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_20.setTransform(-13.1,93.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_21.setTransform(-20.6,91.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_22.setTransform(-29.4,93.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_23.setTransform(-41,93.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_24.setTransform(-49.5,91.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_25.setTransform(-63.6,93.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_26.setTransform(-75.2,93.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_27.setTransform(-90.5,93.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_28.setTransform(186,67.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAJAAAIgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_29.setTransform(174.4,67.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_30.setTransform(165.6,66.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_31.setTransform(154.8,67.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_32.setTransform(146,66.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_33.setTransform(138.5,65.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_34.setTransform(129.1,66.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_35.setTransform(116.9,67.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_36.setTransform(105.6,67.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_37.setTransform(93.6,66.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_38.setTransform(81.4,67.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_39.setTransform(63,67.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_40.setTransform(54.4,64.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_41.setTransform(49.5,64.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_42.setTransform(41,67.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_43.setTransform(22.6,66.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_44.setTransform(10.4,67.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAHQgEAIgIAEg");
	this.shape_45.setTransform(-4.9,73.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_46.setTransform(-10.7,66.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_47.setTransform(-21.4,67.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_48.setTransform(-33.7,67.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_49.setTransform(-44.9,67.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_50.setTransform(-63,67.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_51.setTransform(-75.6,65);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_52.setTransform(-93.6,67.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_53.setTransform(-102.6,65.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_54.setTransform(-112,66.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_55.setTransform(-124.3,67.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgwBQIAAicIASAAIAAAPQAGgJAHgFQAJgDAIAAQAPAAALAHQAMAIAFANQAGAOAAAQQAAARgGANQgHANgMAIQgMAHgMAAQgJAAgHgDQgIgFgEgGIAAA4gAgVg0QgJALAAAXQAAATAJALQAIAKANAAQALAAAJgKQAKgLAAgVQgBgWgIgKQgJgLgMAAQgLgBgKAMg");
	this.shape_56.setTransform(-136.1,69.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_57.setTransform(-154.8,67.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_58.setTransform(-173.2,67.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_59.setTransform(-182.2,65.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_60.setTransform(-190.9,67.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_61.setTransform(-202.5,67.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_62.setTransform(174.4,40.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_63.setTransform(162.1,40.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAeBQIAAg4QgFAGgIAFQgIADgJAAQgSABgPgRQgPgQAAgaQAAgRAHgOQAFgOAMgGQALgIANABQATAAAMARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAJALQAKALALAAQAMAAAIgKQAKgLgBgSQABgYgKgLQgJgMgNABQgKAAgJALg");
	this.shape_64.setTransform(149.6,42.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_65.setTransform(131.6,40.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_66.setTransform(122.6,38.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_67.setTransform(113.8,40.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_68.setTransform(102.2,40.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgwBQIAAicIASAAIAAAPQAGgJAHgFQAJgDAIAAQAQAAAKAHQAMAIAFANQAGAOAAAQQAAARgGANQgHANgMAIQgMAHgMAAQgIAAgIgDQgIgFgFgGIAAA4gAgVg0QgJALAAAXQgBATAKALQAIAKANAAQALAAAJgKQAKgLAAgVQgBgWgIgKQgJgLgMAAQgLgBgKAMg");
	this.shape_69.setTransform(90.3,42.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_70.setTransform(71.6,40.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_71.setTransform(59.3,40.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_72.setTransform(41,40.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAJAFAFAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_73.setTransform(28.4,38.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_74.setTransform(10.4,40.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAJAFAFAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_75.setTransform(-2.2,38.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_76.setTransform(-14.1,40.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_77.setTransform(-22.7,38.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_78.setTransform(-33.7,38.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_79.setTransform(-42.2,40.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_80.setTransform(-60.6,40.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_81.setTransform(-69.6,38.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_82.setTransform(-78.3,40.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_83.setTransform(-90,40.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgUBkIADgRIAJABQAGAAACgDQACgFAAgPIAAh2IATAAIAAB2QAAAWgFAIQgHALgOgBQgIAAgHgBgAAChOIAAgXIATAAIAAAXg");
	this.shape_84.setTransform(-99.7,40.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_85.setTransform(-113.2,40.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_86.setTransform(-122.2,38.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_87.setTransform(-131.5,40.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_88.setTransform(-143.8,40.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_89.setTransform(-156.1,40.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAJAAQAPAAAMAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgMAIQgMAHgNAAQgJAAgHgDQgHgFgFgGIAAA4gAgVg0QgKALAAAXQABATAIALQAJAKANAAQALAAAJgKQAJgLAAgVQABgWgKgKQgIgLgMAAQgLgBgKAMg");
	this.shape_90.setTransform(-167.9,42.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_91.setTransform(-183,38.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_92.setTransform(-191.5,40.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_93.setTransform(183.6,14);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_94.setTransform(174.7,13.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QAMgQASABQAKAAAKADQAJAFAGAIQAGAHAEALQADAJAAAMQAAAdgPAQQgOARgUgBQgTAAgLgRgAgVgKQgKAKAAATQABAUAFAKQAKAOAPAAQALAAAJgLQAJgKAAgWQAAgVgIgKQgKgLgLAAQgMAAgJAMg");
	this.shape_95.setTransform(164.3,11.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_96.setTransform(151.7,14);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_97.setTransform(140.1,14);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgpBHQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgEAIgDIARgCQAWgDAKgEIAAgFQABgKgGgEQgHgHgOAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABAQIAAAZQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAcQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgIQgKAFgTADgAgKgxIANgeIAaAAIgZAeg");
	this.shape_98.setTransform(122.4,11.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_99.setTransform(113.4,12);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_100.setTransform(104.6,14);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_101.setTransform(93,14);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_102.setTransform(74.7,14);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_103.setTransform(65.7,12);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgHgEgHAAQgGAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_104.setTransform(59.7,13.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_105.setTransform(49,14);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_106.setTransform(37.7,14);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAIgGQAHgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_107.setTransform(19.6,14);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_108.setTransform(10.6,12);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_109.setTransform(1.3,13.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_110.setTransform(-11,14);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_111.setTransform(-19.5,11.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_112.setTransform(-28.2,14.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_113.setTransform(-40.7,16.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_114.setTransform(-48.9,11.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_115.setTransform(-56.9,14);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_116.setTransform(-74.6,14);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_117.setTransform(-83.2,11.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAIQgEAHgIAEg");
	this.shape_118.setTransform(-94.8,20.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_119.setTransform(-103.4,14);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_120.setTransform(-115,14);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_121.setTransform(-123.8,13.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_122.setTransform(-131.3,12);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_123.setTransform(-140.7,13.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_124.setTransform(-152.9,14);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_125.setTransform(-165.2,14.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_126.setTransform(-176.4,14);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_127.setTransform(-188.4,13.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_128.setTransform(-200.7,14);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_129.setTransform(138.3,-12.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_130.setTransform(126.7,-12.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_131.setTransform(114.5,-12.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFARgNALQgNAJgUAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_132.setTransform(96.1,-12.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_133.setTransform(83.8,-12.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAeBQIAAg4QgFAGgIAFQgIADgJAAQgSABgPgRQgPgQAAgaQAAgRAHgOQAFgOAMgGQALgIANABQATAAAMARIAAgPIASAAIAACcgAgTg0QgJAKAAAWQAAAUAJALQAKALALAAQAMAAAIgKQAKgLgBgSQABgYgKgLQgJgMgNABQgKAAgJALg");
	this.shape_134.setTransform(71.3,-10.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_135.setTransform(53.3,-12.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgHgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_136.setTransform(44.4,-12.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_137.setTransform(33.7,-12.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAPAAALAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgNAIQgLAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQAAATAJALQAKAKAMAAQALAAAJgKQAJgLABgVQAAgWgJgKQgKgLgLAAQgMgBgJAMg");
	this.shape_138.setTransform(21.8,-10.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_139.setTransform(3.7,-12.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_140.setTransform(-7.9,-12.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_141.setTransform(-20.2,-12.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_142.setTransform(-32.4,-12.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_143.setTransform(-41,-14.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_144.setTransform(-48.6,-12.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_145.setTransform(-59.6,-12.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_146.setTransform(-71.6,-12.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_147.setTransform(-80.4,-12.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_148.setTransform(-87.9,-14.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_149.setTransform(-96.7,-12.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_150.setTransform(-108.3,-12.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_151.setTransform(-116.8,-14.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_152.setTransform(-131.5,-12.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_153.setTransform(-143.8,-12.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_154.setTransform(-155,-12.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_155.setTransform(189.7,-39.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQABAHAGAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_156.setTransform(178.1,-39.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_157.setTransform(169.1,-41.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_158.setTransform(163.2,-39.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_159.setTransform(152.4,-39.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_160.setTransform(141.2,-39.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_161.setTransform(123.1,-39.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAJAFAFAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMAAAKgKQAIgKABgVQgBgWgIgKQgKgLgNAAQgLAAgIAKg");
	this.shape_162.setTransform(110.5,-41.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFALAAQAJAAAIgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_163.setTransform(98.6,-39.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgUBkIADgRIAJABQAGAAACgDQACgFAAgPIAAh2IATAAIAAB2QAAAWgFAIQgHALgOgBQgIAAgHgBgAAChOIAAgXIATAAIAAAXg");
	this.shape_164.setTransform(88.8,-39);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_165.setTransform(81.4,-39.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKAAgVQAAgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_166.setTransform(68.8,-41.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_167.setTransform(51.4,-39.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_168.setTransform(39.8,-39.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_169.setTransform(24.6,-39.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_170.setTransform(9.2,-39.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAbBOIAAhIQgBgNgGgGQgGgHgMAAQgGAAgIAFQgHAEgEAIQgCAFAAAOIAAA+IgUAAIAAibIAUAAIAAA4QANgPASAAQANAAAKAFQAJAFAEAIQAEAJAAAPIAABIg");
	this.shape_171.setTransform(-3,-41.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_172.setTransform(-21.4,-39.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_173.setTransform(-33.7,-39);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAdBQIAAg4QgEAGgIAFQgIADgJAAQgTABgOgRQgPgQAAgaQAAgRAGgOQAGgOALgGQAMgIANABQAUAAAMARIAAgPIARAAIAACcgAgTg0QgJAKAAAWQAAAUAKALQAJALAKAAQANAAAJgKQAIgLABgSQgBgYgIgLQgKgMgNABQgKAAgJALg");
	this.shape_174.setTransform(-46.2,-37.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_175.setTransform(-64.2,-39.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_176.setTransform(-72.8,-41.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAHgMAGgEQADgEAIAAQAJAAAKAGIgHASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_177.setTransform(-84.1,-39.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_178.setTransform(-94.8,-39.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAJAAQAPAAAMAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgMAIQgMAHgNAAQgJAAgHgDQgHgFgFgGIAAA4gAgVg0QgKALAAAXQABATAIALQAJAKANAAQALAAAJgKQAJgLAAgVQABgWgKgKQgIgLgMAAQgLgBgKAMg");
	this.shape_179.setTransform(-106.7,-37.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_180.setTransform(-125.4,-39.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AglBBQgPgPAAgeQAAgdASgPQAOgNAUAAQAXAAAPAPQAPAPAAAaQAAAWgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXgLQgJALAAAUQAAAXAJALQAKAKANAAQAOAAAKgLQAJgLAAgWQAAgUgJgKQgKgLgOAAQgNAAgKAKgAgJgxIAMgeIAZAAIgXAeg");
	this.shape_181.setTransform(-137.7,-41.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_182.setTransform(-146.2,-41.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_183.setTransform(-153.8,-39.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_184.setTransform(-165.8,-39.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAKADARIgSADQgDgMgHgFQgHgHgJAAQgNABgJAKQgJAKAAAWQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_185.setTransform(-177.1,-39.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_186.setTransform(-185.4,-41.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QAMgQARABQALAAAKADQAJAFAGAIQAGAHADALQAEAJAAAMQAAAdgPAQQgOARgUgBQgSAAgMgRgAgVgKQgJAKAAATQgBAUAGAKQAKAOAPAAQAKAAAKgLQAJgKAAgWQAAgVgIgKQgJgLgMAAQgMAAgJAMg");
	this.shape_187.setTransform(-193.6,-41.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_188.setTransform(-206.3,-39);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_189.setTransform(168.3,-65.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_190.setTransform(159.5,-65.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_191.setTransform(152,-67.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_192.setTransform(143.2,-65.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_193.setTransform(131.6,-65.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_194.setTransform(119.3,-65.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_195.setTransform(107.1,-65.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgHAAQgHAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_196.setTransform(92.2,-65.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_197.setTransform(81.4,-65.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKAAgVQAAgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_198.setTransform(68.8,-67.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_199.setTransform(51.4,-65.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_200.setTransform(39.8,-65.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_201.setTransform(24.6,-65.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_202.setTransform(9.2,-65.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMAAAKgKQAIgKABgVQgBgWgIgKQgKgLgNAAQgLAAgIAKg");
	this.shape_203.setTransform(-3.4,-67.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_204.setTransform(-15.3,-65.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAOAAAMAHQAKAIAHANQAFAOAAAQQAAARgGANQgHANgLAIQgMAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKALAAAXQABATAIALQAKAKAMAAQALAAAJgKQAJgLAAgVQABgWgKgKQgJgLgLAAQgMgBgJAMg");
	this.shape_205.setTransform(-27.2,-63.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_206.setTransform(-45.9,-65.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_207.setTransform(-54.9,-67.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_208.setTransform(-70.3,-65.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_209.setTransform(-82.6,-65.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMAAAJgKQAKgKgBgVQABgWgKgKQgJgLgNAAQgLAAgJAKg");
	this.shape_210.setTransform(-101.3,-67.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_211.setTransform(-113.2,-65.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMAAAKgKQAIgKABgVQgBgWgIgKQgKgLgNAAQgLAAgIAKg");
	this.shape_212.setTransform(-125.8,-67.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_213.setTransform(-134,-67.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgHgEgHAAQgGAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_214.setTransform(-139.2,-65.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_215.setTransform(-150,-65.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AghBHQgMgIAAgTIATADQABAIAGAEQAHAGAMAAQAMAAAHgGQAHgFADgKQABgGAAgSQgMAOgSAAQgXABgNgSQgNgRAAgVQAAgQAGgOQAGgOALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALAAQAOAAAJgLQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_216.setTransform(-162.5,-63.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_217.setTransform(-174.4,-65.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_218.setTransform(-186.1,-65.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQAEgHAGgEQAGgCAIgDIARgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEAMIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_219.setTransform(157.3,-92.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_220.setTransform(148.5,-92.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_221.setTransform(141,-94.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgfAyQgMgKgDgRIATgEQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgHQADgGAGgEQAFgDAIgDQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_222.setTransform(132.2,-92.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_223.setTransform(120.6,-92.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_224.setTransform(108.3,-92.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_225.setTransform(96.1,-92.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_226.setTransform(81.2,-92.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_227.setTransform(70.4,-92.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAIgDAIAAQAPAAAMAHQAKAIAHANQAFAOAAAQQAAARgGANQgGANgMAIQgMAHgNAAQgJAAgHgDQgIgFgEgGIAAA4gAgVg0QgKALAAAXQABATAIALQAJAKANAAQALAAAJgKQAJgLAAgVQAAgWgJgKQgIgLgMAAQgLgBgKAMg");
	this.shape_228.setTransform(58.5,-90.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_229.setTransform(39.8,-92.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_230.setTransform(30.8,-94.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_231.setTransform(21.5,-92.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_232.setTransform(9.2,-92.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_233.setTransform(-6,-92.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_234.setTransform(-21.4,-92.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_235.setTransform(-30,-94.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA5QAMgQASABQAKAAAKADQAJAFAGAIQAGAHAEALQADAJAAAMQAAAdgPAQQgOARgUgBQgTAAgLgRgAgVgKQgKAKAAATQABAUAFAKQAKAOAPAAQALAAAJgLQAJgKAAgWQAAgVgIgKQgKgLgLAAQgMAAgJAMg");
	this.shape_236.setTransform(-38.2,-94.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_237.setTransform(-50.8,-92.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_238.setTransform(-59.8,-94.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_239.setTransform(-69.1,-92.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_240.setTransform(-81.4,-92.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_241.setTransform(-96.6,-92.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_242.setTransform(-112,-92.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_243.setTransform(-120.6,-94.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAHQgEAIgIAEg");
	this.shape_244.setTransform(-132.1,-86.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDAMIgTgDQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMABgFACQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_245.setTransform(-141.3,-92.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_246.setTransform(-149.9,-94.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_247.setTransform(-158.5,-92.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AApBOIAAhKIhQAAIAABKIgVAAIAAibIAVAAIAABAIBQAAIAAhAIAUAAIAACbg");
	this.shape_248.setTransform(-172.5,-94.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("EgksAXbMAAAgu2MBJZAAAMAAAAu2g");
	this.shape_249.setTransform(-3,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.9,-135,470,328);


(lib.Carta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Oaks_Letter_Sprite();
	this.instance.parent = this;
	this.instance.setTransform(-65,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-61.5,130,125);


(lib.atras = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instruccionesbtn = new cjs.Text("atras", "22px 'Arial'", "#FFFF00");
	this.instruccionesbtn.name = "instruccionesbtn";
	this.instruccionesbtn.textAlign = "center";
	this.instruccionesbtn.lineHeight = 27;
	this.instruccionesbtn.lineWidth = 265;
	this.instruccionesbtn.parent = this;
	this.instruccionesbtn.setTransform(134.5,2);

	this.timeline.addTween(cjs.Tween.get(this.instruccionesbtn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269,33.3);


(lib.Abajo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.down5();
	this.instance.parent = this;
	this.instance.setTransform(-14,-18);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.down4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12,-16);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_2 = new lib.down3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.5,-14.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 2
	this.instance_3 = new lib.down2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-11,-17.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_4 = new lib.down1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-17,25,36);


// stage content:



(lib.Grafica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{instrucciones:4,Frame1:0,"Frame1":1});

	// timeline functions:
	this.frame_0 = function() {
		//Inicializa el escenario en el menu principal del juego
		
		this.gotoAndStop(1);
		
		//Redirecciona luego de oprimir el boton de "iniciar juego" al primer nivel
		this.iniciarjuegobtn.addEventListener("click", iniciarjuego.bind(this));
		function iniciarjuego(event) {
			this.gotoAndStop(2);
		}
		//Redirecciona luego de oprimir el boton de "info" al primer nivel
		
		this.infobtn.addEventListener("click", info.bind(this));
		function info(event) {
			this.gotoAndStop(3);
		}
		//Redirecciona luego de oprimir el boton de "instrucciones" al primer nivel
		
		this.instruccionesbtn.addEventListener("click", instrucciones.bind(this));
		function instrucciones(event) {
			this.gotoAndStop(4);
		}
		//Redirecciona luego de oprimir el boton de "creditos" al primer nivel
		
		this.creditosbtn.addEventListener("click", creditos.bind(this));
		function creditos(event) {
			this.gotoAndStop(5);
		}
	}
	this.frame_2 = function() {
		//Inicializa los objetos que se ven y los que no
		//Se oculta la animación del personaje que va a la izquierda
		this.pnivel1izq.visible = false;
		//Oculta todas las cartas del mapa excepto la primera que es guia
		this.carta2.visible = false;
		this.carta3.visible = false;
		this.carta4.visible = false;
		
		//Oculta el contenido de todas las cartas
		this.carta1abierta.visible=false;
		this.carta2abierta.visible=false;
		this.carta3abierta.visible=false;
		this.carta4abierta.visible=false;
		
		
		
		
		//Avanza el fondo y el personaje dependiendo de la tecla oprimida
		window.addEventListener("keydown", undirtecla.bind(this));
		function undirtecla(e) {
			//Ocurre cuando oprime la flecha izquierda, ademas pone limites
			if (e.keyCode == 37 && this.fondonivel1.x < 800) {
				//Cuando la tecla esta oprimida activa la animación
				this.personajenivel1.play();
				this.pnivel1izq.play();
				//Mueve el fondo del juego
				this.fondonivel1.x += 5;
				//Al mismo tiempo que el fondo mueve las cartas del piso
				this.carta1.x += 5;
				this.carta2.x += 5;
				this.carta3.x += 5;
				this.carta4.x += 5;
		
				//Mueve el personaje en la interfaz
				this.personajenivel1.x -= 4;
				this.pnivel1izq.x -= 4;
				//Si la tecla es izquierda oculta la animación de avanzar a la derecha
				this.personajenivel1.visible = false;
				this.pnivel1izq.visible = true;
			//Lo que ocurre cuando oprime la tecla derecha ademas de los limites	
			} else if (e.keyCode == 39 && this.fondonivel1.x > 10) {
				//Cuando la tecla esta oprimida activa la animación
				this.personajenivel1.play();
				this.pnivel1izq.play();
				//Mueve el fondo del juego		
				this.fondonivel1.x -= 5;
				//Al mismo tiempo que el fondo mueve las cartas del piso		
				this.carta1.x -= 5;
				this.carta2.x -= 5;
				this.carta3.x -= 5;
				this.carta4.x -= 5;
				//Mueve el personaje en la interfaz		
				this.personajenivel1.x += 4;
				this.pnivel1izq.x += 4;
				//Si la tecla es derecha oculta la animación de avanzar a la izquierda y el contenido esta oculto
				this.personajenivel1.visible = true;
				this.pnivel1izq.visible = false;
			//Cuando oprime espacio, el personaje esta encima de una carta oculta
			//muestra el contenido de la carta
			} else if (e.keyCode == 32 && this.personajenivel1.x > 105 && this.personajenivel1.x < 135 && this.carta1abierta.visible==false){
				this.carta1abierta.visible = true;
			//Si oprime espacio de nuevo oculta el contenido de la carta	
			} else if (e.keyCode == 32 && this.carta1abierta.visible==true){
				this.carta1abierta.visible = false;
			//Cuando oprime espacio, el personaje esta encima de una carta oculta
			// y esta no ha sido abierta muestra el contenido de la carta y deja ver la carta para siempre en el piso	
			} else if (e.keyCode == 32 && this.personajenivel1.x > 425 && this.personajenivel1.x < 455 && this.carta2abierta.visible==false){
				this.carta2abierta.visible = true;
				this.carta2.visible = true;
			//Si oprime espacio de nuevo oculta el contenido de la carta	
			} else if (e.keyCode == 32 && this.carta2abierta.visible==true){
				this.carta2abierta.visible = false;
			//Cuando oprime espacio, el personaje esta encima de una carta oculta
			// y esta no ha sido abierta muestra el contenido de la carta y deja ver la carta para siempre en el piso			
			} else if (e.keyCode == 32 && this.personajenivel1.x > 655 && this.personajenivel1.x < 685 && this.carta3abierta.visible==false){
				this.carta3abierta.visible = true;
				this.carta3.visible = true;
			//Si oprime espacio de nuevo oculta el contenido de la carta	
			} else if (e.keyCode == 32 && this.carta3abierta.visible==true){
				this.carta3abierta.visible = false;
			//Cuando oprime espacio, el personaje esta encima de una carta oculta
			// y esta no ha sido abierta muestra el contenido de la carta y deja ver la carta para siempre en el piso					
			} else if (e.keyCode == 32 && this.personajenivel1.x > 290 && this.personajenivel1.x < 320 && this.carta4abierta.visible==false){
				this.carta4abierta.visible = true;
				this.carta4.visible = true;
			//Si oprime espacio de nuevo oculta el contenido de la carta	
			} else if (e.keyCode == 32 && this.carta4abierta.visible==true){
				this.carta4abierta.visible = false;
			//Cuando llega al final del juego, envia al usuario a los creditos	
			} else if (e.keyCode == 32 && this.carta4.visible==true && this.carta3.visible==true && this.carta3.visible==true && this.carta1.visible==true && this.personajenivel1.x > 175 && this.personajenivel1.x < 205){
				this.gotoAndStop(5);
				
			}
		
		
		}
		// Aqui se detecta cuando levanta la tecla de movimiento para 
		// detener la animacion del personaje
		window.addEventListener("keyup", levantartecla.bind(this));
		function levantartecla(e) {
			if (e.keyCode == 37 && this.fondonivel1.x < 1600) {
				this.pnivel1izq.gotoAndStop(0);
				this.personajenivel1.gotoAndStop(0);
			} else if (e.keyCode == 39 && this.fondonivel1.x > 10) {
				this.pnivel1izq.gotoAndStop(0);
				this.personajenivel1.gotoAndStop(0);
		
		
			} 
			
		}
	}
	this.frame_3 = function() {
		//Listener para el boton "atras" que lleva al menu principal
		this.atrasbtn1.addEventListener("click", atras.bind(this));
		function atras(event) {
			this.gotoAndStop(1);
		}
	}
	this.frame_4 = function() {
		//Listener para el boton "atras" que lleva al menu principal
		this.atrasbtn2.addEventListener("click", atras.bind(this));
		function atras(event) {
			this.gotoAndStop(1);
		}
	}
	this.frame_5 = function() {
		//Listener para el boton "atras" que lleva al menu principal
		this.atrasbtn.addEventListener("click", atras.bind(this));
		function atras(event) {
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Creditos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLADgTAEg");
	this.shape.setTransform(583.7,226.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_1.setTransform(575.2,224.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC3333").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA4QANgPAQABQALAAAJADQAKAFAGAIQAGAHADALQAEAJAAAMQAAAegOAPQgPAQgUAAQgTAAgLgRgAgVgKQgKAKAAATQAAAUAGAKQAKAPAPgBQAKABAKgLQAJgMAAgVQAAgVgJgKQgIgLgMAAQgMAAgJAMg");
	this.shape_2.setTransform(566.9,224.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3333").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_3.setTransform(551.3,226.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3333").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_4.setTransform(536,226.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC3333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_5.setTransform(527.4,224.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC3333").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_6.setTransform(518.8,226.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC3333").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJAAQgNAAgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_7.setTransform(507.6,226.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC3333").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_8.setTransform(489.5,226.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC3333").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMABAKgLQAJgKAAgVQAAgWgJgKQgKgLgNAAQgLgBgJALg");
	this.shape_9.setTransform(476.9,224.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC3333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_10.setTransform(462.5,224.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEALIgTgCQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQABAHAGAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLADgTAEg");
	this.shape_11.setTransform(454,226.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC3333").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_12.setTransform(441.7,226.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC3333").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_13.setTransform(429.5,226.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC3333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_14.setTransform(420.9,224.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC3333").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJAAQgNAAgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_15.setTransform(413.3,226.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEALIgTgCQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLADgTAEg");
	this.shape_16.setTransform(401.3,226.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC3333").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_17.setTransform(389.1,226.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC3333").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAIAAAJADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQANABAJgLQAIgKABgVQgBgWgIgKQgJgLgOAAQgLgBgIALg");
	this.shape_18.setTransform(370.4,224.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEALIgTgCQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAJAAAIgFQAJgFAEgIQADgHABgMIAAgHQgLADgTAEg");
	this.shape_19.setTransform(358.5,226.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC3333").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAIAAAJADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQANABAIgLQAJgKAAgVQAAgWgJgKQgIgLgOAAQgLgBgJALg");
	this.shape_20.setTransform(345.9,224.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC3333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_21.setTransform(337.7,224.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC3333").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFADIAPAFQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_22.setTransform(329.7,226.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC3333").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_23.setTransform(321.5,226.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC3333").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEASgNAJQgMAKgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgMgPAAQgLAAgJAJg");
	this.shape_24.setTransform(310.7,226.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC3333").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_25.setTransform(299.2,226.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC3333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_26.setTransform(291.2,224.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC3333").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_27.setTransform(282.6,226.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC3333").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_28.setTransform(270.3,226.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgGAFgEALIgSgCQACgMAGgHQAGgIALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKADgTAEg");
	this.shape_29.setTransform(509.6,199.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC3333").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_30.setTransform(498.1,199.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC3333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_31.setTransform(490.1,197.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC3333").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_32.setTransform(484.7,197.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC3333").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJABQgNgBgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_33.setTransform(476.4,199.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgHQAFgIAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_34.setTransform(464.4,199.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC3333").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_35.setTransform(455.5,199.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC3333").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgQAXAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPABQgMgBgJAJg");
	this.shape_36.setTransform(444.8,199.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC3333").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_37.setTransform(435.8,197.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC3333").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_38.setTransform(426.4,199.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC3333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_39.setTransform(417.9,197.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDALIgSgCQACgMAGgHQAFgIAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_40.setTransform(403.2,199.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC3333").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJABQgNgBgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_41.setTransform(391.9,199.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC3333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_42.setTransform(383.6,197.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC3333").s().p("AgPBPIAAhhIgRAAIAAgOIARAAIAAgNQAAgLACgGQADgHAHgFQAFgFANAAQAIABAKACIgDAQIgMgBQgIAAgEAEQgDAEAAAKIAAALIAVAAIAAAOIgVAAIAABhg");
	this.shape_43.setTransform(378.7,197.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEALIgTgCQADgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLADgTAEg");
	this.shape_44.setTransform(368.9,199.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC3333").s().p("AgeA6IAAhwIARAAIAAARQAHgMAGgEQADgEAIAAQAJAAAKAGIgHASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_45.setTransform(360.1,199.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC3333").s().p("AghBHQgTgKgJgTQgLgTABgXQgBgVALgUQAJgUASgJQASgKAWAAQARAAANAGQAOAFAIAKQAIAKAEAQIgTAFQgDgMgFgHQgGgHgKgEQgKgEgLAAQgMAAgLAEQgKAFgHAHQgGAHgEAIQgGAPAAAQQAAAUAHAOQAHAOAOAHQAOAHAOAAQAOAAANgFQANgFAGgGIAAgeIguAAIAAgQIBCAAIAAA4QgPANgRAGQgPAGgSAAQgVAAgTgKg");
	this.shape_46.setTransform(346.9,197.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC3333").s().p("AgiBAQgQgUAAgsQAAgaAGgRQAGgRALgKQAMgJAPAAQAMAAAJAFQALAFAFAKQAGAKAEANQAEAOAAAWQAAAbgGARQgFARgMAKQgLAJgRAAQgVAAgNgQgAgUg0QgKAPAAAlQAAAmAJANQAJANAMAAQANAAAJgNQAJgNAAgmQAAglgJgNQgJgNgNAAQgMAAgIALg");
	this.shape_47.setTransform(463.8,144.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC3333").s().p("AgbBNQAAgSAGgbQAIgaANgWQALgZAPgRIhMAAIAAgSIBkAAIAAAPQgPAQgPAaQgOAZgGAcQgGAUgBAXg");
	this.shape_48.setTransform(451.6,144.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC3333").s().p("AANBOIAAglIhCAAIAAgSIBGhkIAQAAIAABkIAVAAIAAASIgVAAIAAAlgAgiAXIAvAAIAAhFg");
	this.shape_49.setTransform(438.9,144.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC3333").s().p("AghBGQgMgLgCgSIASgCQADANAGAGQAHAGAKAAQAHAAAHgEQAHgEAEgHQAEgHADgLQADgMAAgMIAAgEQgGAJgKAGQgKAGgJAAQgUAAgOgOQgNgMAAgYQAAgYAOgOQAOgPAVAAQAOAAANAIQAMAJAHAPQAGAPAAAdQAAAcgGASQgHASgNAKQgNAJgPAAQgSAAgMgKgAgVg0QgJAKAAARQAAAPAJAJQAJAIAMAAQANAAAIgIQAJgJAAgRQAAgQgJgKQgJgKgMAAQgLAAgKALg");
	this.shape_50.setTransform(427,144.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC3333").s().p("AgcBNQABgSAGgbQAIgaANgWQALgZAOgRIhKAAIAAgSIBjAAIAAAPQgOAQgPAaQgPAZgHAcQgFAUgCAXg");
	this.shape_51.setTransform(414.9,144.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC3333").s().p("AgkBCQgOgOAAgUQAAgQAIgKQAHgIAPgEQgMgFgGgIQgGgIAAgLQAAgRAMgMQANgMATAAQAUAAAMAMQANAMAAARQAAALgGAIQgGAIgLAFQAOAFAIAIQAHALAAAOQAAAUgOAOQgOAOgXAAQgWAAgOgOgAgVAJQgJAJAAAOQAAAIAEAIQADAIAIAEQAIAEAHAAQAOAAAJgJQAJgJAAgOQAAgOgKgJQgJgJgNAAQgNAAgIAJgAgRg4QgHAHAAAKQAAALAHAHQAHAHAKAAQALAAAHgHQAHgHAAgKQAAgKgHgIQgIgHgKAAQgKAAgHAHg");
	this.shape_52.setTransform(402.5,144.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC3333").s().p("AgzBOQAAgGADgHQAEgLAIgKQAJgKARgNQAXgVAJgLQAJgMAAgMQAAgLgIgIQgIgHgNgBQgMAAgJAJQgIAIAAAPIgUgCQACgWANgMQAOgLAUAAQAXAAANAMQANAMAAATQAAAKgEAJQgDAJgJAIQgJAKgVASQgQAOgFAFQgFAFgDAGIBMAAIAAASg");
	this.shape_53.setTransform(390.1,144.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC3333").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKABQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_54.setTransform(585.5,120.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDALIgSgCQACgMAGgHQAGgIALgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_55.setTransform(573.9,120.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC3333").s().p("AghBHQgMgIAAgTIATADQABAIAGAFQAHAFAMAAQAMAAAHgFQAHgGADgKQABgFAAgTQgMAPgSgBQgXABgNgSQgNgQAAgWQAAgRAGgOQAGgNALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALgBQAOAAAJgKQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_56.setTransform(561.3,122.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC3333").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_57.setTransform(552.8,119.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgGAFgEALIgSgCQACgMAGgHQAGgIALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKADgTAEg");
	this.shape_58.setTransform(542,120.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC3333").s().p("AgKBOIg9ibIAXAAIApBwIAHAaIAHgaIAshwIAUAAIg9Cbg");
	this.shape_59.setTransform(528.6,117.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC3333").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAQQAPAOAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_60.setTransform(509,120.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC3333").s().p("AAbBNIAAhFQAAgKgDgFQgCgHgGgDQgFgDgIgBQgKAAgJAIQgJAJAAATIAAA+IgUAAIAAhvIASAAIAAAPQAMgSAWAAQAKAAAJAEQAJADAEAHQAEAGACAHIABARIAABGgAgfgzQAAgMAGgGQAGgHAKAAQAGAAAKAGQAGADAEAAQADAAACgBQACgDABgFIAOAAQgBAMgFAGQgGAGgJAAQgHAAgLgGQgFgDgEAAQgDAAgDACQgCADAAAFg");
	this.shape_61.setTransform(496.8,118);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEALIgSgCQACgMAGgHQAGgIALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKADgTAEg");
	this.shape_62.setTransform(484.5,120.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC3333").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUABQgMgBgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMABAKgLQAJgKAAgVQAAgWgJgKQgKgLgNAAQgLgBgJALg");
	this.shape_63.setTransform(471.9,118);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CC3333").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_64.setTransform(460,119.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC3333").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgQAWAAQAXAAAOAQQAPAPAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgLgPAAQgLgBgJAJg");
	this.shape_65.setTransform(447.8,120.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CC3333").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_66.setTransform(436.2,120.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC3333").s().p("AAyBOIgTgvIhAAAIgRAvIgWAAIA8ibIAVAAIBACbgAgJgfIgSAtIA0AAIgRgqQgHgUgCgNQgDAPgFAPg");
	this.shape_67.setTransform(423.4,117.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CC3333").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKABQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_68.setTransform(404.4,120.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC3333").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgQAXAAQAWAAAOAQQAPAPAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgLgOAAQgMgBgJAJg");
	this.shape_69.setTransform(392.8,120.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CC3333").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_70.setTransform(383.9,119.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CC3333").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUABQgMgBgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMABAKgLQAIgKABgVQgBgWgIgKQgKgLgNAAQgLgBgIALg");
	this.shape_71.setTransform(372.8,118);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CC3333").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_72.setTransform(360.9,119.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CC3333").s().p("AAyBOIgTgvIhAAAIgRAvIgWAAIA8ibIAVAAIBACbgAgJgfIgSAtIA0AAIgRgqQgHgUgCgNQgDAPgFAPg");
	this.shape_73.setTransform(347.5,117.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CC3333").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_74.setTransform(331.3,119.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CC3333").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgQAXAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgLgPAAQgMgBgJAJg");
	this.shape_75.setTransform(320.6,120.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CC3333").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_76.setTransform(305.3,119.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC3333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_77.setTransform(293.6,117.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC3333").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAPgQAVAAQAXAAAOAQQAPAPAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEASgNAJQgMAKgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgJgLgPAAQgLgBgJAJg");
	this.shape_78.setTransform(285.1,120.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC3333").s().p("AApBOIAAhKIhQAAIAABKIgVAAIAAibIAVAAIAABAIBQAAIAAhAIAUAAIAACbg");
	this.shape_79.setTransform(271,117.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC3333").s().p("AgJA4IAAgVIATAAIAAAVgAgJgiIAAgVIATAAIAAAVg");
	this.shape_80.setTransform(495.1,93.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC3333").s().p("AgeA6IAAhwIARAAIAAARQAHgMAGgEQADgEAIAAQAJAAAKAGIgHASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_81.setTransform(489.2,93.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC3333").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_82.setTransform(478.5,93.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC3333").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAJAAQAPAAAMAHQAKAIAHANQAFAOAAAQQAAASgGAMQgGANgMAIQgMAHgNAAQgJAAgHgDQgHgFgFgGIAAA4gAgVg0QgKAMAAAVQABAVAIAKQAJAKANAAQALAAAJgKQAJgLAAgVQABgWgKgKQgIgMgMAAQgLAAgKAMg");
	this.shape_83.setTransform(466.6,95.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC3333").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_84.setTransform(447.9,93.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC3333").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAIAAAIADQAJAFAEAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQANABAJgLQAIgKABgVQgBgWgIgKQgJgLgOAAQgLgBgIALg");
	this.shape_85.setTransform(435.3,91.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEALIgTgCQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLADgTAEg");
	this.shape_86.setTransform(423.4,93.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CC3333").s().p("AgxA4IAAgPIBGhSIgVABIgtAAIAAgPIBcAAIAAAMIg8BGIgMAOIAYgBIAzAAIAAAQg");
	this.shape_87.setTransform(411.8,93.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CC3333").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_88.setTransform(403.8,91.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC3333").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_89.setTransform(398.9,91.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC3333").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLADgTAEg");
	this.shape_90.setTransform(390.3,93.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC3333").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_91.setTransform(378.1,93.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC3333").s().p("AArBOIgVghIgPgVQgGgIgDgDQgFgDgEgBIgMgBIgYAAIAABGIgVAAIAAibIBEAAQAVAAALAEQALAEAGALQAHALAAANQAAAQgLAMQgLAJgWAEIAMAHQAJAJAIAMIAcArgAgvgIIAtAAQAMAAAIgDQAIgDAEgGQAEgHAAgHQAAgLgIgIQgIgHgRAAIgwAAg");
	this.shape_92.setTransform(364.8,91.3);

	this.atrasbtn = new lib.atras();
	this.atrasbtn.parent = this;
	this.atrasbtn.setTransform(86,275.3);
	new cjs.ButtonHelper(this.atrasbtn, 0, 1, 1);

	this.instance = new lib.fondo1_1();
	this.instance.parent = this;
	this.instance.setTransform(-43,177.5,1,1,0,0,0,-50,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.atrasbtn},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(1));

	// Instrucciones
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3300CC").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgFAAgIQAAgGgGgFQgEgCgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgFQgGgEgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADAEAFACIAPAEQAUAGAIADQAJACAEAHQAFAGAAAKQAAAKgGAIQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_93.setTransform(457.3,112.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAPgQAVAAQAXAAAOAQQAPAPAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEASgNAJQgMAKgVAAQgWAAgPgPgAgUghQgJAIgBAQIA+AAQgCgPgGgHQgJgLgPAAQgLgBgJAKg");
	this.shape_94.setTransform(445.7,112.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3300CC").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_95.setTransform(433.5,112.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3300CC").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAQQAPAOAAAcQAAAUgHAMQgGANgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_96.setTransform(421.2,112.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3300CC").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_97.setTransform(412.7,110.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3300CC").s().p("AgiAsQgOgQAAgcQAAgRAGgOQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJABQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_98.setTransform(405.1,112.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3300CC").s().p("AgiAsQgOgQAAgcQAAgRAGgOQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJABQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_99.setTransform(394.1,112.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAEQgHAFgDAMIgSgCQACgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgFgBgIQgLAIgJAFQgJADgLAAQgTAAgKgJgAgDAHQgMACgFACQgFACgCAEQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_100.setTransform(382.1,112.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3300CC").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_101.setTransform(633.3,85.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAEQgGAFgEAMIgSgCQACgMAGgHQAGgIALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgFgBgIQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFADgDAEQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_102.setTransform(622.6,85.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3300CC").s().p("AgxA4IAAgPIBGhSIgVABIgtAAIAAgQIBbAAIAAANIg8BHIgLANIAYgBIAzAAIAAAQg");
	this.shape_103.setTransform(611,85.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3300CC").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_104.setTransform(603,83.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3300CC").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_105.setTransform(598.1,83.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgHgHgOAAQgMAAgHAEQgGAFgEAMIgSgCQACgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgFgBgIQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFADgCAEQgEAEAAAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_106.setTransform(589.5,85.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAWAAQAXAAAOAQQAPAPAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUghQgJAIgBAQIA+AAQgCgPgFgHQgKgLgPAAQgLgBgJAKg");
	this.shape_107.setTransform(577.3,85.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3300CC").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_108.setTransform(568.4,85.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAIgDIARgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAEQgGAFgEAMIgSgCQACgMAGgHQAGgIALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgFgBgIQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFADgDAEQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_109.setTransform(551.6,85.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3300CC").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_110.setTransform(542.7,85.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAEQgHAFgDAMIgTgCQADgMAGgHQAGgIALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgFgBgIQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFADgDAEQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_111.setTransform(532,85.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3300CC").s().p("AgwBPIAAibIASAAIAAAPQAGgJAHgFQAJgDAIAAQAQgBAKAIQAMAIAFANQAGAOAAAQQAAASgGAMQgHAOgMAHQgMAHgMABQgJAAgHgFQgIgEgFgGIAAA3gAgVg0QgJAMAAAVQgBAVAKAKQAIAKANAAQALAAAJgKQAKgLAAgVQgBgWgIgKQgJgMgMAAQgLAAgKAMg");
	this.shape_112.setTransform(520.1,87.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3300CC").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAQQAPAOAAAcQAAAUgHAMQgGANgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_113.setTransform(501.4,85.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3300CC").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_114.setTransform(492.8,83.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3300CC").s().p("AgiAsQgOgQAAgcQAAgRAGgOQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJABQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_115.setTransform(485.2,85.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAEQgGAFgEAMIgTgCQADgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgFgBgIQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFADgCAEQgEAEAAAFQAAAHAHAGQAFAFAMAAQAJAAAIgFQAJgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_116.setTransform(473.2,85.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3300CC").s().p("AgwBPIAAibIASAAIAAAPQAGgJAIgFQAHgDAKAAQAPgBALAIQAKAIAGANQAGAOAAAQQAAASgGAMQgHAOgMAHQgMAHgMABQgIAAgIgFQgHgEgGgGIAAA3gAgVg0QgJAMAAAVQgBAVAJAKQAKAKAMAAQALAAAJgKQAKgLAAgVQAAgWgJgKQgKgMgLAAQgMAAgJAMg");
	this.shape_117.setTransform(461.3,87.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3300CC").s().p("AgfAyQgMgJgDgTIATgCQACALAHAGQAHAGAMAAQANAAAGgFQAHgFAAgIQAAgGgGgFQgEgCgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgFQgGgEgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADAEAFACIAPAEQAUAGAIADQAJACAEAHQAFAGAAAKQAAAKgGAIQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_118.setTransform(449.3,85.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAPgQAVAAQAXAAAPAQQAOAPAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUghQgJAIgBAQIA+AAQgBgPgHgHQgIgLgQAAQgLgBgJAKg");
	this.shape_119.setTransform(437.7,85.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAEQgHAFgDAMIgTgCQADgMAGgHQAFgIAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgFgBgIQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFADgDAEQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_120.setTransform(419.4,85.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3300CC").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_121.setTransform(410.8,83.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3300CC").s().p("AgiAsQgOgQAAgcQAAgRAGgOQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJABQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_122.setTransform(403.2,85.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAXAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgYAAgOgPgAgUghQgJAIgBAQIA+AAQgBgPgHgHQgIgLgPAAQgMgBgJAKg");
	this.shape_123.setTransform(391.2,85.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3300CC").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_124.setTransform(382.2,83.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAEQgHAFgDAMIgSgCQACgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgFgBgIQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFADgCAEQgDAEgBAFQABAHAFAGQAHAFALAAQAJAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_125.setTransform(366.8,85.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3300CC").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_126.setTransform(358.2,83.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3300CC").s().p("AgpBNIgCgSIALACQAHAAAEgCIAGgGIAGgPIACgFIgshwIAVAAIAYBCIAGAZQADgMAFgMIAYhDIAUAAIgsByIgIAaQgGAKgGAEQgHAFgJAAQgGAAgHgDg");
	this.shape_127.setTransform(344.3,88.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAXAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgYAAgOgPgAgUghQgJAIgBAQIA+AAQgBgPgHgHQgIgLgPAAQgMgBgJAKg");
	this.shape_128.setTransform(326.4,85.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3300CC").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_129.setTransform(317.4,83.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3300CC").s().p("AgeA6IAAhwIARAAIAAARQAHgMAGgEQADgEAIAAQAJAAAKAGIgHASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_130.setTransform(311.5,85.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAWAAQAXAAAOAQQAPAPAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFASgNAJQgNAKgUAAQgXAAgOgPgAgUghQgJAIgBAQIA+AAQgCgPgFgHQgKgLgPAAQgLgBgJAKg");
	this.shape_131.setTransform(300.7,85.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3300CC").s().p("AgIA4IgrhwIAUAAIAZBCIAGAYIAGgWIAahEIAUAAIgsBwg");
	this.shape_132.setTransform(289.2,85.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3300CC").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAQQAPAOAAAcQAAAUgHAMQgGANgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_133.setTransform(277.5,85.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3300CC").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_134.setTransform(262.2,85.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAEQgHAFgDAMIgSgCQACgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgFgBgIQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFADgCAEQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_135.setTransform(240.8,85.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3300CC").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_136.setTransform(231.9,85.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAEQgGAFgEAMIgSgCQACgMAGgHQAGgIALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgFgBgIQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFADgDAEQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_137.setTransform(221.2,85.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#3300CC").s().p("AgwBPIAAibIARAAIAAAPQAHgJAHgFQAJgDAIAAQAPgBALAIQALAIAHANQAFAOAAAQQAAASgGAMQgGAOgMAHQgMAHgNABQgJAAgHgFQgIgEgEgGIAAA3gAgVg0QgKAMAAAVQABAVAIAKQAJAKANAAQALAAAJgKQAJgLAAgVQAAgWgJgKQgIgMgMAAQgLAAgKAMg");
	this.shape_138.setTransform(209.3,87.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAEQgGAGgEALIgTgCQADgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgFgBgIQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFADgCAEQgEAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQADgHABgMIAAgHQgLAEgTADg");
	this.shape_139.setTransform(610.9,59.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3300CC").s().p("AAaBOIAAhIQAAgNgFgGQgHgHgLAAQgHAAgHAFQgIAEgDAIQgEAFAAAOIAAA+IgTAAIAAibIATAAIAAA4QAOgPASAAQANAAAJAFQAKAFAEAIQAEAJAAAPIAABIg");
	this.shape_140.setTransform(598.7,57);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3300CC").s().p("AgiAsQgOgQAAgcQAAgRAGgOQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJABQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_141.setTransform(587.4,59.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAPgQAVAAQAXAAAPAQQAOAPAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUghQgJAIgBAQIA+AAQgBgPgHgHQgIgLgQAAQgLgBgJAKg");
	this.shape_142.setTransform(575.4,59.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3300CC").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_143.setTransform(566.6,59.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAXAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgYAAgOgPgAgUghQgJAIgBAQIA+AAQgBgPgHgHQgIgLgPAAQgMgBgJAKg");
	this.shape_144.setTransform(555.8,59.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#3300CC").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgIAOABQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgOQgLAQgUABQgNgBgLgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMABAJgLQAKgKgBgWQABgVgKgKQgJgMgNAAQgLAAgJALg");
	this.shape_145.setTransform(543.2,57.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3300CC").s().p("AgpBNIgCgSIALACQAHAAAEgCIAGgGIAGgPIACgFIgshwIAVAAIAYBCIAGAZQADgMAFgMIAYhDIAUAAIgsByIgIAaQgGAKgGAEQgHAFgJAAQgGAAgHgDg");
	this.shape_146.setTransform(526,61.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAEQgHAGgDALIgTgCQADgMAGgHQAGgIALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgFgBgIQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFADgDAEQgCAEgBAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLAEgTADg");
	this.shape_147.setTransform(508.1,59.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3300CC").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgIAOABQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgOQgLAQgUABQgNgBgLgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMABAJgLQAKgKgBgWQABgVgKgKQgJgMgNAAQgLAAgJALg");
	this.shape_148.setTransform(495.5,57.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#3300CC").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_149.setTransform(487,59.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAXAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgYAAgOgPgAgUghQgJAIgBAQIA+AAQgBgPgHgHQgIgLgPAAQgMgBgJAKg");
	this.shape_150.setTransform(476.3,59.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3300CC").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_151.setTransform(467.7,57);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3300CC").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_152.setTransform(459.1,59.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3300CC").s().p("AAdBPIAAg3QgEAGgIAEQgIAFgJAAQgTgBgOgQQgPgQAAgaQAAgSAGgNQAGgNALgIQAMgGANAAQAUAAAMARIAAgPIARAAIAACbgAgTg0QgJAKAAAWQAAAVAKALQAJALAKgBQANABAJgLQAIgLABgTQgBgWgIgMQgKgMgNAAQgKAAgJAMg");
	this.shape_153.setTransform(446.5,61.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#3300CC").s().p("AgxA4IAAgPIBGhSIgVABIgtAAIAAgQIBcAAIAAANIg9BHIgLANIAYgBIAzAAIAAAQg");
	this.shape_154.setTransform(435.3,59.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#3300CC").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_155.setTransform(427.3,57);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAPgQAWAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUghQgJAIgBAQIA+AAQgCgPgGgHQgIgLgPAAQgMgBgJAKg");
	this.shape_156.setTransform(412.6,59.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#3300CC").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgIAOABQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgOQgLAQgUABQgMgBgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMABAJgLQAKgKgBgWQABgVgKgKQgJgMgNAAQgLAAgJALg");
	this.shape_157.setTransform(400,57.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3300CC").s().p("AgfAyQgMgJgDgTIATgCQACALAHAGQAHAGAMAAQANAAAGgFQAHgFAAgIQAAgGgGgFQgEgCgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSADQgCgJgGgGQgGgEgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADAEAFACIAPAEQAUAGAIADQAJACAEAHQAFAGAAAKQAAAKgGAIQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_158.setTransform(382.6,59.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAEQgGAGgEALIgSgCQACgMAGgHQAGgIALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgFgBgIQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFADgCAEQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKAEgTADg");
	this.shape_159.setTransform(371,59.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3300CC").s().p("AAbBOIAAhIQgBgNgGgGQgGgHgLAAQgHAAgIAFQgHAEgEAIQgCAFAAAOIAAA+IgUAAIAAibIAUAAIAAA4QANgPASAAQANAAAKAFQAJAFAEAIQAEAJAAAPIAABIg");
	this.shape_160.setTransform(358.8,57);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3300CC").s().p("AgiAsQgOgQAAgcQAAgRAGgOQAGgNANgHQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJABQgNgBgJALQgJALAAAVQAAAWAJALQAIAKANAAQALAAAIgHQAHgHACgPIATADQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_161.setTransform(347.5,59.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#3300CC").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAXAAQAWAAAOAQQAPAPAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAIgGQAHgFAEgMIAVACQgFASgNAJQgNAKgUAAQgXAAgOgPgAgUghQgJAIgBAQIA+AAQgBgPgGgHQgKgLgOAAQgMgBgJAKg");
	this.shape_162.setTransform(335.5,59.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#3300CC").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_163.setTransform(326.9,57);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3300CC").s().p("AgPBPIAAhhIgRAAIAAgPIARAAIAAgMQAAgLACgGQADgHAHgFQAFgFAMAAQAJAAAKADIgDAQIgLgBQgKAAgDAEQgDADgBALIAAAKIAXAAIAAAPIgXAAIAABhg");
	this.shape_164.setTransform(322,56.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#3300CC").s().p("AgfAyQgMgJgDgTIATgCQACALAHAGQAHAGAMAAQANAAAGgFQAHgFAAgIQAAgGgGgFQgEgCgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSADQgCgJgGgGQgGgEgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADAEAFACIAPAEQAUAGAIADQAJACAEAHQAFAGAAAKQAAAKgGAIQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_165.setTransform(306.8,59.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAEQgHAGgDALIgSgCQACgMAGgHQAFgIAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgFgBgIQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFADgDAEQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_166.setTransform(295.2,59.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#3300CC").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_167.setTransform(286.6,57);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#3300CC").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAEQgHAGgDALIgSgCQACgMAGgHQAGgIALgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgFgBgIQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFADgCAEQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_168.setTransform(271.9,59.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#3300CC").s().p("AgxA4IAAgPIBGhSIgVABIgtAAIAAgQIBbAAIAAANIg8BHIgLANIAYgBIAzAAIAAAQg");
	this.shape_169.setTransform(260.4,59.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#3300CC").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_170.setTransform(252.4,57);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#3300CC").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_171.setTransform(247.4,57);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#3300CC").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_172.setTransform(242.6,57);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#3300CC").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_173.setTransform(237.2,57.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#3300CC").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_174.setTransform(227.8,59.3);

	this.instance_1 = new lib.arrowkeysfade();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93,111.2,0.602,0.602);

	this.instance_2 = new lib.key_space_bar_small();
	this.instance_2.parent = this;
	this.instance_2.setTransform(416.5,181,0.619,0.619);

	this.atrasbtn2 = new lib.atras();
	this.atrasbtn2.parent = this;
	this.atrasbtn2.setTransform(60.5,267.4);
	new cjs.ButtonHelper(this.atrasbtn2, 0, 1, 1);

	this.instance_3 = new lib.fondo1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-43,177.5,1,1,0,0,0,-50,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.atrasbtn2},{t:this.instance_2},{t:this.instance_1},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},4).to({state:[]},1).wait(1));

	// Info
	this.atrasbtn1 = new lib.atras();
	this.atrasbtn1.parent = this;
	this.atrasbtn1.setTransform(212.5,289.4);
	new cjs.ButtonHelper(this.atrasbtn1, 0, 1, 1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_175.setTransform(503.3,225.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEALIgTgCQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLADgTAEg");
	this.shape_176.setTransform(492.6,225.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_177.setTransform(480.3,225.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_178.setTransform(468.1,225.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_179.setTransform(459.5,223.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_180.setTransform(454.2,223.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_181.setTransform(444.8,225.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_182.setTransform(432.6,225.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJAAQgNAAgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_183.setTransform(421.3,225.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_184.setTransform(403.8,225.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEALIgTgCQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAJAAAIgFQAJgFAEgIQADgHABgMIAAgHQgLADgTAEg");
	this.shape_185.setTransform(392.2,225.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_186.setTransform(383.4,225.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDALIgSgCQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_187.setTransform(372.6,225.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_188.setTransform(363.8,225.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AghBHQgMgIAAgTIATADQABAIAGAFQAHAFAMAAQAMAAAHgFQAHgGADgKQABgFAAgTQgMAPgSgBQgXABgNgSQgNgQAAgWQAAgRAGgOQAGgNALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALgBQAOAAAJgKQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_189.setTransform(352.7,227.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_190.setTransform(340.8,225.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_191.setTransform(332.2,223.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgpBNIgCgSIALACQAHAAAEgCIAGgGIAGgPIACgFIgshwIAVAAIAYBCIAGAZQADgMAFgMIAYhDIAUAAIgsByIgIAaQgGAKgGAEQgHAFgJAAQgGAAgHgDg");
	this.shape_192.setTransform(318.3,227.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_193.setTransform(301,225.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgLgPgBQgMAAgJAJg");
	this.shape_194.setTransform(289.4,225.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_195.setTransform(280.4,223.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_196.setTransform(271.1,225.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgLgPgBQgMAAgJAJg");
	this.shape_197.setTransform(258.8,225.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_198.setTransform(250.3,223.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_199.setTransform(242.4,225.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_200.setTransform(234.4,223.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_201.setTransform(226.5,225.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFASgNAJQgMAKgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgLgPgBQgLAAgJAJg");
	this.shape_202.setTransform(214.8,225.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_203.setTransform(205.9,225.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA4QANgPAQABQALAAAKADQAJAFAGAIQAGAHADALQAEAJAAAMQAAAegPAPQgOAQgUABQgSgBgMgRgAgVgKQgJAKAAATQgBAUAGAKQAJAPAQgBQAKABAKgMQAJgLAAgVQAAgVgIgKQgJgLgMAAQgMAAgJAMg");
	this.shape_204.setTransform(195.5,223.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_205.setTransform(182.9,225.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_206.setTransform(171.3,225.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_207.setTransform(539.1,198.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_208.setTransform(527.5,198.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_209.setTransform(518.9,196.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_210.setTransform(504.2,198.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUABQgMgBgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMABAKgLQAIgKABgVQgBgWgIgKQgKgLgNAAQgLgBgIALg");
	this.shape_211.setTransform(491.6,196.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDALIgSgCQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_212.setTransform(479.7,198.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgUBkIADgRIAJABQAGABACgEQACgFAAgPIAAh2IATAAIAAB2QAAAVgFAJQgHAKgOABQgIAAgHgCgAAChOIAAgXIATAAIAAAXg");
	this.shape_213.setTransform(469.9,199);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUghQgJAJgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAKg");
	this.shape_214.setTransform(462.6,198.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUABQgMgBgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMABAKgLQAJgKgBgVQABgWgJgKQgKgLgNAAQgLgBgJALg");
	this.shape_215.setTransform(450,196.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_216.setTransform(432,198.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAIgDIARgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEALIgSgCQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKADgTAEg");
	this.shape_217.setTransform(419.7,198.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AAbBOIAAhIQAAgNgHgGQgGgHgMAAQgGAAgIAFQgHAEgEAIQgCAFAAAOIAAA+IgUAAIAAibIAUAAIAAA4QANgPATAAQAMAAAJAFQAKAFAEAIQAEAJAAAPIAABIg");
	this.shape_218.setTransform(407.5,196.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUghQgJAJgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAKg");
	this.shape_219.setTransform(389.1,198.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_220.setTransform(376.8,198.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AAeBQIAAg4QgFAGgIAFQgIADgJABQgTgBgOgQQgPgQAAgaQAAgSAGgNQAGgOALgGQAMgIANABQAUAAAMARIAAgPIARAAIAACcgAgTg0QgJAKAAAWQAAAUAJAMQAJALALgBQANABAJgLQAIgLABgSQgBgYgIgLQgKgMgNAAQgKAAgJAMg");
	this.shape_221.setTransform(364.3,200.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_222.setTransform(346.9,198.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUghQgJAJgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAKg");
	this.shape_223.setTransform(335.3,198.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_224.setTransform(323,198.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_225.setTransform(310.8,198.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_226.setTransform(302.2,196.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJAAQgNAAgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_227.setTransform(294.6,198.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJAAQgNAAgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_228.setTransform(283.6,198.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_229.setTransform(271.6,198.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_230.setTransform(262.8,198.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_231.setTransform(255.3,196.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_232.setTransform(246.5,198.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_233.setTransform(234.9,198.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_234.setTransform(226.4,196.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_235.setTransform(212.3,198.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgIQAFgHAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_236.setTransform(200.7,198.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_237.setTransform(192.1,196.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFASgNAJQgMAKgVAAQgWAAgPgPgAgUghQgJAJgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAKg");
	this.shape_238.setTransform(177.4,198.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_239.setTransform(165.1,198.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AghBHQgMgIAAgTIATADQABAIAGAFQAHAFAMAAQAMAAAHgFQAHgGADgKQABgFAAgTQgMAPgSgBQgXABgNgSQgNgQAAgWQAAgRAGgOQAGgNALgIQAMgHAOAAQATAAANAQIAAgNIASAAIAABgQAAAagFAMQgGALgMAHQgLAGgQAAQgUAAgNgKgAgUg2QgJALAAAVQAAAWAJAIQAJALALgBQAOAAAJgKQAJgIAAgWQAAgVgJgLQgKgKgNAAQgLAAgJAKg");
	this.shape_240.setTransform(152.6,201);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_241.setTransform(144.4,196.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgdBLQgQgHgIgMQgIgNAAgPIATgCQACAMAFAHQAFAIALAFQALAEALAAQAMAAAJgDQAJgEAFgGQAEgGAAgIQAAgHgEgFQgFgGgJgEQgHgCgTgFQgWgGgJgCQgLgGgGgJQgFgJAAgLQAAgLAGgLQAIgKANgGQANgFAPAAQAQAAANAGQAOAFAHALQAHALAAAOIgUACQgBgPgKgIQgJgIgRAAQgRAAgJAHQgJAHAAAKQAAAJAGAFQAGAGAXAFQAaAGAJAEQAOAFAGAJQAHAKAAANQAAAMgHAMQgHALgNAGQgOAGgRAAQgUAAgNgGg");
	this.shape_242.setTransform(134.6,196.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_243.setTransform(494,150.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgQAWAAQAXAAAOAQQAPAPAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPABQgLgBgJAJg");
	this.shape_244.setTransform(484.7,145.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_245.setTransform(475.7,143.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_246.setTransform(466.3,145.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDALIgSgCQACgMAGgHQAFgIAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_247.setTransform(454.1,145.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_248.setTransform(445.5,143.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAPgQAWAAQAWAAAPAQQAOAPAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAFgMIATACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPABQgMgBgJAJg");
	this.shape_249.setTransform(436.9,145.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMABAKgLQAJgKgBgVQABgWgJgKQgKgLgNAAQgLgBgJALg");
	this.shape_250.setTransform(424.3,143.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgGAFgEALIgSgCQACgMAGgHQAGgIALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKADgTAEg");
	this.shape_251.setTransform(412.4,145.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgUgLQgIAKAAAVQAAAWAJALQAJAKALAAQAMABAKgLQAJgKgBgVQABgWgJgKQgKgLgNAAQgLgBgJALg");
	this.shape_252.setTransform(393.7,143.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEALIgSgCQACgMAGgHQAGgIALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKADgTAEg");
	this.shape_253.setTransform(381.8,145.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMABAKgLQAIgKABgVQgBgWgIgKQgKgLgNAAQgLgBgIALg");
	this.shape_254.setTransform(369.2,143.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_255.setTransform(361,143.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_256.setTransform(352.4,145.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDALIgSgCQACgMAGgHQAFgIAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_257.setTransform(340.2,145.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_258.setTransform(324.9,145.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_259.setTransform(309.5,145.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AAbBOIAAhIQAAgNgHgGQgGgHgMAAQgGAAgIAFQgHAEgEAIQgCAFAAAOIAAA+IgUAAIAAibIAUAAIAAA4QANgPATAAQAMAAAJAFQAKAFAEAIQAEAJAAAPIAABIg");
	this.shape_260.setTransform(297.4,143.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgHQAFgIAMgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgKAEQgHAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQgBAHAHAGQAGAFAKAAQAJAAAKgFQAIgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_261.setTransform(279,145.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_262.setTransform(270.4,143.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAPgQAVAAQAXAAAOAQQAPAPAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFASgNAJQgNAKgUAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPABQgLgBgJAJg");
	this.shape_263.setTransform(255.7,145.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAIAAAJADQAIAFAEAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgMAAgMgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQANABAJgLQAIgKABgVQgBgWgIgKQgJgLgOAAQgLgBgIALg");
	this.shape_264.setTransform(243.1,143.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAQQAPAOAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_265.setTransform(225.1,145.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_266.setTransform(216.3,145.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_267.setTransform(205.5,145.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_268.setTransform(196.5,143.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_269.setTransform(187.1,145.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgPBPIAAhhIgRAAIAAgOIARAAIAAgNQAAgLACgGQADgHAHgFQAFgFANAAQAIABAKACIgDAQIgMgBQgJAAgDAEQgDAEgBAKIAAALIAXAAIAAAOIgXAAIAABhg");
	this.shape_270.setTransform(178.6,143.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_271.setTransform(555.6,117);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAVACQgFASgNAJQgNAKgTAAQgYAAgOgPgAgUghQgJAJgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAKg");
	this.shape_272.setTransform(547,119.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_273.setTransform(532.1,119);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgGAFgEALIgSgCQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQAAAHAFAGQAGAFALAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKADgTAEg");
	this.shape_274.setTransform(521.3,119.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJAAQgNAAgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_275.setTransform(510.1,119.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEALIgTgCQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLADgTAEg");
	this.shape_276.setTransform(498.1,119.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_277.setTransform(486.4,119.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgNAAgGAFQgGAFgEALIgTgCQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQAAAHAHAGQAFAFAMAAQAJAAAIgFQAJgFAEgIQADgHABgMIAAgHQgLADgTAEg");
	this.shape_278.setTransform(468.7,119.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIASAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_279.setTransform(459.9,119);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDALIgSgCQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_280.setTransform(449.1,119.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAHgDAKAAQAOAAAMAHQALAIAGANQAFAOAAAQQAAASgGAMQgHANgLAIQgMAHgNAAQgIAAgIgDQgHgFgGgGIAAA4gAgVg0QgKAMAAAVQABAVAIAKQAKAKAMAAQALAAAJgKQAJgLAAgVQABgWgKgKQgJgMgLAAQgMAAgJAMg");
	this.shape_281.setTransform(437.2,121.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_282.setTransform(419.1,119.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAIgGQAHgFAEgMIAVACQgFASgNAJQgNAKgUAAQgXAAgOgPgAgUghQgJAJgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAKg");
	this.shape_283.setTransform(407.5,119.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_284.setTransform(398.5,117.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_285.setTransform(389.2,119);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAHgGQAIgFAEgMIAVACQgFASgNAJQgNAKgTAAQgYAAgOgPgAgUghQgJAJgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAKg");
	this.shape_286.setTransform(376.9,119.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_287.setTransform(368.4,117);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_288.setTransform(360.5,119.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_289.setTransform(352.5,117);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_290.setTransform(344.6,119.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUghQgJAJgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAKg");
	this.shape_291.setTransform(332.9,119.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_292.setTransform(324,119);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA4QAMgPASABQAKAAAKADQAJAFAGAIQAGAHAEALQADAJAAAMQAAAegPAPQgOAQgUAAQgSAAgMgRgAgVgKQgJAKAAATQAAAUAFAKQAKAPAPgBQALABAJgLQAJgMAAgVQAAgVgIgKQgKgLgLAAQgMAAgJAMg");
	this.shape_293.setTransform(313.6,117.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_294.setTransform(301,119.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_295.setTransform(289.4,119.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_296.setTransform(272.3,119.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDALIgSgCQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_297.setTransform(260.7,119.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_298.setTransform(245.4,119);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_299.setTransform(224,119);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_300.setTransform(211.7,119.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJAAQgNAAgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_301.setTransform(200.5,119.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFASgNAJQgMAKgVAAQgWAAgPgPgAgUghQgJAJgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAKg");
	this.shape_302.setTransform(182.4,119.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_303.setTransform(173.4,117.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgdA6IAAhwIAQAAIAAARQAIgMAFgEQAEgEAGAAQAKAAAKAGIgGASQgHgEgIAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_304.setTransform(167.4,119);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_305.setTransform(160.4,117);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_306.setTransform(151.8,119);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_307.setTransform(139.5,119.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUghQgJAJgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAKg");
	this.shape_308.setTransform(127.3,119.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAHgMAGgEQADgEAIAAQAJAAAKAGIgHASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_309.setTransform(118.4,119);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_310.setTransform(534.8,92.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAIAAAJADQAIAFAEAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAKAKAKAAQANABAIgLQAKgKgBgVQABgWgKgKQgIgLgOAAQgLgBgJALg");
	this.shape_311.setTransform(522.2,90.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLADgTAEg");
	this.shape_312.setTransform(504.2,92.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgIASQgHgEgHAAQgGAAgDAEQgFAEgCAGQgDALAAAMIAAA6g");
	this.shape_313.setTransform(495.3,92.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_314.setTransform(484.6,92.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_315.setTransform(472.3,92.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLADgTAEg");
	this.shape_316.setTransform(460.1,92.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_317.setTransform(444.8,92.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDAMgEIAAgFQgBgMgFgEQgIgHgNAAQgMAAgHAFQgGAFgEALIgTgCQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgIQADgHABgMIAAgHQgLADgTAEg");
	this.shape_318.setTransform(423.4,92.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_319.setTransform(414.8,90.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEgBAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLADgTAEg");
	this.shape_320.setTransform(400.1,92.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQAEgEAGAAQAKAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgEALABAMIAAA6g");
	this.shape_321.setTransform(391.3,92.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_322.setTransform(383.8,90.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_323.setTransform(374.4,92.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgOAAQgMAAgJAJg");
	this.shape_324.setTransform(362.2,92.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_325.setTransform(349.9,92.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJAAQgNAAgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_326.setTransform(338.7,92.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_327.setTransform(326.7,92.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("Ag5BOIAAibIBwAAIAAASIhcAAIAAAxIBWAAIAAAQIhWAAIAAA2IBfAAIAAASg");
	this.shape_328.setTransform(313.6,90.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_329.setTransform(296.9,97.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAHAAQAKAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_330.setTransform(291,92.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAIgDIARgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgGAFgEALIgSgCQACgMAGgIQAGgHALgEQALgEANAAQAPAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAJAAAKgFQAIgFAEgIQAEgHgBgMIAAgHQgKADgTAEg");
	this.shape_331.setTransform(280.2,92.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_332.setTransform(271.7,90.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgPBPIAAhhIgRAAIAAgOIARAAIAAgNQAAgLACgGQADgHAHgFQAFgFAMAAQAJABAKACIgDAQIgMgBQgIAAgEAEQgEAEABAKIAAALIAVAAIAAAOIgVAAIAABhg");
	this.shape_333.setTransform(266.7,90.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_334.setTransform(257,92.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_335.setTransform(244.7,92.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJAAQgNAAgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_336.setTransform(233.5,92.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAHgGQAIgFAEgMIAVACQgFASgNAJQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgGgHQgKgMgOAAQgMAAgJAJg");
	this.shape_337.setTransform(215.4,92.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAIAAAJADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAKAKAKAAQANABAIgLQAJgKAAgVQAAgWgJgKQgIgLgOAAQgLgBgJALg");
	this.shape_338.setTransform(202.8,90.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_339.setTransform(190.9,92.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_340.setTransform(178.6,92.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgwBQIAAicIASAAIAAAPQAGgJAHgFQAJgDAIAAQAPAAALAHQAMAIAFANQAGAOAAAQQAAASgGAMQgHANgMAIQgMAHgMAAQgJAAgHgDQgIgFgEgGIAAA4gAgVg0QgJAMAAAVQAAAVAJAKQAIAKANAAQALAAAJgKQAKgLAAgVQgBgWgIgKQgJgMgMAAQgLAAgKAMg");
	this.shape_341.setTransform(166.7,94.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAWAAQAWAAAPAPQAOAQAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgGgHQgIgMgPAAQgMAAgJAJg");
	this.shape_342.setTransform(148,92.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFADIAPAFQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_343.setTransform(136.4,92.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_344.setTransform(545.8,66.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_345.setTransform(534.2,66.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAIAAAJADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUABQgNgBgLgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQANABAJgLQAIgKABgVQgBgWgIgKQgJgLgOAAQgLgBgIALg");
	this.shape_346.setTransform(521.6,64);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_347.setTransform(509.7,66.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_348.setTransform(500.7,64.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_349.setTransform(485.2,65.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_350.setTransform(473,66.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_351.setTransform(454.6,66.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_352.setTransform(442.4,65.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_353.setTransform(424,66.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQAEgEAHAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_354.setTransform(415.2,65.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_355.setTransform(404.4,66.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgwBQIAAicIASAAIAAAPQAGgJAHgFQAIgDAJAAQAPAAALAHQAMAIAFANQAGAOAAAQQAAASgGAMQgGANgMAIQgNAHgMABQgJAAgHgEQgIgFgEgGIAAA4gAgVg0QgKAMABAVQAAAVAJAKQAJAKAMAAQALAAAJgKQAKgLgBgVQAAgWgJgKQgJgMgLAAQgLAAgKAMg");
	this.shape_356.setTransform(392.5,68.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgKASQAGgDADgFQABgFAAgIIgJAAIAAgWIAUAAIAAAWQAAAKgEAIQgFAHgHAEg");
	this.shape_357.setTransform(376.9,72.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_358.setTransform(368.3,66.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_359.setTransform(356.7,66.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_360.setTransform(347.7,64.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_361.setTransform(338.4,65.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAEIhTAAQABATAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEASgNAJQgNAKgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_362.setTransform(326.1,66.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_363.setTransform(317.6,63.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_364.setTransform(309.7,66.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_365.setTransform(301.7,63.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_366.setTransform(293.8,66.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_367.setTransform(282.1,66.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAHgMAGgEQADgEAIAAQAJAAAKAGIgHASQgGgEgHAAQgHAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_368.setTransform(273.2,65.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgeA+IAAAPIgSAAIAAicIATAAIAAA4QANgPAQABQALAAAJADQAKAFAGAIQAGAHADALQAEAJAAAMQAAAegOAPQgPAQgUABQgSgBgMgRgAgVgKQgKAKAAATQAAAUAGAKQAJAPAQgBQAKABAKgMQAJgLAAgVQAAgVgJgKQgIgLgMAAQgMAAgJAMg");
	this.shape_369.setTransform(262.8,64);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_370.setTransform(250.2,66.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_371.setTransform(238.6,66.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_372.setTransform(221.5,66.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_373.setTransform(209.9,66.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgOANgGQAMgHANAAQASAAAMAJQAMAJADASIgSADQgDgMgHgFQgHgHgJAAQgNAAgJALQgJAKAAAWQAAAXAJAKQAIAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgNALgSAAQgWAAgOgPg");
	this.shape_374.setTransform(198.6,66.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_375.setTransform(186.6,66.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgwBQIAAicIASAAIAAAPQAGgJAHgFQAIgDAJAAQAPAAALAHQAMAIAFANQAGAOAAAQQAAASgGAMQgGANgMAIQgNAHgMABQgJAAgHgEQgIgFgEgGIAAA4gAgVg0QgKAMABAVQAAAVAJAKQAJAKAMAAQALAAAJgKQAKgLgBgVQAAgWgJgKQgJgMgLAAQgLAAgKAMg");
	this.shape_376.setTransform(174.7,68.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgpBNIgCgSIALACQAHAAAEgCIAGgGIAGgPIACgFIgshwIAVAAIAYBCIAGAZQADgMAFgMIAYhDIAUAAIgsByIgIAaQgGAKgGAEQgHAFgJAAQgGAAgHgDg");
	this.shape_377.setTransform(156.8,68.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_378.setTransform(145,66.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AA6A6IAAhGQAAgMgCgFQgCgFgFgDQgFgDgHAAQgMAAgIAIQgIAIAAARIAABBIgRAAIAAhIQAAgNgFgHQgEgGgLAAQgIAAgHAEQgHAEgDAJQgDAIAAAPIAAA6IgUAAIAAhwIASAAIAAAQQAFgJAJgFQAJgFALAAQANAAAIAFQAGAGADAJQAOgUAWAAQARAAAJAKQAJAJAAATIAABNg");
	this.shape_379.setTransform(129.8,65.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_380.setTransform(547,39.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAEIhTAAQABATAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEASgNAJQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_381.setTransform(534.8,39.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_382.setTransform(525.8,37.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_383.setTransform(517,39.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_384.setTransform(509.1,37.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AAdA4IgXgjIgGgKIgcAtIgYAAIAqg5Igng2IAZAAIARAaIAHANIAIgMIATgbIAXAAIgoA1IArA6g");
	this.shape_385.setTransform(501.2,39.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAOAPQAPAQAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgOAAQgMAAgJAJg");
	this.shape_386.setTransform(489.5,39.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgpBNIgCgSIALACQAHAAAEgCIAGgGIAGgPIACgFIgshwIAVAAIAYBCIAGAZQADgMAFgMIAYhDIAUAAIgsByIgIAaQgGAKgGAEQgHAFgJAAQgGAAgHgDg");
	this.shape_387.setTransform(471.9,41.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_388.setTransform(454.1,39.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_389.setTransform(445.2,39.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_390.setTransform(437.7,37.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_391.setTransform(429,39.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQAEgHAGgEQAGgCAHgDIASgCQAVgDALgEIAAgFQABgMgGgEQgHgHgOAAQgMAAgHAFQgGAFgEALIgSgCQACgMAGgIQAGgHALgEQALgEAMAAQAQAAAIAEQAKADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgCAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQAEgHgBgMIAAgHQgKADgTAEg");
	this.shape_392.setTransform(417.4,39.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_393.setTransform(405.7,39.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAWAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAJAKQAKAKAMAAQALAAAHgGQAIgFAEgMIAVACQgFASgNAJQgMAKgVAAQgXAAgOgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_394.setTransform(394.1,39.5);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAGgMQAGgOALgHQALgHAOAAQAIAAAJADQAHAFAFAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUABQgNgBgLgHgAgTgLQgJAKAAAVQAAAWAJALQAKAKAKAAQAMABAJgLQAJgKAAgVQAAgWgJgKQgIgLgOAAQgLgBgIALg");
	this.shape_395.setTransform(381.5,37.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_396.setTransform(363.5,39.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_397.setTransform(351.2,39.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_398.setTransform(336.3,39.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_399.setTransform(325.6,39.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgwBQIAAicIARAAIAAAPQAHgJAIgFQAIgDAIAAQAPAAAMAHQAKAIAHANQAFAOAAAQQAAASgGAMQgGANgMAIQgMAHgNABQgJgBgHgDQgIgFgEgGIAAA4gAgVg0QgKAMAAAVQABAVAIAKQAJAKANAAQALAAAJgKQAJgLAAgVQAAgWgJgKQgIgMgMAAQgLAAgKAMg");
	this.shape_400.setTransform(313.7,41.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_401.setTransform(295,39.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgYBIQgLgIgHgNQgGgOAAgRQAAgRAFgMQAHgOALgHQALgHAOAAQAJAAAHADQAIAFAGAHIAAg5IATAAIAACcIgSAAIAAgPQgLARgUABQgMgBgMgHgAgTgLQgJAKAAAVQAAAWAJALQAJAKALAAQAMABAKgLQAIgKABgVQgBgWgIgKQgKgLgNAAQgLgBgIALg");
	this.shape_402.setTransform(282.4,37.5);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAVgDALgEIAAgFQAAgMgFgEQgHgHgOAAQgMAAgHAFQgHAFgDALIgSgCQACgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEgBAFQABAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_403.setTransform(270.5,39.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgTIATgDQACAMAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgGgGgEQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgIQAAgIAEgHQADgGAGgEQAFgEAIgCQAHgCAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgJgGgEQgGgGgKAAQgNABgFAEQgGAEAAAHQAAADACADQADADAFACIAPAGQAUAFAIAEQAJABAEAHQAFAGAAAKQAAAJgGAJQgGAJgKAFQgLAEgNAAQgUAAgMgJg");
	this.shape_404.setTransform(258.8,39.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLADgTAEg");
	this.shape_405.setTransform(247.2,39.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgwBQIAAicIASAAIAAAPQAGgJAHgFQAJgDAJAAQAPAAAKAHQAMAIAFANQAGAOAAAQQAAASgGAMQgHANgMAIQgMAHgMABQgIgBgIgDQgIgFgFgGIAAA4gAgVg0QgJAMAAAVQgBAVAKAKQAJAKAMAAQALAAAJgKQAKgLAAgVQgBgWgIgKQgKgMgLAAQgLAAgKAMg");
	this.shape_406.setTransform(235.3,41.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLADgTAEg");
	this.shape_407.setTransform(216.6,39.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AAaBOIAAhIQABgNgHgGQgGgHgMAAQgGAAgHAFQgIAEgEAIQgDAFAAAOIAAA+IgTAAIAAibIATAAIAAA4QAOgPATAAQAMAAAJAFQAKAFAEAIQAEAJAAAPIAABIg");
	this.shape_408.setTransform(204.4,37.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAIgDIARgCQAWgDALgEIAAgFQAAgMgGgEQgIgHgNAAQgNAAgGAFQgHAFgDALIgTgCQADgMAGgIQAFgHAMgEQALgEANAAQAOAAAKAEQAIADAFAFQAEAFACAIIABASIAAAYQAAAbABAHQACAHADAGIgUAAQgDgGgBgHQgLAIgJAEQgIAEgMAAQgTAAgKgJgAgDAHQgMACgFABQgFACgDAFQgDAEAAAFQAAAHAHAGQAFAFAMAAQAIAAAKgFQAIgFAEgIQAEgHAAgMIAAgHQgLADgTAEg");
	this.shape_409.setTransform(186,39.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgdA6IAAhwIARAAIAAARQAGgMAGgEQADgEAIAAQAJAAALAGIgHASQgIgEgHAAQgGAAgDAEQgFAEgCAGQgDALgBAMIAAA6g");
	this.shape_410.setTransform(177.2,39.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AgeA6IAAhwIARAAIAAARQAIgMAFgEQADgEAIAAQAJAAAKAGIgHASQgHgEgGAAQgHAAgDAEQgFAEgCAGQgEALAAAMIAAA6g");
	this.shape_411.setTransform(169.8,39.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAEIhTAAQABATAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIATACQgEASgNAJQgMAKgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_412.setTransform(159.1,39.5);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg3IAAgWIARAAIAAAWg");
	this.shape_413.setTransform(150.5,37.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_414.setTransform(145.2,37.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgNQAAgJAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDALIgSgCQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAKAEQAJADAEAFQAEAFACAIIABASIAAAYQAAAbABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgJAEQgJAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKADgTAEg");
	this.shape_415.setTransform(129.7,39.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_416.setTransform(121.1,37.3);

	this.fondo2 = new lib.fondo2_1();
	this.fondo2.parent = this;
	this.fondo2.setTransform(-100,178.5,1,1,0,0,0,-27,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.fondo2},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.atrasbtn1}]},3).to({state:[]},1).wait(2));

	// Nivel1
	this.carta4abierta = new lib.carta4abierta();
	this.carta4abierta.parent = this;
	this.carta4abierta.setTransform(346,143.8);
	this.carta4abierta.visible = false;
	new cjs.ButtonHelper(this.carta4abierta, 0, 1, 1);

	this.carta3abierta = new lib.carta3abierta();
	this.carta3abierta.parent = this;
	this.carta3abierta.setTransform(352.5,135);
	this.carta3abierta.visible = false;
	new cjs.ButtonHelper(this.carta3abierta, 0, 1, 1);

	this.carta2abierta = new lib.carta2abierta();
	this.carta2abierta.parent = this;
	this.carta2abierta.setTransform(352.5,143.8);
	this.carta2abierta.visible = false;
	new cjs.ButtonHelper(this.carta2abierta, 0, 1, 1);

	this.carta1abierta = new lib.carta1abierta();
	this.carta1abierta.parent = this;
	this.carta1abierta.setTransform(352.5,135);
	this.carta1abierta.visible = false;
	new cjs.ButtonHelper(this.carta1abierta, 0, 1, 1);

	this.carta4 = new lib.Carta();
	this.carta4.parent = this;
	this.carta4.setTransform(563,278.9,0.231,0.23,0,0,0,0,1.1);

	this.carta3 = new lib.Carta();
	this.carta3.parent = this;
	this.carta3.setTransform(1367.9,284.5,0.231,0.23,0,0,0,0,1.1);

	this.carta2 = new lib.Carta();
	this.carta2.parent = this;
	this.carta2.setTransform(880.9,278.9,0.231,0.23,0,0,0,0,1.1);

	this.carta1 = new lib.Carta();
	this.carta1.parent = this;
	this.carta1.setTransform(152.5,278.9,0.231,0.23,0,0,0,0,1.1);

	this.pnivel1izq = new lib.Izquierda();
	this.pnivel1izq.parent = this;
	this.pnivel1izq.setTransform(89.5,261.6,2,1.998,0,0,0,0,1.1);

	this.personajenivel1 = new lib.Derecha();
	this.personajenivel1.parent = this;
	this.personajenivel1.setTransform(87,264.1,2.045,2.044,0,0,0,0,2);

	this.fondonivel1 = new lib.fondo1_1();
	this.fondonivel1.parent = this;
	this.fondonivel1.setTransform(800,177.5,1,1,0,0,0,-50,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.fondonivel1},{t:this.personajenivel1},{t:this.pnivel1izq},{t:this.carta1},{t:this.carta2},{t:this.carta3},{t:this.carta4},{t:this.carta1abierta},{t:this.carta2abierta},{t:this.carta3abierta},{t:this.carta4abierta}]},2).to({state:[]},1).wait(3));

	// Menu
	this.infobtn = new lib.infobtn();
	this.infobtn.parent = this;
	this.infobtn.setTransform(394.5,167.4);
	new cjs.ButtonHelper(this.infobtn, 0, 1, 1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#CC0000").s().p("AgSCPIAAj7IheAAIAAgiIDhAAIAAAiIhfAAIAAD7g");
	this.shape_417.setTransform(429.6,55.1);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#CC0000").s().p("Ag3CIQgbgLgPgXQgPgXgBgcIAkgDQADAVAJANQAKAOATAJQAUAJAWAAQAVgBARgGQARgHAIgLQAIgLAAgNQAAgNgIgKQgIgLgSgHQgLgEgmgKQgngJgQgHQgUgKgKgQQgKgQAAgUQAAgWALgSQANgTAXgKQAZgJAcAAQAegBAYALQAYAKANATQAOAVABAZIgkADQgDgbgRgPQgRgOggAAQgiAAgPAOQgQAMAAARQAAAQALAKQALAKAsAKQAvALAQAHQAaAKALASQAMARABAXQgBAYgNAUQgNAUgYALQgZAMgfAAQgkAAgagMg");
	this.shape_418.setTransform(403.8,55.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#CC0000").s().p("AhHCAQgggTgQgiQgQgiAAgmQAAhFAmgoQAmgpA7AAQAnAAAgATQAgATARAiQAQAiAAApQAAAsgRAiQgSAiggASQggASglAAQgnAAgggUgAhDhWQgdAbAAA/QAAA0AcAeQAbAdApAAQAqAAAcgeQAbgeAAg3QAAghgLgaQgMgagXgPQgXgOgcAAQgmAAgdAcg");
	this.shape_419.setTransform(375.1,55.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#CC0000").s().p("AhYCPIAAkdIAmAAIAAD7ICLAAIAAAig");
	this.shape_420.setTransform(349.1,55.1);

	this.creditosbtn = new lib.creditosbtn();
	this.creditosbtn.parent = this;
	this.creditosbtn.setTransform(242.5,268.4,1,1,0,0,0,134.5,16.6);
	new cjs.ButtonHelper(this.creditosbtn, 0, 1, 1);

	this.instruccionesbtn = new lib.instruccionesbtn();
	this.instruccionesbtn.parent = this;
	this.instruccionesbtn.setTransform(242.5,199.4,1,1,0,0,0,134.5,16.6);
	new cjs.ButtonHelper(this.instruccionesbtn, 0, 1, 1);

	this.iniciarjuegobtn = new lib.iniciarjuegobtn();
	this.iniciarjuegobtn.parent = this;
	this.iniciarjuegobtn.setTransform(242.5,131.3,1,1,0,0,0,134.5,16.6);
	new cjs.ButtonHelper(this.iniciarjuegobtn, 0, 1, 1);

	this.instance_4 = new lib.Abajo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(527,271.8,1.8,1.8,0,0,0,0,1);

	this.instance_5 = new lib.fondo1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-43,177.5,1,1,0,0,0,-50,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.iniciarjuegobtn},{t:this.instruccionesbtn},{t:this.creditosbtn},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.infobtn}]},1).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;