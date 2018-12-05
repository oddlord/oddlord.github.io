---
title:  "Asteroids and Spaceships"
date:   2018-11-19 20:20:00 +0100
image: /assets/images/asteroids.png
---

Here I am again, everyone! This time I wanna talk about a remaster I've recently made of a super classic arcade game... Asteroids!

<!--more-->

For those who doesn't know, [Asteroids](https://en.wikipedia.org/wiki/Asteroids_(video_game)) is an arcade game where the player controls a 2D spaceship that can only move and shoot. The goal is to survive the never ending waves of asteroids that spawn on the screen and stacking as many points as possible before dying.

<img src="/assets/images/asteroids-arcade.jpg" alt="Arcade Asteroids"/>

As usual, I've made this game from scratch, only relying on 3rd party assets such as 3D models, sprites and audio. And for this game, I had a style clear in my mind: 3D graphics with low-poly/cartoonish style. And as for the music, something electric and frenetic, to convey the true nature of the game as something where you ought to move, or else you're dead!

I've implemented the basic features of the arcade game, such as scores, lives, multiple asteroid waves and screen wrapping (which was the coolest thing to implement and also shockingly easy). With this game, I also tried to polish not only the final aspect of the game, but also the architecture and cleanliness of the underlying code. In particular, I learned and implemented in the game the very useful concept of Object Pooling, which refers to the practice of just disabling unwanted objects, instead of destroying them, so that when needed again they are already available and there is no need to instantiate them on the spot (which is more computationally expensive).

I had also fun experimenting with different types of controls. In particular, I've implemented the support for mouse/keyboard and for controllers on PC and also for mobile platforms, through a virtual joystick.

<img src="/assets/images/asteroids-mobile.jpg" alt="Asteroids 3D on mobile"/>

The game still lacks many features I would love to add, such as online multiplayer, and I will probably update it in the future. For now, it's a nice addition to my portfolio of wannabe-gamedev. For the curious, the code of the game is available at [this Github repo](https://github.com/oddlord/unity-asteroids), while releases of the game for both Android and Windows can be downloaded [here](https://drive.google.com/drive/folders/1p2B6a51zJ4EjgFtYFJgk6XFCB7SYhkSL?usp=sharing).

See you soon!

Tommaso
