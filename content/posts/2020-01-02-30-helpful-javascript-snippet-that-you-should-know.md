---
title: "30 Helpful Javascript Snippet that you should know"
excerpt: "JavaScript is a very simple and useful language, it doesn’t require much configuration to set up, and JavaScript is one of the most popular languages you can learn. As many people say: “If you’re going to learn just one programming language, go for JavaScript.” If this sounds convincing to you, here is a list of 30 helpful javascript snippets that you can immediately learn and use."
author: " krissanawat"
date: "2020-01-02T07:33:22.004Z"
draft: false
template: "post"
featuredImage: ""
tags:
  - javascript
---

<!-- wp:paragraph -->JavaScript is a very simple and useful language, it doesn’t require much configuration to set up, and JavaScript is one of the most popular languages you can learn. As many people say: “If you’re going to learn just one programming language, go for JavaScript.”

If this sounds convincing to you, here is a list of 30 helpful javascript snippets that you can immediately learn and use.

## 1.all

This snippet returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.

Use `Array.prototype.every()` to test if all elements in the collection return `true` based on `fn`. Omit the second argument, `fn`, to use `Boolean` as a default.

```
<pre class="wp-block-preformatted">const all = (arr, fn = Boolean) => arr.every(fn);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">all([4, 2, 3], x => x > 1); <em>// true</em>
all([1, 2, 3]); <em>// true</em>
```

## 2.allEqual

This snippet checks whether all elements in an array are equal.

Use `Array.prototype.every()` to check if all the elements of the array are the same as the first one. Elements in the array are compared using the strict comparison operator, which does not account for `NaN` self-inequality.

```
<pre class="wp-block-preformatted">const allEqual = arr => arr.every(val => val === arr[0]);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">allEqual([1, 2, 3, 4, 5, 6]); <em>// false</em>
allEqual([1, 1, 1, 1]); <em>// true</em>
```

## 3. average

This snippet returns the average of two or more numbers.

Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.

```
<pre class="wp-block-preformatted">const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">average(...[1, 2, 3]); <em>// 2</em>
average(1, 2, 3); <em>// 2</em>
```

## 4. byteSize

This snippet returns the length of a string in bytes.

Convert a given string to a [`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and find its `size`.

```
<pre class="wp-block-preformatted">const byteSize = str => new Blob([str]).size;
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">byteSize('😀'); <em>// 4</em>
byteSize('Hello World'); <em>// 11</em>
```

## 5. compact

This snippet removes falsy values from an array.

Use `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, ``, `undefined`, and `NaN`).

```
<pre class="wp-block-preformatted">const compact = arr => arr.filter(Boolean);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); <em>// [ 1, 2, 3, 'a', 's', 34 ]</em>
```

## 6. currentURL

This snippet returns the current URL.

Use `window.location.href` to get the current URL.

```
<pre class="wp-block-preformatted">const currentURL = () => window.location.href;
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">currentURL(); <em>// 'https://google.com'</em>
```

## 7.dayOfYear

This snippet gets the day of the year from a `Date` object.

