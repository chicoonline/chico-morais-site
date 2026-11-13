# Chico Morais — Portfolio Editorial Specification

Version 4 · 29 September 2026 · Content only. No layout code, no design system. All questions are resolved; this version is ready to hand to the website builder.
Source of truth for facts: the project case-study briefs in the Claude project (`projects/*.md`) and Chico's own notes. Nothing here is invented; anything uncertain is bracketed.

---

## 0. Read this first (instructions for the website builder)

1. This document is the only source for text on the site. Do not add, paraphrase or invent copy. If a slot is empty, leave it empty.
2. Every page is an **ordered sequence of blocks**. Keep the order. **Text and images are interleaved**: each text block sits beside, above or below the visual listed with it. Never collect images into a gallery at the end of a page unless a block is marked GALLERY.
3. Presentation model: treat each block like a slide — one idea, one strong visual, short text. Clean, dynamic, generous white space. Motion is welcome (fades, parallax, animated sequences) as long as it never delays reading.
4. Every text block is given in **EN** and **PT**. Both versions must exist for every page.
5. Brackets are **never published**:
   - `[CHECK: …]` a fact Chico must confirm before publishing.
   - `[NEEDED: …]` an image or piece of information that is missing.
   - `[CHOOSE: …]` a decision for Chico.
   - *Builder note:* an instruction, not copy.
6. Image references: `images/<project>/<file>.jpg` are the files already prepared in the previous build. Other paths are relative to Chico's folder `website contet claude` (for example `Pele Bruta/2014.1/G2/142.jpg`); a bare file name such as `DSC_0085.JPG` sits in the project folder named in that section. Where several files are listed, use the first ones and add the rest only if the layout has room.
7. **Never publish** notes about face obscuring, "evidence", "self-reported", terminology corrections, AI use, or who did *not* do something. Credits are stated positively, once, at the end of each page.
8. All supplied photographs with people — Tapete, Maitê, and any future uploads — arrive with faces already covered (1 Oct 2026 update). Use every image as supplied — no face check or covering needed for any picture, present or future. Do not mention it anywhere on the page.
9. Object-only photographs (Tapete slices and assembly sequence, Maitê, Tico, Folhas characters) should be cut out onto transparent backgrounds so they sit directly on the page, with no visible cardboard or white backdrop. Use non-generative masking (manual or "select subject" masking, or a local script), not generative fill.

## 1. Voice and style

For any person or AI who edits this copy later.

- **Who is speaking:** a designer and artist looking back on his work with confidence. First person, warm, precise, occasionally lyrical in openings. Not a student reporting on an assignment, and not an auditor defending claims.
- **Process before outcome.** Tell each project in the order it happened: context → research → idea → making → result. Never jump to the result and explain backwards.
- **University context stays small.** Course names, codes and professors go in the "Context" line, not in the story. The story should read like real-world work.
- **Collaboration:** use "we" for shared work and "I" where Chico worked alone; the reader infers the rest. Credit partners warmly, once, in the Credits line. Never explain what a partner did not do.
- **No self-diminishing phrases**: no "even though it is one of my favourites", "the most important day of my life", "a gap worth naming", "I would rather show it than fake it", "not my hands".
- **Portuguese terms:** keep original titles and a few meaningful phrases, always translated on first use in EN. No untranslated Portuguese in the EN version.
- **Sentences:** complete and varied. No fragments for effect ("That is the whole thing."). Avoid opening sentences with "So", "Then" or "And". In PT, never "Aí", "a gente", "tipo".
- **Spelling:** British English (colour, paediatric, favourite).
- **Names:** always "Cambridge School of Art, UK" (PT: "Cambridge School of Art, Reino Unido"). Never "Anglia Ruskin University" and never "Cambridge School of Arts".
- **Length:** headings ≤ 6 words, captions ≤ 20 words, text blocks ≤ 90 words. If an idea needs more, split it into two blocks, each with its own visual.

## 2. Global elements

- **Site name:** Chico Morais
- **Navigation** — EN: Work · Photography · About · Contact · PT: Trabalhos · Fotografia · Sobre · Contato
- **Footer line** — EN: Berlin · working internationally · Portuguese · English · Spanish · German · PT: Berlim · atuando internacionalmente · Português · Inglês · Espanhol · Alemão
- **Copyright** — EN: © 2026 Francisco Morais Tavares (Chico Morais). All rights reserved. · PT: © 2026 Francisco Morais Tavares (Chico Morais). Todos os direitos reservados.
  *(Replaces "All images and text are his own", which reads third-person and defensive.)*
- **Default meta description** — EN: Chico Morais — designer, photographer and creative technologist based in Berlin. Human-centred design, photography, exhibitions and physical computing. · PT: Chico Morais — designer, fotógrafo e tecnólogo criativo em Berlim. Design centrado nas pessoas, fotografia, exposições e computação física.
- *Builder note:* the old site's browser title had the typo "Photograhpy". Use "Photography".

---

## 3. Home

**H1 · Hero**
- Eyebrow — EN: Berlin · working internationally · PT: Berlim · atuando internacionalmente
- Name: Chico Morais
- Line — EN: Designer, photographer and creative technologist. · PT: Designer, fotógrafo e tecnólogo criativo.

**H2 · Introduction** *(replaces "Eighteen years of work, from a hospital waiting room…")*
- EN: I design objects, images and experiences that begin with people: what they feel, what they need, what moves them. Since 2008 this has taken me from public hospitals and clinics in Rio de Janeiro to exhibition design, app design, printed textiles and interactive prototypes, and, through photography, across five continents. Today, from Berlin, I work where design, image and technology meet.
- PT: Crio objetos, imagens e experiências que começam pelas pessoas: pelo que sentem, pelo que precisam, pelo que as move. Desde 2008, esse caminho me levou de hospitais e postos de saúde públicos do Rio de Janeiro ao design de exposições e de aplicativos, a estampas e a protótipos interativos e, pela fotografia, a cinco continentes. Hoje, a partir de Berlim, trabalho onde design, imagem e tecnologia se encontram.
- One-line alternative, if the hero needs something shorter — EN: Design, photography and technology, starting from people. · PT: Design, fotografia e tecnologia, a partir das pessoas.

**H3 · Practice** (four columns)

| # | EN title | EN text | PT title | PT text |
|---|---|---|---|---|
| 01 | Human-centred design | Field research and participant observation, co-design with the people who will use the result, interaction design and accessibility, especially in health and well-being. | Design centrado nas pessoas | Pesquisa de campo e observação participante, co-design com quem vai usar o resultado, design de interação e acessibilidade, especialmente em saúde e bem-estar. |
| 02 | Image and visual systems | Photography, art direction, pattern design, identity, editorial and exhibition layout. | Imagem e sistemas visuais | Fotografia, direção de arte, design de estampas, identidade visual, projeto editorial e expográfico. |
| 03 | Creative technology | Physical computing, creative coding, AI-assisted workflows and self-hosted systems. | Tecnologia criativa | Computação física, programação criativa, fluxos de trabalho com IA e sistemas auto-hospedados. |
| 04 | Exhibitions and culture | Concept, curation, exhibition design and production, in partnership with public and cultural institutions. | Exposições e cultura | Conceito, curadoria, expografia e produção, em parceria com instituições públicas e culturais. |

*Builder note (not published): the institutional work is documented — public hospitals and health centres (Tapete, Maitê, including approval by a hospital infection-control committee), universities (PUC-Rio, Cambridge School of Art, CODE University), an NGO (Mudadores de Rua) and cultural venues (Santê, Ateliê da Imagem).*

**H4 · Selected work** (project cards: title, one-liner, year; one-liners are at the top of each project below)
- Heading — EN: Selected work · PT: Trabalhos selecionados
- Link — EN: All projects → · PT: Todos os projetos →
- Card order: Pele Bruta · Tapete para Misturar o Mundo com Brinquedo Emprestado · Folhas · Maitê · Physical & Logical Interfaces · Padronagens · Graphic work

## 4. Work index

- Heading — EN: Work · PT: Trabalhos
- Intro — EN: Selected projects in design, exhibitions, photography and creative technology. · PT: Projetos selecionados em design, exposições, fotografia e tecnologia criativa.
- Filters (if used) — EN: All · Human-centred design · Exhibitions · UX and interaction · Creative technology · Graphic and pattern · PT: Todos · Design centrado nas pessoas · Exposições · UX e interação · Tecnologia criativa · Gráfica e estampas

---

## 5. Projects

### 5.1 Pele Bruta

**The story, in brief (for the builder, not published).** One idea, the body as our most personal tool of expression, survived a complete change of execution over two years: planned in Rio as a three-part multimedia exhibition, photographed during a scholarship year in England, then redesigned, built and produced by Chico as a solo exhibition in Santa Teresa. Its portfolio value is the visible process (research, whiteboard, wall plans, full-scale projection tests, hand-built MDF structures, installation, opening night) as much as the photographs. The exhibition with visitors should lead; the photographs are seen *through* the exhibition.

**Meta**
- Title: Pele Bruta
- Subtitle — EN: A two-year journey through the body as a tool of expression · PT: Uma jornada de dois anos pelo corpo como ferramenta de expressão
- Card one-liner — EN: A solo exhibition two years in the making: concept, photography, curation and build. · PT: Uma exposição individual construída ao longo de dois anos: conceito, fotografia, curadoria e montagem.
- Year: 2012–2014
- Roles — EN: Concept · Photography · Curation · Exhibition design · Production · PT: Conceito · Fotografia · Curadoria · Expografia · Produção
- Context — EN: Final project, Digital Media Design, PUC-Rio · Photographs made during a scholarship year at Cambridge School of Art, UK · Santê Hostel, Santa Teresa, Rio de Janeiro, 24 May – 1 June 2014 · PT: Projeto final, Design – Mídia Digital, PUC-Rio · Fotografias produzidas durante um ano de bolsa na Cambridge School of Art, Reino Unido · Santê Hostel, Santa Teresa, Rio de Janeiro, de 24 de maio a 1º de junho de 2014

**PB1 · Hero image**
- Visual: `Pele Bruta/2014.1/G2/142.jpg` — visitors in front of Desconstrução do Gênero, against the red walls. It shows the photographs the way they were meant to be seen: inside the exhibition. The night desert (`images/pele-bruta/cover.jpg`) moves to the gallery (PB15) and stays the project's card image on the home page.

