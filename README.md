## Design brief

Develop a JavaScript web app that maintains a list of bookmarks (links). The user is
able to add/edit/delete any link in the list. The application should only use
front-end technologies (i.e. no backend database!).

## Design solution

### Bookmark interface
The Bookmark interface contains an `id` attribute as React needs a unique id when rendering lists of data and it's possible there may be duplicate bookmark urls.
I added an optional bookmark `name` attribute to make the bookmark urls easier to label. The overivew of all the bookmark links would show the `name` as link text if provided else the bookmark `url`.

### Page layout
Separate page for a new bookmark submission and a separate page for viewing the bookmarks as it separates out the concerns nicely.

## Technologies used
I used Redux to store the bookmark data locally as it provides a centralised store that all components can access in a uniform way.
I used <a href="https://mui.com/material-ui/">Material UI</a> for text input and button components as it provides a visually appealing design language and handles the display of validation messages and input labels.


## Future improvements

- Potentially I could disable the "Submit" button until the bookmark URL field had been filled in. This is more of a design preference though. 
- Links could have been Material UI components.
- Accessible labels on all components
- Edit functionality for existing links
