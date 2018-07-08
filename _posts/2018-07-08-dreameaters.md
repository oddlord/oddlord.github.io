---
layout: post
title:  "Dreameaters"
date:   2018-07-08 22:30:00 +0100
image: /assets/images/dreameaters.png

excerpt_separator: <!--more-->

---
Hello folks! Here we are again with another update from my gamedev experience. This time around we'll be talking about dream-eating ghosts and multiplayer FPSs in Unity.

<!--more-->

So, I finally decided it would be time to start implementing my own ideas, making my own games, playing with my own designs... and seeing what happens. I thought it would be easier, at first, building on top of another game I already made in the past, while self-teaching myself Unity: the [Multiplayer FPS](https://github.com/oddlord/unity-projects/tree/master/MultiplayerFPS) game. I had already tried, as I explained in a [previous post]({% post_url 2018-06-20-cube-robots %}), to modify that game by using a robot model of my own (the [Cube Robot](https://github.com/oddlord/blender-cube-robot)) but that didn't prove to be successful. So, instead, I decided to resort to the [Unity Asset Store](https://assetstore.unity.com/) and try to implement some original idea.

And the idea I came up with was the following: you are a small, cute dream-eating ghost who wanders the night in search of a sleepy victim to feast on. As you finally find your prey, you soon realise that other ghosts have find the same potential victim and in the spirit world, just as in the physical one, one rule stands above anything else... only the strongest will eat! So you are left with no other option than to get your ghostly rifle and shoot to death the other ghosts... before they do the same to you!

So yeah, that's the premise. It sounds pretty cool to me as a setting for a videogame, so I thought is would be worth a shot. I also managed to find some very cool free (or very cheap) asset in the Unity Asset Store to implement the bedroom environment and the ghost characters. It didn't even take long to change the models with the new ones, allowing me to already have a first version of the game, although still very basic. The Dreameaters game is already available in my [Github](https://github.com/oddlord/unity-dreameaters) and for [downloading](https://github.com/oddlord/unity-dreameaters/raw/master/Dreameaters/Release/Dreameaters-win_x64.zip) (for Windows_x64).

The next steps will be to starting building on top of the already existing mechanics and implementing some new. The first I would like to do is to implement some winning strategy (at the moment a match simply goes on indefinitely) such as a timed match or a match based on a maximum number of available lives. Next, I would like to find some good model of an entire house (and not just the bedroom as it is at the moment), so that the players would have more space to play and will be able to think of more articulate strategies. Last but not least, I would like to implement a unique mechanic: the sleeping victim. The idea is that in the bedroom can be found the victim, sound asleep, but if the players shoot themselves inside the bedroom, the victim might wake up. When he wakes up, all the players in the room must phase temporarily to another dimension in order not to get caught, making them slightly resistant to enemy fire and unable to move or attack. But at the same time, in order to draw player into the bedroom, as the victim sleeps he will constantly produce power-ups, as a product of his sleep, that the players can eat in order to gain a specific ability for a short time (more damage, higher defence, see through walls, etc.).

So as you see, the game is still pretty in its infant phase of development, but I'm pretty excited about the settings and the mechanics I want to implement and I can't wait to work on it more.

Last thing, I wanted to say that last Monday I attended an informal pub gathering of some indie game developers in London. I must say, I met some very interesting people and it was great just talking to them about what we are all working on, the problems we're facing and the joys and struggles of game development. Several events like this are organised throughout each month and I'll surely go again. If you are in the London area, or just in the UK, and are interested in some indie gamedev talk, you're more than welcome to join the [Meetup group](https://www.meetup.com/London-Indie-Game-Developers/) and check for upcoming events!

Cheers!

Tommaso
