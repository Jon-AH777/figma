import * as React from "react";

export default function FormBlock() {
  return (
    <form className="flex flex-col mt-5 w-full tracking-wide leading-7 max-w-[321px]">
      <label htmlFor="emailInput" className="sr-only">
        Your Email
      </label>
      <input
        className="flex overflow-hidden gap-5 justify-between pl-5 text-sm rounded-md border border-solid bg-stone-50 border-neutral-200"
        type="email"
        id="emailInput"
        placeholder="Your Email"
        aria-label="Your Email"
      />
      <button
        type="submit"
        className="overflow-hidden px-6 py-4 text-center text-white whitespace-nowrap bg-sky-500 rounded-none border border-solid border-neutral-200 max-md:px-5"
      >
        Subscribe
      </button>
      <div className="self-start text-xs text-neutral-500">
        Lore imp sum dolor Amit
      </div>
    </form>
  );
}
