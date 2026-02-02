"use client";

import { CountUp } from "@/components/animations";

// Custom SVG Icons matching GHL branding with gold accents
const RevenueIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="4" y="24" width="8" height="20" rx="2" fill="currentColor" className="text-success/30" />
    <rect x="16" y="16" width="8" height="28" rx="2" fill="currentColor" className="text-success/50" />
    <rect x="28" y="8" width="8" height="36" rx="2" fill="currentColor" className="text-success/70" />
    <rect x="40" y="4" width="4" height="40" rx="2" fill="currentColor" className="text-success" />
    <circle cx="36" cy="8" r="6" fill="currentColor" className="text-accent" stroke="#D4A574" strokeWidth="2"/>
    <path d="M34 8h4M36 6v4" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LeadCostIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <circle cx="24" cy="24" r="18" stroke="currentColor" className="text-success/30" strokeWidth="3"/>
    <circle cx="24" cy="24" r="12" stroke="currentColor" className="text-success/60" strokeWidth="3"/>
    <circle cx="24" cy="24" r="6" fill="currentColor" className="text-success"/>
    <path d="M24 4L24 8M24 40L24 44M4 24H8M40 24H44" stroke="currentColor" className="text-accent" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="38" cy="10" r="5" fill="currentColor" className="text-accent"/>
    <path d="M37 10h2M38 9v2" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ShowRateIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" className="text-warning/40" strokeWidth="2"/>
    <path d="M6 16H42" stroke="currentColor" className="text-warning/60" strokeWidth="2"/>
    <circle cx="14" cy="12" r="2" fill="currentColor" className="text-error"/>
    <circle cx="22" cy="12" r="2" fill="currentColor" className="text-warning"/>
    <circle cx="30" cy="12" r="2" fill="currentColor" className="text-success"/>
    <rect x="12" y="22" width="8" height="8" rx="2" fill="currentColor" className="text-success/60"/>
    <rect x="12" y="32" width="8" height="4" rx="1" fill="currentColor" className="text-success"/>
    <rect x="24" y="22" width="8" height="14" rx="2" stroke="currentColor" className="text-warning" strokeWidth="2" strokeDasharray="3 2"/>
    <circle cx="40" cy="8" r="6" fill="currentColor" className="text-warning"/>
    <text x="40" y="11" textAnchor="middle" fill="#0A1628" fontSize="8" fontWeight="bold">!</text>
  </svg>
);

const FailedPaymentIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="4" y="12" width="40" height="28" rx="4" stroke="currentColor" className="text-accent/40" strokeWidth="2"/>
    <rect x="4" y="18" width="40" height="6" fill="currentColor" className="text-accent/30"/>
    <rect x="8" y="28" width="12" height="2" rx="1" fill="currentColor" className="text-accent/60"/>
    <rect x="8" y="32" width="8" height="2" rx="1" fill="currentColor" className="text-accent/40"/>
    <circle cx="38" cy="36" r="8" fill="currentColor" className="text-base" stroke="#D4A574" strokeWidth="2"/>
    <path d="M35 33L41 39M41 33L35 39" stroke="#D4A574" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 30l4 4-4 4" stroke="currentColor" className="text-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AppointmentIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" className="text-success/40" strokeWidth="2"/>
    <path d="M8 14H40" stroke="currentColor" className="text-success/60" strokeWidth="2"/>
    <circle cx="16" cy="10" r="1.5" fill="currentColor" className="text-success"/>
    <circle cx="32" cy="10" r="1.5" fill="currentColor" className="text-success"/>
    <path d="M16 6V10M32 6V10" stroke="currentColor" className="text-success" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="22" r="3" fill="currentColor" className="text-success/60"/>
    <circle cx="24" cy="22" r="3" fill="currentColor" className="text-success"/>
    <circle cx="32" cy="22" r="3" fill="currentColor" className="text-success/60"/>
    <circle cx="16" cy="30" r="3" fill="currentColor" className="text-success/60"/>
    <circle cx="24" cy="30" r="3" fill="currentColor" className="text-accent"/>
    <path d="M21 30l2 2 4-4" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FunnelIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <path d="M8 8H40L28 24V38L20 42V24L8 8Z" fill="currentColor" className="text-accent/20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 12H36" stroke="currentColor" className="text-accent/60" strokeWidth="2"/>
    <path d="M16 18H32" stroke="currentColor" className="text-accent/80" strokeWidth="2"/>
    <path d="M20 24H28" stroke="currentColor" className="text-accent" strokeWidth="2"/>
    <circle cx="40" cy="8" r="6" fill="currentColor" className="text-success"/>
    <path d="M37 8l2 2 4-4" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface MetricCardProps {
  icon: 'revenue' | 'leadCost' | 'showRate' | 'failedPayment' | 'appointment' | 'funnel';
  value: number;
  label: string;
  sublabel?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  color?: 'success' | 'warning' | 'accent';
}

const iconMap = {
  revenue: RevenueIcon,
  leadCost: LeadCostIcon,
  showRate: ShowRateIcon,
  failedPayment: FailedPaymentIcon,
  appointment: AppointmentIcon,
  funnel: FunnelIcon,
};

const colorClasses = {
  success: 'text-success',
  warning: 'text-warning',
  accent: 'text-accent',
};

export function MetricCard({ 
  icon, 
  value, 
  label, 
  sublabel, 
  prefix = '', 
  suffix = '',
  decimals = 0,
  color = 'success'
}: MetricCardProps) {
  const IconComponent = iconMap[icon];
  
  return (
    <div className="relative p-6 bg-card rounded-xl border border-border-subtle overflow-hidden group hover:border-accent/30 transition-all duration-300">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Icon */}
      <div className="relative mb-4">
        <IconComponent />
      </div>
      
      {/* Value */}
      <p className={`relative text-3xl sm:text-4xl font-bold ${colorClasses[color]} tracking-tight`}>
        <CountUp end={value} prefix={prefix} suffix={suffix} decimals={decimals} duration={1.5} />
      </p>
      
      {/* Label */}
      <p className="relative text-sm sm:text-base text-text-muted uppercase tracking-wider mt-2">
        {label}
      </p>
      
      {/* Sublabel */}
      {sublabel && (
        <p className="relative text-xs sm:text-sm text-text-subtle mt-2">
          {sublabel}
        </p>
      )}
    </div>
  );
}

// Standalone SVG icon exports for use elsewhere
export const MetricIcons = {
  Revenue: RevenueIcon,
  LeadCost: LeadCostIcon,
  ShowRate: ShowRateIcon,
  FailedPayment: FailedPaymentIcon,
  Appointment: AppointmentIcon,
  Funnel: FunnelIcon,
};
