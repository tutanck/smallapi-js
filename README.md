<h1 align="center">Welcome to cslink 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/tutanck" target="_blank">
    <img alt="Twitter: tutanck" src="https://img.shields.io/twitter/follow/tutanck.svg?style=social" />
  </a>
</p>

> Client/Server link

Cslink allow [smallapi](https://smallapi.io/) users to generate a complete client using axios for their APIs.

## install

```sh
npm install -g cslink
```

## Usage

```sh
cslink {serverUrl} [dst] [install] [serverVar] [decodeKey]
```

Required parameters:

- serverUrl: the API server url

Optional parameters:

- dst: the destination path for generated files • default '.'
- install: true|false install required modules • default false
- serverVar: if filled replace the server url in the api client file • default null
- decodeKey: decode secret used for data encryption • default null

### Example

```sh
cslink http://localhost:3097 dst=src/api install=true serverVar=process.env.REACT_APP_API_BASE_URL decodeKey=my-secret-key
```

## Author

👤 **tutanck**

- Twitter: [@tutanck](https://twitter.com/tutanck)
- Github: [@tutanck](https://github.com/tutanck)
- LinkedIn: [@tutanck](https://linkedin.com/in/joan-anagbla-90628250)

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
