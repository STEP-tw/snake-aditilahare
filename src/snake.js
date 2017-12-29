const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  hitsTheWall:function(){
    let head = this.getHead();
    return (head.x==numberOfCols||head.y==numberOfRows||head.x<0||head.y<0);
  },
  eatsItself:function(){
    let snakeRef = this;
    return this.body.some(function(bodyPart){
      return snakeRef.head.isSameCoordAs(bodyPart);
    })
  }
}
