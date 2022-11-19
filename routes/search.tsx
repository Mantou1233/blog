import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "@/islands/Header.tsx";
import Input from '@/islands/Input.tsx';
import { Button } from "@/components/Button.tsx";
import Countdown from "../islands/Countdown.tsx";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <>
      <Countdown target={new Date(Date.now() + 10000).toUTCString()} endFn={(r) => <h2>WOOO!!</h2>}/>
    </>
  );
}