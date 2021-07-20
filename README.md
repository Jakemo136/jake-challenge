## Jake's Demo Challenge

`npm i` to install dependencies, then `npm start` to fire it up

### added dependencies
* `node-sass` for scss because scss is dope

### reflections
* I'd have loved to take more time to write some tests
* A `Presentation` Class would've been a better way to handle timestamps and info about slide times.
* I'm sure the behavior of this app would've been drastically different if I had used the Rails backend/api
* I'd expect the calculations for elapsed time to be done on the backend or in middleware -- I subscribe to the philosophy that the front end just delivers data, it shouldn't manipulate or calculate
* Not in love with the folder/file heirarchy I set up. I'd like it to be a little cleaner, but one folder per component in `src/components` felt a bit much, and each subcomponent in its own folder in `/src/components/[component]/components` also felt a bit much.
* The default linter for `create-react-app` leaves a lot to be desired haha. I like an assertive linter.
* Some of the complexity I created around disabled nav is admittedly unneccesary and could be refactored out.
* I originally intended to make small commits to show my commit process but.... I was too deep in it to do so when I remembered. That's why stories/tickets are great; they can usually be encompassed in one commit message without it being too vague or unwieldy

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
