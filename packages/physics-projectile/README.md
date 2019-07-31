# physics-projectile

[![version](https://img.shields.io/npm/v/physics-projectile.svg?style=flat-square)](http://npm.im/physics-projectile)
[![downloads](https://img.shields.io/npm/dm/physics-projectile.svg?style=flat-square)](http://npm-stat.com/charts.html?package=physics-projectile&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/physics-projectile.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

![physics-projectile](../../assets/demo.gif)

## Installation

This package is distributed via npm:

```
npm i physics-projectile
```

## Usage

```
const projectile = new Projectile({
  selector: document.querySelector('.jumper'),
  initV: 300,
  g: -10,
  frictionCo: 0.5,
  degrees: 80,
  initXPos: 0,
  initYPos: -50
});
```
