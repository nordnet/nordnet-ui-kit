import Alert from './components/alert/alert';
import Animate from './components/animate/animate';
import Avatar from './components/avatar';
import Badge from './components/badge/badge';
import Button from './components/button/button';
import CostInfoLogo from './components/cost-info-logo';
import Dropdown from './components/dropdown/dropdown';
import Flag from './components/flag/flag';
import Input from './components/input/input';
import InstrumentBadge from './components/instrument-badge/instrument-badge';
import LabeledValue from './components/labeled-value/labeled-value';
import Li from './components/li/li';
import Logo from './components/logo/logo';
import Pane from './components/pane/pane';
import ProgressBar from './components/progress-bar/progress-bar';
import RadioGroup from './components/radio-group';
import SegmentedControl from './components/segmented-control';
import SharevilleLogo from './components/shareville-logo';
import Spinner from './components/spinner';
import Table from './components/table';
import Tbody from './components/tbody';
import Td from './components/td';
import Tfoot from './components/tfoot';
import Th from './components/th';
import Thead from './components/thead';
import Tooltip from './components/tooltip';
import Tr from './components/tr';
import Ul from './components/ul/ul';

import Icon from './components/icon/icons';

// Theming
import { ThemeProvider, createTheme } from './styles';

// Test utils
import { createMount, createShallow, createRenderToString } from './test-utils';
import mockClasses from './utilities/mock-classes';

const theme = createTheme();

// deprecated
// deprecated
// deprecated
export {
  Alert,
  Animate,
  Avatar,
  Badge,
  Button,
  CostInfoLogo,
  Dropdown,
  Flag,
  Icon,
  Input,
  InstrumentBadge,
  LabeledValue,
  Li,
  Logo,
  Pane,
  ProgressBar,
  RadioGroup,
  SegmentedControl,
  SharevilleLogo,
  Spinner,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  Ul,
  // Theming
  ThemeProvider,
  createTheme,
  theme,
  // Test utils
  createMount,
  createShallow,
  createRenderToString,
  mockClasses,
};
