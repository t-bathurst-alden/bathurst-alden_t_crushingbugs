# Bug Fixes repo
This is my poor attempt at figuring out a JavaScript function doing my absolute best not to turn to AI out of moral obligation.
## Installation
No installation required, simply download and enjoy!
## Usage
Open index.html in any browser you wish.
## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.
## History/Steps I took
First I need to make a variable for the reset button using a query selector, then I will try some if and else, but that has nothing to do with the button until I define its function upon a click. 

I then go to Google and search up how to program a simple reset button, since that didn’t work. 
https://www.w3schools.com/jsref/met_form_reset.asp will be used if I can’t figure it out myself. 

Added eventlistener for reset button.

Contemplating using an if statement to judge if the label box is empty or meets qualifications.

Every website is saying to use JqueryUI but I don’t believe I’m allowed to.

I do not want to ask AI, as it goes against my morals, but I’m growing more desperate.

Using let resetBtn = true to make it into a button I guess.

Looking like I might need to ask AI for its help since every website is using JqueryUI or functions I don't understand.

Made the target zones have a hover effect at the very least

Tried making it so that the function would run a return feature if the dropzone had a child within it, given an error.

Tried using if(targetzone.children.length=<0) for a reset. Return command not functioning.

Ended up going with a function that reloads the page entirely as a nuclear option.

## Credits
Tegan Bathurst-Alden
## License
MIT License