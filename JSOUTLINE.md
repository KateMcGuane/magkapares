# Magkapares
A memory card game.

## Roadmap
How will a user interact with our app:

1. Click on any card

2. Once any card is clicked;
    a. a number is added to the counter (moves);
    b. the countdown timer starts (seconds remaining); //3 for testing
    
3. Click on any second card;
    a. another number added to the counter;
        i. it matches;
            --> cards flipped now hold position (face up);
        ii. it doesn't match;
            --> both selected cards flipped, return to original position (face down);

4. Process repeats until all cards are matched (no cards left) OR countdown timer reaches 0;
    a. all cards matched before timer runs out --> WIN GAME;
            i. What happens when you win?;
                --> cards are no longer clickable
                --> timer stops
                --> message
            ii. What triggers that function?
                --> all the cards are face up
    b. timer runs out --> LOSE GAME;
            i. What happens when you lose?; 
                --> cards are no longer clickable
                --> timer stops
                --> message
            ii. What triggers that function?
                --> seconds reach 0

* Click reset to start a new game at any time (not just after losing);



* For the first card they flip, the countdown timer will start    

        - [ ] Variables needed: countDownNumber, resetButton
        - [ ] Functions needed: handleResetClick 
            - handleResetClick needs to reset countNumber to 0
        - [ ] If user wants to try again/start over, user can press the "reset game" button
            - [ ] timer will go back to 0


* For every card they flip, the 'moves' counter will increase by 1

        - [ ] When the user clicks a card, the number of 'moves on the screen will increase by 1
            - [ ] Variables needed: countNumber
            - [ ] Functions needed: handleAddClick
                 - handleAddClick needs to increase countNumber by 1 for every card clicked



## Desired Features

### Game Features

- When you hover on the title "Magkapares", the heading flips around/fades into the English version of the word, "Pairs".
- You can click the information [i] icon that creates a pop-up window when you click on it of how to play the game.
- The first card flipped will automatically set off the timer on a countdown from 100. (i) If matched it will hold and the counter will increase on number of pairs achieved. (ii) If not matched, the card will flip back around for the user to choose again.
- These steps repeat until the timer runs out/user matches all pairs.
- Win: If you pair all of the cards together a pop up screen will say "You've Won!"; followed by your stats "You matched X cards with Y seconds to spare".
- Lose: If the timer runs out a pop up screen will say "Try again, you were almost there; followed by your stats, "You matched X cards. Click reset to try again."

### General Features

- When you hover over any icon e.g. socials, they illumiate/become highlighted

## User Experience

### External user’s goal:

- Play a memorization game.
- Learn a language.
- Entertainment.

### Site owner's goal:

The site’s goal is to provide a challenging game with increasing levels of difficulty to entertain online users.
Potential features to include:

* Pattern matching functionality
* A limited number of tries before the game is over
* A score tracking system
* The ability to play against the computer


## JavaScript Games Course

- simple grid based game
- player have to flip over two cards
- if two cards match => one point for you; cards get taken off the board
- leaves you with reaminder of cards to flip over
- game finishes when you flip over all cards


