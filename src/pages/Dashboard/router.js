import React from "react";
import SettingsIcon from "mdi-react/SettingsIcon";
import AppleKeyboardCommandIcon from "mdi-react/AppleKeyboardCommandIcon";
import { StarIcon, FlashIcon } from "mdi-react";
import { Route, Switch } from "react-router-dom";

const Test = () => <div>test</div>;
const Test2 = () => <div>test2</div>;

export const router = [
  {
    name: "General",
    path: "",
    exact: true,
    icon: SettingsIcon,
    component: Test,
  },
  {
    name: "Commands",
    path: "commands",
    icon: AppleKeyboardCommandIcon,
    component: Test2,
  },
  {
    name: "Special Features",
    path: "features",
    icon: StarIcon,
    component: Test,
  },
  {
    name: "Moderation",
    path: "moderation",
    icon: FlashIcon,
    component: Test2,
  },
];

export default () => (
  <Switch>
    {router.map(route => (
      <Route path={`/g/:guildId/${route.path}`} component={route.component} exact={route.exact} />
    ))}
  </Switch>
);
