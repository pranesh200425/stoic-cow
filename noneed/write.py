filer = ("./quotes.txt", "r");
filew = ("./new_quotes.txt", "w");

while 1:
    c = filer.read(1)
    if c == ' \" ':
        print("works")
    if not c:
        break
