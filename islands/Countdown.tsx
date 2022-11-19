// deno-lint-ignore-file
import { useEffect, useState } from "preact/hooks";
import { Button } from "@/components/Button.tsx";
import { VNode } from "preact";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

export default function Countdown(props: { target: string, endFn: (time: number) => VNode<any> }) {
  const target = new Date(props.target);
  const [now, setNow] = useState(new Date());

  // Set up an interval to update the `now` date every second with the current
  // date as long as the component is mounted.
  useEffect(() => {
    const timer = setInterval(() => {
      setNow((now) => {
        if (now > target) {
          clearInterval(timer);
        }
        return new Date();
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [props.target]);

  return props.endFn(now.getDate());
  // If the target date has passed, we stop counting down.
  if (now > target) {
    return props.endFn(now.getDate());
  }

  // Otherwise, we format the remaining time using `Intl.RelativeTimeFormat` and
  // render it.
  const secondsLeft = Math.floor((target.getTime() - now.getTime()) / 1000);
  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>;
}