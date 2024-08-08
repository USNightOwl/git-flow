"use client";
import { Button } from "@/components/ui/button";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      <Button>Click (me)</Button>
      <div className="text-red-600 font-bold">hello world</div>
    </main>
  );
}
