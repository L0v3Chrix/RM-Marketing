"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Quote, Target, Search, Lightbulb, TrendingUp } from "lucide-react";

export function WhyStory() {
  return (
    <section id="why" className="bg-base py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">Before We Dive In</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Why I&apos;m Writing This
            </h2>
          </div>
        </FadeInOnScroll>

        {/* Opening */}
        <FadeInOnScroll delay={0.1}>
          <p className="text-xl text-text-secondary leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            This isn&apos;t a pitch deck. It&apos;s a conversation I need to have honestly.
          </p>
        </FadeInOnScroll>

        {/* What I Came For */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">What I Came For</h3>
            </div>
            <div className="pl-13 space-y-4 text-text-secondary leading-relaxed">
              <p>
                When I took this call, I expected the podcast funnel — high-value appointments 
                in the $5K-$30K range. Pre-qualified guests ready for a conversation about their 
                marketing. That&apos;s my wheelhouse.
              </p>
              <p>
                I made myself available daily. Asked to shadow Nick and Jonah to learn the flow. 
                Got crickets. Almost two weeks in, I hadn&apos;t received a single appointment.
              </p>
              <p className="text-text-muted italic">
                I wasn&apos;t told this was a prospecting position or a cold calling position. Both 
                of those things are in my skill set, but had I known, I would&apos;ve evaluated 
                the offer very differently.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* What I Actually Found */}
        <FadeInOnScroll delay={0.3}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Search className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">What I Actually Found</h3>
            </div>
            <div className="pl-13 space-y-4 text-text-secondary leading-relaxed">
              <p>
                So I started digging under the hood. And what I found was interesting: the podcast 
                funnel isn&apos;t the play right now. <span className="text-text-primary font-medium">GHL Mastery is.</span>
              </p>
              <p>You have something most businesses would kill for:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>A validated offer stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>10,000 contacts in your database</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>A real reputation in the GHL community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Tons of content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>A vetted, dependable team that actually understands the software (maybe 50:1 rarity)</span>
                </li>
              </ul>
              <p>
                You&apos;re good at coaching — even if you don&apos;t love it. You have clout. You have a 
                full ascension ladder sitting right there: video content → group coaching → 1:1 
                coaching → trained VAs → DFY builds.
              </p>
              <p className="text-accent font-medium">You haven&apos;t even touched your audience yet.</p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* My Recommendation */}
        <FadeInOnScroll delay={0.4}>
          <div className="mb-12 p-6 bg-elevated rounded-xl border border-border-subtle">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">My Recommendation</h3>
            </div>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Don&apos;t chase the podcast thing right now — not if it requires bandwidth from you. 
                Let Nick figure that out in parallel if he can.
              </p>
              <p>
                Instead, focus on what&apos;s already validated. The natural ascension is sitting right there:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Pack your office hours — get that Zoom room to 100+ people</li>
                <li>People ask questions, you solve problems live</li>
                <li>Natural upsell: &quot;Want it done faster? Our trained VAs can build it for you.&quot;</li>
                <li>Rinse and repeat</li>
              </ol>
              <p className="text-accent font-medium mt-4">
                If I were the two of you, I would be dumping every dime and hour I had on this 
                thing and bleeding it dry.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* What I Actually Do */}
        <FadeInOnScroll delay={0.5}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">What I Actually Do</h3>
            </div>
            <div className="pl-13 space-y-4 text-text-secondary leading-relaxed">
              <p>
                This whole experience opened my eyes to my real lane.
              </p>
              <p className="text-text-primary font-medium text-lg">
                The gap I solve: <span className="text-accent">$30K → $100K monthly revenue.</span>
              </p>
              <p>
                Getting from $0 to $30K is incredibly hard — few people do it. But $30K to $100K 
                is the same level of hard, just different problems for different reasons.
              </p>
              <p>
                I pay attention to numbers like my life depends on it. Not the offer. Not the 
                customers. Not the day-to-day. <span className="text-text-primary font-medium">The numbers.</span> Metrics 
                and KPIs — they never lie, they just need to be worked.
              </p>
              <p className="text-text-muted italic">
                It will look like magic when someone comes in and pays that kind of attention.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Pull Quote */}
        <FadeInOnScroll delay={0.6}>
          <div className="relative my-16">
            <Quote className="absolute -top-4 -left-4 w-12 h-12 text-accent/20" />
            <blockquote className="text-2xl md:text-3xl font-medium text-text-primary text-center px-8 leading-relaxed">
              &quot;The numbers never lie, they just need to be worked.&quot;
            </blockquote>
          </div>
        </FadeInOnScroll>

        {/* The Ask */}
        <FadeInOnScroll delay={0.7}>
          <div className="text-center p-8 bg-card rounded-xl border border-accent/20">
            <h3 className="text-xl font-semibold text-text-primary mb-4">The Ask</h3>
            <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Give me the shot. Give me the testimonial. Be my first case study.
            </p>
            <p className="text-accent font-semibold mt-4">
              Next time, I&apos;m charging more.
            </p>
            <p className="text-text-muted text-sm mt-4">
              If I did 3-5 of these a year — maybe got a small team to help — I would be very happy. 
              This is my language, and I love helping the right business owners.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