**PB2 · Introduction** *(built from Chico's own draft)*
- EN: Our own body is the finest tool we will ever possess, and one we should explore and use. I chose it as the theme of my final project, and it led me on a two-year journey exploring this most personal instrument of expression: from a concept developed in Rio de Janeiro, through a year of photography in England, to a solo exhibition that I designed, built and produced.
- PT: Nosso próprio corpo é a melhor ferramenta que teremos na vida, e devemos explorá-la e usá-la. Escolhi esse tema para o meu projeto final, e ele me levou a uma jornada de dois anos explorando esse instrumento de expressão tão singular: de um conceito desenvolvido no Rio de Janeiro, passando por um ano de fotografia na Inglaterra, até uma exposição individual que projetei, montei e produzi.

**PB2b · Where it began**
- EN: The project began elsewhere. My first idea was a way for museum visitors to experience artworks through touch, using 3D scanning and haptic technology. When my research turned up similar projects already under way, I changed direction, and the body became my subject.
- PT: O projeto começou em outro lugar. Minha primeira ideia era uma forma de os visitantes de museus experimentarem obras de arte pelo tato, com escaneamento 3D e tecnologia háptica. Quando a pesquisa revelou projetos semelhantes já em andamento, mudei de rumo, e o corpo se tornou meu tema.

**PB2c · The deck that came first** *(new from the updated brief — the precursor documented in full)*
- Heading — EN: The deck that came first · PT: O deck que veio antes
- EN: That first idea has a document: an eleven-slide concept deck called Interação com Arte, made at G0 stage with Jorge Lopes as the intended advisor. It proposed letting museum visitors experience artworks physically — through 3D scanning, haptic technology and Kinect — answering difficult access and limited interaction with art. Its references were the Google Art Project, the Nottingham Project, the Digital Michelangelo Project and a virtual tour of the American Genocide Museum, and its process ran from research and theory through audience questionnaires and observation, feasibility, concept and prototyping to experimentation, refinement and documentation.
- PT: Essa primeira ideia tem um documento: um deck conceitual de onze slides chamado Interação com Arte, feito no estágio G0 com Jorge Lopes como orientador previsto. Propunha que visitantes de museus experimentassem as obras fisicamente — com escaneamento 3D, tecnologia háptica e Kinect — respondendo ao difícil acesso e à interação limitada com a arte. As referências eram o Google Art Project, o Nottingham Project, o Digital Michelangelo Project e uma visita virtual ao American Genocide Museum, e o processo ia da pesquisa e da fundamentação teórica aos questionários e à observação com o público, ao estudo de viabilidade, ao conceito e à prototipagem, até a experimentação, o refinamento e a documentação.
- EN: I have always carried this idea as a tactile device for blind and visually impaired visitors. That framing lives in my handwritten notebooks from the time, which are in Brazil; the surviving deck states the problem more generally. I keep both: the deck is the document, the notebooks hold the intent.
- PT: Sempre carreguei essa ideia como um dispositivo tátil para visitantes cegos e com baixa visão. Essa formulação está nos meus cadernos manuscritos da época, que estão no Brasil; o deck que sobreviveu coloca o problema de forma mais geral. Fico com os dois: o deck é o documento, os cadernos guardam a intenção.
- Visual: a slide from the "Interação com Arte" concept deck (`2012.1/G0/Interação com Arte.pdf`) — wired to this section.

**PB3 · Where the research began, 2012**
- Heading — EN: Where the research began · PT: Onde a pesquisa começou
- EN: The research began in 2012 with the way the nude is portrayed in contemporary photography, and the human body became my subject. Then I turned to culture: every group, from distant countries to tribes and social classes within the same city, sees, treats and interprets the body in its own way, and those differences often turn into prejudice.
- PT: A pesquisa começou em 2012 pelo modo como o nu é retratado na fotografia contemporânea, e o corpo humano se tornou meu objeto de investigação. Depois voltei o olhar para a cultura: cada grupo, de países distantes a tribos e classes sociais dentro de uma mesma cidade, vê, trata e interpreta o corpo à sua maneira, e essas diferenças muitas vezes viram preconceito.
- Visual: a large-type statement slide with the line from the 2012 report — EN: "Every culture has its own concepts, ideals and often even paradigms about the body." · PT: "Cada cultura tem os seus conceitos, ideais e muitas vezes até paradigmas sobre o corpo."
- *Builder note:* do not mention the temporary working titles (such as Tribos, or FAC — Formas de Abordar o Corpo).

**PB3b · The first plan: three moments**
- Heading — EN: The first plan: three moments · PT: O primeiro plano: três momentos
- EN: I set out to design a photography exhibition that would make visitors reflect on how different, and how alike, we are, and to bring new media into the way photographs are shown. I planned it in three moments: Characterisation, introducing the people photographed; Deconstruction, centred on a mannequin that would "change skins" through projection mapping, beside a video mosaic of skin; and Self-knowledge, closing the visit with a mirror.
- PT: Meu objetivo era projetar uma exposição de fotografia que fizesse o visitante refletir sobre o quanto somos diferentes, e o quanto somos parecidos, e trazer novas mídias para a forma de mostrar fotografias. Planejei três momentos: Caracterização, apresentando as pessoas fotografadas; Desconstrução, em torno de um manequim que "trocaria de pele" por meio de projeção mapeada, ao lado de um mosaico de vídeos de peles; e Autoconhecimento, encerrando a visita com um espelho.
- Visuals (all in `Pele Bruta/2012.1/`):
  - `desenhomanequim.JPG` — Caption EN: Sketch of the mannequin, 2012. · PT: Esboço do manequim, 2012.
  - `mosaicosedenho.jpg` — Caption EN: Sketch of the skin mosaic. · PT: Esboço do mosaico de peles.
  - The first floor plan and 3D render in `planta/` (`primeiracomuna-01.png`, folder `3D/`) — Caption EN: The first floor plan, drawn for a gallery in Botafogo. · PT: A primeira planta, desenhada para uma galeria em Botafogo.

**PB4 · A year of photography in England**
- Heading — EN: A year of photography in England · PT: Um ano de fotografia na Inglaterra
- EN: While I was developing the concept, I won the scholarship I had hoped for: a year studying photography at Cambridge School of Art, UK. I committed to producing the content of the exhibition there, with the school's support. I had access to a wide range of equipment, a panel of tutors, and modules devoted entirely to photography.
- PT: Enquanto desenvolvia o conceito, conquistei a bolsa que eu tanto queria: um ano estudando fotografia na Cambridge School of Art, no Reino Unido. Me comprometi a produzir ali o conteúdo da exposição, com o apoio da escola. Tive acesso a uma enorme variedade de equipamentos, a uma banca de professores e a módulos inteiramente dedicados à fotografia.
- Visual: `Chicos photos/Chico with one of his works in an exhibition at Cambridge School of Art.jpeg` — Caption EN: With one of my works in an exhibition at Cambridge School of Art. · PT: Com um dos meus trabalhos numa exposição na Cambridge School of Art.

**PB4b · London sitters, Cambridge critiques**
- Heading — EN: London sitters, Cambridge critiques · PT: Retratados em Londres, críticas em Cambridge
- EN: Modules such as Process to Practice 2 and Multiple Roles had the greatest impact on the project. Every week I photographed new people in London, then presented and discussed the shoots in Cambridge, with the class and in tutorials. The year also brought the first exhibitions I ever mounted, assessed on everything: the setting, the layout, the sound, the concept and how I spoke about the work to the public. My work on the deconstruction of gender and the body grew out of it.
- PT: Módulos como Process to Practice 2 e Multiple Roles foram os que mais marcaram o projeto. Toda semana eu fotografava pessoas novas em Londres e depois apresentava e discutia os ensaios em Cambridge, com a turma e em orientações com os professores. Aquele ano também trouxe as primeiras exposições que montei, avaliadas em tudo: ambientação, diagramação, som, conceito e a forma como eu falava do trabalho ao público. Daí nasceram meus trabalhos sobre a desconstrução do gênero e do corpo.

**PB4c · What I brought with me**
- Heading — EN: What I brought with me · PT: O que levei comigo
- EN: I arrived in Cambridge with a background in digital media design, and it proved a real strength across modules in installation, experimental video and digital image manipulation. My work was shown in two exhibitions at the school, and I came back to Rio with six bodies of work.
- PT: Cheguei a Cambridge com uma formação em design de mídia digital, e ela se mostrou um grande diferencial nos módulos de instalação, vídeo experimental e manipulação digital de imagem. Meus trabalhos estiveram em duas exposições na escola, e voltei ao Rio com seis conjuntos de trabalho.
- Visual: page 20 of `Cambridge School of Arts/2013.2/Multiple Roles/Multiple Roles photos/contact sheets/04 dan.pdf`, exported as one image — Caption EN: A contact sheet from Cambridge, 2013. · PT: Uma folha de contato de Cambridge, 2013.

**PB5 · Six bodies of work** — grid, one image and one line each

| Series EN / PT | EN line | PT line | Visual |
|---|---|---|---|
| Portraits / Retratos | Men photographed nude in their own homes, in natural light. | Homens fotografados nus nas próprias casas, com luz natural. | `portrait.jpg` |
| Gender / Gênero | Masculinity and femininity in the same body. | O masculino e o feminino no mesmo corpo. | `gender-red.jpg` |
| Abstract / Abstrato | Close studies of skin, hair and form, where one part of the body can be mistaken for another. | Estudos próximos de pele, pelos e formas, em que uma parte do corpo pode ser confundida com outra. | `Pele Bruta/2014.1/fotos/3 abstract/050.jpg` (its warm brick and wood tones sit well with the rest of the page); `054.JPG` as a second image if there is room |
| Sleeping / Sono | Men photographed while truly asleep. | Homens fotografados enquanto realmente dormiam. | `Pele Bruta/2014.1/fotos/4 sleeping/065.JPG`; add `066.jpg` only if you have a copy without the in-frame "CHICO MORAIS" watermark noted in the earlier review |
| Nature / Natureza | Bodies merging with the landscape: a lake at sunset, a forest floor, a desert at night. | Corpos que se fundem à paisagem: um lago ao pôr do sol, o chão de uma mata, um deserto à noite. | `nature-lake.jpg`, `nature-forest.jpg`, `cover.jpg` |
| The Florist | A documentary series that became a book and a short film of its own. | Uma série documental que se tornou livro e curta-metragem próprios. | `src/work/photography/the-florist/dsc-9213.jpg` → links to The Florist page (section 6.2) |

**PB6 · From plan to exhibition**
- Heading — EN: From plan to exhibition · PT: Do plano à exposição
- EN: Back in Rio in 2014, almost everything about the execution had changed, but the concept held. The three moments stayed; what filled them changed. The portraits became the Characterisation. Gender and Abstract took the place of the mannequin and the skin mosaic as the Deconstruction. Sleeping and Nature replaced the mirror in a closing moment renamed Reflection. My first-choice gallery, in Botafogo, fell through, and the show found a larger home at Santê Hostel in Santa Teresa.
- PT: De volta ao Rio em 2014, quase toda a execução havia mudado, mas o conceito se manteve. Os três momentos continuaram; o que os preenchia, não. Os retratos se tornaram a Caracterização. Gênero e Abstrato ocuparam o lugar do manequim e do mosaico de peles na Desconstrução. Sono e Natureza substituíram o espelho num momento final rebatizado de Reflexão. A galeria que era minha primeira escolha, em Botafogo, não deu certo, e a exposição encontrou um espaço maior no Santê Hostel, em Santa Teresa.
- Visual 1: the exhibition floor plan, `Pele Bruta/2014.1/planejamento exposicao planta.jpg` — Caption EN: The floor plan of the exhibition at Santê. · PT: A planta da exposição no Santê.
- Visual 1b: diagram rendered from this text — 2012 plan (three columns) → 2014 exhibition (three columns).
- Visual 2: `gantt.jpg` — Caption EN: The 2014 schedule, from the first presentation in March to the last in June. · PT: O cronograma de 2014, da primeira apresentação, em março, à última, em junho.

**PB6b · A parallel strand** *(new from the updated brief — text only, no images: no video of it survives, and the simulation photos show people whose consent for publication is unconfirmed)*
- Heading — EN: A parallel strand · PT: Uma vertente paralela
- EN: In the same semester, a separate course — Design de Objetos Inteligentes — picked up the projection-mapped body the exhibition had left behind and pursued it as a working prototype: a Kinect reading the visitor's silhouette, with animations projected onto their body. Starting from a public Kinect tutorial, I made four short animations in After Effects with stop-motion and digital cut-out — a seed growing into a tree through the seasons, tattoos appearing on skin, three washes of colour, falling crystals — and wired them to the live silhouette in Processing.
- PT: No mesmo semestre, outra disciplina — Design de Objetos Inteligentes — retomou o corpo com projeção mapeada que a exposição havia deixado para trás e o levou adiante como um protótipo funcional: um Kinect lendo a silhueta do visitante, com animações projetadas sobre seu corpo. A partir de um tutorial público de Kinect, fiz quatro animações curtas em After Effects, com stop-motion e recorte digital — uma semente que vira árvore ao longo das estações, tatuagens que surgem na pele, três banhos de cor, cristais que caem — ligadas à silhueta ao vivo em Processing.
- EN: A library update broke the Kinect integration days before the presentation and could not be fixed in time, so what was shown was a simulation: the animations composited onto photographs of real bodies. The project started as my solo G1; three classmates — Renan Dantas, Renan Kogut and Suzani Figueira — joined for G2, and who did what was never recorded.
- PT: Uma atualização de biblioteca quebrou a integração com o Kinect dias antes da apresentação e não deu tempo de corrigir, então o que foi mostrado foi uma simulação: as animações compostas sobre fotografias de corpos reais. O projeto começou como meu G1 individual; três colegas — Renan Dantas, Renan Kogut e Suzani Figueira — se juntaram para o G2, e quem fez o quê nunca foi registrado.
- Built below this text on the page: a webcam reconstruction (2026, clearly labeled) of all four studies plus the flow field, selectable from the animation menu. Chico supplied the original 2014 wash frames as inspiration; they power the wash mode's textures (kept out of the page itself, per Chico). His setup sketch (`process/sketch-kinect.jpg`, captioned in his own words "Rascunho…") is the section's only still, placed between the two paragraphs.

**PB7 · Finding the name**
- Heading — EN: Finding the name · PT: A escolha do nome
- EN: With the content settled, the working title no longer fitted. I mapped the journey a visitor would take: from individuals in their own bedrooms, through a deconstruction of gender and the body, and back to nature, where we all come from. Pele Bruta — literally "raw skin" — sets the delicacy of skin against the roughness and purity of natural textures.
- PT: Com o conteúdo definido, o título provisório já não servia. Mapeei o percurso que o visitante faria: dos indivíduos em seus próprios quartos, passando por uma desconstrução do gênero e do corpo, até o retorno à natureza, de onde todos viemos. Pele Bruta contrapõe a delicadeza da pele à rudeza e à pureza das texturas da natureza.
- Visual: `naming-whiteboard.jpg` — Caption EN: The whiteboard where the name took shape, March 2014. · PT: O quadro branco onde o nome tomou forma, março de 2014.

**PB8 · Designing the walls at full scale**
- Heading — EN: Designing the walls at full scale · PT: As paredes em escala real
- EN: I planned each wall on the computer, then tested the plans in the space itself: I rented a projector and projected the future prints onto the venue's walls at their real size. Standing in the room, I could see that a grid of small portraits had far less presence than one large image, and the portraits became a single looping projection. The idea came from my background in digital media design.
- PT: Planejei cada parede no computador e depois testei os planos no próprio espaço: aluguei um projetor e projetei as futuras impressões nas paredes do local, em tamanho real. Dentro da sala, percebi que uma grade de retratos pequenos tinha muito menos presença do que uma única imagem grande, e os retratos viraram uma projeção única, em loop. A ideia veio da minha formação em design de mídia digital.
- Visual 1: wall plans in `Pele Bruta/2014.1/G1.5/`: `02 wall A.jpg` and `03 wall A.jpg` side by side, then `06 wall B.jpg` and `10 wall C.jpg`. Caption EN: Wall A: six small portraits, then four, before a single projection replaced them. · PT: Parede A: seis retratos pequenos, depois quatro, antes de uma única projeção substituí-los.
- Visual 2: the projection test in the venue (folder `projecoes teste`): `2014-05-03 17.10.36.jpg`, `2014-05-03 17.11.46.jpg`, `bela01.JPG`, `bela03.JPG`, `IMG_20140503_180047843.jpg`, `IMG_20140503_175838702.jpg`, `IMG_20140503_185457583.jpg` — Caption EN: Testing the prints at full scale on the venue's walls. · PT: Teste das impressões em escala real nas paredes do espaço.

**PB9 · Building the exhibition**
- Heading — EN: Building the exhibition · PT: A montagem
- EN: Late in the process, I realized the 8-bit edits showed subtle tonal banding when enlarged for the exhibition panels. I re-edited and re-exported the entire body of work in 16-bit to guarantee pristine gradient transitions in the final fine-art prints. I built the projection screen and the mounting panels myself in MDF, at PUC-Rio's volume workshop; no sheet was large enough, so I joined several and painted over the seams. The heavier panels were screwed straight into the walls, and the prints hung from magnetic clips.
- PT: Já na reta final do processo, percebi que as edições em 8 bits apresentavam um leve efeito de banding (quebra nos gradientes) ao serem ampliadas para os painéis da exposição. Re-editei e re-exportei todo o corpo de trabalho em 16 bits para garantir transições de tom impecáveis nas impressões das artes finais. Construí eu mesmo a tela de projeção e os painéis de fixação em MDF, no laboratório de volume da PUC-Rio; como nenhuma chapa era grande o suficiente, uni várias e pintei por cima das emendas. Os painéis mais pesados foram parafusados direto nas paredes, e as impressões ficaram presas com clipes magnéticos.
- Visual 1: building the exhibition (folder `Pele Bruta/2014.1/planejamento exposicao/construcao expo`): `2014-05-17 16.39.jpg`, `2014-05-22 14.04.02.jpg`, `2014-05-22 20.09.25.jpg`, `2014-05-22 20.15.46.jpg`, `photo 2.JPG`, `photo 4.JPG`, plus `2014-06-01 22.49.51.jpg`, `2014-06-01 23.38.38-1.jpg`, `2014-06-01 23.52.02.jpg` — Caption EN: Building the exhibition. · PT: A montagem.
- Visual 2: `2014-05-17 20.07.18.jpg` — Caption EN: Mounting the largest print, Desconstrução do Gênero, 175 × 99.9 cm. · PT: Montagem da maior impressão, Desconstrução do Gênero, 175 × 99,9 cm.
- Visual 3: the MDF edge photo — Caption EN: Joined MDF sheets, seams painted white. · PT: Chapas de MDF unidas, emendas pintadas de branco.

**PB10 · Details** — three small text-and-image pairs
1. Wall text / Texto de parede
   - EN: The curatorial text, by Josip Horvat, was placed outside, by the entrance stairs: every visitor read it before going in, and the walls inside were left to the photographs. It was set in Helvetica and Myriad Pro, in dark grey rather than black, and printed in vinyl.
   - PT: O texto curatorial, de Josip Horvat, ficou do lado de fora, junto à escada de entrada: todo visitante o lia antes de entrar, e as paredes internas ficavam livres para as fotografias. Foi composto em Helvetica e Myriad Pro, em cinza-escuro em vez de preto, e impresso em vinil.
   - Visuals: `wall-text.jpg` and `type-test.jpg` — Caption for type test EN: Type tests for the title. · PT: Testes tipográficos para o título. · `Pele Bruta/2014.1/G2/144.jpg` (visitors by the entrance stairs, the wall text on the right) — Caption EN: Opening night, by the entrance stairs. · PT: A noite de abertura, junto à escada de entrada.
2. Display / Suporte
   - EN: Two professors offered me a display totem from the university for opening night. It was too large for the room and did not suit it, so I built a low shelf beneath a bench for the netbook, with the projector above it.
   - PT: Dois professores me ofereceram um totem expositor da universidade para a abertura. Era grande demais e não combinava com a sala, então construí uma prateleira baixa sob um banco para o netbook, com o projetor acima.
   - Visuals: `construcao expo/2014-05-22 15.29.49.jpg`, `construcao expo/2014-05-22 15.40.43.jpg`
3. Sound / Trilha sonora
   - EN: I also curated the soundtrack, listening to hundreds of tracks to find instrumental electronic music that would set the mood without pulling attention away from the images.
   - PT: Também fiz a curadoria da trilha sonora: ouvi centenas de faixas até encontrar música eletrônica instrumental que criasse o clima sem desviar a atenção das imagens.
   - Visual: the 8tracks playlist screenshot (`8tracks.jpg`). *Builder note:* the playlist is no longer online; show the screenshot, no link.

**PB11 · Opening night**
- Heading — EN: Opening night · PT: A abertura
- EN: Pele Bruta opened on 24 May 2014 and ran until 1 June. In the week of the opening, the venue withdrew its promise of a projector, and the night before, the forecast turned to rain, with both the wall text and the bar outdoors. I found a projector, rented a large parasol and prepared a plan to move the bar inside. It did not rain.
- PT: Pele Bruta abriu em 24 de maio de 2014 e ficou em cartaz até 1º de junho. Na semana da abertura, o espaço desistiu do projetor que havia prometido, e na véspera a previsão virou chuva, com o texto de parede e o bar ao ar livre. Consegui um projetor, aluguei um ombrelone e preparei um plano para levar o bar para dentro. Não choveu.
- Visual: `Pele Bruta/2014.1/G2/143.jpg` — Caption EN: Visitors in front of the portrait projection. · PT: Visitantes diante da projeção dos retratos. (Opening-night views also appear in PB1, PB10 and PB15.)

**PB12 · Video**
- Embed: `https://player.vimeo.com/video/96548872` (public page: vimeo.com/96548872)
- Caption — EN: Opening night, with visitors' impressions. 7 min. · PT: A noite de abertura, com depoimentos dos visitantes. 7 min.
- Confirmed public on Vimeo ("Expo PELE BRUTA by Chico Morais", 7 min). *Builder note:* vimeo.com/66032702 is The Florist, not this film; it belongs on the Florist page.

**PB13 · Reception** — pull quotes
- Visitor on opening night: "Não é uma coisa forjada, é uma coisa natural." — EN: "It isn't forced — it's something natural."
- Folkish, Rio culture page, 25 May 2014: "Vale a pena conferir e questionar." — EN: "Worth seeing — and questioning."
- Jordana Corrêa, actress and publicist: "O que vi me causou grande emoção. Eram peças que gritavam uma mensagem forte." — EN: "What I saw moved me deeply. These were pieces that shouted a strong message."
- Jordana Corrêa, on Desconstrução do Gênero: "Uma peça de delicadeza incrível que apenas exprime aquilo que há dentro de todos nós." — EN: "A piece of incredible delicacy that simply expresses what lies within all of us."
- *Builder note:* quotes stay in the original Portuguese in both versions; the English translation appears only in the EN version.

**PB14 · Closing** *(replaces "In the report I wrote that it was the most important day of my life so far. I still think that.")*
- EN: The opening completed two years of work. What the project stood for — a world of respect and acceptance, free of rigid standards of beauty and gender, and a deep respect for nature — has stayed with me ever since.
- PT: A abertura encerrou dois anos de trabalho. Aquilo que o projeto defendia — um mundo de respeito e aceitação, livre de padrões rígidos de beleza e de gênero, e um profundo respeito pela natureza — continua comigo desde então.

**PB15 · GALLERY — The works as exhibited** (installation views preferred over flat files)

| Work | EN caption | PT caption |
|---|---|---|
| Caracterização | Portraits, as a looping projection, 170 × 113 cm. | Retratos, em projeção contínua, 170 × 113 cm. |
| Desconstrução do Gênero (`Pele Bruta/2014.1/G2/140.jpg`, seen through the doorway) | Print, 175 × 99.9 cm, the largest piece in the show. | Impressão, 175 × 99,9 cm, a maior peça da exposição. |
| Reflexão — lake | Print, 96 × 63.6 cm. | Impressão, 96 × 63,6 cm. |
| Reflexão — forest | Print, 60 × 90.5 cm. | Impressão, 60 × 90,5 cm. |
| Reflexão — desert (`images/pele-bruta/cover.jpg`) | Print, 112 × 78.3 cm. | Impressão, 112 × 78,3 cm. |

- Link — EN: More photographs → Photography · PT: Mais fotografias → Fotografia
- Optional extra process image: `text-draft-en.jpg` — Caption EN: An April draft of the wall text, still in four parts. · PT: Um rascunho de abril do texto de parede, ainda em quatro partes.

**Credits**
- EN: Concept, photography, exhibition design and production: Chico Morais · Curation: Chico Morais with Maria das Graças Chagas (advisor) · Curatorial text: Josip Horvat · Venue: Santê Hostel, Santa Teresa
- PT: Conceito, fotografia, expografia e produção: Chico Morais · Curadoria: Chico Morais e Maria das Graças Chagas (orientadora) · Texto curatorial: Josip Horvat · Local: Santê Hostel, Santa Teresa
- Thanks — EN: With thanks to Bianca Pimentel, Clarice Rodriguez, Flávia Bretas, Isabel Langlands, Isabela La Croix, Jordana Corrêa, Josip Horvat, Luiza McAllister, Marcela Abbade, Maria das Graças Chagas, Raíssa Tavares and Suzani Figueira, who helped build Pele Bruta and make it real, and to Santê Hostel. · PT: Agradeço a Bianca Pimentel, Clarice Rodriguez, Flávia Bretas, Isabel Langlands, Isabela La Croix, Jordana Corrêa, Josip Horvat, Luiza McAllister, Marcela Abbade, Maria das Graças Chagas, Raíssa Tavares e Suzani Figueira, que ajudaram a construir Pele Bruta e a torná-la real, e ao Santê Hostel.

**Removed from the previous version**
- The mannequin and mirror mentioned before they were introduced (now explained in PB3 with a visual).
- "Even though it is one of my favourite things I have ever made" (The Florist).
- "The most important day of my life so far. I still think that."
- "He did not curate the show, despite the printed byline" (credits now state roles positively).
- "Evidence" sidebar (reception is now shown as quotes).

---

### 5.2 Tapete para Misturar o Mundo com Brinquedo Emprestado

**The story, in brief (not published).** Chico's first design project. Instead of arriving with an idea, he designed a method that let the people closest to the problem, hospital volunteers, define the brief in their own words, then tested ideas with children over four rounds. The resulting object was approved by the hospital's infection-control committee, which wrote a cleaning protocol for it. This is the start of his path in care and well-being.

**Meta**
- Title: Tapete para Misturar o Mundo com Brinquedo Emprestado *(always the full name, never just "Tapete")*
- EN subtitle (translation): A Mat for Mixing the World with Borrowed Toys
- Card one-liner — EN: A play mat for children waiting at a public hospital. · PT: Um tapete de brincar para as crianças à espera num hospital público.
- Year: 2008
- Roles — EN: Field research · Participant observation · Co-design · Product design · Documentation · PT: Pesquisa de campo · Observação participante · Co-design · Design de produto · Documentação
- Context — EN: Hospital da Lagoa, Rio de Janeiro — Projeto Sala de Espera, part of the Lagoa Voluntário programme · PUC-Rio, Basic Design Project: Context and Concept · PT: Hospital da Lagoa, Rio de Janeiro — Projeto Sala de Espera, do programa Lagoa Voluntário · PUC-Rio, Projeto Básico: Contexto e Conceito

**T1 · Hero**
- Visual: `tapete/cover.jpg` cut out on a transparent background, or the assembly sequence (T7) as an animation.
- *Builder note:* bare `DSC…` file names in this section are in `2008.2 Project Tapete para Misturar o Mundo com Brinquedo Emprestado/`.
- Lede — EN: A circular play mat in sixteen soft slices for children waiting at a public hospital in Rio de Janeiro. Developed with the volunteers who played with them, it was approved by the hospital's infection-control committee, which wrote a cleaning protocol for it. The whole project was made by hand, from the word cards to the stitched object.
- Lede — PT: Um tapete circular de brincar, em dezesseis fatias acolchoadas, para as crianças que aguardavam atendimento num hospital público do Rio de Janeiro. Desenvolvido com os voluntários que brincavam com elas, foi aprovado pela Comissão de Controle de Infecção Hospitalar, que escreveu um protocolo de limpeza para ele. Todo o projeto foi feito à mão, dos cartões de palavras ao objeto costurado.

**T3 · Observation first**
- Heading — EN: Observation first · PT: Observar antes de projetar
- EN: For weeks I joined the recreation sessions that the volunteers Rosário Abrahão and Diogo Oliveira ran for children waiting at the paediatric outpatient clinic, with no object in mind. Instead of designing, I listened, and wrote down the words the volunteers used as they played.
- PT: Durante semanas, participei das sessões de recreação que os voluntários Rosário Abrahão e Diogo Oliveira conduziam com as crianças à espera no ambulatório pediátrico, sem nenhum objeto em mente. Em vez de projetar, eu escutava e anotava as palavras que os voluntários usavam enquanto brincavam.
- Visuals: `DSC06976.JPG`, `DSC06985.JPG`, `DSC07004.JPG` — Caption EN: Recreation sessions at the paediatric outpatient clinic. · PT: Sessões de recreação no ambulatório pediátrico.

**T4 · Words handed back**
- Heading — EN: Words handed back · PT: As palavras de volta
- EN: I wrote those words on identical cards and handed them back. Rosário sorted them into four themes: children at the tables, children on the floor, rules and guidance, and conversation. From the sentences built with those words, she chose the one that became our brief. The method let the people closest to the problem define it in their own words.
- PT: Escrevi essas palavras em cartões idênticos e as devolvi. Rosário as organizou em quatro temas: crianças nas mesas, crianças no chão, regras e orientações, e conversa. Entre as frases construídas com essas palavras, ela escolheu a que se tornou o nosso ponto de partida. O método permitiu que as pessoas mais próximas do problema o definissem com as próprias palavras.
- Visual: `tapete/word-cards.jpg` — Caption EN: The volunteers' own vocabulary, written on cards. · PT: O vocabulário dos próprios voluntários, escrito em cartões.

**T5 · The brief** — large pull quote
- Quote (both versions): *Misturar o mundo com brinquedo emprestado.*
- EN: Mixing the world with borrowed toys. Every toy in that room had been donated, so every toy was already borrowed. To mix the world was to mix the reality of poverty and illness with a child's enchanted one.
- PT: Todos os brinquedos daquela sala eram doados; eram, portanto, emprestados. Misturar o mundo era misturar a realidade da pobreza e da doença com o mundo encantado da criança.

**T6 · Four rounds of experiments**
- Heading — EN: Four rounds of experiments · PT: Quatro rodadas de experimentos
- EN: I tested ideas with the children and both volunteers in four rounds, and each round changed the brief. Cardboard objects were destroyed at once, so the material had to be durable. Lotteries and competitions failed: the children wanted to choose their own play. When the volunteers disagreed — Diogo liked toys based on household objects, Rosário rejected them for pushing girls towards domestic roles — the one thing they agreed on was children playing together.
- PT: Testei ideias com as crianças e os dois voluntários em quatro rodadas, e cada rodada mudou o briefing. Objetos de papelão eram destruídos na hora: o material precisava ser resistente. Sorteios e competições fracassaram: as crianças queriam escolher a própria brincadeira. Quando os voluntários discordaram — Diogo gostava dos brinquedos inspirados em objetos domésticos, e Rosário os rejeitava por empurrarem as meninas para o papel de dona de casa —, o único ponto em comum era ver as crianças brincando juntas.
- Visual 1: `tapete/experiment-table.jpg` — Caption EN: The third round of experiments. · PT: A terceira rodada de experimentos.
- Visual 2: a strip of experiment photos, two or three per group — early experiments with Diogo: `DSC07440.JPG`, `DSC07470.JPG`, `DSC07485.JPG`, `DSC07488.JPG` · with Diogo: `DSC07609.JPG`, `DSC07647.JPG`, `DSC07649.JPG`, `DSC07650.JPG`, `DSC07653.JPG`, `DSC07655.JPG` · with Rosário: `DSC07657.JPG`, `DSC07659.JPG`, `DSC07661.JPG`, `DSC07662.JPG`
- Strip caption — EN: Many objects were made and tested along the way, from a small cardboard version of the circle to pieces in non-woven fabric. · PT: Muitos objetos foram feitos e testados ao longo do caminho, de uma versão pequena do círculo em papelão a peças em TNT.

**T7 · The object**
- Heading — EN: The object · PT: O objeto
- EN: The answer was a 160 cm circle in sixteen padded slices. Children first assemble it together, like a pizza, and then play on top of what they have built. It is made of density-33 foam covered in corino, the synthetic leather the hospital already used on its changing tables because it wipes clean, and finished by hand with an invisible stitch.
- PT: A resposta foi um círculo de 160 cm em dezesseis fatias acolchoadas. Primeiro as crianças o montam juntas, como uma pizza; depois brincam em cima do que construíram. É feito de espuma D33 revestida de corino, o material que o hospital já usava no trocador por ser fácil de higienizar, com acabamento à mão em ponto invisível.
- Visual 1: animated sequence `tapete/assembly.jpg` (8 frames, transparent background) — Caption EN: Assembled slice by slice, the way the children do it. · PT: Montado fatia por fatia, como fazem as crianças.
- Visual 2: `slice-out.jpg`, `exploded.jpg` (cut-outs, no captions needed)

**T8 · Making it** — row of process images
| Visual | EN caption | PT caption |
|---|---|---|
| `process-mould.jpg` | The template: one circle, sixteen slices. | O molde: um círculo, dezesseis fatias. |
| `process-cut.jpg` | Density-33 foam, cut to the template. | Espuma D33 cortada no molde. |
| `process-sewing.jpg` | Rozeani sewing the corino cover by hand. | Rozeani costurando à mão o revestimento de corino. |
| `with-object.jpg` | With the finished mat. | Com o tapete pronto. |


**T9 · Approved by the hospital** — text beside the letter
- Heading — EN: Approved by the hospital · PT: Aprovado pelo hospital
- EN: The hospital's Infection Control Committee (CCIH) reviewed the mat and approved it for use. Dr Rosana M. Rangel dos Santos wrote by hand, on Ministry of Health letterhead:
- PT: A Comissão de Controle de Infecção Hospitalar (CCIH) avaliou o tapete e aprovou seu uso. A Dra. Rosana M. Rangel dos Santos escreveu, à mão, em papel timbrado do Ministério da Saúde:
- Quote (original, both versions): *"Adoramos os alunos e sua criatividade. Entendemos que dessa forma podemos integrar as matérias de controle de infecção hospitalar com profissionais de outras áreas. Para nós é muito importante integrar o design para aumentar a adesão dos profissionais. SUPER PARABÉNS!"*
- EN translation (EN version only): "We loved the students and their creativity. In this way we can bring infection control together with professionals from other fields. For us, it is very important to bring in design to increase staff adherence. Many congratulations!"
- Visual: `tapete/ccih-letter.jpg` — *Builder note:* this image must sit directly beside the quote. Caption EN: The committee's letter, 1 December 2008. · PT: A carta da comissão, 1º de dezembro de 2008.
- Small visual: `tapete/ccih-protocol.jpg` — Caption only, EN: The committee also wrote a cleaning protocol for the mat, adding it to the clinic's routine. · PT: A comissão também escreveu um protocolo de limpeza para o tapete, incorporando-o à rotina do ambulatório.

**T10 · In use**
- Visuals: `in-use-01.jpg`, `in-use-02.jpg` — Caption EN: In use at the paediatric outpatient clinic of Hospital da Lagoa. · PT: Em uso no ambulatório pediátrico do Hospital da Lagoa.
- More in-use photos are in the folder `uso no hospital`, all at 640 × 480. *Builder note:* show them small, as a grid or strip, never full width.

**Credits**
- EN: Designed with Rozeani Araújo · Field partners: Rosário Abrahão and Diogo Oliveira, volunteers of Projeto Sala de Espera, Hospital da Lagoa
- PT: Projeto em dupla com Rozeani Araújo · Parceiros de campo: Rosário Abrahão e Diogo Oliveira, voluntários do Projeto Sala de Espera, Hospital da Lagoa

**Removed from the previous version**
- "A note on these photographs" and every "Faces obscured before export" caption.
- The full cleaning protocol in the body text (now a captioned image).
- "She made the object with a seamstress she hired — the hands … are theirs, not mine" and "These are not my hands".
- "I did not write the brief. She did." (reframed as the strength of the method, T4).
- "What makes this more than a student project" and "did not just grade this".

---

### 5.3 Maitê

**The story, in brief (not published).** A semester of observation in a public children's clinic, a search for the real source of the children's fear, and a clinical instrument redesigned rather than a room decorated. Together with Tapete, this is where Chico first used design to care for people's well-being, a direction he still wants to pursue. The key image is Chico with the nurses during the experiments.

**Meta**
- Title: Maitê
- Subtitle — EN: A giraffe who measures children, with a little help from her friend Tico the monkey · PT: Uma girafa que mede crianças, com a ajuda do amigo Tico, o macaco
- Card one-liner — EN: A height chart for a public children's clinic, redesigned so that being measured is no longer frightening. · PT: Uma régua de altura para a pediatria de um posto de saúde, redesenhada para que ser medido deixe de dar medo.
- Year: 2009
- Roles — EN: Field research · Participant observation · Co-design · Product design · Fabrication · PT: Pesquisa de campo · Observação participante · Co-design · Design de produto · Fabricação
- Context — EN: CMS Píndaro de Carvalho Rodrigues, a public health centre in Gávea, Rio de Janeiro — paediatric ward · PUC-Rio, Basic Design Project: Planning · PT: CMS Píndaro de Carvalho Rodrigues, posto de saúde público na Gávea, Rio de Janeiro — pediatria · PUC-Rio, Projeto Básico: Planejamento

**M1 · Hero**
- Visual: `maite/cover.jpg`, cut out on a transparent background.
- *Builder note:* the folders named in this section (`observação`, `experimentação`, `construção`, `objeto`) are inside `2009.1 Project Maite/`.
- Lede — EN: In a public health centre in Rio de Janeiro, a semester of observation led me to the moment the children feared most: being measured. Maitê turned the height chart into a giraffe.
- Lede — PT: Num posto de saúde público do Rio de Janeiro, um semestre de observação me levou ao momento que as crianças mais temiam: a hora de ser medido. Maitê transformou a régua de altura numa girafa.

**M2 · Introduction**
- EN: Maitê is one of the first projects in which I used design to care for people's well-being, in a field where health, psychology and care meet, still one of my passions to work with.
- PT: Maitê é um dos primeiros projetos em que usei o design para cuidar do bem-estar das pessoas, num campo onde a saúde, a psicologia e o cuidado se encontram, ainda uma das minhas paixões para atuar.

**M3 · Finding the right place**
- Heading — EN: Finding the right place · PT: Encontrar o lugar certo
- EN: Before a clinic said yes, we were turned away by five public schools, two private schools and an institute for autistic children. A promising lead in the paediatric recreation room of Hospital Miguel Couto reached a first observation visit before stalling in paperwork. In the end, the Píndaro de Carvalho Rodrigues health centre, in Gávea, opened its doors, and I went there two or three mornings a week throughout the semester.
- PT: Antes de um posto dizer sim, fomos recusados por cinco escolas públicas, duas particulares e um instituto para crianças autistas. Uma pista promissora na sala de recreação pediátrica do Hospital Miguel Couto chegou a uma primeira visita de observação, mas parou na burocracia. Até que o posto de saúde Píndaro de Carvalho Rodrigues, na Gávea, abriu as portas, e passei a ir até lá duas ou três manhãs por semana, ao longo de todo o semestre.
- Visual: `DSC_0057.JPG` (subfolder "miguel couto public hospital at Gávea") — Caption EN: Hospital Miguel Couto, the first site, before the paperwork stalled. · PT: Hospital Miguel Couto, o primeiro local, antes de a burocracia travar.

**M4 · Listening in the ward**
- Heading — EN: Listening in the ward · PT: Escutar a pediatria
- EN: I followed the daily routine of the paediatric ward — the waiting, the consultations, the measuring — and noted the words the nurses used.
- PT: Acompanhei a rotina da pediatria — a espera, as consultas, as medições — e anotei as palavras que as enfermeiras usavam.
- Typographic block (quotes in PT in both versions; EN translation in the EN version only):
  - *"Antibiótico."* — Antibiotic.
  - *"Pequenininho."* — Teeny-tiny.
  - *"Pessoas desistem e vão embora com os números."* — People give up and leave with their queue numbers.
  - *"Quando tem que deitar, pelo amor de Deus!"* — When they have to lie down, heaven help us!
- Visuals (folder `observação`): `DSC_0049 waiting.JPG`, `DSC_0053 waiting .JPG`, `DSC00081.JPG`, `DSC00122.JPG` — Caption EN: Waiting in the paediatric ward. · PT: A espera na pediatria.

**M5 · From words to a guiding sentence**
- Heading — EN: From words to a guiding sentence · PT: Das palavras a uma frase-guia
- EN: The collected words became a deck of cards. The deck was brought to the nurses, and they arranged the cards into the sentence that guided everything that followed:
- PT: As palavras coletadas viraram um baralho de cartões. O baralho foi levado às enfermeiras, que organizaram os cartões na frase que guiou tudo o que veio depois:
- Quote: *"Na pediatria o médico faz muita gente pequenininha rir para não chorar."* — EN: "In paediatrics, the doctor makes lots of little people laugh so they won't cry."
- Visual: `observação/Screenshot 2026-09-25 at 15.24.32.png`, a page from the 2009 report. No photograph of the cards survives.

**M6 · Why fear matters**
- Heading — EN: Why fear matters · PT: Por que o medo importa
- EN: To argue for redesigning a clinical instrument, rather than simply decorating a room, I studied the psychology of fear: the body's stress response, and systematic desensitisation, a clinical technique that reduces fear through gradual exposure combined with relaxation.
- PT: Para defender o redesenho de um instrumento clínico, e não a simples decoração de uma sala, estudei a psicologia do medo: a resposta do corpo ao estresse e a dessensibilização sistemática, técnica clínica que reduz o medo por meio da exposição gradual associada ao relaxamento.
- Visual: a text-only slide in large type.

**M7 · Testing ideas with the nurses**
- Heading — EN: Testing ideas with the nurses · PT: Testar ideias com as enfermeiras
- EN: Every idea was tested with the nurses, and most were rightly set aside: illustrated wall panels, because the same wall served adult patients in the afternoon; pinwheels, impossible to restock; a hanging planet mobile, with nowhere to fix it. What my observation kept returning to was the old height-measuring board, which looked more like an instrument of torture than a ruler: being measured frightened the children more than the room or the examination. The nurses confirmed it, and it became the concept we carried forward.
- PT: Todas as ideias foram testadas com as enfermeiras, e a maioria foi descartada com razão: painéis ilustrados, porque a mesma parede atendia adultos à tarde; cata-ventos, impossíveis de repor; um móbile de planetas, sem onde prendê-lo no teto. O que a minha observação apontava, repetidamente, era o antigo medidor de altura, que mais parecia um instrumento de tortura do que uma régua: ser medido assustava as crianças mais do que a sala ou a consulta. As enfermeiras confirmaram, e esse foi o conceito levado adiante.
- Visual 0: `observação/DSC00118.JPG`, the old height-measuring board, placed beside that sentence — Caption EN: The old height-measuring board. · PT: O antigo medidor de altura.
- Visual 1 (large, one of the key images of the page): `me and nurses DSC_0085.JPG` (folder `experimentação`) — Caption EN: With the nurses Luiza Cordeiro and Janeide Cunha during the experiments. · PT: Com as enfermeiras Luiza Cordeiro e Janeide Cunha durante os experimentos.
- Visual 2: `maite/sketches.jpg` — Caption EN: Two finalists, a giraffe and a snake. The nurses chose the giraffe. · PT: Duas finalistas, uma girafa e uma cobra. As enfermeiras escolheram a girafa.

**M8 · Meet Maitê**
- Heading — EN: Meet Maitê · PT: Esta é a Maitê
- EN: Maitê is not a person but a giraffe, and Tico is the little monkey who climbs her neck to mark each child's height.
- PT: Maitê não é uma pessoa, e sim uma girafa, e Tico é o macaquinho que sobe pelo pescoço dela para marcar a altura de cada criança.
- Visuals: `ruler-full.jpg`, cut out, and Tico seen from the front, `DSC_0012.JPG`, cut out. (It replaces `tico.jpg`, which shows him from behind.)

**M9 · Making Maitê**
- Heading — EN: Making Maitê · PT: A construção
- EN: Maitê was cut from MDF with a jigsaw, then sanded, sealed and primed, masked with contact paper and spray-painted — brown and yellow for the giraffe, brown and beige for Tico — with the small details in acrylic and a final coat of wax. She was built in more than one session — and one of them took place inside my own bedroom!
- PT: A Maitê foi cortada em MDF com serra tico-tico, lixada, selada e preparada com fundo, mascarada com papel contact e pintada com spray — marrom e amarelo na girafa, marrom e bege no Tico —, com os detalhes em acrílica e acabamento final em cera. Ela foi construída em mais de uma sessão — e uma delas dentro do meu próprio quarto!
- Visuals: `build-home-01.jpg` — Caption EN: Working on Maitê at home. · PT: Trabalhando na Maitê em casa. · `build-home-02.jpg` — Caption EN: Acrylic for the small details, then wax. · PT: Acrílica nos detalhes e, depois, cera.
- University workshop (folder `construção`): `DSC00145.JPG`, `DSC00149.JPG`, `DSC00171.JPG`, `DSC00174.JPG`, `DSC00175 2.jpg`, `DSC00177.JPG`, `DSC00178.JPG`. They replace `build-lab-01` to `-03`. — Caption EN: At the university workshop. · PT: Na oficina da universidade.

**M10 · In the ward**
- Heading — EN: In the ward · PT: Na pediatria
- EN: By the end of the semester, the nurses Luiza and Janeide were using Maitê in their work with the children.
- PT: Ao fim do semestre, as enfermeiras Luiza e Janeide já usavam a Maitê no atendimento às crianças.
- Visuals: `in-use-measuring.jpg` — EN: Measuring with Maitê. · PT: Medindo com a Maitê. · `in-use-table.jpg` — EN: Maitê beside the examination table. · PT: A Maitê ao lado da maca. · `in-use-nurse.jpg` — EN: Maitê in the nurses' routine. · PT: A Maitê na rotina das enfermeiras.
- Visual: `experimentação/DSC_0009 kid is crying because still wanted to be with Maite instead of scary object.JPG` — Caption EN: On the scale, a child cries to go back to Maitê and Tico, on the other side of the picture. · PT: Na balança, uma criança chora para voltar para a Maitê e o Tico, do outro lado da foto.

**Credits**
- EN: Designed with Júlia Santos · Field partners: nurses Luiza Cordeiro and Janeide Cunha, CMS Píndaro de Carvalho Rodrigues
- PT: Projeto em dupla com Júlia Santos · Parceiras de campo: as enfermeiras Luiza Cordeiro e Janeide Cunha, CMS Píndaro de Carvalho Rodrigues

**Removed from the previous version**
- "Nurses told us the height-measuring board was the thing frightening the children" as the lede.
- "Maitê is the name of the object, not of my partner" (now M8, playful and unambiguous).
- "The method, again" and "Same approach as Tapete the semester before".
- The paragraph on "jogo de palavras" versus "conjunto de ideias".
- "This happened across two sessions in two places — with Júlia in the PUC lab, and alone…".
- "She did not visit the clinic; the observation and the on-site photography are mine alone."
- "Adoption is self-reported…" and every "Faces obscured before export" caption.

---

### 5.4 Folhas

**The story, in brief (not published).** A personal need (walking around hungry, not knowing what he could eat) became a complete product concept, developed alone: research, a non-confrontational thesis, four directions, a clear opportunity, rigorous information architecture, naming, identity, a character family, critique-driven redesign and, later, a business plan. The characters are the heart of the identity and deserve a large, playful section.

**Meta**
- Title: Folhas
- Subtitle — EN: Meat-free food, wherever you are · PT: Comida sem carne, onde você estiver
- Card one-liner — EN: An iPhone app that finds vegetarian and vegan food nearby, from dedicated restaurants to the one meat-free dish on an ordinary menu. · PT: Um aplicativo para iPhone que encontra comida vegetariana e vegana por perto, dos restaurantes especializados ao único prato sem carne de um cardápio comum.
- Year: 2011–2012
- Roles — EN: UX research · Information architecture · Interaction design · Naming and identity · Character design · Business model · PT: Pesquisa de UX · Arquitetura da informação · Design de interação · Naming e identidade · Design de personagens · Modelo de negócio
- Context — EN: PUC-Rio, Advanced Design Project (2011) and Entrepreneurship (2012) · Solo project; the brief was set for teams of about four · PT: PUC-Rio, Projeto Avançado (2011) e Empreendedorismo (2012) · Projeto individual; o briefing previa equipes de cerca de quatro pessoas
- *Builder note:* paths starting with `pngs/` or `development images and illustrations i made/` are inside `2011.2 FOLHAS project/`. Take the presentation style from the new Behance slides (folder "updated Behance portfolio i started"): one idea per slide on a flat colour background, the iPhone 4 mock-up on a tiled character pattern, the logo in its eight colourways.

**F1 · Hero**
- Visual: the logo colourway grid (`logo.png`) or the splash screen in the iPhone mock-up on the character pattern (`iphoneloog.png`).
- Lede: the card one-liner.

**F2 · Where it started**
- Heading — EN: Where it started · PT: De onde veio
- EN: Since the beginning of my academic life I had wanted to design something about vegetarianism. The idea for Folhas came from my own experience: as a vegetarian, especially when travelling somewhere unfamiliar, I often walked around hungry, wishing something could tell me what I could eat nearby. I made it for everyone who has been in that situation, and I chose to develop it entirely on my own.
- PT: Desde o início da minha vida acadêmica, eu queria criar algo sobre vegetarianismo. A ideia do Folhas veio da minha própria experiência: como vegetariano, sobretudo viajando por lugares desconhecidos, muitas vezes andei com fome, desejando que algo me dissesse o que eu poderia comer por perto. Fiz o Folhas pensando em todos que já passaram por isso, e escolhi desenvolvê-lo inteiramente sozinho.
- Visual: the cherry mascot, `pngs/desenhos/cereja-01.jpg`, cut out. (The hand drawings are in notebooks in Brazil.)

**F3 · A peaceful approach**
- Heading — EN: A peaceful approach · PT: Uma abordagem pacífica
- EN: I wanted Folhas to reach people who eat meat as well: not by confronting them, but peacefully and indirectly, by making meat-free choices easier to find.
- PT: Eu queria que o Folhas alcançasse também quem come carne: não pelo confronto, mas de forma pacífica e indireta, tornando as opções sem carne mais fáceis de encontrar.
- Visual: none (short statement slide) or a character.

**F4 · Research**
- Heading — EN: Research · PT: Pesquisa
- EN: I interviewed the PUC-Rio professors Ana Branco and Irina Aragão and a number of vegetarians, consulted organisations such as the Brazilian Vegetarian Society (SVB), Greenpeace, PETA, IVU and Instituto Nina Rosa, and organised the health, environmental and social arguments into tables and diagrams.
- PT: Entrevistei as professoras da PUC-Rio Ana Branco e Irina Aragão e diversos vegetarianos, consultei organizações como a Sociedade Vegetariana Brasileira (SVB), Greenpeace, PETA, IVU e Instituto Nina Rosa, e organizei os argumentos de saúde, meio ambiente e sociedade em tabelas e diagramas.
- Visual: none available; most of the research is written, and the sketches are in notebooks in Brazil. Use the optional data strip below as a typographic slide.
- Data strip — EN: 15,000 litres of water per kilo of beef · Livestock feed equal to the calorie needs of 8.7 billion people · PT: 15 mil litros de água por quilo de carne bovina · Ração animal equivalente às necessidades calóricas de 8,7 bilhões de pessoas
- Source note under the strip — EN: Figures from the Folhas research, 2011. Sources consulted include the Brazilian Vegetarian Society (SVB), IVU, PETA, the Vegetarian Society and VIVA. · PT: Dados da pesquisa do Folhas, 2011. Entre as fontes consultadas estão a Sociedade Vegetariana Brasileira (SVB), a IVU, a PETA, a Vegetarian Society e a VIVA.
- *Builder note:* the health statistics stay out. The report lists its sources together rather than one per figure, so the note says "sources consulted".

**F5 · Four directions** — four cards
| # | EN | PT |
|---|---|---|
| 1 | In-store merchandising: a better way to display vegetarian products, which were often placed next to the meat counter. | Merchandising: uma forma melhor de expor produtos vegetarianos, que muitas vezes ficavam ao lado do balcão de carnes. |
| 2 | Children's education: vegetarian information on gum wrappers, school supplies and toys. | Educação infantil: informação vegetariana em papéis de chiclete, material escolar e brinquedos. |
| 3 | Plate Score (Pontuação do Prato): a camera app that scores a meal by the variety of colours on the plate, ranked weekly among friends. | Pontuação do Prato: um app de câmera que pontua a refeição pela variedade de cores no prato, com ranking semanal entre amigos. |
| 4 | A finder: the direction I chose. | Um buscador: o caminho escolhido. |

- Visual: none; the four cards are typographic.

**F6 · The opportunity**
- Heading — EN: The opportunity · PT: A oportunidade
- EN: Vegetarian restaurants are few, but many ordinary restaurants serve one excellent meat-free dish that no one would think to look for, because the restaurant also serves meat. Folhas maps both, so that vegetarians and vegans can find a good meal anywhere, and it also shows where to buy ingredients.
- PT: Restaurantes vegetarianos são poucos, mas muitos restaurantes comuns servem um ótimo prato sem carne que ninguém pensaria em procurar, porque a casa também serve carne. O Folhas mapeia os dois, para que vegetarianos e veganos encontrem uma boa refeição em qualquer lugar, e também mostra onde comprar ingredientes.

**F7 · Structure before surface**
- Heading — EN: Structure before surface · PT: Estrutura antes da superfície
- EN: I organised the app with Jesse James Garrett's method from The Elements of User Experience. Two parallel paths, Eat and Buy Ingredients, share the same flow: map, list, filter and suggest a place, leading to each place's details. Before any visual design, I described every screen in words: its content, its behaviour and what the user would do there. Wireframes following Apple's iPhone guidelines came next.
- PT: Organizei o aplicativo com o método de Jesse James Garrett, de The Elements of User Experience. Dois caminhos paralelos, Comer e Comprar Ingredientes, compartilham o mesmo fluxo: mapa, lista, filtro e sugestão de lugares, levando aos detalhes de cada local. Antes de qualquer design visual, descrevi cada tela em palavras: seu conteúdo, seu comportamento e o que o usuário faria nela. Em seguida vieram os wireframes, seguindo as diretrizes do iPhone.
- Visual 1: `sitemap.jpg` — Caption EN: The information architecture: Eat and Buy Ingredients side by side. · PT: A arquitetura da informação: Comer e Comprar Ingredientes lado a lado.
- Visual 2: the written screen descriptions, `pngs/inter01.jpg` to `pngs/inter04.jpg` — Caption EN: Every screen described in words before it was drawn. · PT: Cada tela descrita em palavras antes de ser desenhada.
- Visual 3: `wireframe.jpg` and the first-version screens, `pngs/ip01.png` to `pngs/ip08.png` (also in `development images and illustrations i made/first version screens/`) — Caption EN: First screens: map, list, details and filter. · PT: Primeiras telas: mapa, lista, detalhes e filtro.

**F8 · A name and a mark**
- Heading — EN: A name and a mark · PT: Nome e marca
- EN: I first shortlisted English names that would read well in any app store, such as Vegwhere and S.O.S. Veg. As the project took shape around Brazil, I chose Folhas, Portuguese for "leaves". The first logo grew from the idea of "leaves over concrete": nature finding its way through the city, just as the app finds something natural to eat anywhere in it. It felt too heavy, so I drew a lighter, more personal mark, and the characters grew from it.
- PT: Primeiro listei nomes em inglês que funcionassem em qualquer loja de aplicativos, como Vegwhere e S.O.S. Veg. À medida que o projeto se definiu para o Brasil, escolhi Folhas. O primeiro logo nasceu da ideia de "folhas sobre o concreto": a natureza abrindo caminho na cidade, assim como o aplicativo encontra algo natural para comer em qualquer lugar dela. Ele ficou pesado demais; desenhei então uma marca mais leve e pessoal, e dela nasceram os personagens.
- Visual 1: `logo-study.jpg` — Caption EN: The first concept: leaves over concrete. · PT: O primeiro conceito: folhas sobre o concreto.
- Visual 2: `logo-marks.jpg` — Caption EN: The final mark. · PT: A marca final.

**F9 · The characters** — a large, playful section
- Heading — EN: The characters · PT: Os personagens
- EN: The characters are the heart of Folhas' identity. From the cherry mascot came a whole family — onigiri, croissant, tomato, seed and a little turnip — drawn under a single rule: flat colours and an outline, nothing more. In the app, each restaurant on the list is marked by a character, giving personality to what would otherwise be a plain list.
- PT: Os personagens são o coração da identidade do Folhas. Da cereja-mascote nasceu uma família inteira — onigiri, croissant, tomate, semente e nabinho —, desenhada sob uma única regra: cores chapadas e contorno, nada mais. No aplicativo, cada restaurante da lista é marcado por um personagem, o que dá personalidade ao que seria uma lista comum.
- Visuals: the family from `pngs/desenhos/` — `cereja-01.jpg`, `onigiri-01.jpg`, `crossaint-01.jpg`, `tomate-01.jpg`, `semente-01.jpg`, `nabinho-01.jpg`, `moldura-01.jpg` — shown as a line-up on transparent backgrounds, plus the character patterns (`cereja padronagem.jpg`, `crossaint padronagem.jpg`, `paronagem.jpg`).
- Development sheet: `development images and illustrations i made/08.jpg` — Caption EN: First sketches I drew developing the characters. · PT: Primeiros esboços que desenhei desenvolvendo os personagens.
- *Builder note:* the characters reappear as a small, subtle easter egg elsewhere on the site (for example, one of them peeking in on the 404 page).

**F10 · The critique that changed it**
- Heading — EN: The critique that changed it · PT: A crítica que mudou tudo
- EN: My first layout followed the logo literally: a concrete texture while searching, a leaf texture once a place was found. The critique was fair: it was a new skin on the standard iPhone list. I rethought the list as a *mesa posta*, a table set for a meal, where each dish links to its restaurant and users fill the plates with photos of what they ate. A later review showed the background patterns hurt legibility, so I softened them.
- PT: Meu primeiro layout seguia o logo ao pé da letra: textura de concreto durante a busca, textura de folhas quando um lugar era encontrado. A crítica foi justa: era só uma pele nova sobre a lista padrão do iPhone. Repensei a lista como uma mesa posta, em que cada prato leva ao seu restaurante e os usuários preenchem os pratos com fotos do que comeram. Numa revisão seguinte, as estampas de fundo prejudicavam a leitura, e eu as suavizei.
- Pull-quote — EN: It was a new skin on the standard iPhone list. · PT: Era só uma pele nova sobre a lista padrão do iPhone.
- Visual 1: the first layout, `pngs/cim01.png` and `pngs/cim02.png` — Caption EN: The first layout: concrete while searching, leaves once a place is found. · PT: O primeiro layout: concreto durante a busca, folhas quando um lugar é encontrado.
- Visual 2: the second version, `pngs/lista2.png`, beside `folhas/cover.jpg` — Caption EN: The second version: the list as a table set for a meal. · PT: A segunda versão: a lista como uma mesa posta.
- Visual 3 (before and after): `pngs/new06.png` → `pngs/new07.png` — Caption EN: Before and after: the background pattern softened so the information reads clearly. · PT: Antes e depois: a estampa de fundo suavizada para que a informação fique legível.

**F11 · The app** — final screens as slides
| Visual | EN caption | PT caption |
|---|---|---|
| `splash.jpg` | Splash screen. | Tela de abertura. |
| `Outras matérias/2012.1 Empreendedorismo/g2 Folhas/imgs/mapa.png` | Map and list, sorted by distance. | Mapa e lista, por distância. |
| `detail.jpg` | A restaurant's details: dishes, address, opening hours and photos. | Detalhes de um restaurante: pratos, endereço, horários e fotos. |
| `pngs/new07.png` (final version) | A juice bar's details, with its ingredients. | Detalhes de uma casa de sucos, com os ingredientes. |

**F12 · From concept to business**
- Heading — EN: From concept to business · PT: Do conceito ao negócio
- EN: A semester later, I developed Folhas into a business plan: a SWOT analysis, a marketing plan, a three-person team (director, designer and programmer) and a revenue model based on paid downloads and advertising. The market case rested on two figures from the time: 9% of Brazilians called themselves vegetarian, and 14% owned a smartphone.
- PT: Um semestre depois, transformei o Folhas num plano de negócio: análise SWOT, plano de marketing, uma equipe de três funções (diretor, designer e programador) e um modelo de receita baseado em downloads pagos e publicidade. O mercado se apoiava em dois números da época: 9% dos brasileiros se declaravam vegetarianos, e 14% tinham smartphone.
- Visual: `Outras matérias/2012.1 Empreendedorismo/g2 Folhas/imgs/SWOT folhas.jpg`

**Credits**
- EN: Research, UX, identity, illustration and business plan: Chico Morais · Interviews: Ana Branco and Irina Aragão (PUC-Rio), and vegetarian interviewees
- PT: Pesquisa, UX, identidade, ilustração e plano de negócio: Chico Morais · Entrevistas: Ana Branco e Irina Aragão (PUC-Rio) e vegetarianos entrevistados
- Thanks — EN: With thanks to my friends Isabella Xavier and Melissa Ribeiro. · PT: Agradeço às minhas amigas Isabella Xavier e Melissa Ribeiro.

**Removed from the previous version**
- "Built solo in a course where everyone else worked in fours" as the lede (moved to the Context line).
- "I did not want to confront anyone" without context (now F3, after the personal origin).
- "The research is cited, not asserted" and the health statistics.
- "The least preachy of the four. That was deliberate…".
- "Once I accepted the project was for Brazil".
- "That last pair of numbers is the whole story of why this stayed a concept" (not supported by the sources).

---

### 5.5 Physical & Logical Interfaces

**The story, in brief (not published).** Two working prototypes that connect the physical world to code: a Pong game controlled by a real knob, and a motion-triggered pet monitor that caught Chico's own dog in the act. Real code, real output, a live browser rebuild. Present it with confidence and a little humour; drop every defensive line.

**Meta**
- Title — EN: Physical & Logical Interfaces · PT: Interfaces Físicas e Lógicas
- Subtitle — EN: Two working prototypes between the physical world and code · PT: Dois protótipos funcionais entre o mundo físico e o código
- Card one-liner — EN: A Pong game played with a real knob, and a camera that catches a mischievous dog in the act. · PT: Um Pong jogado com um botão giratório de verdade, e uma câmera que flagra um cachorro sapeca em ação.
- Year: 2012
- Roles — EN: Physical computing · Creative coding · Arduino · Processing · Computer vision · PT: Computação física · Programação criativa · Arduino · Processing · Visão computacional
- Context — EN: PUC-Rio, Physical and Logical Interfaces · PT: PUC-Rio, Interfaces Físicas e Lógicas

**I1 · Hero**
- Visual: the animated twelve-frame sequence from the rebuild, with the comic speech bubbles that stand in for the owner's voice. (Further down, in I3, show the frames as a static strip so the page does not repeat the same animation.)
- Lede: the card one-liner.

**I2 · Pong with a real knob**
- Heading — EN: Pong with a real knob · PT: Pong com um botão de verdade
- EN: An Arduino reads a potentiometer, a simple knob, and sends its position over a serial connection to a Pong game I wrote in Processing, where it moves the player's paddle: a physical input in one language on a circuit board, a game loop in another on the computer, and a live connection between them. Another version let the player paint the background while playing.
- PT: Um Arduino lê um potenciômetro, um simples botão giratório, e envia sua posição por conexão serial para um jogo de Pong que programei em Processing, onde ele move a raquete do jogador: uma entrada física numa linguagem, numa placa de circuito; o loop do jogo em outra, no computador; e uma conexão ao vivo entre os dois. Outra versão permitia ao jogador pintar o fundo enquanto jogava.
- Visual 1: diagram rendered by the builder — knob → Arduino → serial → Processing → paddle.
- Visual 2 (video): YouTube `https://www.youtube.com/watch?v=qacD1AMKYpw` (embed through youtube-nocookie.com) — Caption EN: Playing the knob-controlled version. · PT: Jogando a versão controlada pelo botão.
- Future: a playable browser version of the painting variant, controlled by mouse or keyboard, with a short note on how the original was coded. Not part of this build.

**I3 · Monitorador de Animais Sapecas**
- Heading — EN: Monitorador de Animais Sapecas (Mischievous Pet Monitor) · PT: Monitorador de Animais Sapecas
- EN: The second prototype watches for a pet misbehaving and answers it in its owner's recorded voice. A Processing sketch compares consecutive webcam frames; when the change crosses a threshold, it plays a sound and saves a snapshot. The twelve frames it saved show exactly the situation it was designed for: my own dog jumping onto a side table. In the 2012 prototype, a placeholder sound stood in for the owner's voice.
- PT: O segundo protótipo vigia o animal fazendo arte e responde com a voz gravada do dono. Um sketch em Processing compara quadros consecutivos da webcam; quando a diferença ultrapassa um limite, toca um som e salva uma foto. Os doze quadros salvos mostram exatamente a situação para a qual ele foi criado: meu próprio cachorro pulando numa mesinha lateral. No protótipo de 2012, um som provisório fazia as vezes da voz do dono.
- Visual 1: animated sequence `sequence.jpg` — Caption EN: The twelve frames the sketch saved, 2012. · PT: Os doze quadros salvos pelo sketch, 2012.
- Visual 2 (interactive): the browser rebuild (https://claude.ai/artifact/MggvDroX6jRZ1eqn8Lpzyg) — embedded on the page — Label EN: Try it: the same detection, running on the original frames. · PT: Experimente: a mesma detecção, rodando sobre os quadros originais.

**Credits**
- EN: Concept, electronics and code: Chico Morais · PT: Conceito, eletrônica e código: Chico Morais

**Removed from the previous version**
- "That gap is worth naming rather than hiding…".
- "That asymmetry is honest and I would rather show it than fake a demo."
- "The mechanism worked on the first real case it met" (not supported by the sources).
- "Evidence" sidebar and "G1 / G2" labels in headings.

---

### 5.6 Graphic work (Gráfica)

**Section decision.** "Introdução à Gráfica" becomes a section, **Graphic work / Gráfica**, not a single project page. It holds graphic and print work; the course project is its first entry, and more work can be added over time.
Decided: the section holds all graphic work, hand-made and digital, including the Cabras Cabras poster.

- Section heading — EN: Graphic work · PT: Gráfica
- Section intro — EN: Drawing, typography, printmaking and posters. · PT: Desenho, tipografia, gravura e cartazes.

#### Entry 1 — From figure to sign

- Title — EN: From Figure to Sign · PT: Da Figura ao Signo
- Card one-liner — EN: One character reduced from drawing to pictogram, road sign and pattern, then carried into letters, folk sayings and hand printing. · PT: Um personagem reduzido do desenho ao pictograma, à placa e à estampa, e levado depois às letras, aos ditados populares e à impressão manual.
- Year: 2010
- Roles — EN: Illustration · Pictogram design · Typography · Print techniques · PT: Ilustração · Pictogramas · Tipografia · Técnicas de impressão
- Context — EN: PUC-Rio, Introduction to Graphic Design · PT: PUC-Rio, Introdução à Gráfica

**G1 · Hero** — `cover.jpg` (the pictogram)

**G2 · One character, six reductions**
- Heading — EN: One character, six reductions · PT: Um personagem, seis reduções
- EN: I carried one surreal figure, a body with a whisk for a head, through six versions, each removing more than the last: a realistic study, an abstraction, a collage, a pictogram with its in-use variant, a road sign and a repeat pattern. The pictogram is the turning point, where a drawing becomes a sign.
- PT: Levei uma figura surreal, um corpo com um batedor de ovos no lugar da cabeça, por seis versões, cada uma retirando mais informação que a anterior: um estudo realista, uma abstração, uma colagem, um pictograma com sua variação em uso, uma placa de sinalização e uma estampa de repetição. O pictograma é o ponto de virada: o momento em que o desenho se torna signo.
- Visual 1 (overview): the Contato 1 contact sheet, `Outras matérias/2010.2 Introdução à Gráfica/G1/contato/contado.pdf` (export the page as an image).
- Sequence of visuals (paths inside `Outras matérias/2010.2 Introdução à Gráfica/G1/`):
| Visual | EN caption | PT caption |
|---|---|---|
| `contato/real.jpg` | Realistic study: the starting point. | Estudo realista: o ponto de partida. |
| `variation-1.jpg` (previous build) | Abstraction. | Abstração. |
| `variation-2.jpg` (previous build) | A second abstraction. | Segunda abstração. |
| `contato/colagem.jpg` | Collage. | Colagem. |
| `contato/picto.jpg` | The pictogram: the drawing becomes a sign. | O pictograma: o desenho se torna signo. |
| `contato/pic ut.jpg` | The pictogram in use. | O pictograma em uso. |
| `picto placa.png` | Não Esqueça (Don't Forget): the pictogram as a road sign. | Não Esqueça: o pictograma como placa de sinalização. |
| `colours.jpg` (previous build) | The repeat pattern. | A estampa de repetição. |

**G3 · From image to letter**
- Heading — EN: From image to letter · PT: Da imagem à letra
- EN: In the second half of the semester, the same visual language moved into typography and hand printing: a letter drawn as a flower, road-sign lettering, Brazilian folk sayings turned into images, wordplay, and a series of monotypes and coloured-pencil works.
- PT: Na segunda metade do semestre, a mesma linguagem visual passou para a tipografia e a impressão manual: uma letra desenhada como flor, letreiros de sinalização, ditados populares transformados em imagem, jogos de palavras e uma série de monotipias e trabalhos em lápis de cor.
- Visual 1 (overview): the Contato 2 contact sheets, `Outras matérias/2010.2 Introdução à Gráfica/G2/cantatog2 1.pdf` and `contatog2 2.pdf`. *Builder note:* Oculto Preciso I and II survive only as thumbnails on these sheets; the originals are lost, so they get no entry of their own.
- Pieces:
| Piece | EN caption | PT caption | Visual |
|---|---|---|---|
| Cheiro de Letra | Cheiro de Letra (The Scent of a Letter): a letter drawn as a flower. | Cheiro de Letra: uma letra desenhada como flor. | `cheiro-de-letra.jpg` (the better-coloured version). Delete `g2-piece-01.jpg`, a duplicate of the same work. |
| Palavras e Tudo Mais I | Palavras e Tudo Mais (Words and Everything Else) I: a folk saying in type and image. | Palavras e Tudo Mais I: um ditado popular em tipografia e imagem. | `G2/sexo varal.tif` |
| Palavras e Tudo Mais II | Palavras e Tudo Mais (Words and Everything Else) II. | Palavras e Tudo Mais II. | `G2/abraco tele fugi.tif` |
| Prome$$a Desgraçada / Prome$$a Sem Jeito | Wordplay on *promessa*, a promise or religious vow. | Jogo de palavras com "promessa". | From `G2/PROME.docx`. The existing screenshot (`screenshot promessa desgracada promessa sem jeito`) is off-centre; export a clean, centred image from the document. |
| Monotypes | Monotype and coloured pencil, from the print workshops. | Monotipia e lápis de cor, das oficinas de gravura. | `g2-piece-02.jpg` |

**G4 · Closing line**
- EN: The habit that runs through my later projects, testing one idea through every form it can take, started here, on paper and by hand.
- PT: O hábito que atravessa meus projetos seguintes, testar uma ideia em todas as formas que ela pode assumir, começou aqui, no papel e à mão.

**Removed from the previous version**
- "It is the oldest work on this site" (not true: Tapete is from 2008 and Maitê from 2009).
- "Both contatos are confirmed by their own InDesign contact sheets, which is how the set is known to be complete…" (the contact sheets are now shown instead).
- "Why it is here" (replaced by G4).

#### Entry 2 — Cabras Cabras (poster, 2015)

- Title: Cabras Cabras
- Card one-liner — EN: Poster for a play, printed as a large banner on the front of a Rio de Janeiro theatre. · PT: Cartaz de uma peça, impresso como grande banner na fachada de um teatro do Rio de Janeiro.
- EN: Poster and graphic design for the play *Cabras Cabras* by Priscilla Balio, directed by Fernando Philbert, with Priscilla Balio, Flávio Vidaurre and Ton Rodrigues. It was printed as a large banner on the front of Teatro Glauce Rocha, on Avenida Rio Branco in Rio de Janeiro, for the season.
- PT: Cartaz e design gráfico da peça *Cabras Cabras*, de Priscilla Balio, com direção de Fernando Philbert e elenco formado por Priscilla Balio, Flávio Vidaurre e Ton Rodrigues. Foi impresso como grande banner na fachada do Teatro Glauce Rocha, na Avenida Rio Branco, no Rio de Janeiro, durante a temporada.
- Credits — EN: Graphic design: Chico Morais · Production photography: Aline Macedo · PT: Design gráfico: Chico Morais · Fotografia de cena: Aline Macedo
- Year: 2015
- Visuals (folder `Jobs`): `picture of poster of play cabrascabras at street` (the banner on the theatre, lead image) and `poster of play cabrascabras.JPG` (the poster).

#### Entry 3 — Bodhgaya Films calendar (2012 calendar, designed 2011)

- Title: Bodhgaya Films calendar · PT: Calendário Bodhgaya Films
- EN: Desk calendar I designed for the film company Bodhgaya Films: a spiral-bound 2012 calendar with Indian-inspired patterns and one inspirational phrase for each month.
- PT: Calendário de mesa que desenhei para a produtora Bodhgaya Films: um calendário 2012 em espiral, com estampas de inspiração indiana e uma frase inspiradora para cada mês.
- Year: 2011 (2012 calendar)
- Visuals (copied from `src/Jobs/` to `src/work/introducao-a-grafica/` as `bodhgaya-calendar-01…03.jpg`):
| Visual | EN caption | PT caption |
|---|---|---|
| `bodhgaya-calendar-01.jpg` (949×627) | The 2012 cover, front and back. | A capa de 2012, frente e verso. |
| `bodhgaya-calendar-02.jpg` (823×546) | The 2013 year view and the back cover. | O ano de 2013 e a contracapa. |
| `bodhgaya-calendar-03.jpg` (885×3543, all-months composite) | All twelve months. | Os doze meses. |

---

### 5.7 Padronagens

**The story, in brief (not published).** Travel photographs mirrored into repeat patterns, and one complete chain from photograph to garment: a cherry-blossom photo from Japan became a printed fabric and a tailored suit that Chico designed and wore as a groomsman. Present it simply and confidently. Do not claim a "fashion designer" title, and do not discuss not claiming it.

**Meta**
- Title: Padronagens
- Subtitle — EN: Patterns from photographs · PT: Estampas a partir de fotografias
- Card one-liner — EN: Travel photographs mirrored into repeat patterns, one of them printed and tailored into the suit I wore as a groomsman. · PT: Fotografias de viagem espelhadas em estampas, uma delas impressa e transformada no terno que usei como padrinho de casamento.
- Year: 2013–2017 (patterns from about 2013 to 2015; the suit was worn in 2017)
- Roles — EN: Photography · Pattern design · Garment design · Art direction · Fabric and print sourcing · PT: Fotografia · Design de estampas · Design da peça · Direção de arte · Pesquisa de tecido e impressão
- Context — EN: Personal project · PT: Projeto autoral

**P1 · Hero:** `Padronagens (not PUC)/fotos estampas roupas i was padrinho de casamento so i made the outfit/springinjapanpatterning02.jpg`

**P2 · The method**
- Heading — EN: The method · PT: O método
- EN: I mirror my own travel photographs across a vertical and a horizontal axis until they tile without a seam, a classic textile repeat technique applied to a photographic archive instead of drawn motifs.
- PT: Espelho minhas próprias fotografias de viagem num eixo vertical e noutro horizontal até que se repitam sem emendas, uma técnica clássica de estamparia aplicada a um arquivo fotográfico em vez de motivos desenhados.
- Visuals: `source-photo.jpg` → `pattern-detail.jpg`, side by side — Captions EN: The photograph. / The pattern. · PT: A fotografia. / A estampa.
- Process visuals, from `Cambridge School of Arts/2013.1/Digital Approaches/natual patterns/`: `arara.jpg`, `ararahead.jpg`, `ararahead big.png` and the four macaw heads, `ararahead big.png`. Skip `flower application…` and `fundo - not chosen not final.jpg`. — Caption EN: From photograph to repeat, step by step. · PT: Da fotografia à estampa, passo a passo.

**P3 · Where the patterns come from** — grid
| Origin | EN caption | PT caption | Visual |
|---|---|---|---|
| Pantanal, Brazil | A macaw in a tree becomes a vertical motif among mirrored branches and sky. | Uma arara numa árvore vira motivo vertical entre galhos e céu espelhados. | `pattern-arara.jpg` |
| A macaw's head | Cropped so close it stops reading as a bird: a woven geometry in blue, mustard and grey. | Recortada tão de perto que deixa de parecer um pássaro: uma geometria tramada em azul, mostarda e cinza. | `pattern-macaw-head.jpg` |
| Austria | Dried flower heads against black, turned into a dense gold repeat. | Flores secas sobre fundo preto, transformadas numa estampa densa e dourada. | `pattern-austria.jpg` |
| Croatia | Pine branches and cones against a turquoise sea. | Galhos e pinhas contra o mar turquesa. | `pattern-croatia.jpg` |
| Sunset | The pink of the sky and the blue of the mountains and the sea, drawn out into stripes and applied as wallpaper. | O rosa do céu e o azul das montanhas e do mar, transformados em listras e aplicados como papel de parede. | `Cambridge School of Arts/2013.1/Digital Approaches/natual patterns/sunset.jpg`, `sunset application.jpg` |
| Hong Kong | Two night patterns: harbour towers under a purple sky, and rooftop water tanks at sunset. | Duas estampas noturnas: torres do porto sob um céu roxo e caixas-d'água nos telhados ao pôr do sol. | `Padronagens (not PUC)/hongkong-120-Edit-2.jpg`, `hongkong-201-Edit-Edit.jpg` |
| Japan | Cherry blossom, as a dense vertical repeat and as a lighter wreath with open sky at the centre. | Cerejeiras em flor, numa repetição vertical densa e numa guirlanda mais leve, com o céu aberto no centro. | `cover.jpg` + `Padronagens (not PUC)/detalhemenor.jpg` (the wreath) |

**P4 · From photograph to suit**
- Heading — EN: From photograph to suit · PT: Da fotografia ao terno
- EN: The cherry-blossom photograph, taken in spring in Japan, became the pattern for a suit I designed to wear as a groomsman at a friend's wedding in 2017. I visited print studios and fabric shops to find the right fabric and printing technique, had the pattern printed, and commissioned Antônio, a professional tailor, to make the suit.
- PT: A fotografia das cerejeiras, feita numa primavera no Japão, virou a estampa de um terno que desenhei para usar como padrinho no casamento de um amigo, em 2017. Percorri estamparias e lojas de tecido até encontrar o tecido e a técnica de impressão certos, mandei imprimir a estampa e encomendei o terno ao alfaiate Antônio.
- Visual sequence (the chain, left to right):
| Visual | EN caption | PT caption |
|---|---|---|
| `source-photo.jpg` | The photograph, also in the Spring in Japan series. | A fotografia, também na série Spring in Japan. |
| `pattern-detail.jpg` | Mirrored into a repeat. | Espelhada em estampa. |
| `fotos estampas roupas i was padrinho de casamento so i made the outfit/springinjapan primted fabric.jpeg` | The printed fabric. | O tecido estampado. |
| `suit.jpg` | The finished suit. | O terno pronto. |
| `suit-ceremony.jpg` | At the wedding. | No casamento. |

**P5 · Other applications**
- EN: I also explored the patterns on swimwear and a shirt as concept mock-ups.
- PT: Também explorei as estampas em moda praia e numa camisa, como mockups de conceito.
- Visuals (from `Cambridge School of Arts/2013.1/Digital Approaches/natual patterns/`): `applications 1.jpg`, `applications 2.jpg`, `arara application.png`, `ararahead application.png`

**Credits**
- EN: Photography, patterns and garment design: Chico Morais · Tailoring: Antônio, professional tailor
- PT: Fotografia, estampas e design da peça: Chico Morais · Alfaiataria: Antônio, alfaiate profissional

**Removed from the previous version**
- "I am not going to present renders as products."
- "A brand that never got a name" and "No name was ever chosen…".
- "How I would rather this were read… than claim a title the body of work does not yet support."
- The fashion-designer friend's assessment.
- The Zeitgeist Branding brand-strategy block and the moodboard (not published for now).
- Year "2014" as the year of the patterns (they predate the course).

---

## 6. Photography

### 6.1 Photography index

- Eyebrow — EN: 13 series · PT: 13 séries (rendered from the series count, The Florist included). Series order per Chico (Oct 2026): Home Is · Devir, Gabi Monteiro · Transition · Product · Dao Tea · The Fire Boat Festival · Emotional Nakedness · Puro Tato · Biking and South East Asia · Spring in Japan · The Florist · Shibari Night · Antônia 15.
- Heading — EN: Photography · PT: Fotografia
- Lede — EN: More than ten years of photography across five continents. Portrait, nude, documentary and travel are at the heart of my practice, alongside commissioned work in fashion, events, products and production stills.
- Lede — PT: Mais de dez anos de fotografia em cinco continentes. Retrato, nu, documental e viagem estão no centro do meu trabalho, ao lado de trabalhos comissionados de moda, eventos, produtos e fotografia de produção.
- **Recognition** (newest first; from the CV of 29 August 2026)

| EN | PT |
|---|---|
| Finalist, 4th International Competition of Photography in Artificial Light, Barcelona, 2018 | Finalista, 4º Concurso Internacional de Fotografia com Luz Artificial, Barcelona, 2018 |
| Winner, photography contest and scholarship, Ateliê da Imagem, Rio de Janeiro, 2017 | Vencedor do concurso de fotografia e da bolsa, Ateliê da Imagem, Rio de Janeiro, 2017 |
| Transition, exhibition at Ateliê da Imagem, Rio de Janeiro, 2017 | Transition, exposição no Ateliê da Imagem, Rio de Janeiro, 2017 |
| Pele Bruta, solo exhibition, Santê, Rio de Janeiro, 2014 | Pele Bruta, exposição individual, Santê, Rio de Janeiro, 2014 |
| Two photographs in the Butt Magazine 2014 calendar | Duas fotografias no calendário 2014 da revista Butt |
| Butt Magazine: interview and website cover, 2013 | Revista Butt: entrevista e capa do site, 2013 |
| The Florist, photobook, 2013 | The Florist, livro de fotografia, 2013 |
| Two exhibitions at Cambridge School of Art, UK, 2013 | Duas exposições na Cambridge School of Art, Reino Unido, 2013 |
| Scholarship to study photography at Cambridge School of Art, UK, 2013 | Bolsa para estudar fotografia na Cambridge School of Art, Reino Unido, 2013 |
| First place, IIF photography competition, 2012 | Primeiro lugar, concurso de fotografia do IIF, 2012 |

- Links and visuals: the Butt interview, `https://buttmagazine.com/pictures/chico/` · `webpages aparicoes/chico with butt calendar and on the right chicos pictures published in the calendar.jpg` · the Barcelona competition page, saved as a PDF in `webpages aparicoes/`.
- In the series list, title the production-stills gallery "Home Is", the name of the documentary film (2020); "Home Is Not Just a Place" was only the old gallery's name.
- Small line under the list — EN: Each series opens in the photography archive. · PT: Cada série abre no arquivo de fotografia.
- The series list stays as it is (titles, genre labels, counts), with genre labels translated in PT: Portrait / nude → Retrato / nu · Travel → Viagem · Event → Evento · Documentary → Documental · Documentary / book → Documental / livro · Fashion → Moda · Production stills → Fotografia de produção · Self-portrait → Autorretrato · Travel / documentary → Viagem / documental · Still life → Still.
- Films: see section 6.3.

*(Replaces "product and events are what paid for it" and "The galleries are still hosted on the archive while this site is built.")*

### 6.2 The Florist (its own page)

- Title: The Florist
- Card one-liner — EN: A documentary series that became a photobook and a short film. · PT: Uma série documental que se tornou livro de fotografia e curta-metragem.
- Year: 2013
- Context — EN: Cambridge School of Art, UK · PT: Cambridge School of Art, Reino Unido
- Hero: `src/work/photography/the-florist/dsc-9213.jpg` (local file, also first in the gallery)

**FL1 · Francis**
- EN: Francis Rushby is a florist. He is over two metres tall, bearded, in leather boots and leather jackets: someone people might read, at first sight, as tough and serious. Then they discover what he does, and the flowers, which we associate with delicacy and beauty, make them look at him again. I followed his work in documentary photographs, constructed portraits and his own arrangements, setting the delicacy of flowers against the delicacy of the human body.
- PT: Francis Rushby é florista. Tem mais de dois metros de altura, barba, botas e jaquetas de couro: alguém que, à primeira vista, as pessoas podem ler como durão e sério. Então descobrem o que ele faz, e as flores, que associamos à delicadeza e à beleza, fazem com que o olhem de novo. Acompanhei seu trabalho em fotografias documentais, retratos construídos e em seus próprios arranjos, contrapondo a delicadeza das flores à delicadeza do corpo humano.

**FL2 · Change**
- EN: During the semester, Francis changed his appearance completely, and some of my first ideas became impossible. I made change the subject instead: in the film, his flowers, in all their colours, shapes and scents, became the transitions from one scene to the next. The film's slideshow form was inspired by Nan Goldin's slideshows. The series became a photobook and a short film.
- PT: Durante o semestre, Francis mudou completamente de aparência, e algumas das minhas primeiras ideias se tornaram impossíveis. Fiz da mudança o próprio tema: no filme, as flores, com todas as suas cores, formas e perfumes, viraram as transições de uma cena para outra. A forma de slideshow do filme foi inspirada nos slideshows de Nan Goldin. A série se tornou um livro de fotografia e um curta-metragem.

**FL3 · In his words** — pull quote, from the book (English original in both versions; PT translation in the PT version only).
- "Flowers for me are symbolic of all the things in corporeal life which I adore: colour (every colour under the sun), beauty (it doesn't last that long, that's why we appreciate it so much), sex (flowers are plants' sexual organs), and scent (the most primal of human senses)." — Francis Rushby
  - PT: "Para mim, as flores simbolizam tudo o que adoro na vida corpórea: a cor (todas as cores sob o sol), a beleza (não dura muito, por isso a valorizamos tanto), o sexo (as flores são os órgãos sexuais das plantas) e o perfume (o mais primitivo dos sentidos humanos)."

- Video: `https://player.vimeo.com/video/66032702` — Caption EN: The Florist, short film. · PT: The Florist, curta-metragem.
- Book link — EN: See the book → · PT: Ver o livro → — `https://www.blurb.com/b/4275737-the-florist` (confirmed live again)
- Credits — EN: With special thanks to Francis Rushby. · PT: Agradecimento especial a Francis Rushby.
- Gallery: the 17 local Florist photographs (`src/work/photography/the-florist/`, hero first).

### 6.3 Film (a section at the end of the Photography page)

- Heading — EN: Film · PT: Filmes
- Intro — EN: Short documentaries, brand films and animation. · PT: Documentários curtos, filmes de marca e animação.

| Film | Year | EN | PT | Link |
|---|---|---|---|---|
| The Florist | 2013 | A portrait of the florist Francis Rushby. See The Florist. | Um retrato do florista Francis Rushby. Veja The Florist. | vimeo.com/66032702 |
| Expo Pele Bruta | 2014 | The opening night of Pele Bruta, with visitors' impressions. See Pele Bruta. | A noite de abertura de Pele Bruta, com depoimentos dos visitantes. Veja Pele Bruta. | vimeo.com/96548872 |
| #changebrazil | 2013 | A short documentary on the #changebrazil demonstrations of 2013, which spread from Brazil to cities around the world. I filmed and interviewed people at the demonstration in London. | Um curta documental sobre as manifestações #changebrazil de 2013, que se espalharam do Brasil para cidades do mundo inteiro. Filmei e entrevistei pessoas na manifestação de Londres. | vimeo.com/69010100 |
| RöyStore + Escudero | 2012 | A stop-motion animation for the Escudero brand. | Uma animação em stop-motion para a marca Escudero. | vimeo.com/867275597 |
| RöyStore + Acervo | 2012 | I filmed, edited and interviewed the founders of the Acervo brand. | Filmei, editei e entrevistei os fundadores da marca Acervo. | vimeo.com/867275640 |
| RöyStore + Blomboo | 2012 | I filmed and interviewed the founder of Blomboo. | Filmei e entrevistei a pessoa fundadora da Blomboo. | vimeo.com/867275709 |
| RöyStore + Folha | 2012 | I filmed and interviewed the founder of Folha. | Filmei e entrevistei a pessoa fundadora da Folha. | vimeo.com/867275759 |
| A Little Toy Story | 2011 | A stop-motion short: script, characters, about a hundred hand-shot frames and its own sound effects. | Um curta em stop-motion: roteiro, personagens, cerca de cem quadros fotografados à mão e efeitos sonoros próprios. | youtube.com/watch?v=TdKAB7-oaaQ |

- Context line for the RöyStore films — EN: Made during my internship at RöyStore as graphic and digital media designer, photographer, video and art director. · PT: Feitos durante meu estágio na RöyStore como designer gráfico e de mídia digital, fotógrafo, vídeo e diretor de arte.
- *Builder note:* if #changebrazil is re-edited and re-uploaded, replace its link.

---

## 7. About

- Eyebrow — EN: About · PT: Sobre
- Heading: Francisco Morais Tavares
- Lede — EN: I work as Chico Morais: a designer, photographer and creative technologist from Rio de Janeiro, Brazil, based in Berlin. I have photographed across five continents.
- Lede — PT: Assino como Chico Morais: sou designer, fotógrafo e tecnólogo criativo, do Rio de Janeiro, e vivo em Berlim. Já fotografei em cinco continentes.
- *Builder note:* citizenship appears once, on the Contact page, not here.

**A1**
- EN: I trained in industrial design with a specialisation in digital media at PUC-Rio, where psychology and perception, art history, aesthetics and the sociology of art sat alongside interaction design, physical interfaces and 3D modelling. I later studied photography at Cambridge School of Art, UK, on a scholarship, and games design at the University of East London.
- PT: Me formei em Desenho Industrial, com habilitação em Mídia Digital, na PUC-Rio, onde psicologia e percepção, história da arte, estética e sociologia da arte caminhavam ao lado de design de interação, interfaces físicas e modelagem 3D. Depois estudei fotografia como bolsista na Cambridge School of Art, no Reino Unido, e game design na University of East London.

**A2**
- EN: My work starts with people. Before designing anything, I spend time with those who will use or experience what I make, and I let what I learn shape the brief, whether in a hospital's paediatric clinic or in an exhibition built around the body.
- PT: Meu trabalho começa pelas pessoas. Antes de projetar qualquer coisa, passo tempo com quem vai usar ou viver aquilo que crio, e deixo que o que aprendo ali defina o briefing, seja no ambulatório pediátrico de um hospital, seja numa exposição construída em torno do corpo.

**A3**
- EN: Today I am moving further into creative technology, from physical computing to AI-assisted workflows and self-hosted systems, while I keep reading psychology, philosophy and art history, where many of my ideas begin.
- PT: Hoje avanço cada vez mais na tecnologia criativa, da computação física a fluxos de trabalho com IA e sistemas auto-hospedados, sem deixar de ler psicologia, filosofia e história da arte, de onde nascem muitas das minhas ideias.

**A4 · Experience** (from the CV of 29 August 2026)

| Years | EN | PT |
|---|---|---|
| 2024–2025 | GetYourGuide, Berlin — imagery research and editing, rights acquisition, workflow and documentation management, SEO collaboration | GetYourGuide, Berlim — pesquisa e edição de imagens, aquisição de direitos, gestão de fluxos de trabalho e documentação, colaboração em SEO |
| 2023 | Examination assistant, CODE University of Applied Sciences, Berlin | Assistente de exames, CODE University of Applied Sciences, Berlim |
| 2020 | Production photographer, Home Is, a documentary film by David Fenton, London | Fotógrafo de produção, Home Is, documentário de David Fenton, Londres |
| 2018 | Volunteer, NGO Mudadores de Rua: cooking and bringing supplies to indigenous communities in the Amazon | Voluntário, ONG Mudadores de Rua: preparo de refeições e entrega de suprimentos a comunidades indígenas na Amazônia |
| 2014 | Pele Bruta: concept, visual narrative and exhibition design, Santê, Rio de Janeiro | Pele Bruta: conceito, narrativa visual e expografia, Santê, Rio de Janeiro |
| 2012 | Intern at RöyStore: graphic and digital media designer, photographer, video and art director | Estagiário na RöyStore: designer gráfico e de mídia digital, fotógrafo, vídeo e direção de arte |
| 2010–2011 | Bodhgaya Films: UI, product design and concept (2011); the documentary Think Big, Think Small-Scale (2010) | Bodhgaya Films: UI, design de produto e conceito (2011); o documentário Think Big, Think Small-Scale (2010) |
| Ongoing | Freelance photographer: portrait, fashion, documentary and product | Fotógrafo freelancer: retrato, moda, documental e produto |

**Sidebar — Education / Formação**
| Years | EN | PT |
|---|---|---|
| 2008–2014 | BA Industrial Design, Digital Media, PUC-Rio (degree conferred 2015) | Bacharelado em Desenho Industrial, Mídia Digital, PUC-Rio (diploma em 2015) |
| 2013 | Photography, Cambridge School of Art, UK (scholarship) | Fotografia, Cambridge School of Art, Reino Unido (bolsa) |
| 2011 | Games Design, University of East London (study abroad) | Game Design, University of East London (intercâmbio) |
| 2014 | Zeitgeist Branding, Hitsy Design e Estratégia, Rio de Janeiro | Zeitgeist Branding, Hitsy Design e Estratégia, Rio de Janeiro |
| 2017 | Flashlight course, Ateliê da Imagem, Rio de Janeiro | Curso Flashlight, Ateliê da Imagem, Rio de Janeiro |

**Sidebar — Languages / Idiomas**
- EN: Portuguese, native · English, fluent · Spanish, advanced · German, B2, working towards C1 · Japanese, Italian and French, basic
- PT: Português, nativo · Inglês, fluente · Espanhol, avançado · Alemão, B2, rumo ao C1 · Japonês, italiano e francês, básico

**Sidebar — Also / Além disso**
- EN: PADI Advanced diver, with nearly 100 logged dives. Vegetarian since I was 17, and mostly vegan, which is where Folhas began.
- PT: Mergulhador PADI Advanced, com quase 100 mergulhos registrados. Vegetariano desde os 17 anos e quase vegano, e foi daí que nasceu o Folhas.

**Removed from the previous version**
- The whole "Attribution" paragraph ("Where a claim rests only on my own report…", "I would rather a smaller portfolio I can stand behind line by line").
- "Tapete took a semester of sitting in a waiting room before I drew anything."
- "Long, and then all at once."

---

## 8. Contact

- Eyebrow — EN: Contact · PT: Contato
- Heading — EN: Get in touch · PT: Vamos conversar
- Lede — EN: Based in Berlin, working internationally. Write in English, Portuguese, Spanish or German. · PT: Em Berlim, com atuação internacional. Escreva em português, inglês, espanhol ou alemão.
- Email: chicomt@gmail.com
- Open to — EN: Design and creative-technology roles, in Berlin or remote · Project and freelance work, including abroad · Museums, cultural institutions and exhibition projects · Collaborations where photography and technology meet
- Open to — PT: Vagas em design e tecnologia criativa, em Berlim ou remotas · Projetos e trabalhos freelance, inclusive no exterior · Museus, instituições culturais e projetos de exposição · Colaborações entre fotografia e tecnologia
- Elsewhere — EN/PT: Instagram — @chicomoraisphoto · Instagram — @emotionalnakedness · Photography archive
- Based in — EN: Berlin, Germany. EU citizen, with Portuguese and Spanish citizenship. · PT: Berlim, Alemanha. Cidadão europeu, com cidadania portuguesa e espanhola.

---

## 9. Status

No open questions. Every decision is folded in above.

- *Builder note:* "Por Onde Você Vai?" (the saint-and-devil road sign) is left out because its artwork could not be found. If Chico finds it, it goes back into the G3 table as a folk-saying piece after Ariano Suassuna's *Auto da Compadecida*.

---

## 10. Builder's implementation log (Oct 2026)

*Builder notes, not site copy — the spec above remains the only source for published text. This log records what was actually built where it differs from §5, which captions are Chico's verbatim wording, and which are drafts still awaiting his approval.*

### Standing rules Chico set (Oct 2026, apply to all future work)

- Faces arrive already covered in every supplied photo — use images as supplied, no face work of any kind, ever; only light global enhancement (contrast/saturation/downscale). See also rule 8 in §0.
- Object-only photos are cut out to transparency by hand/script (rule 9); never generative fill.
- No invented copy: every caption is spec text, Chico's verbatim wording, or a draft explicitly marked DRAFT below.

### Maitê — as built (`SHOTS.maite` in index.html, images in `src/work/maite/`)

- Section order on the page: Making (M9) renders BEFORE Meet Maitê (M8) — Chico's call, 2 Oct 2026.
- 31 numbered figures. Files bake in archive sources from `2009.1ProjectMaite/` (nothing on the site loads from that folder; Chico may delete it, but any future re-crop/re-export would then need a re-upload).
- 01 `miguel-couto.jpg` (M3, `miguel-couto/DSC00057`, spec caption) — downscaled to 960px to tame sensor noise, displayed left-aligned at 700px.
- 02–05 `waiting-01…04` quad (M4, spec caption; 03/04 "Consultório hospitalar" is Chico's wording).
- 06 `report-cards.png` (M5, spec caption).
- 07–12 one Tapete-style post-it wall (Testar ideias): `old-board` (M7 Visual 0, `observação/DSC00118`, rotated 90° to stand vertical), `sketches` (M7 Visual 2), `proto-ruler` (`partido-adotado/DSC_0012`, rotated 90°), `proto-foam` (`DSC00154`), `proto-snake` (`DSC00197`), `tico-sketch` (`Untitled-5`). Shared caption is DRAFT (see below); each item keeps its own caption stored but unshown.
- 13 `construction-scheme.jpg` — EN caption is Chico's, PT is the builder's translation (needs a glance).
- 14–15 `build-home-01/02` (M9, spec captions).
- 16–22 `workshop-01…07` (M9, spec caption; quad + equal-column trio).
- 23–24 `ruler-full` + `tico-front` pair (M8; captions carried over from the earlier build).
- 25 `cover.jpg` (the M1 hero file, now shown here) + 26 `maite-head.jpg` (`objeto/DSC_0015`) as an even pair; both tightly cropped for alignment, generous full frames open in the lightbox. 25 carries the spec subtitle wording; 26 is DRAFT.
- 27–29 `in-use-measuring/table/nurse` (M10, spec captions).
- 30 `crying.jpg` (M10, full spec caption).
- 31 `nurses-final.jpg` (`experimentação/DSC_0084`, Chico's verbatim caption).
- Hero is `hero-cut.png` (`objeto/DSC_0013`), transparent — NOT the spec's `cover.jpg` cutout. Same file feeds the work-index card.
- DEVIATION from §5.3 M7 Visual 1: the spec's `me and nurses DSC_0085` is not wired; 31 (`DSC_0084`) stands in its place per Chico. The older `nurses.jpg` and behind-view `tico.jpg` are unwired spares on disk.
- New optional shot fields (all backwards-compatible, documented in `src/README.md`): `wallCap` (shared wall caption), `full` (lightbox opens a different file than the display crop), `mediaw` (single-shot media width), `even` (equal-column trio).

### DRAFT captions — Chico, please approve or rewrite

1. 07–12 shared: EN "Testing ideas with the nurses: the old board, the finalist sketches and the prototypes" · PT "Testando ideias com as enfermeiras: o medidor antigo, os desenhos finalistas e os protótipos".
2. 09 EN "Cardboard prototype of the ruler" · PT "Protótipo do medidor em papelão" (and sibling 10/11/12 captions in the same vein — stored, currently unshown).
3. 26 EN "Maitê's head, with Tico on her neck" · PT "A cabeça da Maitê, com o Tico no pescoço".
4. 13 PT "Este é o esquema de construção que desenhei" (translation of Chico's EN).

### Other projects — as built (detail in `src/README.md`)

- Tapete (§5.2): the six word-game photos (s:2) show as one taped post-it wall (tone-matched re-export; old `word-cards` crop superseded). The 18 s:4 protos show as two labelled auto-scrolling marquee rows (Diogo / Rosário). Both pizza experimentation days show as taped walls (12 + 14 photos; Chico dropped 3 + 9 as repeats/duplicates), and the old in-use pair was removed as duplicating them. Hero is the cut-out assembled mat; object cluster rebuilt from full-res sources. S:2 observation trio ordered cart/table/drawings with one shared caption (01 opens full-frame in the lightbox). Removed per Chico: `experiment-10`, `experiment-table`. Faces: supplier-blurred files used as supplied throughout.
- Gráfica (§5.6): Bodhgaya Films calendar subsection built as spec Entry 3 (photos from Chico's `Jobs/` folder); all four galleries moved to the full-width container; poster/banner/composite enlarged to near-natural size.
- Folhas (§5.4): all placeholders filled from `2011.2FOLHASproject/pngs/` (+30 figures); s8/s9 reorganised per the author's chronology (process under "The critique", finals under "The app"); pattern/cover re-captioned as table-set and final lists; repeats skipped.
- Interfaces (§5.5): motion-detector widget adapted from Chico's sent-in file (bilingual, lightbox snaps, camera mode); 12-frame animated hero. The I-diagram remains a placeholder.
- Padronagens (§5.7) + Photography (§6): real photographs throughout (206 photos across 13 series, plus the Shibari hands detail crop used for its card + hero). LOCAL-HOSTING MIGRATION (Oct 2026): series move from hotlinks to `src/work/photography/<series>/` as Chico supplies originals — done: The Florist (17, hero `dsc-9213.jpg` first per §6.2), Biking and South East Asia (8, journey
order, cover is the Laos school-cycling shot), Dao Tea (all 18 supplied files, gallery order
kept with `DSC_9924` + `DSC_0114` after `dao-037` per Chico; per Chico the hero
and card cover is `dao-190-Edit.jpg` (slot 0, `dao-030.jpg` moves to slot 11,
each photo keeping its own alt)), and Devir, Gabi Monteiro (all 14
supplied files matched 1:1 to gallery slots by visual match — the two blonde-portrait lookalikes
(`383` arms-crossed vs `392` hands-front) disambiguated at full size — gallery order otherwise kept,
cover `gabidevir-506-Edit.jpg`), and Emotional Nakedness (25 of 26 gallery slots matched 1:1
by visual match, gallery order kept, cover `totone.jpg` — the wide valley-river frame was not
supplied and its slot dropped), and Antônia 15 (25 of 25 slots auto-matched 1:1 by
perceptual hash, gallery order otherwise kept; cover `DSC_5534.jpg` (per Chico — replaced `DSC_5510.jpg`) also leads the gallery at slot 0 as the series-page hero, plus 2 supplied extras with no
slot appended at the end, 27 total), and Home Is (13 of 13 slots auto-matched 1:1 by
perceptual hash, gallery order kept, cover is the poster (slot 0), plus 1 supplied extra
with no slot (`DSC_0683`) appended at the end, 14 total), and Spring in Japan (31 of
31 slots auto-matched 1:1 by perceptual hash, gallery order kept; per Chico the
card cover is `japan-896-Edit.jpg` (gallery slot 11, gallery order otherwise
kept)), and Product (8 of 8 slots auto-matched 1:1 by perceptual hash, gallery
order kept with descriptive alts preserved; per Chico the hero and card cover
is `bonecos-casa-017-Edit.jpg` (slot 0, `DSC_3930-Edit-2.jpg` moves to slot 1,
each photo keeping its own alt)), and Shibari Night (9 of 9 slots
auto-matched 1:1 by perceptual hash, gallery order kept, no alts on this series;
per Chico the hero and card cover is a close-up crop of the bottom of
`DSC_3728-Edit.jpg` around the hands (`DSC_3728-hands.jpg`, from the full-size
original — the series-page hero uses it via a one-line `cropHero` override in
`viewPhotoSeries`, so it is not repeated in the 9-item gallery)), and Transition (9 of 9 slots auto-matched 1:1 by perceptual hash,
gallery order kept except `newzealand-1964.jpg` moved to slot 0 as the series
hero per Chico, with the card cover — `china-103-Edit.jpg` moves to slot 8, each
photo keeping its own alt), and Fire Boat Festival (14 of 14 slots auto-matched
1:1 by perceptual hash, gallery order kept — the pano (`LAO_5701-Pano-Edit.jpg`,
1.5936) and portrait (`LAO_5719-Edit.jpg`, 0.6625) slots confirmed exact; the
cover (`LAO_5655-Edit.jpg`, slot 0 per Chico — `LAO_5492-HDR-Edit.jpg` moves to
slot 7, each photo keeping its own alt), and Puro Tato (12 of 12 slots
auto-matched 1:1 by perceptual hash, gallery order kept — the portrait
(`DSC_2321.jpg`, 0.6675) slot confirmed exact; per Chico the hero and card
cover is `DSC_2273.jpg` (slot 0, `DSC_1873.jpg` moves to slot 8, each photo
keeping its own alt)); `dao-037` + `DSC_9924` share one
row (pair mechanism), `dao-080` thumbnail cropped to a standard row via `thumbAr` — clicks always
open full files; upload folder deleted after migration, full-size originals only on Chico's disk.
Migration complete — nothing is hotlinked any more.
- SEO mirrors, pass 1 (Oct 2026, GitHub repo only): `tools/gen-mirrors.mjs` generates `work/<slug>/index.html`
×7 + `sitemap.xml` + `robots.txt` + `CNAME` from the `PROJECTS`/`SHOTS` constants (vm-eval, validated per
slug+field) + `tools/seo-overrides.json`; regen: `node tools/gen-mirrors.mjs --base https://portfolio.chicomorais.com/`.
Binding image rule: only web-sized max-1600px JPEGs ship — never full-size originals (same treatment The Florist always had). Florist page, films and recognition as spec'd.
- Light/dark theme (Oct 2026, per Chico): the site follows the visitor's device setting on load and live; the header sun/moon button is a session-only override — nothing is remembered, every refresh re-follows the device. (An earlier version stored the choice; removed because a stored dark overrode the device on refresh.)
- Pele Bruta (§5.1): contact sheet rebuilt from the PDF (non-embedded font labels recomposed), deck slide is PDF page 6, MDF seam is Chico's `2014-05-22` close-up. PB4's `Chicos photos/` image is still a placeholder.

### More DRAFT captions — Chico, please approve or rewrite

5. Tapete marquee row labels: "Experimentation with Diogo/Rosário" · "Experimentação com Diogo/Rosário"; both pizza-wall shared captions.
6. Pele Bruta deck-slide caption (spec gives none); MDF seam photo choice (closest match found — confirm or point to another).

*`src/PROJECT-INDEX.md` is Chico's personal career-project index, not site documentation — deliberately untouched.*
