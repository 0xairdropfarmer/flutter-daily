---
title: "How to count <li> in <ul> with vanilla javascript"
excerpt: ""
slug: how-to-count-li-in-ul-with-vanilla-javascript
categories:
  - javscript tips
tags:
  - javascript
author: "krissanawat"
date: "2020-01-08T17:55:39.689Z"
draft: false
template: "post"
featuredImage: ""
---

I have found long list on Github Readme and want to count all of li tag that on ul tag by start google search found on [Stackoverflow](https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript)

but so many ul in page how that we get right ul tag

the answer is fairy simple too

with using chrome devtools add id

![add id to ul](https://i.imgur.com/HOIYVxU.png)

next use chrome devtools console access element by get id then get tag

```jsx
document.getElementById("list").getElementsByTagName("li");
```

here simple result screenshot:

![count li in ul](https://i.imgur.com/9RwY1Bi.png)
