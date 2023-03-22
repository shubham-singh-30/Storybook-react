import React from 'react';

import InboxScreen from '../components/InboxScreen';
import store from '../lib/store';
 import { rest } from 'msw';
 import { MockedState } from './TaskList.stories';
import { Provider } from 'react-redux';

export default {
  component: InboxScreen,
  title: 'Components/InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = () => <InboxScreen />;

export const Default = Template.bind({});
 Default.parameters = {
   msw: {
     handlers: [
       rest.get(
         'https://jsonplaceholder.typicode.com/todos?userId=1',
         (req, res, ctx) => {
           return res(ctx.json(MockedState.tasks));
         }
       ),
     ],
   },
 };

export const Error = Template.bind({});
 Error.parameters = {
   msw: {
     handlers: [
       rest.get(
         'https://jsonplaceholder.typicode.com/todos?userId=1',
         (req, res, ctx) => {
           return res(ctx.status(403));
         }
       ),
     ],
   },
 };