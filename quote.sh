#!/bin/bash

sleep 1

cow=$(node /home/spectre007/Desktop/projects/dispQuotes/cow.js)

node /home/spectre007/Desktop/projects/dispQuotes/getQuote.js | cowsay -f $cow
