# _Would You Be My Neighbor Project/ Practice_

#### _-This Project was meant to demonstrate my knowledge of Arrays and Looping.-_

#### By _**Theron Packus**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Markdown_
* _Terminal_
* _Visual Studio Code_
* _JavaScript_
* _jQuery_
* _Dillinger_

## Description

_This page was built so you could put in a whole number and at the click of "Show Result!" a sophisticated result should appear. Using JavaScript Arrays and Loops through methods and functions. Once clicked, the result should include every number before your number (starting from "1"). This is unless the number contains a 1, 2, or 3. If the number has a 1 in it and doesn't include a 2 or 3, replace the number with "Beep!". If the number has a 2 in it and doesn't include a 3, replace the number with "Boop!". If the number has a 3 in it, replace the number with "Won't you be my neighbor?". If your result follows that criteria then it's doing it's job. Give it a try by acquiring the Installation Requirements and following the Setup instructions below_

## Installation Requirements
- Requires Visual Studio Code Installation
- Requires Terminal Installation
- Requires "Live Server" Extension in VSCode
- Requires Google Chrome

## Setup
- Click Code at the top right of the repository
- Copy that url
- Make a new directory in Terminal by typing "mkdir view-a-and-r"
- Change into that directory by entering "cd view-a-and-r "
- Clone the url into that directory using "git clone (paste url from repository)"
- Change into that cloned directory by entering "cd view-a-and-r"
- Type code . in terminal to open in VSCode
- Once in VSCode under make sure the explorer tap on the top left hand side of the window is selected
- Under "ARRAYS-AND-LOOPING" left click on index.html file
- Right click in the index HTML script
- Select "Open with Live Server" option
- This will open a Google Chrome Browser
- There you can see my webpage

## Tests
#### Describe: beepBoop()

```Test: "It should return an array of 0 if the number 0 is inputted"
Expect: beepBoop(0).toEqual([0])

Test: "It should return an array with a range of 0 to 9 if the number 9 is inputted"
Expect: beepBoop(9).toEqual([0, Beep!, Boop!, Won't you be my neighbor?,4,5,6,7,8,9])

Test: "It should replace any number with a 3 to "won't you be my neighbor?""
Expect: beepBoop(13).toEqual([0, Beep!, Boop!, Won't you be my neighbor?,4,5,6,7,8,9, Beep!, Beep!, Boop!, Won't you be my neighbor?])

Test: "It should replace any number with a 2 and not a 3 to "Boop!""
Expect: beepBoop(23).toEqual([0, Beep!, Boop!, Won't you be my neighbor?,4,5,6,7,8,9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?])

Test: "It should replace any number including a 1 but not a 2 or 3 with "Beep!""
Expect: beepBoop(123).toEqual([0, Beep!, Boop!, Won't you be my neighbor?,4,5,6,7,8,9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Boop!, Boop!, Boop!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?,40, Beep!, Boop!, Won't you be my neighbor?,44,45,46,47,48,49,50, Beep!, Boop!, Won't you be my neighbor?,54,55,56,57,58,59,60, Beep!, Boop!, Won't you be my neighbor?,64,65,66,67,68,69,70, Beep!, Boop!, Won't you be my neighbor?,74,75,76,77,78,79,80, Beep!, Boop!, Won't you be my neighbor?,84,85,86,87,88,89,90, Beep!, Boop!, Won't you be my neighbor?,94,95,96,97,98,99, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?])```

## Known Bugs

* _no bugs yet_
* _if you find any please email them to my email below and I'll get them fixed_

## License

[MIT](LICENSE.txt)

## Contact Information

_Theron Packus - tlpackus@gmail.com_