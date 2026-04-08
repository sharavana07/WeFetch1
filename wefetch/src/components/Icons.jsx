import React from 'react';

const IconBase = ({ className = '', name, ...rest }) => (
  <i className={`las ${name} ${className}`} style={{ fontSize: '1.4em', verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...rest.style }} {...rest} />
);

export const CheckIcon = (props) => <IconBase name="la-check" className="check-icon" {...props} />;
export const CrossIcon = (props) => <IconBase name="la-times" className="cross-icon" {...props} />;
export const GlobeIcon = (props) => <IconBase name="la-globe" className="icon" {...props} />;
export const TrophyIcon = (props) => <IconBase name="la-trophy" className="icon" {...props} />;
export const ClipboardIcon = (props) => <IconBase name="la-clipboard-list" className="icon" {...props} />;
export const BarChartIcon = (props) => <IconBase name="la-chart-bar" className="icon" {...props} />;
export const GearIcon = (props) => <IconBase name="la-cog" className="icon" {...props} />;
export const UsersIcon = (props) => <IconBase name="la-users" className="icon" {...props} />;
export const UserIcon = (props) => <IconBase name="la-user" className="icon" {...props} />;
export const HandshakeIcon = (props) => <IconBase name="la-handshake" className="icon" {...props} />;
export const TrendDownIcon = (props) => <IconBase name="la-arrow-down" className="icon" {...props} />;
export const TrendUpIcon = (props) => <IconBase name="la-arrow-up" className="icon" {...props} />;
export const AlertTriangleIcon = (props) => <IconBase name="la-exclamation-triangle" className="icon" {...props} />;
export const BanIcon = (props) => <IconBase name="la-ban" className="icon" {...props} />;
export const DollarIcon = (props) => <IconBase name="la-rupee-sign" className="icon" {...props} />;
export const RefreshIcon = (props) => <IconBase name="la-sync" className="icon" {...props} />;
export const ZapIcon = (props) => <IconBase name="la-bolt" className="icon" {...props} />;
export const CalendarIcon = (props) => <IconBase name="la-calendar" className="icon" {...props} />;
export const CircleDotIcon = (props) => <IconBase name="la-dot-circle" className="icon" {...props} />;
export const ArrowRightIcon = (props) => <IconBase name="la-arrow-right" className="icon" {...props} />;
export const RocketIcon = (props) => <IconBase name="la-rocket" className="icon" {...props} />;
export const PartyIcon = (props) => <IconBase name="la-glass-cheers" className="icon" {...props} />;
export const LockIcon = (props) => <IconBase name="la-lock" className="icon" {...props} />;
export const TargetIcon = (props) => <IconBase name="la-bullseye" className="icon" {...props} />;
export const StarIcon = (props) => <IconBase name="la-star" className="icon" {...props} />;
export const ShieldIcon = (props) => <IconBase name="la-shield-alt" className="icon" {...props} />;

