# Magkapares - Testing

![Magkapares shown on a variety of screen sizes](documentation/magkapares_am_i_responsive.PNG)

Visit the deployed site [Magkapares](https://katemcguane.github.io/magkapares/) here.


---

## Compatability

The website was tested on three different browsers: Brave, Chrome, & Microsoft Edge. It was compatable across all three.

  ### Brave
  ![Brave](documentation/testing/browser/magkapares_brave_compatibility.PNG)

  ### Chrome
  ![Chrome](documentation/testing/browser/magkapares_chrome_compatibility.PNG)

  ### Microsoft Edge
  ![Microsoft Edge](documentation/testing/browser/magkapares_edge_compatibility.PNG)


---


## Responsiveness

The website was tested manually throughout the project development using DevTools to check for responsiveness.
However, a bug was found late in development for smaller screens. See known bugs below.


---


### Validator Testing

#### HTML
  No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/)
  ![HTML](documentation//testing/w3c_index.html.PNG)

#### CSS
  No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
  ![CSS](documentation/testing//w3c_css.PNG)

#### JavaScript
  No errors were found when passing through the official [Jshint validator](https://jshint.com/)
  ![JSHint1](documentation/testing/jshint_1.PNG) ![JSHint2](documentation/testing/jshint_2.PNG) ![JSHint3](documentation/testing/jshint_3.PNG). There were some warnings, but of nothing of consequence.

---


## LightHouse report


I used Lighthouse in DevTools to confirm that the website is performing well, accessiblility and readability of fonts & colours. The performance needs improving and will be done so on further iterations.

  ![Magkapares Lighthouse](documentation/testing/lighthouse_magkapares.PNG)


---

## Bugs

  ### Solved Bugs

  | # | Bug | How I solved the issue | Screenshots |
  | --- | --- | --- | --- |
  | 1 | Matching cards not registering. This applies to all types of pairs.  | Reviewed the code, and found mis-match in some of the naming used. The code was not being commanded correctly & therefore could not execute. | ![Not Matching 1](assets/images/bugs/pairs-not-matching-1.PNG)  ![Not Matching 2](assets/images/bugs/pairs-not-matching-2.PNG) |
  | 2 | When the same image is clicked twice, it is registering as a matched pair. Furthermore, when this registered as a matched pair, the image changes. | --- | ![Click Same Image 1](assets/images/bugs/click-same-image-1.PNG) ![Click Same Image 2](assets/images/bugs/click-same-image-2.PNG) ![Click Same Image 3](assets/images/bugs/click-same-image-3.PNG) |
  | 3 | The timer starts as normal when the first card is clicked. Two bugs occur: (i) Any clicks thereafter encourages the timer to countdown even faster. It duplicates the current countdown speed for every card clicked. <br> (ii) Once the timer surpasses the allocated 60 seconds, it runs on into minus figures. | Code refactored: <br> (i) Moved the startCountdown function inside conditional block to ensure it is only triggered once, on the first card flip.  (ii) Implement endGame function fully & create new variable to track that the timer has started. | ![Timer Glitch](assets/images/bugs/timer-glitch.PNG) |
  | 4 | If clicked in quick succession, the player can click more than two cards on any given turn. Up to 5 cards can be clicked in between the first and second selection. Not all of the cards selected turn around, and remain revealed to the player.| Add a check in the flipCard() function to see if there are already two cards flipped. This will prevent further clicks from triggering a flip until the current two cards are checked. | ![Multiple Card Selection](assets/images/bugs/too-many-flips.PNG) |

  - Once all of the solutions were carried out, I reviewed each issue to ensure all corrections were applied & no further major issues were occurring.

  ### Known Bugs

  | # | Bug | Cause | Screenshots |
  | --- | --- | --- | --- |
  | 1 | Spacing between the cards changes when the game is won | This is a minor issue being caused by the span adjusting in size above the cards. Most of the game was made at this point. It does not affect the game's functionality or warrant a complete overhaul as it is a minor inconveniece to UX. This can be adjusted on future iterations. | ![Game Won Spacing](documentation/testing/bugs/gamewon-spacing-bug.PNG) |
  | 2 | The logo is being cut off on smaller screen sizes. | I realised it cut off on final review, however some of the CSS is overlapping and I will need to investigate further to find a solution. | ![Logo Cut Off](documentation/testing/bugs/logo_cutoff.PNG) |
