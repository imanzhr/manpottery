"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses } from "@/lib/data";
import { ArrowRight, Clock, User } from "lucide-react";

export function CoursesPreview() {
  const featured = courses.slice(0, 2);

  return (
    <Section className="bg-ivory">
      <Container>
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Learn"
              title="Shape something new"
              emphasizeEyebrow
              description="Join our pottery courses and discover the meditative joy of working with clay. All levels welcome."
            />
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors shrink-0"
            >
              All courses
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((course, i) => (
            <AnimatedSection key={course.id} delay={i * 0.12}>
              <div className="group bg-cream rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow duration-500">
                <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto shrink-0">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <span className="text-xs font-medium tracking-wider uppercase text-terracotta mb-2">
                    {course.skillLevel}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-stone mb-3">
                    {course.title}
                  </h3>
                  <p className="text-sm text-warm-gray mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-warm-gray">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {course.instructor}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
