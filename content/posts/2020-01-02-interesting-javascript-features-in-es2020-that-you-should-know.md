---
title: 7 Interesting JavaScript Features in ES2020 That You Should Know
tags:
  - javascript
  - es2020
template: post
categories:
  - javascript
  - es2020
date: 2020-01-1T02:15:01.782Z
slug: 7-interesting-javascript-features-in-es2020-that-you-should-know
description: The world of web development moves fast, particularly in the
  JavaScript ecosystem. New features, frameworks, and libraries are continually
  emerging, and the minute you stop learning is the minute your skillset starts
  to become obsolete. One major part of keeping your JavaScript skills sharp is
  staying current on the latest features in JavaScript. So, I thought to write
  an article on seven interesting features in JavaScript ES2020 that you should
  know. Let’s see some interesting features in JavaScript.
---

The world of web development moves fast, particularly in the JavaScript ecosystem. New features, frameworks, and libraries are continually emerging, and the minute you stop learning is the minute your skillset starts to become obsolete. One major part of keeping your JavaScript skills sharp is staying current on the latest features in JavaScript. So, I thought to write an article on seven interesting features in JavaScript ES2020 that you should know. Let’s see some interesting features in JavaScript.

## 1. BigInt

**_BigInt_** is a built-in object that provides a way to describe whole numbers larger than **pow(2,53)-1**, which is the highest number JavaScript can reliably represent with the **Number** primitive and represented by the **Number.MAX_SAFE_INTEGER** constant. A **_BigInt_** is built by appending **_n_** to the end of an integer literal or by calling the function **\*BigInt()\*\***.\*
![BigInt](https://res.cloudinary.com/krissanawat-kaewsanmuang/image/upload/v1593103052/7-javascript/1.png)

However we can express very large numbers using BigInt, there are some constraints when BigInt type is used with regular numbers. It cannot be used with methods in the built-in **_Math_** object and cannot be associated with instances of **_Number_** in operations. They must be used with the same type.BigInt is not backward compatible with (IEEE754) standards because this number system cannot support very large numbers.

## 2. Nullish Coalescing

There are some conditions while coding, where you have to check for **null** or **undefined** values instead of **falsey** values. In JavaScript, falsey values can be like blank strings, the number 0, **_undefined_**, **_null_**, **_false_**, **_NaN_**, etc. Nullish coalescing operator **_??_** adds the capability to check for **_nullish_** values instead of **_falsey_** values.Let’s see how it's

![Nullish](https://res.cloudinary.com/krissanawat-kaewsanmuang/image/upload/v1593103051/7-javascript/2.png)

works.Looking at this we can clearly say Nullish Coalescing operator **(??)** is a logical operator that returns its right-hand side operand when its left-hand side operand is **_null_** or **_undefined_**, otherwise returns its left-hand side operand.Contrary to the logical OR **( || )** operator, the left operand is returned if it's **falsey** value which is not **_null_** or **_undefined_**. See below for an example.

![Nullish](https://res.cloudinary.com/krissanawat-kaewsanmuang/image/upload/v1593103051/7-javascript/3.png)

Looking at the above example, the OR operator always returns a truthy value, whereas the nullish coalescing operator returns a specified value.

## 3. Dynamic Import

The feature name is also straight forward, that it gives the ability to import the JavaScript files dynamically as modules in your application. This is really like how you do it with Webpack and Babel at the moment. Dynamic import feature will serve you ship on-demand-request code, without the overhead of Webpack or other module bundlers. This is known as **_code splitting_,** as the code is addressed in smaller bundles as required.Look at the following example to understand how we dynamically import **_math.js_** module.

![Dynamic](https://res.cloudinary.com/krissanawat-kaewsanmuang/image/upload/v1593103051/7-javascript/4.png)

Here the **_math.js_** module is lazy loaded particularly when it is needed. This overcomes the initial page load times of our application. It also limits unnecessary module load in every page visit sessions even if the user uses the module feature or not.Static **_import_** and dynamic **_import()_** are both helpful. Each has its own, very distinct, use cases. Use static **_imports_** for beginning paint dependencies, especially for above-the-fold content. Furthermore in other cases, examine loading dependencies on-demand with dynamic **_import()_**.

## 4. globalThis

Obtaining the global property in JavaScript has always created some difficulty. This is because many platforms have different ways to access it. - Client-side JavaScript uses **_window_** or **_self_**

- Node.js uses **_global_**
- Web workers use **_self_**

A novel object called globalThis gives you cross-platform access to the global object in JavaScript.

## 5. Optional Chaining

The optional chaining syntax allows you to access deeply nested object properties without worrying about whether the property exists or not. If it exists, great! If not, **_undefined_** will be returned. This works not only on object properties but also on function calls and arrays. Super convenient! Here is an example:

![Optional](https://res.cloudinary.com/krissanawat-kaewsanmuang/image/upload/v1593103051/7-javascript/5.png)

## 6. Promise.allSettled

The **_Promise.allSettled_** method accepts a series of Promises and only resolves when they are all resolved, resolved, or rejected. This was not natively available before, even though some nearby implementations like **_race_** & **_all_** were available. This brings Just run all the promises, I don't care about the results natively to JavaScript.

![Promise.allSettled](https://res.cloudinary.com/krissanawat-kaewsanmuang/image/upload/v1593103051/7-javascript/6.png)

## 7. String#matchAll

**_matchAll_** is a new method added to the **_string_** prototype that is related to regular expressions. This returns an iterator that returns all the matching groups one after the other. Let's take a look at a quick example:

![String#matchAll](https://res.cloudinary.com/krissanawat-kaewsanmuang/image/upload/v1593103051/7-javascript/7.png)

## Conclusion

I hope you found this article useful and that you are as excited as I am about the new features that are coming to JavaScript. If you want more information about the different functions, you can consult the official GitHub repository of the ES committee [Here](https://github.com/tc39/proposals/blob/master/finished-proposals.md).
