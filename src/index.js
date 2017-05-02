import Alert from './components/alert/alert';
import Avatar from './components/avatar';
import Badge from './components/badge/badge';
import Button from './components/button/button';
import Dropdown from './components/dropdown/dropdown';
import Flag from './components/flag/flag';
import Input from './components/input/input';
import LabeledValue from './components/labeled-value/labeled-value';
import Li from './components/li/li';
import Logo from './components/logo/logo';
import Pane from './components/pane/pane';
import RadioGroup from './components/radio-group';
import SparkGraph from './components/spark-graph';
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

// Icons
import Apartment from './components/icon/icons/apartment';
import ArrowDown from './components/icon/icons/arrowDown';
import ArrowLeft from './components/icon/icons/arrowLeft';
import ArrowRight from './components/icon/icons/arrowRight';
import ArrowUp from './components/icon/icons/arrowUp';
import ArrowUpDown from './components/icon/icons/arrowUpDown';
import Balloon from './components/icon/icons/balloon';
import Bell from './components/icon/icons/bell';
import Calendar from './components/icon/icons/calendar';
import Cart from './components/icon/icons/cart';
import Checkmark from './components/icon/icons/checkmark';
import CheckmarkLarge from './components/icon/icons/checkmarkLarge';
import ChevronDown from './components/icon/icons/chevronDown';
import ChevronUp from './components/icon/icons/chevronUp';
import CircleArrow from './components/icon/icons/circleArrow';
import CircleSlash from './components/icon/icons/circleSlash';
import Clock from './components/icon/icons/clock';
import Close from './components/icon/icons/close';
import Cloud from './components/icon/icons/cloud';
import Edit from './components/icon/icons/edit';
import Ellipsis from './components/icon/icons/ellipsis';
import ExclamationPoint from './components/icon/icons/exclamationPoint';
import Expand from './components/icon/icons/expand';
import Film from './components/icon/icons/film';
import Filter from './components/icon/icons/filter';
import FloppyDisk from './components/icon/icons/floppyDisk';
import Folder from './components/icon/icons/folder';
import GraphArea from './components/icon/icons/graphArea';
import GraphCandlestick from './components/icon/icons/graphCandlestick';
import Heart from './components/icon/icons/heart';
import Key from './components/icon/icons/key';
import LightningBolt from './components/icon/icons/lightningBolt';
import Lock from './components/icon/icons/lock';
import Mail from './components/icon/icons/mail';
import MailOpen from './components/icon/icons/mailOpen';
import News from './components/icon/icons/news';
import Print from './components/icon/icons/print';
import Profile from './components/icon/icons/profile';
import Questionmark from './components/icon/icons/questionmark';
import SearchIcon from './components/icon/icons/search';
import Share from './components/icon/icons/share';
import SignOut from './components/icon/icons/signOut';
import SocialFacebook from './components/icon/icons/socialFacebook';
import SocialGplus from './components/icon/icons/socialGplus';
import SocialInstagram from './components/icon/icons/socialInstagram';
import SocialTwitter from './components/icon/icons/socialTwitter';
import Star from './components/icon/icons/star';
import Tag from './components/icon/icons/tag';
import TickingClock from './components/icon/icons/tickingClock';
import Trash from './components/icon/icons/trash';
import VerticalEllipsis from './components/icon/icons/verticalEllipsis';

// Theming
import { ThemeProvider, createTheme } from './styles';

// Test utils
import {
  createMount,
  createShallow,
  createRenderToString,
} from './test-utils';

const theme = createTheme();

const Icon = {
  Apartment,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpDown,
  Balloon,
  Bell,
  Calendar,
  Cart,
  Checkmark,
  CheckmarkLarge,
  ChevronDown,
  ChevronUp,
  CircleArrow,
  CircleSlash,
  Clock,
  Close,
  Cloud,
  Edit,
  Ellipsis,
  ExclamationPoint,
  Expand,
  Film,
  Filter,
  FloppyDisk,
  Folder,
  GraphArea,
  GraphCandlestick,
  Heart,
  Key,
  LightningBolt,
  Lock,
  Mail,
  MailOpen,
  News,
  Print,
  Profile,
  Questionmark,
  Search: SearchIcon,
  Share,
  SignOut,
  SocialFacebook,
  SocialGplus,
  SocialInstagram,
  SocialTwitter,
  Star,
  Tag,
  TickingClock,
  Trash,
  VerticalEllipsis,
};

export {
  Alert,
  Avatar,
  Badge,
  Button,
  Dropdown,
  Flag,
  Icon,
  Input,
  LabeledValue,
  Li,
  Logo,
  Pane,
  RadioGroup,
  SparkGraph,
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
};
