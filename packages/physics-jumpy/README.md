# physics-jumpy

[![version](https://img.shields.io/npm/v/physics-jumpy.svg?style=flat-square)](http://npm.im/physics-jumpy)
[![downloads](https://img.shields.io/npm/dm/physics-jumpy.svg?style=flat-square)](http://npm-stat.com/charts.html?package=physics-jumpy&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/physics-jumpy.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

![physics-jumpy](../assets/demo.gif)

## Installation

This package is distributed via npm:

```
npm i physics-jumpy
```

## Usage

```
import physicsJumpy from 'physics-jumpy'

physicsJumpy.init({
  numJumpers: 50,
  className: 'jumpy'
});

physicsJumpy.stop()
physicsJumpy.start()
```
