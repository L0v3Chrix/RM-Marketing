"use client";

import { Container, Section } from "@/components/layout";
import { Card, Button } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { useCalculator } from "@/hooks/useCalculator";
import { CALCULATOR_PRESETS } from "@/lib/constants";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { Calculator as CalcIcon, TrendingUp, DollarSign, UserCheck } from "lucide-react";

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  format?: (value: number) => string;
  tooltip?: string;
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format = (v) => v.toString(),
}: SliderInputProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center gap-2">
        <label className="text-xs sm:text-sm text-text-secondary">{label}</label>
        <span className="text-xs sm:text-sm font-semibold text-accent whitespace-nowrap">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-text-muted">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export function Calculator() {
  const { inputs, outputs, updateInput, setPreset } = useCalculator();

  return (
    <Section background="gradient" id="calculator">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
              Interactive Calculator
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
              See Your Numbers
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              Adjust the inputs to see how the math changes. Pre-filled with your actual data.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Preset Buttons */}
        <FadeInOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-2">
            {CALCULATOR_PRESETS.map((preset, index) => (
              <Button 
                key={index}
                variant="ghost"
                size="small"
                onClick={() => setPreset(preset.values)}
                className="bg-card border-border text-text-primary hover:bg-card-hover text-xs sm:text-sm min-h-[40px]"
              >
                {preset.name}
              </Button>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
          {/* Inputs Panel */}
          <FadeInOnScroll delay={0.1}>
            <Card variant="bordered" padding="large">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <CalcIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                <h3 className="text-base sm:text-lg font-semibold text-text-primary">Inputs</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <SliderInput
                  label="Monthly Ad Spend"
                  value={inputs.adSpend}
                  min={0}
                  max={15000}
                  step={100}
                  onChange={(v) => updateInput("adSpend", v)}
                  format={(v) => formatCurrency(v)}
                />

                <SliderInput
                  label="Cost Per Lead"
                  value={inputs.costPerLead}
                  min={1}
                  max={50}
                  step={0.1}
                  onChange={(v) => updateInput("costPerLead", v)}
                  format={(v) => formatCurrency(v, { decimals: 2 })}
                />

                <SliderInput
                  label="Booking Rate"
                  value={inputs.bookingRate}
                  min={5}
                  max={35}
                  step={0.5}
                  onChange={(v) => updateInput("bookingRate", v)}
                  format={(v) => formatPercent(v)}
                />

                <SliderInput
                  label="Show Rate"
                  value={inputs.showRate}
                  min={30}
                  max={90}
                  step={1}
                  onChange={(v) => updateInput("showRate", v)}
                  format={(v) => formatPercent(v)}
                />

                <SliderInput
                  label="Close Rate"
                  value={inputs.closeRate}
                  min={10}
                  max={60}
                  step={1}
                  onChange={(v) => updateInput("closeRate", v)}
                  format={(v) => formatPercent(v)}
                />

                <SliderInput
                  label="Average Sale Value"
                  value={inputs.avgSaleValue}
                  min={500}
                  max={10000}
                  step={100}
                  onChange={(v) => updateInput("avgSaleValue", v)}
                  format={(v) => formatCurrency(v)}
                />

                <SliderInput
                  label="Target Monthly Revenue"
                  value={inputs.targetRevenue}
                  min={25000}
                  max={200000}
                  step={5000}
                  onChange={(v) => updateInput("targetRevenue", v)}
                  format={(v) => formatCurrency(v)}
                />
              </div>
            </Card>
          </FadeInOnScroll>

          {/* Outputs Panel */}
          <FadeInOnScroll delay={0.2}>
            <div className="space-y-4 sm:space-y-6">
              {/* Current Performance */}
              <Card variant="bordered" padding="large">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary">Current Performance</h3>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="text-center p-2 sm:p-3 bg-card rounded-lg">
                    <p className="text-text-muted text-xs sm:text-sm">Leads/Month</p>
                    <p className="text-lg sm:text-xl font-bold text-text-primary">{outputs.leadsPerMonth}</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-card rounded-lg">
                    <p className="text-text-muted text-xs sm:text-sm">Appointments</p>
                    <p className="text-lg sm:text-xl font-bold text-text-primary">{outputs.appointmentsPerMonth}</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-card rounded-lg">
                    <p className="text-text-muted text-xs sm:text-sm">Shows</p>
                    <p className="text-lg sm:text-xl font-bold text-text-primary">{outputs.showsPerMonth}</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-card rounded-lg">
                    <p className="text-text-muted text-xs sm:text-sm">Sales</p>
                    <p className="text-lg sm:text-xl font-bold text-text-primary">{outputs.salesPerMonth}</p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-success/20 rounded-lg border border-success/30 text-center">
                  <p className="text-text-secondary text-xs sm:text-sm mb-1">Monthly Revenue</p>
                  <p className="text-2xl sm:text-3xl font-bold text-success">
                    {formatCurrency(outputs.revenuePerMonth)}
                  </p>
                </div>

                {/* Revenue Per Show - KEY METRIC */}
                <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-accent/10 rounded-lg border border-accent/30 text-center">
                  <p className="text-text-secondary text-xs sm:text-sm mb-1">Revenue Per Show</p>
                  <p className="text-2xl sm:text-3xl font-bold text-accent">
                    {formatCurrency(outputs.revenuePerShow)}
                  </p>
                  <p className="text-text-muted text-xs mt-1">
                    Every show = expected revenue
                  </p>
                </div>
              </Card>

              {/* Path to Target */}
              <Card variant="highlight" padding="large">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                    Path to {formatCurrency(inputs.targetRevenue)}/mo
                  </h3>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                    <span className="text-text-secondary text-sm">Sales Needed</span>
                    <span className="font-semibold text-text-primary text-sm">{outputs.salesNeeded}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                    <span className="text-text-secondary text-sm">Shows Needed</span>
                    <span className="font-semibold text-text-primary text-sm">{outputs.showsNeeded}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                    <span className="text-text-secondary text-sm">Appointments Needed</span>
                    <span className="font-semibold text-text-primary text-sm">{outputs.appointmentsNeeded}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                    <span className="text-text-secondary text-sm">Leads Needed</span>
                    <span className="font-semibold text-text-primary text-sm">{outputs.leadsNeeded}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                    <span className="text-text-secondary text-sm">Calls Per Day</span>
                    <span className="font-semibold text-text-primary text-sm">{outputs.callsPerDay}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-text-secondary text-sm flex items-center gap-2">
                      <UserCheck className="w-4 h-4" />
                      Closers Needed
                    </span>
                    <span className="font-semibold text-accent text-sm">{outputs.closersNeeded}</span>
                  </div>
                  
                  {/* Context note for closers */}
                  {outputs.closersNeeded > 3 && (
                    <div className="mt-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <p className="text-text-muted text-xs leading-relaxed">
                        <span className="text-accent font-medium">Note:</span> This is raw math based on ad leads alone. 
                        With database activation + improved show rates, <span className="text-text-primary font-medium">2-3 closers</span> can 
                        often achieve similar results. See the Database Multiplier below.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-success/20 rounded-lg border border-success/30 text-center">
                  <p className="text-text-secondary text-xs sm:text-sm mb-1">Required Ad Spend</p>
                  <p className="text-2xl sm:text-3xl font-bold text-success">
                    {formatCurrency(outputs.adSpendRequired)}/mo
                  </p>
                </div>
              </Card>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Database Multiplier */}
        <FadeInOnScroll delay={0.3}>
          <Card variant="elevated" padding="large" className="mt-8 sm:mt-12 max-w-3xl mx-auto border-success/30">
            <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-4 text-center">
              The Database Multiplier
            </h3>
            <p className="text-text-secondary text-sm sm:text-base text-center mb-6">
              At $1,500/month ad spend, ads alone generate about <span className="text-warning font-semibold">15 appointments/month</span>.
              But that&apos;s not the whole story.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-warning/10 rounded-lg p-4 border border-warning/30 text-center">
                <p className="text-text-muted text-xs uppercase mb-2">Ads Alone</p>
                <p className="text-3xl font-bold text-warning">~15</p>
                <p className="text-text-secondary text-sm">appointments/month</p>
              </div>
              <div className="bg-success/10 rounded-lg p-4 border border-success/30 text-center">
                <p className="text-text-muted text-xs uppercase mb-2">Database + Ads</p>
                <p className="text-3xl font-bold text-success">88</p>
                <p className="text-text-secondary text-sm">appointments/month (22/week)</p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border-subtle">
              <p className="text-text-primary font-semibold text-sm mb-2">Where the Extra 73 Come From:</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-accent font-bold">10-12/wk</p>
                  <p className="text-text-muted text-xs">Database reactivation</p>
                </div>
                <div>
                  <p className="text-accent font-bold">5-7/wk</p>
                  <p className="text-text-muted text-xs">Warm lead follow-up</p>
                </div>
                <div>
                  <p className="text-accent font-bold">5-7/wk</p>
                  <p className="text-text-muted text-xs">New ad leads</p>
                </div>
              </div>
            </div>

            <p className="text-text-secondary text-xs sm:text-sm text-center mt-4">
              The constraint isn&apos;t the funnel — it&apos;s <span className="text-accent font-semibold">capacity</span>.
              The database is the key. You just need people to work it.
            </p>
          </Card>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
