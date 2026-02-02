"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Phone, Calendar, FileText, Users, ArrowRight, Check, X, GraduationCap, Target, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import { TEAM_MEMBERS, TWO_PERSON_ADVANTAGE } from "@/lib/constants";

export function Team() {
  return (
    <section id="team" className="bg-base py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">Meet Your Team</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Who&apos;s Running the Pressure Test
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              You&apos;re not hiring a consultant who gives advice. You&apos;re engaging a team that 
              sells, closes, and builds — hands-on.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Professional Sales Team Section - NEW */}
        <FadeInOnScroll delay={0.05}>
          <div className="mb-16 p-6 md:p-8 bg-elevated rounded-xl border border-accent/30">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6 text-center">
              What a REAL Professional Sales Team Looks Like
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* What GHL Mastery Has Been Training */}
              <div className="p-5 bg-card rounded-xl border border-warning/30">
                <h4 className="font-semibold text-warning text-lg mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  What You&apos;ve Been Getting
                </h4>
                <ul className="space-y-3 text-text-muted text-base">
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Commission-only &quot;closers&quot; who cherry-pick leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>No accountability for show rates or follow-up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>One person trying to do everything (set, close, follow-up)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>No systems, no SOPs, no training materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Owner still involved in every deal</span>
                  </li>
                </ul>
              </div>

              {/* What Professional Sales Looks Like */}
              <div className="p-5 bg-card rounded-xl border border-success/30">
                <h4 className="font-semibold text-success text-lg mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  What Professional Sales Looks Like
                </h4>
                <ul className="space-y-3 text-text-muted text-base">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong className="text-text-primary">Specialized roles:</strong> Setters SET. Closers CLOSE.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong className="text-text-primary">Pipeline ownership:</strong> Someone owns speed-to-lead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong className="text-text-primary">Show rate systems:</strong> Confirmation sequences, not hopes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong className="text-text-primary">Documented processes:</strong> Repeatable, trainable, scalable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong className="text-text-primary">Owner removed:</strong> Team runs without founder</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-text-secondary text-lg">
                <span className="text-accent font-semibold">The difference?</span> One is a gamble on a person. 
                The other is a <span className="text-success font-semibold">system</span> that produces consistent results.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Team Members */}
        <FadeInOnScroll delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border-subtle">
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-accent-muted flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <span className="text-2xl font-bold text-accent">{member.name.charAt(0)}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-1 text-center md:text-left">{member.name}</h3>
                <p className="text-accent font-medium text-base mb-4 text-center md:text-left">{member.role}</p>
                <p className="text-text-secondary text-base mb-4">{member.bio}</p>
                
                <div className="space-y-2">
                  {member.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-base text-text-muted">
                      <Check className="w-4 h-4 text-success" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Two-Person Advantage */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-16 p-6 md:p-8 bg-elevated rounded-xl border border-accent/30">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6 text-center">
              The Two-Person Advantage
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-accent text-center mb-8">
              {TWO_PERSON_ADVANTAGE.headline}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-base rounded-xl text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-text-muted" />
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-success" />
                  </div>
                </div>
                <p className="text-text-primary font-medium text-lg">When Chrix is CLOSING...</p>
                <p className="text-success font-bold text-xl">Sarah is BOOKING.</p>
              </div>

              <div className="p-6 bg-base rounded-xl text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-success" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-text-muted" />
                  <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="text-text-primary font-medium text-lg">When Sarah is BOOKING...</p>
                <p className="text-accent font-bold text-xl">Chrix is CLOSING.</p>
              </div>
            </div>

            <p className="text-text-primary font-medium text-lg text-center">
              This is how a sales department works. You&apos;ve never had this.
            </p>
            <p className="text-text-muted text-base text-center mt-2">
              This is why leads have been dying.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Solo vs Team Comparison */}
        <FadeInOnScroll delay={0.3}>
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-8 text-center">
              Solo Sales Manager vs. Team
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left py-3 px-4 text-text-muted font-medium">Factor</th>
                    <th className="text-left py-3 px-4 text-warning font-medium">Solo Sales Manager</th>
                    <th className="text-left py-3 px-4 text-success font-medium">Chrix + Sarah Team</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-secondary">Work style</td>
                    <td className="py-3 px-4 text-text-muted">One person doing everything</td>
                    <td className="py-3 px-4 text-success">Division of labor</td>
                  </tr>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-secondary">Activity</td>
                    <td className="py-3 px-4 text-text-muted">Closing OR prospecting</td>
                    <td className="py-3 px-4 text-success">Closing AND prospecting</td>
                  </tr>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-secondary">Busy periods</td>
                    <td className="py-3 px-4 text-text-muted">Bottleneck when busy</td>
                    <td className="py-3 px-4 text-success">Coverage when busy</td>
                  </tr>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-secondary">Ramp time</td>
                    <td className="py-3 px-4 text-text-muted">6+ months to ramp</td>
                    <td className="py-3 px-4 text-success">Producing in 30 days</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-text-secondary">Systems</td>
                    <td className="py-3 px-4 text-text-muted">Learning your systems</td>
                    <td className="py-3 px-4 text-success">Building your systems</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeInOnScroll>

        {/* No Junior Staff */}
        <FadeInOnScroll delay={0.4}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-xl border border-border-subtle text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary text-lg mb-2">No Junior Staff</h4>
              <p className="text-text-muted text-base">
                When you work with us, you work with <span className="text-accent font-medium">us</span>. 
                Not interns. Not offshore teams. Not junior associates.
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border-subtle text-center">
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary text-lg mb-2">Direct Access</h4>
              <p className="text-text-muted text-base">
                Every call, every follow-up, every close — it&apos;s us. 
                You talk to us directly. No layers. No gatekeepers.
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-success/20 text-center">
              <FileText className="w-8 h-8 text-success mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary text-lg mb-2">Aligned Incentives</h4>
              <p className="text-text-muted text-base">
                We don&apos;t get paid the second half unless we hit the quota.
                <span className="text-success font-medium block mt-1">We eat what we kill.</span>
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
