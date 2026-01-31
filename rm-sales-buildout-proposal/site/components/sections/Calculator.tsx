"use client";

import { Container, Section } from "@/components/layout";
import { Card, Button } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { useCalculator } from "@/hooks/useCalculator";
import { CALCULATOR_PRESETS } from "@/lib/constants";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { Calculator as CalcIcon, TrendingUp, DollarSign, Users } from "lucide-react";

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
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm text-text-secondary">{label}</label>
        <span className="text-sm font-semibold text-gold">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-navy-card rounded-lg appearance-none cursor-pointer accent-gold"
      />
      <div className="flex justify-between text-xs text-text-tertiary">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export function Calculator() {
  const { inputs, outputs, updateInput, setPreset } = useCalculator();

  return (
    <Section background="midnight" id="calculator">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
              Interactive Calculator
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              See Your Numbers
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Adjust the inputs to see how the math changes. Pre-filled with your actual data.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Preset Buttons */}
        <FadeInOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CALCULATOR_PRESETS.map((preset, index) => (
              <Button
                key={index}
                variant="ghost"
                size="small"
                onClick={() => setPreset(preset.values)}
              >
                {preset.name}
              </Button>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs Panel */}
          <FadeInOnScroll delay={0.1}>
            <Card variant="default" padding="large">
              <div className="flex items-center gap-3 mb-6">
                <CalcIcon className="w-6 h-6 text-gold" />
                <h3 className="text-lg font-semibold text-text-primary">Inputs</h3>
              </div>

              <div className="space-y-6">
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
            <div className="space-y-6">
              {/* Current Performance */}
              <Card variant="default" padding="large">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-accent-blue" />
                  <h3 className="text-lg font-semibold text-text-primary">Current Performance</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-navy rounded-lg">
                    <p className="text-text-muted text-sm">Leads/Month</p>
                    <p className="text-xl font-bold text-text-primary">{outputs.leadsPerMonth}</p>
                  </div>
                  <div className="text-center p-3 bg-navy rounded-lg">
                    <p className="text-text-muted text-sm">Appointments</p>
                    <p className="text-xl font-bold text-text-primary">{outputs.appointmentsPerMonth}</p>
                  </div>
                  <div className="text-center p-3 bg-navy rounded-lg">
                    <p className="text-text-muted text-sm">Shows</p>
                    <p className="text-xl font-bold text-text-primary">{outputs.showsPerMonth}</p>
                  </div>
                  <div className="text-center p-3 bg-navy rounded-lg">
                    <p className="text-text-muted text-sm">Sales</p>
                    <p className="text-xl font-bold text-text-primary">{outputs.salesPerMonth}</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent-green/10 rounded-lg border border-accent-green/30 text-center">
                  <p className="text-text-muted text-sm mb-1">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-accent-green">
                    {formatCurrency(outputs.revenuePerMonth)}
                  </p>
                </div>

                {/* Revenue Per Show - KEY METRIC */}
                <div className="mt-4 p-4 bg-gold/10 rounded-lg border border-gold/30 text-center">
                  <p className="text-text-muted text-sm mb-1">Revenue Per Show</p>
                  <p className="text-3xl font-bold text-gold">
                    {formatCurrency(outputs.revenuePerShow)}
                  </p>
                  <p className="text-text-tertiary text-xs mt-1">
                    Every show = expected revenue
                  </p>
                </div>
              </Card>

              {/* Path to Target */}
              <Card variant="opportunity" padding="large">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-6 h-6 text-gold" />
                  <h3 className="text-lg font-semibold text-text-primary">
                    Path to {formatCurrency(inputs.targetRevenue)}/mo
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                    <span className="text-text-secondary">Sales Needed</span>
                    <span className="font-semibold text-text-primary">{outputs.salesNeeded}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                    <span className="text-text-secondary">Shows Needed</span>
                    <span className="font-semibold text-text-primary">{outputs.showsNeeded}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                    <span className="text-text-secondary">Appointments Needed</span>
                    <span className="font-semibold text-text-primary">{outputs.appointmentsNeeded}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                    <span className="text-text-secondary">Leads Needed</span>
                    <span className="font-semibold text-text-primary">{outputs.leadsNeeded}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-subtle">
                    <span className="text-text-secondary">Calls Per Day</span>
                    <span className="font-semibold text-text-primary">{outputs.callsPerDay}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-text-secondary flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Closers Needed
                    </span>
                    <span className="font-semibold text-gold">{outputs.closersNeeded}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/30 text-center">
                  <p className="text-text-muted text-sm mb-1">Required Ad Spend</p>
                  <p className="text-3xl font-bold text-gold">
                    {formatCurrency(outputs.adSpendRequired)}/mo
                  </p>
                </div>
              </Card>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Key Insight */}
        <FadeInOnScroll delay={0.3}>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-text-secondary">
              The constraint isn&apos;t the funnel — it&apos;s <span className="text-gold font-semibold">capacity</span>.
              The math works. You just need people to work the phones.
            </p>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
