#!/bin/bash

cow=$(node cow.js)

node getQuote.js | cowsay -f $cow
