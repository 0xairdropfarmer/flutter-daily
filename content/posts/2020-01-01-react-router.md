---
keywords: react router
slug: react-router
date: 2020-01-02T14:54:10.962Z
cover: ../images/placeholder-660x400-344359.png
title: How to use the useParams hook in React router
tags:
  - programming
  - stuff
  - other
  - common tag
template: post
categories:
  - tech
  - basic category
description: In this tutorial, we are going to learn about how to use the
  useParams() hook in react router.
---

## useParams() hook

The `useParams()` hook helps us to access the URL parameters from a current route.

Example:

Consider, we have a route like this in our react app.

```javascript
<Route path="/users/:id" component={Users} />
```

Now, we can access the :id param value inside a Users component by using the useParams() hook.

```javascript
import React from "react";
import { useParams } from "react-router-dom";

export default function Users() {
  const { id } = useParams();

  return (
    <div>
      <h1>User id is {id}</h1>
    </div>
  );
}
```

In the above code, we first imported the `useParams()` hook from the `react-router-dom` package.

Inside the `Users` function, we invoked a `useParams()` hook that returns an object with `key/value` pairs where the key is `id` and value is whatever we passed after `/users/` route in the browser.
