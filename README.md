![Client CI](https://github.com/Yooooomi/easy-countdown/workflows/Client%20CI/badge.svg)

![gif](https://user-images.githubusercontent.com/17204739/88205741-825e7d00-cc4d-11ea-81c3-92e42d197346.gif)

# Easy countdown

Easy countdown is an easy to setup countdown page. Can be setup as a countdown or as a timer

# Setup

## Using docker (Recommended)

If you use docker, just edit the `docker-compose.yml` file so that it fits your needs

|Variables|Definition|Example|
|-|-|-|
|TIMER_BACKGROUND|The url of an image that will be used for as background|https://wallpaperplay.com/walls/full/0/7/6/29912.jpg|
|TIMER_TARGET|The target date of the countdown, if date is in the future, timer will decrease, otherwise it will increase|Fri Oct 01 2021 15:33:36 GMT+0200|
|TIMER_TITLE|The title of the countdown, can be empty|My title!|

### Example of `docker-compose.yml` file

> This example is a copy-paste of `docker-compose.production.yml` in the repo

```yml
version: "3.8"

services:
  web:
    stdin_open: true # So that the serving is not exited with code 0
    image: yooooomi/easy-countdown
    environment:
      TIMER_BACKGROUND: https://wallpaperplay.com/walls/full/0/7/6/29912.jpg
      TIMER_TARGET: "Fri Oct 01 2021 15:33:36 GMT+0200" # Get help with https://esqsoft.com/javascript_examples/date-to-epoch.htm
      TIMER_TITLE: "My next birthday" # Can be empty
    ports:
      - "3000:3000"
```

## Without docker

> This method builds the project following the env variables you gave, producing a `build` folder that has to be served manually afterwards. You can use [`serve`](https://www.npmjs.com/package/serve) to achieve it

Use `yarn` to use the build script from the 
`package.json`. Simply use `yarn build`. Use the variables above in the env to personalize your countdown

- `npm install`
- `TIMER_TITLE="example" yarn build`

> Variables will be taken from env, and are the same as above

I.E: `TIMER_TARGET="Fri Oct 01 2021 15:33:36 GMT+0200" yarn build && serve -s -l tcp://0.0.0.0:3000 build/`
