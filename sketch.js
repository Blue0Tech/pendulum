const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var options;

var bar;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  options = {
    isStatic : true
  }
  bar = Bodies.rectangle(200,100,250,10,options);
  World.add(world, bar);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(bar.position.x,bar.position.y,bar.bounds.max.x-bar.bounds.min.x,bar.bounds.max.y-bar.bounds.min.y);
}