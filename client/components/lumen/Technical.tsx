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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
        <div className="mt-6 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">LUMEN – Localized Unified Medical ENgine for Triage</h2>
            <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
              Unified assistant for preliminary triage, diagnostics explanation, CT reconstruction previews,
              lab report interpretation, and mapping citizens to government schemes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-lg border p-3 bg-secondary/40">
              <div className="text-xs text-muted-foreground">Institution</div>
              <div className="font-medium">Vishwakarma Institute of Technology, Pune</div>
              <div className="text-sm">Department of Computer Engineering</div>
            </div>
            <div className="rounded-lg border p-3 bg-secondary/40">
              <div className="text-xs text-muted-foreground">Team</div>
              <div className="font-medium">Team LUMEN</div>
              <div className="text-sm">AI/ML • Frontend • Backend • Research</div>
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

        <div className="mt-8 grid lg:grid-cols-1 gap-6">
          <Card title="LUMEN ↔ OpenAI Feature Flow">
            <BeamShowcase />
          </Card>
        </div>

        {/* Problem + Key Features */}
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <Card title="Problem Statement">
            <ul className="list-disc pl-5 space-y-1">
              <li>India faces uneven access to timely, quality healthcare.</li>
              <li>
                Rural populations (~65%) have limited primary and specialist
                care.
              </li>
              <li>
                Doctor density is ~20.6 per 10,000 versus WHO's 44.5 benchmark.
              </li>
              <li>
                Preventable emergencies (e.g., ~58,000 snakebite deaths
                annually) persist due to delayed triage and guidance.
              </li>
              <li>CT overuse risks and lab follow-up delays affect outcomes.</li>
              <li>Low awareness of government health schemes limits uptake.</li>
            </ul>
            <p>
              LUMEN aims to bridge these gaps with localized, multimodal
              guidance and structured outputs that are easy to act on.
            </p>
          </Card>

          <Card title="Key Features">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Symptoms-based triage with severity bands (green/yellow/red) and
                next steps.
              </li>
              <li>
                AI specialist modules (dermatology, radiology, cardiology) for
                contextual guidance.
              </li>
              <li>
                PEARL-inspired CT reconstruction preview for lower dose, clearer
                images.
              </li>
              <li>
                Lab report analyzer that extracts values, flags risks, and
                suggests follow-up.
              </li>
              <li>
                Government schemes assistant that checks eligibility and steps.
              </li>
              <li>
                Emergency education tiles with audio guidance for first aid.
              </li>
              <li>Multi-language UX for accessibility across India.</li>
            </ul>
          </Card>
        </div>

        {/* Proposed Solution / Architecture */}
        <div className="mt-6 grid lg:grid-cols-1 gap-6">
          <Card title="Proposed Solution – Architecture (Interactive)">
            <div className="space-y-3">
              <p>
                High-level diagram exported from Eraser. Use the controls to
                zoom and pan.
              </p>
              <Tabs defaultValue="d1" className="w-full">
                <TabsList className="bg-secondary rounded-lg p-1">
                  <TabsTrigger
                    value="d1"
                    className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow"
                  >
                    Diagram 1
                  </TabsTrigger>
                  <TabsTrigger
                    value="d2"
                    className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow"
                  >
                    Diagram 2
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="d1" className="mt-3">
                  <ZoomableImage
                    src="https://cdn.builder.io/api/v1/image/assets%2F445519f4dc2147579ea6fb2243527f29%2F386c959d2e0945409ec9e98dd27c0526?format=webp&width=2000"
                    alt="LUMEN system architecture (Eraser export)"
                  />
                </TabsContent>
                <TabsContent value="d2" className="mt-3">
                  <ZoomableImage
                    src="https://cdn.builder.io/api/v1/image/assets%2F445519f4dc2147579ea6fb2243527f29%2F4f9ef3ba46934b92935a7f7fbac88080?format=webp&width=2000"
                    alt="LUMEN system architecture zoomed blocks (Eraser export)"
                  />
                </TabsContent>
              </Tabs>
              <p className="text-xs">
                Diagrams are conceptual and not final; implementation may
                evolve.
              </p>
            </div>
          </Card>
        </div>

        {/* Normal vs Differentiator Features */}
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <Card title="Normal Features">
            <div className="grid gap-3">
              <div className="flex items-start gap-3">
                <Stethoscope className="text-brand-blue" />
                <div>
                  <div className="font-medium">Symptoms-Based Diagnosis & Guidance</div>
                  <p>Collect symptoms, compute severity bands, and offer clear next steps.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cpu className="text-brand-blue" />
                <div>
                  <div className="font-medium">AI Specialist Modules</div>
                  <p>Dermatology, radiology, cardiology reasoning with tools and checklists.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Languages className="text-brand-blue" />
                <div>
                  <div className="font-medium">Multilingual Chatbot</div>
                  <p>Indic languages with voice-first UX; English fallback where needed.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Unique Differentiator Features">
            <div className="grid gap-3">
              <div className="flex items-start gap-3">
                <Activity className="text-brand-teal" />
                <div>
                  <div className="font-medium">PEARL CT Reconstruction</div>
                  <p>Low‑dose reconstruction previews with uncertainty cues and dose notes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FlaskConical className="text-brand-teal" />
                <div>
                  <div className="font-medium">Lab Report Analyzer & Follow‑Up Generator</div>
                  <p>OCR + reference ranges, flags, and structured follow‑ups users can act on.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Landmark className="text-brand-teal" />
                <div>
                  <div className="font-medium">Government Schemes & Benefits Assistant</div>
                  <p>Retrieval‑grounded matching to central/state schemes with eligibility steps.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BadgeAlert className="text-cta" />
                <div>
                  <div className="font-medium">Preliminary Triage & Emergency Education</div>
                  <p>Audio‑guided first aid tiles for high‑impact emergencies like snakebite.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* System Design / Workflows */}
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <Card title="System Design Workflow">
            <div className="space-y-3">
              <div className="font-medium flex items-center gap-2">
                <Workflow className="text-brand-teal" /> Module Interactions
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Client → API Gateway: validation, PII minimization, safety filters.</li>
                <li>Router → Tools: vector search, calculators, retrieval, OCR.</li>
                <li>LLM reasoning → Structured outputs (JSON) → Localization & TTS.</li>
                <li>Observability: audit logs, red‑team prompts, feedback loop.</li>
              </ul>
            </div>
          </Card>
          <Card title="Core Workflows / Pipelines">
            <div className="space-y-3">
              <div>
                <div className="font-medium flex items-center gap-2">
                  <Workflow className="text-brand-teal" /> Symptom Triage
                </div>
                <ol className="list-decimal pl-5 space-y-1 mt-1">
                  <li>Collect text/audio/image with locale + consent.</li>
                  <li>Gateway checks; anonymize identifiers.</li>
                  <li>Reasoning + tools; compute severity and red flags.</li>
                  <li>Return structured plan + localization + optional TTS.</li>
                </ol>
              </div>
              <div>
                <div className="font-medium flex items-center gap-2">
                  <Cpu className="text-brand-blue" /> CT Reconstruction (PEARL‑inspired)
                </div>
                <ol className="list-decimal pl-5 space-y-1 mt-1">
                  <li>Upload DICOM → pre‑processing.</li>
                  <li>Low‑dose reconstruction → enhanced slices/volume.</li>
                  <li>Viewer renders previews; export anonymized summaries.</li>
                  <li>Non‑diagnostic disclaimer and radiation notes surfaced.</li>
                </ol>
              </div>
              <div>
                <div className="font-medium flex items-center gap-2">
                  <Shield className="text-cta" /> Safety & Privacy
                </div>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>PII minimization, content filters, rate limiting.</li>
                  <li>Human‑in‑the‑loop escalation for high‑risk outputs.</li>
                  <li>Audit logs and red‑teaming for continuous evaluation.</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Novelty */}
        <div className="mt-10">
          <div className="grid lg:grid-cols-1 gap-6">
            <Card title="Novelty & Differentiators">
              <div className="space-y-2">
                <p className="text-sm">
                  <BookOpen className="inline mr-2" /> LUMEN differs from
                  generic AI models in key ways—see <a href="/README.md" className="text-brand-blue underline">README.md</a> for the full overview.
                </p>
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

        {/* Role of AI / OpenAI Tools */}
        <div className="mt-6">
          <div className="grid lg:grid-cols-1 gap-6">
            <Card title="Role of AI / OpenAI Tools">
              <div className="p-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm table-auto">
                    <thead>
                      <tr className="text-left text-xs text-muted-foreground">
                        <th className="px-3 py-2">Feature</th>
                        <th className="px-3 py-2">OpenAI Model / Tool</th>
                        <th className="px-3 py-2">Prototype Model (Hugging Face)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">Multilingual Chatbot (Core Conversations)</td>
                        <td className="px-3 py-2 align-top">GPT‑4 / GPT‑5</td>
                        <td className="px-3 py-2 align-top"><code className="rounded px-1 py-0.5 bg-muted text-xs">ai4bharat/indic-gpt</code></td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">Voice Input (Speech → Text)</td>
                        <td className="px-3 py-2 align-top">Whisper</td>
                        <td className="px-3 py-2 align-top"><code className="rounded px-1 py-0.5 bg-muted text-xs">openai/whisper-small</code></td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">Voice Output (Text → Speech)</td>
                        <td className="px-3 py-2 align-top">OpenAI TTS</td>
                        <td className="px-3 py-2 align-top"><code className="rounded px-1 py-0.5 bg-muted text-xs">coqui/XTTS-v2</code></td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">Lab Report Analyzer (OCR + Interpretation)</td>
                        <td className="px-3 py-2 align-top">GPT‑4 / GPT‑5</td>
                        <td className="px-3 py-2 align-top"><code className="rounded px-1 py-0.5 bg-muted text-xs">naver-clova-ix/donut-base-finetuned-docvqa</code></td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">Image‑based Dermatology / Skin Issues</td>
                        <td className="px-3 py-2 align-top">GPT‑4‑Vision</td>
                        <td className="px-3 py-2 align-top"><code className="rounded px-1 py-0.5 bg-muted text-xs">Salesforce/blip-image-captioning-base</code></td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">Emergency Triage & First Aid Education</td>
                        <td className="px-3 py-2 align-top">GPT‑4 / GPT‑5 + Embeddings</td>
                        <td className="px-3 py-2 align-top"><code className="rounded px-1 py-0.5 bg-muted text-xs">sentence-transformers/all-mpnet-base-v2</code></td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 align-top">Government Schemes & Benefits Assistant</td>
                        <td className="px-3 py-2 align-top">GPT‑4 / GPT‑5 + Embeddings</td>
                        <td className="px-3 py-2 align-top"><code className="rounded px-1 py-0.5 bg-muted text-xs">sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Prototype uses free HF models where possible; production may switch to hosted OpenAI for latency and reliability.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <div className="grid lg:grid-cols-1 gap-6">
            <Card title="Tech Stack">
              <div className="space-y-4">
                <div>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-sm">Frontend: React, Tailwind CSS, Framer Motion</li>
                    <li className="text-sm">Backend: Node.js, Express</li>
                    <li className="text-sm">AI/ML: OpenAI + Hugging Face + PEARL CT pipeline</li>
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

        {/* Feasibility & Implementation */}
        <div className="mt-6 grid lg:grid-cols-1 gap-6">
          <Card title="Feasibility & Implementation Plan">
            <ul className="list-disc pl-5 space-y-1">
              <li>Prototype phase: rely on free Hugging Face models and local inference where possible.</li>
              <li>Production phase: migrate to OpenAI APIs for reliability, monitoring, and scale.</li>
              <li>Low‑connectivity: offline‑first caching, small models on‑device, graceful degradation.</li>
              <li>Privacy & Safety: PII minimization, rate limits, human‑in‑the‑loop escalation.</li>
            </ul>
          </Card>
        </div>

        {/* Impact & Benefits */}
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <Card title="Impact & Benefits">
            <ul className="list-disc pl-5 space-y-1">
              <li>Potential to reduce ~58,000 annual snakebite deaths via faster first aid education.</li>
              <li>900M+ rural residents as potential beneficiaries through localized guidance.</li>
              <li>Reduced CT radiation exposure by encouraging low‑dose protocols and previews.</li>
              <li>Faster lab follow‑up and awareness of health schemes.</li>
            </ul>
          </Card>
          <Card title="Future Scope">
            <ul className="list-disc pl-5 space-y-1">
              <li>Expand Indic language coverage and TTS voices.</li>
              <li>New specialist modules (pediatrics, oncology) and decision aids.</li>
              <li>Integrations with hospitals/NGOs and referral networks.</li>
              <li>Offline‑first mobile app for rural deployments.</li>
            </ul>
          </Card>
        </div>

        {/* References */}
        <div className="mt-6 grid lg:grid-cols-1 gap-6">
          <Card title="References (IEEE style)">
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>World Health Organization, "Global strategy on human resources for health: Workforce 2030," 2016. [Online]. Available: https://www.who.int/hrh/resources/globstrathrh-2030/en/</li>
              <li>P. Suraweera et al., "Trends in snakebite mortality in India from 2000 to 2019," eLife, 2020. [Online]. Available: https://elifesciences.org/articles/54076</li>
              <li>World Bank, "Rural population (% of total population) - India," 2022. [Online]. Available: https://data.worldbank.org/indicator/SP.RUR.TOTL.ZS?locations=IN</li>
              <li>AI4Bharat, "IndicGPT and datasets," 2023. [Online]. Available: https://ai4bharat.org</li>
              <li>OpenAI, "Whisper: Robust Speech Recognition," 2022. [Online]. Available: https://openai.com/research/whisper</li>
            </ol>
          </Card>
        </div>

      </div>
    </section>
  );
}
