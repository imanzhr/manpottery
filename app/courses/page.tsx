import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { courses } from "@/lib/data";
import Image from "next/image";
import { Clock, User, BarChart3 } from "lucide-react";
import type { Metadata } from "next";
import { BASE_PATH } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Learn the art of pottery at Manpottery. Wheel throwing, hand-building, glazing — all levels welcome.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Courses"
        subtitle="Discover the meditative joy of working with clay. All levels welcome."
        image={`${BASE_PATH}/images/Kargah/IMG_4725.webp`}
        imageAlt="Manpottery workshop in progress"
      />

      <Section>
        <Container>
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <h2 className="font-display text-3xl sm:text-4xl text-stone mb-4">
                Find your rhythm
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed">
                Whether you&apos;re picking up clay for the first time or
                refining your technique, our courses are designed to help you
                connect with the material and with your own creative voice.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <AnimatedSection key={course.id} delay={i * 0.1}>
                <div className="bg-ivory rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 h-full flex flex-col">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cream/90 backdrop-blur-sm text-stone text-xs font-medium px-3 py-1.5 rounded-full">
                        {course.skillLevel}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-display text-2xl text-stone mb-3">
                      {course.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed mb-6 flex-1">
                      {course.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                      <div className="flex items-center gap-2 text-warm-gray">
                        <Clock size={14} className="text-terracotta shrink-0" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-warm-gray">
                        <User size={14} className="text-terracotta shrink-0" />
                        {course.instructor}
                      </div>
                      <div className="flex items-center gap-2 text-warm-gray">
                        <BarChart3
                          size={14}
                          className="text-terracotta shrink-0"
                        />
                        {course.skillLevel}
                      </div>
                      <div className="text-warm-gray">{course.schedule}</div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-sand">
                      <span className="font-display text-xl text-stone">
                        {course.price}
                      </span>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-stone text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone/90 transition-colors"
                      >
                        Contact to Register
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
