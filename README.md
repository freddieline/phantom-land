This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Design solution

I used Redux to store the bookmark data locally as it's provides a centralised store that all components can access is a uniform way.

The Bookmark object contains an `id` attribute as React needs a unique id when rendering lists of data and it's possible there may be duplicate bookmark urls.

I added an optional bookmark `name` to make the Bookmark urls easier to lable. The overivew of all the bookmark links would show the link text as the `name` if provided else the bookmark `url`.

I used Material UI for text input and button components as they provide functionality for validation and the input labels look smooth.


## Future improvements

Potentially I could disable the "Submit" button until the bookmark URL field had been filled in. This is more of a design preference though.