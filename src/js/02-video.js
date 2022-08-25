import Player from "@vimeo/player";
import throttle from "lodash.throttle";
import { getValue } from "./getValueFromLS";

const iframe = document.querySelector("#vimeo-player")
const player = new Player(iframe)

player.on('timeupdate', throttle(onTimeUpdate, 1000))

function onTimeUpdate(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
}

player.setCurrentTime(getValue('videoplayer-current-time', 0))