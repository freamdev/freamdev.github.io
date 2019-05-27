"use strict";
const Scene = function(gl) {
  this.vsIdle = new Shader(gl, gl.VERTEX_SHADER, "idle_vs.essl");
  this.fsSolid = new Shader(gl, gl.FRAGMENT_SHADER, "solid_fs.essl");
  this.fsExplo = new Shader(gl, gl.FRAGMENT_SHADER, "explosison_fs.essl");
  
  this.solidProgram = new Program(gl, this.vsIdle, this.fsSolid);
  this.explosisonProgram = new Program(gl, this.vsIdle, this.fsExplo);

  this.quadGeometry = new QuadGeometry(gl);
  this.triangleGeometry = new TriangleGeometry(gl);

  this.timeAtFirstFrame = new Date().getTime();
  this.timeAtLastFrame = this.timeAtFirstFrame;

  this.speed = 0.4;
  this.right = new Vec2(this.speed, 0);
  this.left = new Vec2(-this.speed, 0);
  this.up = new Vec2(0, this.speed);
  this.down = new Vec2(0, -this.speed);

  this.colorTexture = new Sampler2D();

  this.animationOffset = new Vec2(0.12, 0);

  this.camera = new OrthoCamera();

  this.asteroidMaterial = new Material(gl, this.solidProgram);
  this.asteroidMaterial.colorTexture.set(new Texture2D(gl, './media/asteroid.png'));
  this.asteroidMesh = new Mesh(this.quadGeometry, this.asteroidMaterial);

  this.playerMaterial = new Material(gl, this.solidProgram);
  this.playerMaterial.colorTexture.set(new Texture2D(gl, './media/raider.png'));
  this.playerMesh = new Mesh(this.quadGeometry, this.playerMaterial);

  this.playerGameObject = new GameObject(this.playerMesh);
  this.playerGameObject.Move = MovePlayer;
  this.playerGameObject.Velocity = 0;
  this.playerGameObject.AngleeVelocity = 0;
  this.playerGameObject.DistanceDone = 0;
  this.playerGameObject.CanStillCollide = true;
  this.playerGameObject.Cooldown = 15;
  this.playerGameObject.ShootTime = 0;

  this.explosisonMaterial = new Material(gl, this.explosisonProgram);
  this.explosisonMaterial.colorTexture.set(new Texture2D(gl, './media/boom.png'));
  this.explosisonMesh = new Mesh(this.quadGeometry, this.explosisonMaterial);

  this.plasmaMaterial = new Material(gl, this.solidProgram);
  this.plasmaMaterial.colorTexture.set(new Texture2D(gl, './media/plasma.png'));
  this.plasmaMesh = new Mesh(this.quadGeometry, this.plasmaMaterial);
  
  this.Iteration = 0;

  this.gameObjects = [];

  this.gameObjects.push(this.playerGameObject);

};

Scene.prototype.CreateExplosion = function(pos){
  let newExplosison = new GameObject(this.explosisonMesh);
  newExplosison.Move = ExplosionMove;
  newExplosison.Iteration = 0;
  newExplosison.position = pos;
  this.gameObjects.push(newExplosison);
};

Scene.prototype.CreatePlasma = function(pos, orientation){
  let newPlasma = new GameObject(this.plasmaMesh);
  newPlasma.Move = PlasmaMove;
  newPlasma.position = pos;
  newPlasma.scale = new Vec3(0.3,0.3,0.3);
  newPlasma.dir = new Vec2(Math.cos(orientation), Math.sin(orientation));
  newPlasma.CanCollideWithPlayer = false;
  this.gameObjects.push(newPlasma);
};

Scene.prototype.CreateAsteroid = function(pos){
  let newAsteroid = new GameObject(this.asteroidMesh);
  newAsteroid.Move = AsteroidMove;
  newAsteroid.position = new Vec2(pos.x + Math.random()+2, pos.y + Math.random()*2-1);
  newAsteroid.CanCollideWithPlayer = true;
  newAsteroid.orientation = Math.random() * 360;
  newAsteroid.scale = new Vec3(Math.random() * 0.4 + 0.8, Math.random() * 0.4 + 0.8, Math.random() * 0.4 + 0.8);
  this.gameObjects.push(newAsteroid);
};

