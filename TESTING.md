# Magkapares - Testing

![Magkapares shown on a variety of screen sizes](INSERT_FILE_HERE)

Visit the deployed site [Magkapares](INSERT_LINK_HERE) here.


---

## Compatability

The website was tested on three different browsers: Brave, Chrome, & Microsoft Edge. It was compatable across all three.

  ### Brave
  ![Brave](INSERT_GIF_FILE_HERE)


  ### Chrome
  ![Chrome](INSERT_GIF_FILE_HERE)

  ### Microsoft Edge
  ![Microsoft Edge](INSERT_GIF_FILE_HERE)



---


## Responsiveness

The website was tested manually throughout the project development using DevTools to check for responsiveness.

The responsiveness was confirmed with [Responsive Website Design Tester](https://responsivedesignchecker.com/). The following are samples of some of the responsiveness implemented.


  ### Desktop Screens
  ![Desktop Responsiveness](INSERT_GIF_FILE_HERE)


  ### Tablet Screens
  ![Tablet Responsiveness](INSERT_GIF_FILE_HERE)


  ### Mobile Screens
  ![Mobile Responsiveness](INSERT_GIF_FILE_HERE)


---


### Validator Testing

#### HTML
  No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
  (INSERT_GIF_FILE_HERE)

#### CSS
  No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  (INSERT_GIF_FILE_HERE)

#### JavaScript
  No errors were found when passing through the official [Jshint validator](https://jshint.com/)
  (INSERT_GIF_FILE_HERE)
    - The following metrics were returned:
    - There are 11 functions in this file.
    - Function with the largest signature takes 2 arguments, while the median is 0.
    - Largest function has 10 statements in it, while the median is 3.
    - The most complex function has a cyclomatic complexity value of 4 while the median is 2.


---


## LightHouse report


I used Lighthouse in DevTools to confirm that the website is performing well, accessiblility and readability of fonts & colours. Testing was done for both mobile & desktop.

  #### Desktop
  ![Magkapares Lighthouse Mobile](INSERT_FILE_HERE)
  #### Mobile
  ![Magkapares Lighthouse Desktop](INSERT_FILE_HERE)

DUPLICATE THE ABOVE & LABEL FOR ANY EXTRA PAGES CREATED.


---


## Gameplay

| Feature | Action | Expected Result | Tested | Comments |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |


---

## Bugs

  ### Solved Bugs

  | # | Bug | How I solved the issue | Screenshots |
  | --- | --- | --- | --- |
  | 1 | Matching cards not registering. This applies to all types of pairs.  | --- | ![Not Matching 1](assets/images/bugs/pairs-not-matching-1.PNG)  ![Not Matching 2](assets/images/bugs/pairs-not-matching-2.PNG) |
  | 2 | When the same image is clicked twice, it is registering as a matched pair. Furthermore, when this registered as a matched pair, the image changes. | --- | ![Click Same Image 1](assets/images/bugs/click-same-image-1.PNG) ![Click Same Image 2](assets/images/bugs/click-same-image-2.PNG) ![Click Same Image 3](assets/images/bugs/click-same-image-3.PNG) |
  | 3 | --- | --- | --- |
  | 4 | --- | --- | --- |
  | 5 | --- | --- | --- |
  | 6 | --- | --- | --- |
  | 7 | --- | --- | --- |
  | 8 | --- | --- | --- |
  | 9 | --- | --- | --- |
  | 10 | --- | --- | --- |



  - Once all of the solutions were carried out, I reviewed each issue to ensure all corrections were applied & no further issues were occurring.

  ### Known Bugs

  1. When the second card is clicked on the game, it does not display the image unless they are a matching pair. This will be resolved in future versions. For now, an alert will pop up to say that the pairs do not match, so the user is still aware that it is a mis-match.
  2. The styling for when the cards are clicked is slightly off and needs to be fixed (this was the only error until my final review, see point 3).
  3. I missed a bug that I created at some point while adding my final CSS. I did not have enough time to rectify this bug. It shows up when the pairs match, the card containers take up the entire screen.
  4. The reset button does not have any functionality incorported; the JavaScript code needs to be written for it. I ran out time before I could add it in, and did not want to compromise the game with additional bugs.
