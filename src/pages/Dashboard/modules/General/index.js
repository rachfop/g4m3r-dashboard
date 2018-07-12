import React, { Component } from "react";
import { css } from "emotion";

import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
// import Input from "../../../../components/Input";
// import Select from "../../../../components/Select";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Checkbox from "../../../../components/Checkbox";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import qTimezone from "../../../../graphql/queries/utils/timezone";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

const cleanUpTimezone = timezones =>
  timezones.map(timezone => ({
    key: timezone,
    value: timezone,
  }));

// todo: remove from here, put on graphql folder
const mutationQuery = gql`
  mutation editGuild($guildId: String!, $input: guildInput!) {
    set(id: $guildId, input: $input) {
      name
      id
      configs {
        settings {
          prefix
        }
      }
    }
  }
`;

class GeneralEditor extends Component {
  render() {
    // let guildId = this.props.match.params.guildId;
    return (
      <React.Fragment>
        <section>
          <Heading>General</Heading>
          <SubHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </SubHeader>
        </section>
        <section>
          <Heading2>Overview</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
              <Box padding>
                <Box.Title>Prefix</Box.Title>
                <Box.Body>
                  <Editor.Input mutate="prefix" query="guild.configs.settings.prefix" />
                </Box.Body>
              </Box>
              <Box padding>
                <Box.Title>Timezone</Box.Title>
                <Box.Body>
                  <Query query={qTimezone}>
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      let values = cleanUpTimezone(data.listTimezones);

                      return (
                        <Editor.Select
                          values={values}
                          mutate="timezone"
                          query="guild.configs.settings.timezone"
                        />
                      );
                    }}
                  </Query>
                </Box.Body>
              </Box>
              <Box padding>
                <Box.Title>Something?</Box.Title>
                <Box.Body>
                  <Checkbox>Test</Checkbox>
                </Box.Body>
              </Box>
            </Editor>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default GeneralEditor;
