import React, { useRef } from "react";
import {
  BookOpen,
  Cpu,
  Shield,
  Workflow,
  Link2,
  Github,
  Linkedin,
  User as UserIcon,
  Mic,
  Image as ImageIcon,
  Upload,
  BadgeAlert,
  Stethoscope,
  Languages,
  Landmark,
  FlaskConical,
  Activity,
} from "lucide-react";

import ZoomableImage from "./ZoomableImage";
import { AnimatedBeam } from "./AnimatedBeam";
import DevProfileCard from "./DevProfileCard";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold flex items-center gap-2">{title}</h3>
      <div className="mt-3 text-sm text-muted-foreground space-y-3">
        {children}
      </div>
    </div>
  );
}

function BeamShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const userRef = useRef<HTMLDivElement | null>(null);
  const openaiRef = useRef<HTMLDivElement | null>(null);
  const featureRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const features = [
    { label: "Audio", Icon: Mic },
    { label: "Image", Icon: ImageIcon },
    { label: "Upload", Icon: Upload },
    { label: "Alerts", Icon: BadgeAlert },
  ];

  return (
    <div ref={containerRef} className="relative h-72 w-full">
      {/* Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={userRef}
        toRef={openaiRef}
        curvature={-60}
        pathColor="#60A5FA"
        pathWidth={2}
        gradientStartColor="#60A5FA"
        gradientStopColor="#22D3EE"
      />
      {featureRefs.map((ref, i) => (
        <AnimatedBeam
          key={i}
          containerRef={containerRef}
          fromRef={openaiRef}
          toRef={ref}
          curvature={-40 - i * 6}
          delay={i * 0.2}
          pathColor="#60A5FA"
          pathWidth={2}
          gradientStartColor="#60A5FA"
          gradientStopColor="#22D3EE"
        />
      ))}

      {/* Nodes */}
      <div className="absolute inset-0 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left: User */}
        <div className="flex flex-col items-center">
          <div
            ref={userRef}
            className="ml-2 size-16 rounded-full bg-secondary border border-border shadow grid place-items-center"
          >
            <img
              src="https://cdn.simpleicons.org/openai/1B8EE6"
              alt="OpenAI"
              className="h-6 w-6"
            />
          </div>
          <span className="mt-2 text-sm font-medium">User</span>
        </div>

        {/* Center: OpenAI */}
        <div className="flex flex-col items-center">
          <div
            ref={openaiRef}
            className="size-20 rounded-full bg-gradient-to-tr from-brand-blue/20 to-brand-teal/30 border border-border shadow grid place-items-center"
          >
            <img
              src="https://cdn.simpleicons.org/openai/1B8EE6"
              alt="OpenAI"
              className="h-6 w-6"
            />
          </div>
          <div className="mt-2 inline-flex items-center text-xs text-muted-foreground">
            <Link2 className="mr-1 h-3 w-3" /> LUMEN Runtime
          </div>
        </div>

        {/* Right: Features */}
        <div className="flex justify-end pr-2">
          <div className="grid gap-3">
            {features.map(({ label, Icon }, idx) => (
              <div key={label} className="flex items-center gap-2 justify-end">
                <div
                  ref={featureRefs[idx]}
                  className="size-12 rounded-full bg-white shadow border border-border grid place-items-center"
                >
                  <Icon className="text-brand-blue" size={18} />
                </div>
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TechStackGrid() {
  const techs = [
    { slug: "openai", label: "OpenAI", color: "1B8EE6" },
    { slug: "huggingface", label: "Hugging Face", color: "FF6A00" },
    { slug: "react", label: "React", color: "61DAFB" },
    { slug: "tailwindcss", label: "Tailwind CSS", color: "06B6D4" },
    { slug: "framer", label: "Framer Motion", color: "0055FF" },
    { slug: "nodedotjs", label: "Node.js", color: "339933" },
    { slug: "express", label: "Express", color: "000000" },
    { slug: "netlify", label: "Netlify", color: "00C7B4" },
    { slug: "github", label: "GitHub", color: "181717" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 w-full">
      {techs.map((t) => (
        <div
          key={t.slug}
          className="flex flex-col items-center p-3 bg-card/80 border border-border rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-white grid place-items-center p-2">
            <img
              src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
              alt={t.label}
              className="w-8 h-8"
            />
          </div>
          <span className="mt-2 text-xs font-medium text-center">
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function TeamCard({
  name,
  role,
  photo,
  github,
  linkedin,
}: {
  name: string;
  role: string;
  photo?: string;
  github?: string;
  linkedin?: string;
}) {
  return (
    <div className="relative w-full max-w-[380px] h-[384px] flex flex-col items-center rounded-[20px] bg-white shadow-lg border border-gray-100">
      {/* Triangular Background Pattern */}
      <div className="h-48 w-full rounded-t-[20px] overflow-hidden relative pr-7">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `
              linear-gradient(60deg, hsl(var(--brand-blue)) 25%, transparent 25.5%, transparent 75%, hsl(var(--brand-blue)) 75%, hsl(var(--brand-blue))),
              linear-gradient(120deg, hsl(var(--brand-teal)) 25%, transparent 25.5%, transparent 75%, hsl(var(--brand-teal)) 75%, hsl(var(--brand-teal))),
              linear-gradient(60deg, hsl(var(--brand-blue)) 25%, transparent 25.5%, transparent 75%, hsl(var(--brand-blue)) 75%, hsl(var(--brand-blue))),
              linear-gradient(120deg, hsl(var(--brand-teal)) 25%, transparent 25.5%, transparent 75%, hsl(var(--brand-teal)) 75%, hsl(var(--brand-teal)))
            `,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 0 0, 20px 20px, 20px 20px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      </div>

      {/* Avatar */}
      <div className="absolute w-[114px] h-[114px] bg-white rounded-full flex justify-center items-center top-[calc(50%-57px)] border-4 border-white shadow-lg">
        {photo ? (
          <img
            src={photo}
            alt={`${name} photo`}
            className="w-[100px] h-[100px] rounded-full object-cover object-top"
          />
        ) : (
          <div className="w-[100px] h-[100px] rounded-full bg-muted grid place-items-center text-muted-foreground text-xs">
            Photo
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center pt-[60px] px-4">
        <h3 className="font-medium text-lg text-black">{name}</h3>
        <p className="mt-2.5 font-normal text-[15px] text-[#78858F] text-center">
          {role}
        </p>

        <div className="mt-4 flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent transition-all duration-300"
            >
              <Github size={16} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Technical() {
  return (
    <section id="technical" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cover Page (non-card) */}
        <div id="cover" className="mt-6 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              LUMEN – Localized Unified Medical ENgine for Triage
            </h2>
            <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
              Unified assistant for preliminary triage, diagnostics explanation,
              CT reconstruction previews, lab report interpretation, and mapping
              citizens to government schemes.
            </p>
            <div className="mt-4 flex items-center justify-center">
              <a
                href="https://cdn.builder.io/o/assets%2Fe8cc9787598e48f9b1b2ad55c5185cb9%2F571a64ddd41b44f284f7d10cabf79f52?alt=media&token=4b269a9a-f6c3-4192-b784-d6c79921c82c&apiKey=e8cc9787598e48f9b1b2ad55c5185cb9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                View DOCX
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-lg border p-3 bg-secondary/40">
              <div className="text-xs text-muted-foreground">Institution</div>
              <div className="font-medium">
                Vishwakarma Institute of Technology, Pune
              </div>
              <div className="text-sm">Department of Computer Engineering</div>
            </div>
            <div className="rounded-lg border p-3 bg-secondary/40">
              <div className="text-xs text-muted-foreground">Team</div>
              <div className="font-medium">Team LUMEN</div>
              <div className="text-sm">
                AI/ML • Frontend • Backend • Research
              </div>
            </div>
          </div>
          <div className="relative flex justify-center w-full overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1600px] px-6 justify-items-center">
              <DevProfileCard
                name="Sanchit"
                role="Full Stack Developer"
                photo="https://cdn.builder.io/api/v1/image/assets%2F445519f4dc2147579ea6fb2243527f29%2F4587d99ad8074e819191cef9f9a8a2c7?format=webp&width=800"
                github="https://github.com/sanchit1606"
                linkedin="https://www.linkedin.com/in/sanchit1606/"
              />
              <DevProfileCard
                name="Priyal"
                role="AI/ML Engineer"
                github="https://github.com/priyal-username"
                linkedin="https://www.linkedin.com/in/priyal-profile/"
              />
              <DevProfileCard
                name="Paras"
                role="Backend Developer"
                photo="https://cdn.builder.io/api/v1/image/assets%2Fe15e28af565249a28e9186f98d17e5d6%2F724f568f937d459e956850b221bb91ac?format=webp&width=800"
                github="https://github.com/paraspatil11"
                linkedin="https://linkedin.com/in/ParasPatil"
              />
              <DevProfileCard
                name="Kshitij"
                role="Frontend Developer"
                photo="https://cdn.builder.io/api/v1/image/assets%2F445519f4dc2147579ea6fb2243527f29%2Fad5f0becc276472fbcdb59aafec6d377?format=webp&width=800"
                github="https://github.com/okshitij"
                linkedin="https://www.linkedin.com/in/kshitij-kalrao/"
              />
            </div>
          </div>
        </div>

        <div id="toc" className="mt-8 grid lg:grid-cols-1 gap-6">
          <Card title="Table of Contents">
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li><a href="#cover" className="text-brand-blue underline">Cover Page</a>
                <ol className="list-decimal pl-5 mt-1 space-y-1">
                  <li>Team Name & Member Details</li>
                  <li>Institution & Branch</li>
                </ol>
              </li>
              <li><a href="#problem" className="text-brand-blue underline">Problem Statement</a></li>
              <li><a href="#solution" className="text-brand-blue underline">Proposed Solution</a>
                <ol className="list-decimal pl-5 mt-1 space-y-1">
                  <li>Overview of Features</li>
                  <li>Interactive Architecture Diagram</li>
                </ol>
              </li>
              <li><a href="#features" className="text-brand-blue underline">Features</a></li>
              <li><a href="#openai" className="text-brand-blue underline">Role of OpenAI Tools</a></li>
              <li><a href="#techstack" className="text-brand-blue underline">Prototype Phase Tech Stack</a></li>
              <li><a href="#feasibility" className="text-brand-blue underline">Feasibility</a></li>
              <li><a href="#novelty" className="text-brand-blue underline">Novelty</a></li>
              <li><a href="#impact" className="text-brand-blue underline">Impact & Benefits</a></li>
              <li><a href="#future" className="text-brand-blue underline">Future Scope</a></li>
              <li><a href="#references" className="text-brand-blue underline">References (IEEE)</a></li>
            </ol>
          </Card>
        </div>

        {/* Problem Statement */}
        <div id="problem" className="mt-10 grid lg:grid-cols-1 gap-6">
          <Card title="Problem Statement">
            <div className="space-y-2">
              <div className="font-medium">2.1 Healthcare Gaps in India</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>India faces uneven access to timely, quality healthcare.</li>
                <li>Rural populations (~65%) have limited primary and specialist care.</li>
              </ul>
              <div className="font-medium mt-2">2.2 Statistics & Citations</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Doctor density is ~20.6 per 10,000 vs WHO 44.5 benchmark.</li>
                <li>~58,000 snakebite deaths annually due to delayed triage.</li>
              </ul>
              <div className="font-medium mt-2">2.3 Impact on Rural and Semi-Urban Populations</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>CT overuse risks and lab follow‑up delays affect outcomes.</li>
                <li>Low awareness of government health schemes limits uptake.</li>
              </ul>
              <p>
                LUMEN bridges these gaps with localized, multimodal guidance and structured outputs.
              </p>
            </div>
          </Card>
        </div>

        {/* Proposed Solution – Overview */}
        <div id="solution" className="mt-6 grid lg:grid-cols-1 gap-6">
          <Card title="Proposed Solution – Overview of Features">
            <ul className="list-disc pl-5 space-y-1">
              <li>Symptoms‑based triage with severity bands and next steps.</li>
              <li>AI specialist modules (dermatology, radiology, cardiology).</li>
              <li>Multilingual, voice‑first chatbot.</li>
              <li>PEARL CT reconstruction previews.</li>
              <li>Lab report analyzer with follow‑up generation.</li>
              <li>Government schemes & benefits assistant.</li>
              <li>Preliminary triage & emergency education.</li>
            </ul>
          </Card>
        </div>

        {/* Proposed Solution – Interactive Architecture Diagram */}
        <div id="architecture" className="mt-6 grid lg:grid-cols-1 gap-6">
          <Card title="Proposed Solution – Interactive Architecture Diagram">
            <div className="space-y-3">
              <p>High‑level architecture for LUMEN.</p>
              <ZoomableImage
                src="https://cdn.builder.io/api/v1/image/assets%2Fe8cc9787598e48f9b1b2ad55c5185cb9%2Fad244af8291d4e11bb71aab855e6e750?format=webp&width=800"
                alt="LUMEN System Architecture"
              />
            </div>
          </Card>
        </div>

        {/* Features */}
        <div id="features" className="mt-10 grid lg:grid-cols-1 gap-6">
          <Card title="Features">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3"><Stethoscope className="text-brand-blue" />
                <div><div className="font-medium">4.1 Symptoms‑Based Diagnosis & Guidance</div><p>Severity bands with clear next steps.</p></div>
              </div>
              <div className="flex items-start gap-3"><Cpu className="text-brand-blue" />
                <div><div className="font-medium">4.2 AI Specialist Modules</div><p>Dermatology, radiology, cardiology decision aids.</p></div>
              </div>
              <div className="flex items-start gap-3"><Languages className="text-brand-blue" />
                <div><div className="font-medium">4.3 Multilingual Voice‑First Chatbot</div><p>Indic languages with TTS.</p></div>
              </div>
              <div className="flex items-start gap-3"><Activity className="text-brand-teal" />
                <div><div className="font-medium">4.4 PEARL CT Reconstruction</div><p>Low‑dose previews with guidance.</p></div>
              </div>
              <div className="flex items-start gap-3"><FlaskConical className="text-brand-teal" />
                <div><div className="font-medium">4.5 Lab Report Analyzer & Follow‑Up Generator</div><p>OCR, reference ranges, actionable follow‑ups.</p></div>
              </div>
              <div className="flex items-start gap-3"><Landmark className="text-brand-teal" />
                <div><div className="font-medium">4.6 Government Schemes & Benefits Assistant</div><p>Eligibility checks via embeddings + vector DB.</p></div>
              </div>
              <div className="flex items-start gap-3"><BadgeAlert className="text-cta" />
                <div><div className="font-medium">4.7 Preliminary Triage & Emergency Education</div><p>Audio‑guided first aid tiles.</p></div>
              </div>
            </div>
          </Card>
        </div>



        {/* Role of OpenAI Tools */}
        <div id="openai" className="mt-6">
          <div className="grid lg:grid-cols-1 gap-6">
            <Card title="Role of OpenAI Tools">
              <div className="p-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm table-auto">
                    <thead>
                      <tr className="text-left text-xs text-muted-foreground">
                        <th className="px-3 py-2">Feature</th>
                        <th className="px-3 py-2">OpenAI Model / Tool</th>
                        <th className="px-3 py-2">
                          Prototype Model (Hugging Face)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">
                          Multilingual Chatbot (Core Conversations)
                        </td>
                        <td className="px-3 py-2 align-top">GPT‑4 / GPT‑5</td>
                        <td className="px-3 py-2 align-top">
                          <code className="rounded px-1 py-0.5 bg-muted text-xs">
                            ai4bharat/indic-gpt
                          </code>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">
                          Voice Input (Speech → Text)
                        </td>
                        <td className="px-3 py-2 align-top">Whisper</td>
                        <td className="px-3 py-2 align-top">
                          <code className="rounded px-1 py-0.5 bg-muted text-xs">
                            openai/whisper-small
                          </code>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">
                          Voice Output (Text → Speech)
                        </td>
                        <td className="px-3 py-2 align-top">OpenAI TTS</td>
                        <td className="px-3 py-2 align-top">
                          <code className="rounded px-1 py-0.5 bg-muted text-xs">
                            coqui/XTTS-v2
                          </code>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">
                          Lab Report Analyzer (OCR + Interpretation)
                        </td>
                        <td className="px-3 py-2 align-top">GPT‑4 / GPT‑5</td>
                        <td className="px-3 py-2 align-top">
                          <code className="rounded px-1 py-0.5 bg-muted text-xs">
                            naver-clova-ix/donut-base-finetuned-docvqa
                          </code>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">
                          Image‑based Dermatology / Skin Issues
                        </td>
                        <td className="px-3 py-2 align-top">GPT‑4‑Vision</td>
                        <td className="px-3 py-2 align-top">
                          <code className="rounded px-1 py-0.5 bg-muted text-xs">
                            Salesforce/blip-image-captioning-base
                          </code>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">
                          Emergency Triage & First Aid Education
                        </td>
                        <td className="px-3 py-2 align-top">
                          GPT‑4 / GPT‑5 + Embeddings
                        </td>
                        <td className="px-3 py-2 align-top">
                          <code className="rounded px-1 py-0.5 bg-muted text-xs">
                            sentence-transformers/all-mpnet-base-v2
                          </code>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">
                          Government Schemes & Benefits Assistant
                        </td>
                        <td className="px-3 py-2 align-top">
                          GPT‑4 / GPT‑5 + Embeddings
                        </td>
                        <td className="px-3 py-2 align-top">
                          <code className="rounded px-1 py-0.5 bg-muted text-xs">
                            sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2
                          </code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Prototype uses free HF models where possible; production may
                  switch to hosted OpenAI for latency and reliability.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Tech Stack */}
        <div id="techstack" className="mt-6">
          <div className="grid lg:grid-cols-1 gap-6">
            <Card title="Prototype Phase Tech Stack">
              <div className="space-y-4">
                <div>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-sm">
                      Frontend: React, Tailwind CSS, Framer Motion
                    </li>
                    <li className="text-sm">Backend: Node.js, Express</li>
                    <li className="text-sm">
                      AI/ML: OpenAI + Hugging Face + PEARL CT pipeline
                    </li>
                    <li className="text-sm">Deployment: Netlify</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <TechStackGrid />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Feasibility */}
        <div id="feasibility" className="mt-6 grid lg:grid-cols-1 gap-6">
          <Card title="Feasibility">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Prototype phase: rely on free Hugging Face models and local
                inference where possible.
              </li>
              <li>
                Production phase: migrate to OpenAI APIs for reliability,
                monitoring, and scale.
              </li>
              <li>
                Low‑connectivity: offline‑first caching, small models on‑device,
                graceful degradation.
              </li>
              <li>
                Privacy & Safety: PII minimization, rate limits,
                human‑in‑the‑loop escalation.
              </li>
            </ul>
          </Card>
        </div>

        {/* Novelty */}
        <div id="novelty" className="mt-10">
          <div className="grid lg:grid-cols-1 gap-6">
            <Card title="Novelty">
              <div className="space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Multimodal, localized triage with voice‑first UX.</li>
                  <li>Clinical‑aware PEARL imaging with uncertainty cues.</li>
                  <li>Structured lab parsing with reference‑range evaluation.</li>
                  <li>Grounded scheme retrieval via embeddings + vector DB.</li>
                  <li>Safety‑first pipelines and human‑in‑the‑loop review.</li>
                  <li>Extensible Node/Express + optional Python services.</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Impact & Benefits */}
        <div id="impact" className="mt-6 grid lg:grid-cols-2 gap-6">
          <Card title="Impact & Benefits">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Potential to reduce ~58,000 annual snakebite deaths via faster
                first aid education.
              </li>
              <li>
                900M+ rural residents as potential beneficiaries through
                localized guidance.
              </li>
              <li>
                Reduced CT radiation exposure by encouraging low‑dose protocols
                and previews.
              </li>
              <li>Faster lab follow‑up and awareness of health schemes.</li>
            </ul>
          </Card>
          <Card title="Future Scope"><div id="future" />
            <ul className="list-disc pl-5 space-y-1">
              <li>Expand Indic language coverage and TTS voices.</li>
              <li>
                New specialist modules (pediatrics, oncology) and decision aids.
              </li>
              <li>Integrations with hospitals/NGOs and referral networks.</li>
              <li>Offline‑first mobile app for rural deployments.</li>
            </ul>
          </Card>
        </div>

        {/* References */}
        <div id="references" className="mt-6 grid lg:grid-cols-1 gap-6">
          <Card title="References (IEEE Format)">
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>
                World Health Organization, "Global strategy on human resources
                for health: Workforce 2030," 2016. [Online]. Available:
                https://www.who.int/hrh/resources/globstrathrh-2030/en/
              </li>
              <li>
                P. Suraweera et al., "Trends in snakebite mortality in India
                from 2000 to 2019," eLife, 2020. [Online]. Available:
                https://elifesciences.org/articles/54076
              </li>
              <li>
                World Bank, "Rural population (% of total population) - India,"
                2022. [Online]. Available:
                https://data.worldbank.org/indicator/SP.RUR.TOTL.ZS?locations=IN
              </li>
              <li>
                AI4Bharat, "IndicGPT and datasets," 2023. [Online]. Available:
                https://ai4bharat.org
              </li>
              <li>
                OpenAI, "Whisper: Robust Speech Recognition," 2022. [Online].
                Available: https://openai.com/research/whisper
              </li>
            </ol>
          </Card>
        </div>
      </div>
    </section>
  );
}
