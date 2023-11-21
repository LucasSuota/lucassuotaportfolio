"use client";

import { Tab } from "@headlessui/react";
import { About, Hero, Projects } from ".";
import { Fragment } from "react";
import { tabItems } from "../constants";

const Footer = () => {
  return (
    <footer className="min-w-full mx-auto">
      <Tab.Group>
        <Tab.List className={"absolute bottom-0 min-w-full"}>
          {tabItems.map((category) => (
            <Tab key={category.title} as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "uppercase text-[#313131] bg-red-400 w-1/3 sm:p-2 p-2 transition-all"
                      : "uppercase text-[#313131] bg-white w-1/3 sm:p-2 p-1"
                  }
                >
                  {category.title}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Hero />
          </Tab.Panel>
          <Tab.Panel>
            <Projects />
          </Tab.Panel>
          <Tab.Panel>
            <About />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </footer>
  );
};

export default Footer;
