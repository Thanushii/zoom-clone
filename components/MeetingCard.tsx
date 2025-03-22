"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface MeetingCardProps {
  icon: string;
  title: string;
  date: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  handleClick: () => void;
  buttonText: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  buttonText,
}: MeetingCardProps) => {
  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <Button
          className={cn("flex items-center gap-2 bg-dark-2 hover:bg-dark-3", {
            "bg-dark-3": isPreviousMeeting,
          })}
          onClick={handleClick}
        >
          {buttonIcon1 && (
            <Image src={buttonIcon1} alt="icon" width={20} height={20} />
          )}
          {buttonText}
        </Button>
      </article>
    </section>
  );
};

export default MeetingCard;