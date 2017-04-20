import Alert from './components/alert/alert';
import Avatar from './components/avatar';
import Badge from './components/badge/badge';
import Button from './components/button/button';
import Dropdown from './components/dropdown/dropdown';
import Flag from './components/flag/flag';
import HorizontalNav from './components/horizontal-nav';
import Input from './components/input/input';
import LabeledValue from './components/labeled-value/labeled-value';
import Li from './components/li/li';
import Logo from './components/logo/logo';
import Pane from './components/pane/pane';
import RadioGroup from './components/radio-group';
import RatioBar from './components/ratio-bar';
import Search from './components/search';
// import SparkGraph from './components/spark-graph';
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
import Widget from './components/widget/widget';

// Icons
import Apartment from './components/icon/icons/apartment';
import ArrowDown from './components/icon/icons/arrowDown';
import ArrowRight from './components/icon/icons/arrowRight';
import ArrowUp from './components/icon/icons/arrowUp';
import ArrowUpDown from './components/icon/icons/arrowUpDown';
import Bell from './components/icon/icons/bell';
import Calendar from './components/icon/icons/calendar';
import Checkmark from './components/icon/icons/checkmark';
import CheckmarkLarge from './components/icon/icons/checkmarkLarge';
import ChevronDown from './components/icon/icons/chevronDown';
import ChevronUp from './components/icon/icons/chevronUp';
import CircleArrow from './components/icon/icons/circleArrow';
import CircleSlash from './components/icon/icons/circleSlash';
import Close from './components/icon/icons/close';
import Cloud from './components/icon/icons/cloud';
import ExclamationPoint from './components/icon/icons/exclamationPoint';
import Film from './components/icon/icons/film';
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
import Questionmark from './components/icon/icons/questionmark';
import SearchIcon from './components/icon/icons/search';
import Share from './components/icon/icons/share';
import SocialFacebook from './components/icon/icons/socialFacebook';
import SocialGplus from './components/icon/icons/socialGplus';
import SocialInstagram from './components/icon/icons/socialInstagram';
import SocialTwitter from './components/icon/icons/socialTwitter';
import Star from './components/icon/icons/star';
import Tag from './components/icon/icons/tag';
import TickingClock from './components/icon/icons/tickingClock';
import Trash from './components/icon/icons/trash';
import TrashAlternate from './components/icon/icons/trashAlternate';
import User from './components/icon/icons/user';
import UserShirt from './components/icon/icons/userShirt';
import VerticalEllipsis from './components/icon/icons/verticalEllipsis';

// Theming
import { ThemeProvider } from './styles';

// Test utils
import {
  createMount,
  createShallow,
  createRenderToString,
} from './test-utils';

const Icon = {
  Apartment,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpDown,
  Bell,
  Calendar,
  Checkmark,
  CheckmarkLarge,
  ChevronDown,
  ChevronUp,
  CircleArrow,
  CircleSlash,
  Close,
  Cloud,
  ExclamationPoint,
  Film,
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
  Questionmark,
  Search: SearchIcon,
  Share,
  SocialFacebook,
  SocialGplus,
  SocialInstagram,
  SocialTwitter,
  Star,
  Tag,
  TickingClock,
  Trash,
  TrashAlternate,
  User,
  UserShirt,
  VerticalEllipsis,
};

export {
  Alert,
  Avatar,
  Badge,
  Button,
  Dropdown,
  Flag,
  HorizontalNav,
  Icon,
  Input,
  LabeledValue,
  Li,
  Logo,
  Pane,
  RadioGroup,
  RatioBar,
  Search,
  // SparkGraph,
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
  Widget,

  // Theming
  ThemeProvider,

  // Test utils
  createMount,
  createShallow,
  createRenderToString,
};
