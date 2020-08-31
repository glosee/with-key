# with-key

Stupid simple object composition with function currying

## Why?

I wrote this module as part of a larger set of utilities for composing request object for fetching data. The idea is to build and merge objects with common keys together, such as request objects where the headers don't change often.

```javascript
const withHeaders = withKey('Headers');
const withCommonHeaders = withHeaders({
	Authorization: `Bearer ${mySuperSecretTokenValue}`,
	'Cache-Control': 'no-cache',
});
const withUrl = withKey('url');
const toMyAPI = withUrl('https://myapi.me/v1/some-endpoint');
const myRequestObject = compose(withCommonHeaders, toMyAPI);
fetch(myRequestObject())
	.then((res) => res.json())
	.catch(console.error);
```

## Module usage

```javascript
import withKey from 'with-key';
import compose from 'compose';

const withFoo = withKey('foo');
const withBar = withKey('bar');

const withFooAsFoo = withFoo('foo');
const withBarAsBar = withBar('bar');

const myObjectComposer = compose(withFooAsFoo, withBarAsBar);
const myFirstObject = myObjectComposer();
// { foo: 'foo', bar: 'bar' }
const myMergedObject = myObjectComposer({ baz: 'baz' });
// { foo: 'foo', bar: 'bar', baz: 'baz' }
```

See [docstring in source file](./src/with-key.js) for more detailed examples.
