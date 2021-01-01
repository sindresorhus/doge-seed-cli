# doge-seed-cli

> Generate dank [mnemonic seed phrases](https://en.bitcoinwiki.org/wiki/Mnemonic_phrase) in the terminal

Generates a cryptographically secure mnemonic seed phrase with added dankness. The first four words will be a randomly generated Doge-like sentence. The seed phrases are fully valid checksummed BIP39 seeds. They can be used with any cryptocurrency and can be imported into any BIP39 compliant wallet. [Read more…](https://github.com/lukechilds/doge-seed)

Note: [The entropy is slightly lower than normal seeds.](https://github.com/lukechilds/doge-seed#how-secure-is-this)

<img src="screenshot.png" width="1175">


## Install

```
$ npm install --global doge-seed-cli
```


## Usage

```
$ doge-seed --help

  Usage
    $ doge-seed [bits]

  The first argument is the number of bits to derive a BIP39 mnemonic from.
  Must be an integer, divisible by 32, in the range 128...256.
  The default value is 128.
```


## Related

- [doge-seed](https://github.com/lukechilds/doge-seed) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
