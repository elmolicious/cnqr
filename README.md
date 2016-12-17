# cnqr

cnqr (Conquer) is a game idea based on the principle to conquer all enemy capture points to win the game by annihilating your opponents forces.

## Basic Structure

* each player starts with a minimum of one capture point
* several neutral capture points should be available for capture
* each captured point generates resources for this point (to a cap depending on the point)
* a player can make a connection between one of his points and any other (if within range)
  * if the target is a neutral or enemy point it will be captured after enough resources were send
  * if the target a friendly point it will support this point with additional resources
* further game mechanics are still in development

## Technologies used/planned for usage

The game should be only using web-technologies and avoid using big gaming frameworks like Unity (https://unity3d.com/de).
This is not because I think I can do better than unity in developing my own "framework", but to learn the most from it.

### Client-Technologies

* The game will be using Pixi.js (http://www.pixijs.com/) for its rendering engine which uses WebGL (Canvas as a fallback)
* To avoid different browsers and versions, the game will be shipped and build with electron (http://electron.atom.io/) making it cross platform and able to access multiple native platform features (e.g. the filesystem) which aren't available for normal web apps
* Server communitcation will be done with Socket.io (http://socket.io/)

### Server-Technologies

* A plain node.js server with a game lobby system
* Also the socket.io serverside during the game

# Notes

For further questions or criticism please contact me!
