# Stoic Cow

This is a simple funny program created by me using the famous linux command "Cowsay". 

## How this works?
    
    I have a JSON file that contains stoic quotes and their authors. A javascript program randomly gets a quote and author from the JSON file and outputs it. Another javascript file has array of all the cows(animals) from the cowsay package and it randomly outputs an animal.
    A bash script is used to exeute the program. First the script executes the random cow(animal) generator js script and will save it in a variable. And then it will execute the main command that outputs the cowsay and the randow we saved as the variable is passed to this. Feel free to tweak the code and add your flavor 
