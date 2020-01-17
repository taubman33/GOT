# AN API OF ICE AND FIRE
![](https://thumbs.gfycat.com/DeepUntriedCivet-small.gif)


[An API of Ice and Fire](https://www.anapioficeandfire.com/) is an open-access REST API that includes information about characters, houses, and books from the action-packed high-fantasy epic.

In this homework, you'll create a React application to browse through the characters in Game of Thrones.

### Getting Started:

1. Fork and Clone.
1. Within the cloned directory, spin up a new React app.
1. cd into the app.
1. Install axios and react-router-dom along with all the other React dependencies.
1. Open up App.js in your code editor and get to work!
1. This assignment must have at least **6 commits**.

### API and State
1. This app is going to require state. Take some time to prepare and setup with your preferred `App.js` structure.
1. An API call is needed! What imports should be included?
1. Look at an example of the API data for the characters endpoint: [`https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50`](https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50)
    - You can also look at the [documentation for this endpoint](https://www.anapioficeandfire.com/Documentation#characters) if you find that useful.
1. On the page load, make an Axios request to the above characters endpoint, and set the character data from the JSON response into state.

### Rendering and React Router
1. Render each character's name from state individually into a component (one character per component instance). Feel free to include some basic, additional character info.
   - This would be a good time to use a `.map()`.
   - Some characters may not have names, so you'll have to find some way to account for this (perhaps they use an alias?). Do not skip these characters.
1. Use `react-router-dom` to make it so when the user clicks on one of these character names, they are routed away from this index of characters to a route that only displays detailed information about that character. We'll call this our "Show" route.
    - There are several things that need to happen to use React Router. What do you need to import? What changes need to be made to the `App.js` export? What changes need to be made to the `index.js` file?
    - For now, don't worry about trying to make a new API call for characters shown on the Show route. Set the clicked character to a new piece of state and use that to render data in the character's route. **Be aware that your app will break if you try to load your app directly on a character's page.** Why would that be...?
    - You may need to get creative with your `<Link>`. Perhaps you can write a method that helps with building the path.
    - You'll want to use `:slug` notation in your routes so that you don't have to hardcode individual character names.
1. Include a "back" button on the Show route that sends the user back to the full index of characters.

### Bonus: More API Calls
Choose at at least one of the following and complete:
- Add a "Next" Button to the Show route. When a user clicks on the button, make a new Axios call to get the next character in the index, and send the user to that character's page. Add a "Previous" Button, which should have similar functionality to the "Next" button but in the reverse direction. You may want to check the [documentation](https://www.anapioficeandfire.com/Documentation#characters) for this one.

- Use `props.match.params` to make it so directly loading a character detail page actually works. This will be trickier than it should be since the characters don't come with a unique ID in their JSON. The solution here will likely require some retooling of your Link/Route structure at the very least.

### CSS Bonus
Images aren't included with the API response. Find a nice GoT related image or logo, add it to an assets directory in `src` and figure out how to insert it into the character links on your character index route.
