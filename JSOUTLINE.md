# Magkapares
A memory card game.

## Roadmap
How will a user interact with our app:

1. Click on any card

2. Once any card is clicked;
    a. a number is added to the counter (moves);
    b. the countdown timer starts (seconds remaining);
    
3. Click on any second card;
    a. another number added to the counter;
        i. it matches;
            --> cards flipped now hold position (face up);
        ii. it doesn't match;
            --> both selected cards flipped, return to original position (face down);

4. Process repeats until all cards are matched OR countdown timer reaches 0;
    a. all cards matched before timer runs out --> WIN GAME;
    b. timer runs out --> LOSE GAME;
        => cards no longer clickable when the countdown timer reaches 0;#

5. Can click reset to start a new game;





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

