import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  ArrowRight,
  Linkedin,
  Rocket,
  CalendarDays,
  Handshake,
  Megaphone,
  Users,
  Microscope,
  Wallet,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import { ReactNode, useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import { departments, team, photoPool } from '../data/content';
import { client } from '../../lib/sanity';
import { urlFor } from '../../lib/imageURL';

const firstName = (name: string) => name.trim().split(/\s+/)[0].toLowerCase();

const normalizeUrl = (url: string) =>
  url.startsWith('http') ? url : `https://${url}`;

const deptIcons: Record<string, ReactNode> = {
  Projects: <Rocket className="h-5 w-5" />,
  'Event Management': <CalendarDays className="h-5 w-5" />,
  Sponsorship: <Handshake className="h-5 w-5" />,
  'Media & Marketing': <Megaphone className="h-5 w-5" />,
  'Human Resources': <Users className="h-5 w-5" />,
  Research: <Microscope className="h-5 w-5" />,
  Finance: <Wallet className="h-5 w-5" />,
  Involve: <HeartHandshake className="h-5 w-5" />,
};

const deptPhotos: Record<string, string> = {
  Projects: photoPool[5],
  'Event Management': photoPool[12],
  Sponsorship: photoPool[8],
  'Media & Marketing': photoPool[20],
  'Human Resources': photoPool[1],
  Research: photoPool[15],
  Finance: photoPool[18],
  Involve: photoPool[3],
};

const teamRows = [
  { members: team.slice(0, 4), grid: 'grid grid-cols-2 gap-5 lg:grid-cols-4' },
  { members: team.slice(4, 8), grid: 'grid grid-cols-2 gap-5 lg:grid-cols-4' },
  { members: team.slice(8, 13), grid: 'grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5' },
];

function TeamMemberCard({
  member,
  index,
  images,
}: {
  member: (typeof team)[number];
  index: number;
  images: Record<string, string>;
}) {
  const img = images[firstName(member.name)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.06, duration: 0.5 }}
      className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5"
    >
      {img ? (
        <img
          src={img}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-navy-deep/80">
          <span className="font-display text-4xl text-white/20">{member.name.charAt(0)}</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent transition-all duration-500 group-hover:from-navy-deep" />

      <a
        href={normalizeUrl(member.linkedin)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on LinkedIn`}
        className="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/30 bg-white/25 text-enactus-yellow opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/40 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <Linkedin className="h-4 w-4" />
      </a>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-heading text-base font-extrabold leading-tight text-white">{member.name}</p>
        <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-enactus-yellow">{member.role}</p>
        <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-white/85 opacity-0 transition-all duration-400 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const [images, setImages] = useState<Record<string, string>>({});

  useEffect(() => {
    client
      .fetch<{ name: string; image: unknown }[]>(`*[_type == "teamMember"]{ name, image }`)
      .then((data) => {
        const map: Record<string, string> = {};
        data.forEach((m) => {
          if (m.image && m.name) {
            map[firstName(m.name)] = urlFor(m.image).width(700).height(900).fit('crop').url();
          }
        });
        setImages(map);
      })
      .catch((err) => console.error('Sanity fetch failed:', err));
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        lead="The people behind"
        accent="the impact"
        subtitle="The student leaders who show up, put in the hours, and make all of this happen."
        bannerImage="/images/team/team-lineup.jpg"
        compact
        blendToCream
      />

      <section className="-mt-24 pb-16 md:-mt-32 md:pb-20">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          {teamRows.map((row, rowIndex) => (
            <div key={rowIndex} className={row.grid}>
              {row.members.map((m, i) => (
                <TeamMemberCard key={m.name} member={m} index={rowIndex * 5 + i} images={images} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">How we are organised</div>
            <DisplayHeading lead="Our" accent="teams" size="md" />
            <p className="mt-4 leading-relaxed text-foreground-secondary">
              Eight teams, one mission. Each one keeps a different part of Enactus IGDTUW moving.
            </p>
          </div>
        </div>

        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track pause-on-hover">
            {[...departments, ...departments].map((d, i) => (
              <div
                key={`${d}-${i}`}
                className="glass mx-2 w-64 shrink-0 overflow-hidden rounded-2xl"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={deptPhotos[d] ?? photoPool[0]}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 to-transparent" />
                </div>
                <div className="flex items-center gap-3 px-4 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-enactus-yellow/20 text-gold-accent">
                    {deptIcons[d] ?? <Sparkles className="h-5 w-5" />}
                  </span>
                  <span className="font-heading text-base font-extrabold leading-tight text-navy-accent">{d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-4 pb-24">
        <div className="surface-dark mx-auto max-w-4xl overflow-hidden rounded-[2rem] px-6 py-16 text-center text-white md:py-20">
          <DisplayHeading lead="Want in?" accent="Join the team" size="lg" align="center" light />
          <p className="mx-auto mb-9 mt-5 max-w-2xl text-white/75">
            We are always looking for students who want to make a difference. There is a spot here for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-enactus-yellow px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-navy-deep transition-colors hover:bg-white"
          >
            Apply now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
