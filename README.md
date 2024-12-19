# Smallapi-js

[![](https://img.shields.io/npm/v/smallapi-js.svg)](https://npmjs.org/package/smallapi-js)
[![](https://img.shields.io/npm/l/smallapi-js.svg)](https://github.com/tutanck/smallapi-js/blob/main/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/tutanck/smallapi-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/tutanck/smallapi-js?targetFile=package.json)
[![](https://img.shields.io/npm/dt/smallapi-js.svg)](https://npmjs.org/package/smallapi-js)

[![NPM](https://nodei.co/npm/smallapi-js.png)](https://npmjs.org/package/smallapi-js)

> Smallapi client API wrapper

## What is Smallapi-js?

Smallapi-js is a small wrapper wrote in typescript that allows [smallapi](https://smallapi.io/) users to uses their APIs cloud functions from the client side.

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Typescript support](#typescript-support)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)
- [Contributors ✨](#contributors-)

## Prerequisites

This package requires NodeJS and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following commands:

```sh
node --version
# v21.5.0

npm --version
# 10.2.4
```

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Install the package using npm:

```sh
npm i -S smallapi-js
```

## Usage

```js
import { smallapi } from 'smallapi-js';

const api = await smallapi('https://my-api-url.com/', {
  apiKey: 'my-secret-key',
});

const createdUser = await api.createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: `john.doe@email.com`,
  age: 32,
});
```

## Example

A repository with complete examples can be found here: https://github.com/tutanck/small-demo.

## Typescript support

This package export a type definition file so you can use it, out of the box,
inside your Typescript project.

```typescript
import { smallapi, Api, Config } from 'smallapi-js';

const myApiUrl: string = 'https://my-api-url.com/';

const myConfig: Config = {
  apiKey: 'my-secret-key',
};

const api: Api = await smallapi(myApiUrl, myConfig);

const userInfos: object = {
  firstName: 'John',
  lastName: 'Doe',
  email: `john.doe@email.com`,
  age: 32,
};

const createdUser: object = await api.createUser(userInfos);
```

## API

Here is the list of cloud functions generated when you create a model called {Model} on the smallapi platform:

#### count{Model}Documents(query): number

Counts the number of documents matching the query parameter in the **{{modelName}}** collection.

###### Parameters:

_query_ : **Object** • Indicates how to filter the documents in the collection **{{modelName}}**.

###### Returns:

**Number** • The number of documents matching the query parameter in the collection **{{modelName}}**

###### Examples:

```javascript
const resultsCount = count{Model}Documents(query)
```

###### More:

[Learn more about queries](https://www.mongodb.com/docs/manual/tutorial/query-documents/)

---

#### create{Model}(docs): documents

Insert one document or an array of documents to the **{{modelName}}** collection.

###### Parameters:

_docs_ : **Array|Object** • The documents to insert in the collection **{{modelName}}**.

###### Returns:

**Document|Array\<Document\>** • The list of documents inserted in the collection **{{modelName}}**.

###### Examples:

```javascript
const results = create{Model}(docs)
```

###### More:

[Learn more about documents](https://www.mongodb.com/docs/manual/core/document/)

---

#### find{Model}ById(id, [projection], [options]): document

Finds a single document by its _\_id_ field in the **{{modelName}}** collection.

###### Parameters:

- _id_ : **ObjectId • Required** • value of \_id field to query by **{{modelName}}** collection.

- _[projection]_ : **Object|String|Array\<String\> • Optional** • fields to return from the document found in the collection **{{modelName}}**.

- _[options]_ : **Object • Optional** • Additional options to apply while querying the collection **{{modelName}}**.

The following options are available:

- [limit](https://www.mongodb.com/docs/manual/reference/method/cursor.limit/)
- [skip](https://www.mongodb.com/docs/manual/reference/method/cursor.skip/)
- [sort](https://www.mongodb.com/docs/manual/reference/method/cursor.sort/)
- populate • **Object|String** • Populate the specified path.
  - path • **String** • Specify the name of the property to be populated.
  - select • **String** • Specify the fields to fetch from the referenced document.

###### Returns:

**Document** • The document identified by its \_id in the collection **{{modelName}}**.

###### Examples:

```javascript
const result = find{Model}ById(id)


const result = find{Model}ById(id, { propertyA: 1, propertyB: -1 }, options)

const result = find{Model}ById(id, "propertyA -propertyB", options)

const result = find{Model}ById(id, ["propertyA", "propertyC"], options)
```

###### More:

[Learn more about field selection](https://www.mongodb.com/docs/manual/tutorial/project-fields-from-query-results/)

<!-- TODO use smallapi populate doc page instead -->

[Learn more about the populate option](https://smallapi.io/docs/page/population)

---

#### find{Model}ByQuery(query, [projection], [options]): documents

Find the documents matching the query parameter in the **{{modelName}}** collection.

###### Parameters:

- _query_ : **Object** • Indicates how to filter the documents in the collection **{{modelName}}**.

- _[projection]_ : **Object|String|Array\<String\> • Optional** • fields to return from the document found in the collection **{{modelName}}**.

- _[options]_ : **Object • Optional** • Additional options to apply while querying the collection **{{modelName}}**.

The following options are available:

- [limit](https://www.mongodb.com/docs/manual/reference/method/cursor.limit/)
- [skip](https://www.mongodb.com/docs/manual/reference/method/cursor.skip/)
- [sort](https://www.mongodb.com/docs/manual/reference/method/cursor.sort/)
- populate • **Object|String** • Populate the specified path.
  - path • **String** • Specify the name of the property to be populated.
  - select • **String** • Specify the fields to fetch from the referenced document.
- useFindOne : **true|false** • If set to true the driver will use [findOne](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/) instead of [find](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/) • default to **false**.

###### Returns:

**Array\<Document\>** • The documents matching the query parameter in the collection **{{modelName}}**

###### Examples:

```javascript
const result = find{Model}ByQuery(query)


const result = find{Model}ByQuery(query, { propertyA: 1, propertyB: -1 }, options)

const result = find{Model}ByQuery(query, "propertyA -propertyB", options)

const result = find{Model}ByQuery(query, ["propertyA", "propertyC"], options)
```

###### More:

[Learn more about queries](https://www.mongodb.com/docs/manual/tutorial/query-documents/)

[Learn more about field selection](https://www.mongodb.com/docs/manual/tutorial/project-fields-from-query-results/)

<!-- TODO use smallapi populate doc page instead -->

[Learn more about the populate option](https://smallapi.io/docs/page/population)

---

#### remove{Model}ById(id, [options]): document

Delete a single document by its _\_id_ field in the **{{modelName}}** collection.

###### Parameters:

- _id_ : **ObjectId • Required** • value of \_id field to query by **{{modelName}}** collection.

- _[options]_ : **Object • Optional** • Additional options to apply while querying the collection **{{modelName}}**.

The following options are available:

- [sort](https://www.mongodb.com/docs/manual/reference/method/cursor.sort/)
- populate • **Object|String** • Populate the specified path.
  - path • **String** • Specify the name of the property to be populated.
  - select • **String** • Specify the fields to fetch from the referenced document.- populate

###### Returns:

**Document** • The document identified by its \_id in the collection **{{modelName}}**.

###### Examples:

```javascript
const result = remove{Model}ById(id, options)
```

###### More:

<!-- TODO use smallapi populate doc page instead -->

[Learn more about the populate option](https://smallapi.io/docs/page/population)

---

#### remove{Model}ByQuery(query, [options]): documents

Delete all the documents matching the query parameter in the **{{modelName}}** collection.

###### Parameters:

- _query_ : **Object** • Indicates how to filter the documents in the collection **{{modelName}}**.

- _[options]_ : **Object • Optional** • Additional options to apply while querying the collection **{{modelName}}**.

The following options are available:

- [sort](https://www.mongodb.com/docs/manual/reference/method/cursor.sort/) • Works only if useFindOne is set to true.
- populate • **Object|String** • Populate the specified path • Works only if useFindOne is set to true.
  - path • **String** • Specify the name of the property to be populated.
  - select • **String** • Specify the fields to fetch from the referenced document.
- useFindOne : **true|false** • If set to true the driver will use [findOneAndDelete](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndDelete/) instead of [deleteMany](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/) • default to **false**.

###### Returns:

**DeleteResult|Document** • an object with the property deletedCount containing the number of documents deleted OR the document matching the query parameter in the collection **{{modelName}}** if useFindOne is set to true.

###### Examples:

```javascript
const result = remove{Model}ByQuery(query, options)
```

###### More:

[Learn more about queries](https://www.mongodb.com/docs/manual/tutorial/query-documents/)

<!-- TODO use smallapi populate doc page instead -->

[Learn more about the populate option](https://smallapi.io/docs/page/population)

---

#### update{Model}ById(id, update, [options]): document

Updates a single document by its _\_id_ field in the **{{modelName}}** collection.

###### Parameters:

- _id_ : **ObjectId • Required** • value of \_id field to query by **{{modelName}}** collection.

- _[update]_ : **Object • Required** • The update object to replace the one found while querying the collection **{{modelName}}**.

- _[options]_ : **Object • Optional** • Additional options to apply while querying the collection **{{modelName}}**.

The following options are available:

- upsert : **true|false** • if true, and no documents found, insert a new document • default to **false**.
- new : **true|false** • if true, return the modified document rather than the original • default to **true**.
- runValidators : **true|false** • if true, validate the update operation against the model's definition first • default to **true**.
- select **Object|String** • sets the document fields to return.
- [sort](https://www.mongodb.com/docs/manual/reference/method/cursor.sort/)
- populate • **Object|String** • Populate the specified path.
  - path • **String** • Specify the name of the property to be populated.
  - select • **String** • Specify the fields to fetch from the referenced document.

###### Returns:

**Document** • The document identified by its \_id in the collection **{{modelName}}**.

###### Examples:

```javascript
const result = update{Model}ById(id, update, options)
```

###### More:

[Learn more about field selection](https://www.mongodb.com/docs/manual/tutorial/project-fields-from-query-results/)

<!-- TODO use smallapi populate doc page instead -->

[Learn more about the populate option](https://smallapi.io/docs/page/population)

---

#### update{Model}ByQuery(query, update, [options]): document

Updates all the documents matching the query parameter in the **{{modelName}}** collection.

###### Parameters:

- _query_ : **Object • Required** • value of \_id field to query by **{{modelName}}** collection.

- _[update]_ : **Object • Required** • The update object to replace the one found while querying the collection **{{modelName}}**.

- _[options]_ : **Object • Optional** • Additional options to apply while querying the collection **{{modelName}}**.

The following options are available:

- upsert : **true|false** • if true, and no documents found, insert a new document • default to **false**.
- new : **true|false** • if true, return the modified document rather than the original • default to **false** • Works only if useFindOne is set to true.
- runValidators : **true|false** • if true, validate the update operation against the model's definition first • default to **false** • Works only if useFindOne is set to true.
- fields **Object|String** • sets the document fields to return • Works only if useFindOne is set to true.
- [sort](https://www.mongodb.com/docs/manual/reference/method/cursor.sort/)• Works only if useFindOne is set to true.
- populate • **Object|String** • Populate the specified path • Works only if useFindOne is set to true.
  - path • **String** • Specify the name of the property to be populated.
  - select • **String** • Specify the fields to fetch from the referenced document.
- useFindOne : **true|false** • If set to true the driver will use [findOneAndDelete](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndDelete/) instead of [deleteMany](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/) • default to **false**.

###### Returns:

**UpdateResult|Document** • an [UpdateResult](https://www.mongodb.com/docs/manual/reference/command/update/#output) object OR the document matching the query parameter in the collection **{{modelName}}** if useFindOne is set to true.

###### Examples:

```javascript
const result = update{Model}ByQuery(id, update, options)
```

###### More:

[Learn more about queries](https://www.mongodb.com/docs/manual/tutorial/query-documents/)

[Learn more about field selection](https://www.mongodb.com/docs/manual/tutorial/project-fields-from-query-results/)

<!-- TODO use smallapi populate doc page instead -->

[Learn more about the populate option](https://smallapi.io/docs/page/population)

---

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## License

[MIT License](https://tutanck.mit-license.org/2018) © Anagbla Joan (tutanck)

## Contributors ✨

Thanks goes to these wonderful people for their contribution:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://about.me/tutanck"><img src="https://avatars.githubusercontent.com/u/15267552?v=4" width="100px;" alt=""/><br /><sub><b>Anagbla Joan</b></sub></a><br /></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
