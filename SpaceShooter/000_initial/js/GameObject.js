const GameObject = function(mesh) { 
    this.mesh = mesh;
  
    this.position = new Vec3(0, 0, 0); 
    this.orientation = 0; 
    this.scale = new Vec3(1, 1, 1); 
  
    this.modelMatrix = new Mat4(); 
  };

  GameObject.prototype.updateModelTransformation =
                              function(){ 

    this.modelMatrix.set()
        .scale(this.scale)
        .rotate(this.orientation)
        .translate(this.position);
    
};

    GameObject.prototype.updateModelMatrix = function(){
    this.updateModelTransformation();
};

    GameObject.prototype.draw = function(camera){ 

    this.updateModelMatrix();
    //feladat: Uniforms.trafo.modelMatrix uniform beállítása
    Uniforms.uniformModelMatrix.modelMatrix.set()
    .mul(this.modelMatrix)
    .mul(camera.viewProjMatrix);
    this.mesh.draw(); 
  };

  GameObject.prototype.Move = function(t, dt, keysPressed, gameObjects){
    };

GameObject.prototype.Rotate = function(rot){
    this.orientation += rot;
}