Use `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result. Use `Math.floor()` to appropriately round the resulting day count to an integer.

```
<pre class="wp-block-preformatted">const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">dayOfYear(new Date()); <em>// 272</em>
```

## 8.degreesToRads

This snippet converts an angle from degrees to radians.

Use `Math.PI` and the degree to radian formula to convert the angle from degrees to radians.

```
<pre class="wp-block-preformatted">const degreesToRads = deg => (deg * Math.PI) / 180.0;
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">degreesToRads(90.0); <em>// ~1.5708</em>
```

## 9.difference

This snippet returns the difference between two arrays.

Create a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values not contained in `b`.

```
<pre class="wp-block-preformatted">const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">difference([1, 2, 3], [1, 2, 4]); <em>// [3]</em>
```

## 10.distance

This snippet returns the distance between two points.

Use `Math.hypot()` to calculate the Euclidean distance between two points.

```
<pre class="wp-block-preformatted">const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">distance(1, 1, 2, 3); <em>// 2.23606797749979</em>
```

## 11.drop

This snippet returns a new array with `n` elements removed from the left.

Use `Array.prototype.slice()` to remove the specified number of elements from the left.

```
<pre class="wp-block-preformatted">const drop = (arr, n = 1) => arr.slice(n);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">drop([1, 2, 3]); <em>// [2,3]</em>
drop([1, 2, 3], 2); <em>// [3]</em>
drop([1, 2, 3], 42); <em>// []</em>
```

## 12.everyNth

This snippet returns every nth element in an array.

Use `Array.prototype.filter()` to create a new array that contains every nth element of a given array.

```
<pre class="wp-block-preformatted">const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">everyNth([1, 2, 3, 4, 5, 6], 2); <em>// [ 2, 4, 6 ]</em>
```

## 13.factorial

This snippet calculates the factorial of a number.

Use recursion. If `n` is less than or equal to `1`, return `1`. Otherwise, return the product of `n` and the factorial of `n - 1`. Throws an exception if `n` is a negative number.

```
<pre class="wp-block-preformatted">const factorial = n =>
  n < 0
    ? (() => {
      throw new TypeError('Negative numbers are not allowed!');
    })()
    : n <= 1
      ? 1
      : n * factorial(n - 1);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">factorial(6); <em>// 720</em>
```

## 14.findLast

This snippet returns the last element for which the provided function returns a truthy value.

Use `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.

```
<pre class="wp-block-preformatted">const findLast = (arr, fn) => arr.filter(fn).pop();
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">findLast([1, 2, 3, 4], n => n % 2 === 1); <em>// 3</em>
```

## 15.getImages

This snippet fetches all images from within an element and puts them into an array

Use `Element.prototype.getElementsByTagName()` to fetch all `<img>` elements inside the provided element, `Array.prototype.map()` to map every `src` attribute of their respective `<img>` element, then create a `Set` to eliminate duplicates and return the array.

```
<pre class="wp-block-preformatted">const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
  return includeDuplicates ? images : [...new Set(images)];
};
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">getImages(document, true); <em>// ['image1.jpg', 'image2.png', 'image1.png', '...']</em>
getImages(document, false); <em>// ['image1.jpg', 'image2.png', '...']</em>
```

## 16.getStyle

This snippet returns the value of a CSS rule for the specified element.

Use `Window.getComputedStyle()` to get the value of the CSS rule for the specified element.

```
<pre class="wp-block-preformatted">const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">getStyle(document.querySelector('p'), 'font-size'); <em>// '16px'</em>
```

## 17.head

This snippet returns the head of a list.

Check if `arr` is truthy and has a `length` property, use `arr[0]` if possible to return the first element, otherwise return `undefined`.

```
<pre class="wp-block-preformatted">const head = arr => (arr && arr.length ? arr[0] : undefined);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">head([1, 2, 3]); <em>// 1</em>
head([]); <em>// undefined</em>
head(null); <em>// undefined</em>
head(undefined); <em>// undefined</em>
```

## 18.hide

This snippet hides all the elements specified.

Use `NodeList.prototype.forEach()` to apply `display: none` to each element specified.

```
<pre class="wp-block-preformatted">const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">hide(document.querySelectorAll('img')); <em>// Hides all <img> elements on the page</em>
```

## 19.includesAll

This snippet returns `true` if all the elements in `values` are included in `arr`, `false` otherwise.

Use `Array.prototype.every()` and `Array.prototype.includes()` to check if all elements of `values` are included in `arr`.

```
<pre class="wp-block-preformatted">const includesAll = (arr, values) => values.every(v => arr.includes(v));
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">includesAll([1, 2, 3, 4], [1, 4]); <em>// true</em>
includesAll([1, 2, 3, 4], [1, 5]); <em>// false</em>
```

## 20.initial

This snippet returns all the elements of an array except the last one.

