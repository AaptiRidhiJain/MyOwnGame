const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies;

var world,engine;
var mama,mamaImage;
var mami,mamiImage;
var MamaMamiImage;
var bgImage;
var heart;
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,u,v,w,x,y,z;
var aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv,ww,xx,yy,zz;
var PLAY = 1;
var END = 0;
var gameState = 1;
var blockGroup;

function preload(){
  heartImage = loadImage("heart.png");
  mamaImage = loadImage("Mama.png");
  mamiImage = loadImage("Mamiji.png");
  MamaMamiImage = loadImage("Mama&Mamiji.jpg");
  bgImage = loadImage("bg.jpg");
}

function setup() {
  createCanvas(600, 600);
  engine = Engine.create();
  world = engine.world;    
  Engine.run(engine);

  a = new Block(310,75,390,10);
  b = new Block(120,333,10,450);
  c = new Block(160,100,10,40);
  d = new Block(500,300,10,450);
  e = new Block(140,160,40,10);
  f = new Block(200,120,10,90);
  g = new Block(160,200,90,10);
  h = new Block(310,553,390,10);
  i = new Block(165,230,10,60);
  j = new Block(255,120,40,10);
  k = new Block(240,165,10,80);
  l = new Block(270,165,10,80);
  m = new Block(147,290,45,10);
  n = new Block(350,165,70,10);
  o = new Block(350,140,10,60);
  p = new Block(350,200,100,10);
  q = new Block(450,110,10,80);
  r = new Block(420,115,50,10);
  s = new Block(400,220,10,50);
  t = new Block(380,240,50,10);
  u = new Block(260,240,110,10);
  v = new Block(210,310,10,80);
  w = new Block(450,215,10,80);
  x = new Block(145,510,40,10);
  y = new Block(180,320,50,10);
  z = new Block(150,350,10,70);
  aa = new Block(190,380,80,10);
  bb = new Block(160,460,10,95);
  cc = new Block(200,465,10,105);
  dd = new Block(245,465,80,10);
  ee = new Block(280,275,80,10);
  ff = new Block(245,310,10,80);
  gg = new Block(295,300,50,10);
  hh = new Block(270,322.5,10,55);
  ii = new Block(250,417.5,90,10);
  jj = new Block(340,465,10,100);
  kk = new Block(300,512.5,90,10);
  ll = new Block(350,310,10,80);
  mm = new Block(350,345,100,10);
  nn = new Block(440,282.5,110,10);
  oo = new Block(385,295,10,35);
  pp = new Block(350,380,110,10);
  qq = new Block(450,325,10,80);
  rr = new Block(420,420,70,10);
  ss = new Block(385,465,10,100);
  tt = new Block(450,465,10,100);
  uu = new Block(399,510,35,10);
  vv = new Block(430,460,35,10);

  //blockGroup = new Group(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv);

    heart = new Heart(106,93,20,20);
    
    mama = createSprite(35,60);
    mama.addImage(mamaImage);
    mama.scale = 0.6;

    mami = createSprite(550,490);
    mami.addImage(mamiImage);
    mami.scale = 0.3;
}
 
function draw() {
  background(bgImage);
  Engine.update(engine);  
    heart.display();
    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
    f.display();
    g.display();
    h.display();
    i.display();
    j.display();
    k.display();
    l.display();
    m.display();
    n.display();
    o.display();
    p.display();
    q.display();
    r.display();
    s.display();
    t.display();
    u.display();
    v.display();
    w.display();
    x.display();
    y.display();
    z.display();
    aa.display();
    bb.display();
    cc.display();
    dd.display();
    ee.display();
    ff.display();
    gg.display();
    hh.display();
    ii.display();
    jj.display();
    kk.display();
    ll.display();
    mm.display();
    nn.display();
    oo.display();
    pp.display();
    qq.display();
    rr.display();
    ss.display();
    tt.display();
    uu.display();
    vv.display();

    heart.bounceOff(heart.body,a);

  drawSprites();

if(keyDown("up")){
  console.log(heart.body.position.y);
  heart.body.position.y -=3;
}

if(keyDown("down")){
  console.log(heart.body.position.y);
  heart.body.position.y +=3;
}

if(keyDown("right")){
  console.log(heart.body.position.x);
  heart.body.position.x +=3;
}

if(keyDown("left")){
  console.log(heart.body.position.x);
  heart.body.position.x -=3;
}

  textSize(40);
  noFill();
  stroke("red");
  strokeWeight(1);
  text("THE EASIEST GAME",110,50);

  textSize(20);
  fill("red");
  noStroke();
  strokeWeight(3);
  text("Complete the game to see the next surprise!!!",50,590);

  fill("magenta");
  stroke("darkmagenta");
  strokeWeight(1.5);
  textSize(20);
  text("PRESS:",25,300);

  fill("darkmagenta");
  textSize(10);
  noStroke();
  text("UP_arrow to move",10,320);
  text("UP",50,340);
  text("DOWN_arrow to move",5,360);
  text("DOWN",50,380)
  text("RIGHT_arrow to move",5,400);
  text("RIGHT",50,420);
  text("LEFT_arrow to move",5,440);
  text("LEFT",50,460);
}
