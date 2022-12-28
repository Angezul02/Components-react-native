import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 1',
    icon: 'albums',
    components: 'Animation1Screen',
  },

  {
    name: 'Animation 2',
    icon: 'pulse',
    components: 'Animation2Screen',
  },

  {
    name: 'Animation 3 Switches',
    icon: 'toggle',
    components: 'SwitchScreen',
  },

  {
    name: 'Animation 4 Alerts',
    icon: 'alert-circle',
    components: 'AlertScreen',
  },

  {
    name: 'Animation 5 Text-Input',
    icon: 'document-text',
    components: 'TextInputScreen',
  },

  {
    name: 'Animation 6 Pull to refresh',
    icon: 'refresh-circle',
    components: 'PullToRefreshScreen',
  },

  {
    name: 'Animation 7 Section List',
    icon: 'list-circle',
    components: 'SectionListScreen',
  },

  {
    name: 'Animation 8 Modal ',
    icon: 'copy',
    components: 'ModalScreen',
  },
  {
    name: 'Animation 9 Infinite Scroll ',
    icon: 'infinite',
    components: 'InfiniteScrollScreen',
  },
];
