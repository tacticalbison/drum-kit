# Drum Kit

Created as part of <u>The Complete 2022 Web Development Bootcamp</u><br>_(Section 13)_

---

## Source: [Udemy - The Complete 2022 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)

## Instructor: [_Dr. Angela Yu_](https://www.appbrewery.co/)

---

## Things I learned in this section

**<u>Playing Sounds:</u>** Learned about the HTMLMediaElements and the `<audio>` sub class.

**<u>Switch:</u>** Reinforced previous knowledge of using switch statements to help with multiple cases. In this one, we used the switch statement with the key pressed/button clicked to trigger the sound being played.

**<u>setTimeout:</u>** Used a `setTimeout()` to allow for mimicking of button animation after key press or mouse click.

---

**<u>Personal notes</u>**: This was a fun mini-project. While there were some things I did a little differently at first prior to watching Angela go through the example, it was good to test out the ideas before listening to her go through the examples so that I could compare the approaches and think about which was better. An example - I had thought about doing the button animation within the same function that contains the switch cases, but Angela's example had it as a completely separate function and calling it from within the mouseclick/keyboard event function. I compromised by having it as a separate function, but calling it from the `handleChoice` function. This feels like it would be easier to debug and would be less cumbersome for the clickHandler function.

---