Scene.prototype.update = function(gl, keysPressed) {
  const timeAtThisFrame = new Date().getTime();
  const dt = (timeAtThisFrame - this.timeAtLastFrame) / 1000.0;
  const t = (timeAtThisFrame - this.timeAtFirstFrame) / 1000.0; 
  this.timeAtLastFrame = timeAtThisFrame;

  this.Iteration += 1;

  if((this.Iteration%60) == 0){
    for(var i = 0; i < Math.floor(this.Iteration/300)+1; i++){
      this.CreateAsteroid(this.playerGameObject.position);
    }
  }

  // clear the screen
  gl.clearColor(0.05, 0.05, 0.05, 1.0);
  gl.clearDepth(1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  this.frameCounter++;

  this.camera.updateViewProjMatrix();
  
   for(var i = 0; i < this.gameObjects.length; i++){
     if(this.gameObjects[i] != null){
       this.gameObjects[i].Move(t,dt,keysPressed, this.gameObjects);
       this.gameObjects[i].draw(this.camera);
     }
   }

  //this.playerGameObject.draw(this.camera);

  this.camera.position = new Vec3(this.playerGameObject.position.x, 0, 0)
};

function AsteroidMove(t, dt, keysPressed, gameObjects){
  this.position = new Vec2(this.position.x - dt, this.position.y);
}

function ExplosionMove(t, dt, keysPressed, gameObjects){

  if(this.Iteration < 36){
    var offset = 0;
    var scale = 0.16666666;
    var xoffset = offset + (this.Iteration%6 * scale);
    var yoffset = offset + (Math.floor(this.Iteration/6) * scale);
    
    this.mesh.material.animationOffset.set(new Vec2(xoffset, yoffset));
    this.Iteration = this.Iteration + 1;
  }else{
    this.position = new Vec2(-100000,0);
  }

}

function PlasmaMove(t, dt, keysPressed, gameObjects){
  this.position = new Vec2(this.position.x + this.dir.x * dt * 2, this.position.y + this.dir.y * dt * 2);

  for(var i = 0; i < gameObjects.length; i++){

    if(gameObjects[i] != this && gameObjects[i].CanCollideWithPlayer == true){
      var distance = Distance(gameObjects[i], this);
      if(distance < 0.1){
        this.CanStillCollide = false;
        window.globalApp.scene.CreateExplosion(this.position);

        gameObjects[i].position = new Vec2(-1000,0);
        this.position = new Vec2(-10000,0);

        // var indexOther = window.globalApp.scene.gameObjects.indexOf(gameObjects[i]);
        // window.globalApp.scene.gameObjects.splice(indexOther, 1);

        // var index = window.globalApp.scene.gameObjects.indexOf(this);
        // window.globalApp.scene.gameObjects.splice(index, 1);
      }
    }

  }
}

function Shoot(go){
  if(go.ShootTime <= 0){
    window.globalApp.scene.CreatePlasma(go.position  , go.orientation);
    go.ShootTime = go.Cooldown;
  }
}

function MovePlayer(t, dt, keysPressed, gameObjects){
  if(this.CanStillCollide){
    this.position = new Vec2(Math.cos(this.orientation) * this.Velocity * dt + this.position.x , Math.sin(this.orientation) * this.Velocity * dt + this.position.y,0);

    if(this.ShootTime > 0){
      this.ShootTime -= 1;
    }

    if(keysPressed['SPACE'] == true){
      Shoot(this);
  
    }


    if(keysPressed['W'] == true){
      if(this.Velocity < 1){
        this.Velocity += 3 * dt;
      }else{
        this.Velocity = 1;
      }
    }

    if(this.Velocity < 0){
      this.Velocity = 0;
    }else{
      this.Velocity -= 0.2 * dt;
    }

    if(keysPressed['A'] == true){
      this.AngleeVelocity += 5 * dt;
    }else{
      this.AngleeVelocity -= 1 * dt;
    }
    
    if(keysPressed['D'] == true){
      this.AngleeVelocity -= 5 * dt;
    }else{
      this.AngleeVelocity += 1 * dt;
    }
    this.Rotate(this.AngleeVelocity * dt);

  

    if(this.AngleeVelocity < 0){
      this.AngleeVelocity += 1 * dt;
    }

    if(this.AngleeVelocity > 0){
      this.AngleeVelocity -= 1 * dt;
    }

    if(this.AngleeVelocity > 1){
      this.AngleeVelocity = 1;
    }
    if(this.AngleeVelocity < -1 ){
      this.AngleeVelocity = -1;
    }

    if(this.position.y > 0.75){
      this.position.y = 0.75;
    }

    if(this.position.y < -0.75){
      this.position.y = -0.75;
    }


    for(var i = 0; i < gameObjects.length; i++){
      if(gameObjects[i] != this && gameObjects[i].CanCollideWithPlayer == true){
        var distance = Distance(gameObjects[i], this);
        if(distance < 0.2 && this.CanStillCollide){
          this.CanStillCollide = false;
          window.globalApp.scene.CreateExplosion(this.position);
          var index = window.globalApp.scene.gameObjects.indexOf(this);
          window.globalApp.scene.gameObjects.splice(index, 1);
          setTimeout(gameOverMan, 1000);
        }
      }
    }

    this.DistanceDone = this.position.x;
  }

}

function gameOverMan(){
  alert('        Game Over\nDistance travelled: '+(Math.floor(window.globalApp.scene.playerGameObject.DistanceDone)+1)+'');
  location.reload();
}



function Distance(a, b){
  var xDSquare = (a.position.x - b.position.x) * (a.position.x - b.position.x);
  var yDSquare = (a.position.y - b.position.y) * (a.position.y - b.position.y);
  var distance = Math.sqrt(xDSquare + yDSquare);
  return distance;
}

function MoveAsteroid(t, dt, keysPressed, gameObjects){
  //this.Rotate(1 * dt);
  this.position = new Vec3(this.position.x + (this.Dir.x * dt * 0.1), this.position.y + (this.Dir.y * dt * 0.1), this.position.z);
}


function SelfRotateGameObjectMove(t, dt, keysPressed, gameObjects){
  this.Rotate(1 * dt);
}