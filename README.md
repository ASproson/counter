# Counter Project
In this project I wanted to create a webpage that allows the user to decrease, reset, or increase a counter in the middle of the page

## Initial Idea
- Create a header called counter with the counter below it
- Create three buttons that lets the user decrease/reset/increase the counter
- Animate the buttons to change color to reflect the action being taken (using non-harsh colours)
- Animate the counter title to change color based on the negative/positive value of the counter

### Comments & Thought Process
Going in I knew that I need to build the divs within a single container and do one level of extra nesting to get the buttons to line up next to each when display: flex is called. I then needed to set the animation for each button, so I just set a standard transition of 1s with ease; that way it's a nice smooth change when button is hovered over.

A tricky part of the project was when a user is no longer hovering over the button... then what happens? I didn't want the color change to be latched 'on', so I started to Google for 'unhover css' haha. I mean it makes sense logically. There is no such function! Instead you have to set up the css elements with a :hover, and then also set up a 'return' state for going back to normal. There is no special function for this, you just set the css as if you were normally styling the buttons! 

```
#increase:hover {
  background-color: #58D68D;
  border: 1px solid #2ECC71;
  color: white;
  transition: 1s ease;
}

#decrease, #reset, #increase {
  background-color: white;
  border: 1px solid black;
  transition: .7s ease;
}
```

I then needed to build the interactivity side of things and created three seperate functions to either decrease, reset, or increase a global variable from 0. Within each function I then an if statement to change the counter title color based on whether or not that global variable was above or below 0.

Lastly, the last project (a color changer) I felt that I wanted bigger text this time, so I then increased all the font sizes.

