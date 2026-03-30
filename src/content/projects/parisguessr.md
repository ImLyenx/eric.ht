---
title: ParisGuessr
tags:
  [
    { "name": "Go", "color": "#00ADD8", icon: "simple-icons:go" },
    { "name": "Vite", "color": "#ffab03", icon: "simple-icons:vite" },
    { "name": "React", "color": "#06bfef", icon: "simple-icons:react" },
    {
      "name": "Tailwind CSS",
      "color": "#38bdf8",
      icon: "simple-icons:tailwindcss",
    },
  ]
description: A collection of minigames based on the Paris public transport network.
demo: https://parisguessr.com
---

## Context

A school friend and I randomly decided to search for games related to the paris metro/RER stations, and the few that we could find were either too simple or too specific for us. So we decided to solve the problem.

## The project

Île-de-France Mobilités, the company that oversees development and exploitation of the Paris public transport network, has an open data platform that gives you access to a massive amount of data related to stations, lines, stop times, air quality in stations, and basically everything you could need. We did the only logical thing to do, which was to download CSV and JSON files containing millions of lines of data and then process them with our humble Golang backend to clean up and make the data usable.
Currently, there are only a few games but we are planning on making more very soon.

You can check it out [here!](https://parisguessr.com)
