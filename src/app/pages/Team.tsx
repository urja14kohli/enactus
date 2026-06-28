import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import { departments } from '../data/content';
import { useState, useEffect } from "react";
import { client } from '../../lib/sanity';
import { urlFor } from "../../lib/imageURL";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  image: any;
}

interface TileLayout {
  x: number; y: number; w: number; h: number;
}

// ─── Role ordering ────────────────────────────────────────────────────────────
const ROLE_PRIORITY: [string, number][] = [
  ["business advisor", 0],
  ["vice", 2],
  ["president", 1],
  ["treasurer", 3],
  ["hr", 4],
  ["media director", 5],
  ["director of corporate relations", 5],
  ["event manager", 5],
  ["project sahaay head", 6],
  ["project dhaan head", 6],
  ["project khajoor head", 7],

  
];

function getRolePriority(role: string): number {
  const key = role.toLowerCase().trim();
  for (const [pat, pri] of ROLE_PRIORITY) {
    if (key.includes(pat)) return pri;
  }
  if (key.includes("project")) return 6;
  if (key.includes("head")) return 5;
  return 7;
}

// ─── Fixed layout: 3 rows, all members visible, no scroll ────────────────────
//
// Row 0 (h=38%): up to 4 senior members — wider tiles
// Row 1 (h=33%): next batch — medium tiles
// Row 2 (h=29%): remaining — smaller tiles
//
// widths are distributed evenly within each row

function buildBaseLayouts(members: TeamMember[]): TileLayout[] {
  const n = members.length;
  const layouts: TileLayout[] = new Array(n);

  const rowHeights = [38, 33, 29]; // unchanged
  const rowCounts = distributeRowsBottomLoaded(n, 3);

  let memberIndex = 0;
  let yOffset = 0;

  for (let r = 0; r < 3; r++) {
    const count = rowCounts[r];
    const h = rowHeights[r];
    const w = 100 / count;

    for (let c = 0; c < count; c++) {
      if (memberIndex >= n) break;
      layouts[memberIndex] = { x: c * w, y: yOffset, w, h };
      memberIndex++;
    }
    yOffset += h;
  }

  return layouts;
}

function distributeRowsBottomLoaded(total: number, rows: number): number[] {
  return [4, 4, 5]; // Row1: 2 Advisors+President+Treasurer | Row2: VP+HR+Media+CorpRel | Row3: Event+3 Project Heads
}

// ─── Hover: hovered tile grows, row peers compress, canvas stays fixed ────────

