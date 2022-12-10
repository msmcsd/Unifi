let timer
let latestTouchTap = { time: 0, target: null }

export default function SupportDoubleClick({ onDoubleClick = () => {}, onSingleClick = () => {} }, maxDelay = 250) {
  return (event) => {
    // console.log(event)
    clearTimeout(timer)

    const touchTap = { time: new Date().getTime(), target: event.currentTarget }

    const isDoubleClick =
      touchTap.target === latestTouchTap.target && touchTap.time - latestTouchTap.time < maxDelay

    latestTouchTap = touchTap

    timer = setTimeout(() => {
      if (isDoubleClick) onDoubleClick(event)
      else onSingleClick(event)
    }, maxDelay)
  }
}