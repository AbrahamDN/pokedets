"use client";
import React from "react";
import { theme } from "../../../tailwind.config";
import { COLOR } from "../data/colours.types";
import Text from "./Text";

const colors = theme.extend.colors;

const Type = ({ name }: { name: COLOR }) => {
  return (
    <Text
      as="span"
      className="rounded-full bg-fade text-white font-medium w-fit py-2 px-4 capitalize"
      style={{ backgroundColor: colors[name] }}
    >
      {name}
    </Text>
  );
};

export default Type;