function buildHoverLayouts(hoveredIndex: number, base: TileLayout[]): TileLayout[] {
  const layouts = base.map(l => ({ ...l }));
  if (!layouts[hoveredIndex]) return layouts;

  const GROW_W = 5;
  const GROW_H = 4;

  const yValues = [...new Set(base.map(l => Math.round(l.y)))].sort((a, b) => a - b);
  const rows = yValues.map(y =>
    base.map((l, i) => ({ l, i }))
      .filter(({ l }) => Math.round(l.y) === y)
      .map(({ i }) => i)
  );

  const myRow = rows.find(r => r.includes(hoveredIndex)) ?? [];
  const rowPeers = myRow.filter(i => i !== hoveredIndex);

  layouts[hoveredIndex].w += GROW_W;
  const wShrink = GROW_W / (rowPeers.length || 1);
  rowPeers.forEach(i => { layouts[i].w -= wShrink; });

  // Re-flow x in hovered row
  let cursor = 0;
  myRow.forEach(i => { layouts[i].x = cursor; cursor += layouts[i].w; });

  // Shrink height of column-overlapping tiles in other rows
  const bx = base[hoveredIndex].x;
  const bw = base[hoveredIndex].w;
  rows.forEach(row => {
    if (row.includes(hoveredIndex)) return;
    const overlap = row.filter(i => base[i].x < bx + bw && base[i].x + base[i].w > bx);
    if (!overlap.length) return;
    const hShrink = GROW_H / overlap.length;
    overlap.forEach(i => { layouts[i].h -= hShrink; });
  });

  // Re-flow y
  rows.forEach((row, ri) => {
    const rowH = Math.max(...row.map(i => layouts[i].h));
    const rowY = rows.slice(0, ri).reduce((acc, prevRow) => {
      return acc + Math.max(...prevRow.map(i => layouts[i].h));
    }, 0);
    row.forEach(i => { layouts[i].y = rowY; layouts[i].h = rowH; });
  });

  return layouts;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [lockedMember, setLockedMember] = useState<TeamMember | null>(null);
  const [previewMember, setPreviewMember] = useState<TeamMember | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [baseLayouts, setBaseLayouts] = useState<TileLayout[]>([]);

  useEffect(() => {
    async function loadMembers() {
      try {
        const data: TeamMember[] = await client.fetch(`
          *[_type == "teamMember"]{ _id, name, role, bio, linkedin, image }
        `);
        const sorted = [...data].sort((a, b) => {
          const diff = getRolePriority(a.role) - getRolePriority(b.role);
          return diff !== 0 ? diff : a.name.localeCompare(b.name);
        });
        setTeamMembers(sorted);
        setBaseLayouts(buildBaseLayouts(sorted));
      } catch (err) {
        console.error("Sanity fetch failed:", err);
      }
    }
    loadMembers();
  }, []);

  const layouts = hovered !== null
    ? buildHoverLayouts(hovered, baseLayouts)
    : baseLayouts;

  const displayMember = previewMember ?? lockedMember;

  if (teamMembers.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground-secondary">
        Loading team...
      </div>
    );
  }

  return (
    <div>
      <PageHero
        eyebrow="Our Team"
        lead="The People Behind"
        accent="The Impact"
        subtitle="Meet the passionate student leaders driving change at Enactus IGDTUW."
      />

      <section className="py-20 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex gap-12 items-stretch">

            {/* ── Canvas: fixed aspect ratio, all tiles inside ──────── */}
            <div
              className="flex-1 min-w-0 relative"
              // paddingBottom = 100% means square. We want ~65% for a wide rectangle.
              style={{ paddingBottom: "55%", flexShrink: 0 }}
              onClick={() => {
                setLockedMember(null);
                setPreviewMember(null);
              }}
              onMouseLeave={() => {
                setHovered(null);
                setPreviewMember(null);
              }}
            >
              {teamMembers.map((member, index) => {
                const l = layouts[index] ?? baseLayouts[index];
                if (!l) return null;
                const isHovered = hovered === index;
                const isLocked = lockedMember?._id === member._id;
                const highlighted = isHovered || isLocked;

                return (
                  <motion.div
                    key={member._id}
                    animate={{
                      left:   `${l.x}%`,
                      top:    `${l.y}%`,
                      width:  `${l.w}%`,
                      height: `${l.h}%`,
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    style={{ position: "absolute" }}
                    className="overflow-hidden cursor-pointer"
                    onMouseEnter={() => {
                      setHovered(index);
                      setPreviewMember(member);
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLockedMember(prev =>
                        prev?._id === member._id ? null : member
                      );
                      setPreviewMember(null);
                    }}
                  >
                    {/* Photo */}
                    <img
                      src={member.image
                        ? urlFor(member.image).width(600).url()
                        : '/team/placeholder.jpg'}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top grayscale transition-[filter] duration-500"
                    />

                    {/* Colour overlay */}
                    <div className={`
                      absolute inset-0 transition-all duration-400
                      ${highlighted ? "bg-enactus-yellow/30" : "bg-black/30"}
                    `} />

                    {/* Selected ring */}
                    {isLocked && (
                      <div className="absolute inset-0 ring-[0px] ring-inset ring-enactus-yellow pointer-events-none z-20" />
                    )}

                    {/* Name label */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 z-10">
                      <p className={`
                        font-black leading-tight transition-all duration-300
                        ${highlighted ? "text-navy-accent text-sm" : "text-white text-[10px]"}
                      `}>
                        {member.name}
                      </p>
                      <p className={`
                        font-semibold transition-all duration-300 text-navy-accent text-[10px]
                        ${highlighted ? "opacity-100" : "opacity-0"}
                      `}>
                        {member.role}
                      </p>
                    </div>

                    {/* Gap line between tiles */}
                    <div className="absolute inset-0 ring-1 ring-background/50 pointer-events-none z-10" />
                  </motion.div>
                );
              })}
            </div>

            {/* ── Sidebar ───────────────────────────────────────────── */}
            <div
              className="w-72 flex-shrink-0 flex flex-col justify-center"
              // stop sidebar clicks from bubbling to canvas reset
              onClick={(e) => e.stopPropagation()}
            >
              {displayMember ? (
                <motion.div
                  key={displayMember._id + (previewMember ? "p" : "l")}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col gap-4"
                >
                  <div className="border border-enactus-yellow inline-block px-3 py-1.5 text-xs tracking-widest self-start">
                    {previewMember ? "CLICK TO SELECT" : "PEOPLE BEHIND IMPACT"}
                  </div>

                  <div className="text-enactus-yellow uppercase tracking-widest text-xs">
                    {displayMember.role}
                  </div>

                  <h2 className="text-4xl font-black leading-tight">
                    {displayMember.name}
                  </h2>

                  <p className="text-base text-foreground-secondary leading-relaxed">
                    {displayMember.bio}
                  </p>

                  {lockedMember && !previewMember && (
                    <a
                      href={lockedMember.linkedin ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-enactus-yellow text-navy-accent px-5 py-3 font-bold text-sm hover:scale-105 transition-transform self-start"
                    >
                      View LinkedIn →
                    </a>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <div className="border border-enactus-yellow inline-block px-3 py-1.5 text-xs tracking-widest self-start">
                    PEOPLE BEHIND IMPACT
                  </div>

                  <h2 className="text-4xl font-black leading-tight">
                    Meet the team.
                  </h2>

                  <p className="text-base text-foreground-secondary leading-relaxed">
                    Click any member to learn more about the passionate students driving change at Enactus IGDTUW.
                  </p>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 md:py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-3">How We're Organised</div>
            <DisplayHeading lead="Our" accent="Departments" size="md" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {departments.map((d) => (
              <div
                key={d}
                className="bg-white border border-border-color rounded-xl px-5 py-6 text-center font-heading font-bold text-navy-accent hover:border-enactus-yellow transition-colors"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 md:py-24 bg-navy-deep text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <DisplayHeading lead="Join Our" accent="Team" size="lg" align="center" light />
          <p className="text-white/75 max-w-2xl mx-auto mt-5 mb-9">
            We're always looking for passionate students who want to make a difference. Be part of our journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-enactus-yellow text-navy-deep font-extrabold uppercase tracking-wide text-sm rounded-md hover:bg-white transition-colors"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
