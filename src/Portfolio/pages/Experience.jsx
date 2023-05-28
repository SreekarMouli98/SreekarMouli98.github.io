import { chain } from "lodash";
import * as Tabs from "@radix-ui/react-tabs";

import experience from "../data/experience.json";
import ExperienceCard from "../components/ExperienceCard";
import Gap from "../components/Gap";
import Heading from "../components/Heading";
import { useState } from "react";

const companyNames =
  chain(experience).map("company").uniq().reverse().value() || [];

const experienceGrouped = experience.reduce((acc, item) => {
  const { company } = item;
  if (!acc[company]) {
    acc[company] = [];
  }
  // push the item to the array in reverse order
  acc[company].unshift(item);
  return acc;
}, {});

const defaultTab = companyNames[0];

function Experience() {
  const [tab, setTab] = useState(defaultTab);

  const onChangeTab = (val) => {
    console.log(val);
    setTab(val);
  };

  return (
    <div id="experience">
      <Heading>02. experience</Heading>
      <Gap />
      <Tabs.Root
        defaultValue={defaultTab}
        value={tab}
        onValueChange={onChangeTab}
        orientation="vertical"
      >
        <div className="tw-flex">
          <div>
            <Tabs.List className="tw-flex tw-flex-col">
              {companyNames.map((companyName) => (
                <Tabs.Trigger
                  key={companyName}
                  value={companyName}
                  className={`tw-border-solid tw-border-2 tw-border-transparent tw-pl-5 tw-py-3 tw-pr-2 tw-text-end ${
                    tab === companyName ? "tw-border-l-black" : ""
                  }`}
                >
                  {companyName}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>
          <div className="tw-pl-10">
            {companyNames.map((companyName) => (
              <Tabs.Content key={companyName} value={companyName}>
                {experienceGrouped[companyName].map((item, index) => (
                  <ExperienceCard key={index} {...item} />
                ))}
              </Tabs.Content>
            ))}
          </div>
        </div>
      </Tabs.Root>
      <Gap />
    </div>
  );
}

export default Experience;