Use `arr.slice(0,-1)` to return all but the last element of the array.

```
<pre class="wp-block-preformatted">const initial = arr => arr.slice(0, -1);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">initial([1, 2, 3]); <em>// [1,2]</em>
```

## 21.isAfterDate

This snippet checks whether a date is after another date.

Use the greater than operator (`>`) to check if the first date comes after the second one.

```
<pre class="wp-block-preformatted">const isAfterDate = (dateA, dateB) => dateA > dateB;
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); <em>// true</em>
```

## 22.isSymbol

This snippet checks whether the given argument is a symbol.

Use `typeof` to check if a value is classified as a symbol primitive.

```
<pre class="wp-block-preformatted">const isSymbol = val => typeof val === 'symbol';
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">isSymbol(Symbol('x')); <em>// true</em>
```

## 23.isWeekend

This snippet results in a boolean representation of a specific date.

Pass the specific date object firstly. Use `Date.getDay()` to check weekend based on the day being returned as 0 - 6 using a modulo operation then return a boolean.

```
<pre class="wp-block-preformatted">const isWeekend = (t = new Date()) => {
  return t.getDay() % 6 === 0;
};
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">isWeekend(); <em>// 2018-10-19 (if current date is 2018-10-18)</em>
```

## 24.midpoint

This snippet calculates the midpoint between two pairs of (x,y) points.

Destructure the array to get `x1`, `y1`, `x2` and `y2`, calculate the midpoint for each dimension by dividing the sum of the two endpoints by `2`.

```
<pre class="wp-block-preformatted">const midpoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">midpoint([2, 2], [4, 4]); <em>// [3, 3]</em>
midpoint([4, 4], [6, 6]); <em>// [5, 5]</em>
midpoint([1, 3], [2, 4]); <em>// [1.5, 3.5]</em>
```

## 25.negate

This snippet negates a predicate function.

Take a predicate function and apply the not operator (`!`) to it with its arguments.

```
<pre class="wp-block-preformatted">const negate = func => (...args) => !func(...args);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); <em>// [ 1, 3, 5 ]</em>
```

## 26.powerset

This snippet returns the powerset of a given array of numbers.

Use `Array.prototype.reduce()` combined with `Array.prototype.map()` to iterate over elements and combine into an array containing all combinations.

```
<pre class="wp-block-preformatted">const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">powerset([1, 2]); <em>// [[], [1], [2], [2, 1]]</em>
```

## 27.redirect

This snippet redirects to a specified URL.

Use `window.location.href` or `window.location.replace()` to redirect to `url`. Pass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).

```
<pre class="wp-block-preformatted">const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">redirect('https://google.com');
```

## 28.stripHTMLTags

This snippet removes HTML/XML tags from string.

Use a regular expression to remove HTML/XML tags from a string.

```
<pre class="wp-block-preformatted">const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); <em>// 'lorem ipsum'</em>
```

## 29.union

This snippet returns every element that exists in any of the two arrays once.

Create a `Set` with all values of `a` and `b` and convert to an array.

```
<pre class="wp-block-preformatted">const union = (a, b) => Array.from(new Set([...a, ...b]));
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">union([1, 2, 3], [4, 3, 2]); <em>// [1, 2, 3, 4]</em>
```

## 30.uniqueElements

This snippet returns all unique values of an array.

Use ES6 `Set` and the `...rest` operator to discard all duplicated values.

```javascript
const uniqueElements = (arr) => [...new Set(arr)];
```

##### EXAMPLES

```
<pre class="wp-block-preformatted">uniqueElements([1, 2, 2, 3, 4, 4, 5]); <em>// [1, 2, 3, 4, 5]</em>
```

## Conclusion

These snippets were taken from this [project](https://github.com/30-seconds/30_seconds_of_knowledge) in which you can find more JavaScript snippets, and also snippets for other technologies and frameworks. I hope these snippets help you learn something that you can start using immediately.
