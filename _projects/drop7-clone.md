---
title: Drop7 Clone
description: Clone game of the popular smartphone game Drop7
image: assets/images/drop7.png
date: 2018-03-13
technologies_desc: Drop7 Clone has been made with HTML5 (canvas) and Javascript.
technologies:
  - HTML5
  - Javascript
is_download: false
platforms:
  - name: Web
    url: "/games/drop7"
controls_desc: Drop7 Clone supports keyboard controls.
controls:
  - key: WASD / Arrow Keys
    value: Disc movement / menu navigation
  - key: Spacebar
    value: Menu selection
  - key: ESC
    value: Toggle menu
---

Drop7 Clone is the web clone of the smartphone puzzle game [Drop7](https://en.wikipedia.org/wiki/Drop7).

The game area is made of a 7-by-7 grid where each cell is either empty or occupied by a disc. Each turn the player gets a new disc to drop into one of the seven columns. The discs can be either numbered (from 1 to 7) or solid. A numbered disc will explode when its number matches the number of consecutive discs (connected to himself) either on its column or its raw. When exploding, a numbered disc will crack every solid disc nearby. Solid discs reveal a numbered disc when cracked twice.

After 30 drops, a new level is reached, spawning a new row of solid discs from below, pushing the existing discs up. When either the discs overflow the top row or the grid is full of discs, the game is over.

At each disc explosion, the player gets a number of points that increase as the explosion chain (i.e. the explosions combo) gets higher. When a new level is reached, the player gets a bonus of 7'000 points and if the grid gets cleared 70'000 points.
