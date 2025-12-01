import { 
  Eye, 
  Ear, 
  Move, 
  Brain, 
  Cpu, 
  Scale, 
  LayoutTemplate,
  FileText
} from "lucide-react";
import { LessonSection, SectionType } from "./types";

export const LESSON_DATA: LessonSection[] = [
  {
    id: SectionType.INTRO,
    title: "Introduzione & Design for All",
    icon: LayoutTemplate,
    summary: "Dall'approccio medico a quello sociale: come la tecnologia trasforma la disabilità da 'limite personale' a 'sfida di design'.",
    deepDive: "La storia dell'accessibilità è una storia di evoluzione culturale prima che tecnologica. Inizialmente dominava il 'Modello Medico': la disabilità era vista come un 'difetto' della persona da correggere o assistere clinicamente. L'era digitale ha favorito il passaggio al 'Modello Sociale': la disabilità non è nella persona, ma nell'ambiente che non è progettato per accoglierla (es. una scala è una barriera solo se non c'è una rampa). Oggi siamo nell'era del 'Design Universale' (o Design for All): progettare prodotti che nascono già accessibili per tutti. Un esempio? I sottotitoli: nati per i sordi, oggi usati da tutti sui social media o in ambienti rumorosi. La tecnologia moderna non 'adatta' più a posteriori, ma 'include' a priori.",
    traditionalTech: [
      { name: "Ausili 'Protesici' Dedicati", description: "Dispositivi costosi, ingombranti e stigmatizzanti, creati esclusivamente per 'compensare' un deficit fisico (es. tastiere speciali mediche).", isModern: false },
      { name: "Siti Web 'Paralleli'", description: "La vecchia pratica di creare una versione 'solo testo' del sito per i disabili, separata da quella grafica principale.", isModern: false }
    ],
    modernTech: [
      { name: "Inclusione Nativa negli OS", description: "iOS, Android e Windows integrano lettori schermo, zoom e comandi vocali di serie, utilizzabili da chiunque senza costi aggiuntivi.", isModern: true },
      { name: "Responsive & Adaptive Design", description: "Interfacce fluide che si riorganizzano non solo per la dimensione dello schermo, ma per la modalità di input (tocco, voce, sguardo).", isModern: true }
    ],
    details: [
      "Barriere Architettoniche vs Barriere Digitali: Le seconde sono invisibili ma altrettanto escludenti.",
      "Il paradosso della tecnologia: Può essere il più grande abilitatore o la più grande barriera se mal progettata.",
      "Accessibilità come vantaggio competitivo: Migliora la SEO e l'usabilità per tutti gli utenti."
    ]
  },
  {
    id: SectionType.VISUAL,
    title: "Disabilità Visive: Dal Braille alla Computer Vision",
    icon: Eye,
    summary: "L'evoluzione dalla lettura tattile (Braille) alla lettura semantica dell'AI che 'vede' e descrive il mondo.",
    deepDive: "Per decenni, l'unico ponte tra un non vedente e il testo scritto è stato il Braille, un sistema tattile geniale ma limitato al mondo fisico. Con l'avvento del PC, sono nati gli 'Screen Reader' (come JAWS negli anni '90), che leggono linearmente ciò che appare a monitor. Tuttavia, questi strumenti si bloccavano davanti a immagini o interfacce grafiche complesse ('Image 123.jpg'). Oggi stiamo vivendo una terza rivoluzione: l'Intelligenza Artificiale non si limita a leggere il testo, ma 'comprende' le immagini. La Computer Vision permette ai dispositivi di descrivere una foto, riconoscere la valuta di una banconota o guidare l'utente verso una sedia vuota in una stanza, trasformando la fotocamera in un occhio digitale consapevole.",
    traditionalTech: [
      { name: "Display Braille Effimeri", description: "Barre hardware piezoelettriche che sollevano pistoncini per formare caratteri Braille. Costosi (>3000€) e limitati a una riga alla volta.", isModern: false },
      { name: "Screen Reader Lineari", description: "Software che leggono il DOM della pagina dall'alto in basso. Faticano con layout moderni non semantici e SPA (Single Page Apps).", isModern: false },
      { name: "Ingranditori Hardware", description: "Sistemi a circuito chiuso (CCTV) per ingrandire documenti cartacei su monitor dedicati.", isModern: false }
    ],
    modernTech: [
      { name: "Multimodal AI (Gemini/GPT-4o)", description: "Modelli che accettano input visivi e rispondono a domande complesse: 'Cosa c'è nel frigo?', 'Leggimi la scadenza su questo barattolo'.", isModern: true },
      { name: "Navigazione Spaziale LiDAR", description: "Sensori su iPhone Pro che mappano il 3D, avvisando con feedback aptico la presenza di porte, gradini o persone.", isModern: true },
      { name: "Audio Spaziale & Sonificazione", description: "Uso di suoni 3D per orientare l'utente nelle interfacce (es. un suono acuto indica un grafico in salita).", isModern: true }
    ],
    details: [
      "Il problema dell'Alt-Text: Prima manuale e spesso assente, ora generato automaticamente dall'AI.",
      "Ipovisione: Non è solo questione di ingrandire, ma di contrasto e gestione dell'abbagliamento (Dark Mode come ausilio).",
      "OCR Istantaneo: Riconoscimento del testo in tempo reale senza dover scansionare.",
    ]
  },
  {
    id: SectionType.AUDITORY,
    title: "Disabilità Uditive: La fine del silenzio digitale",
    icon: Ear,
    summary: "Dall'isolamento informativo alla sottotitolazione universale e traduzione LIS in tempo reale.",
    deepDive: "La disabilità uditiva è spesso definita 'invisibile'. Prima di Internet, l'accesso alle informazioni (radio, TV) era fortemente limitato. Il web testuale (email, chat) è stato il primo grande equalizzatore. Tuttavia, l'esplosione dei contenuti video e audio (Zoom, YouTube, Podcast) ha ricreato barriere. La tecnologia tradizionale si basava sull'amplificazione (apparecchi acustici) o su avvisi visivi (luci stroboscopiche). La rivoluzione moderna è la 'Speech-to-Text' AI: la capacità delle macchine di trascrivere qualsiasi parlato in tempo reale, con precisione umana, abbattendo la barriera della comunicazione orale istantanea.",
    traditionalTech: [
      { name: "Sistemi a Induzione Magnetica", description: "Loop fisici in teatri/sportelli che trasmettono l'audio direttamente all'apparecchio acustico (Telecoil).", isModern: false },
      { name: "Videotelefoni DTS", description: "Vecchi dispositivi dedicati per la comunicazione testuale su linea telefonica.", isModern: false },
      { name: "Interpreti LIS in presenza", description: "Necessità di prenotare e avere fisicamente un professionista per ogni interazione complessa.", isModern: false }
    ],
    modernTech: [
      { name: "Live Captioning Universale", description: "Android e Chrome possono sottotitolare qualsiasi audio (video, chiamate, note vocali) in locale sul dispositivo, senza ritardi.", isModern: true },
      { name: "Avatar LIS Neurali", description: "Software sperimentali che traducono testo/voce in Lingua dei Segni Italiana usando avatar 3D realistici per siti web e PA.", isModern: true },
      { name: "Sound Recognition IoT", description: "La Smart Home avvisa sullo smartwatch se suona il citofono, piange un bimbo o scatta l'allarme antincendio.", isModern: true }
    ],
    details: [
      "Sordità pre-linguale: Difficoltà con la lingua scritta complessa, necessità di sintassi semplificata.",
      "Qualità Audio Bluetooth LE: Nuovi standard (Auracast) permettono di collegare apparecchi acustici direttamente ai sistemi audio pubblici (cinema, stazioni).",
      "Il ruolo della latenza: La trascrizione AI deve essere istantanea per permettere una conversazione fluida."
    ]
  },
  {
    id: SectionType.MOTOR,
    title: "Disabilità Motorie: Oltre la tastiera",
    icon: Move,
    summary: "Disaccoppiare l'input dall'azione fisica: dal controllo oculare alle interfacce neurali.",
    deepDive: "Per chi ha disabilità motorie gravi (tetraplegia, SLA, distrofie), il problema non è la comprensione, ma l'input: come inviare comandi al computer se non posso usare le mani? La cronologia tecnologica è passata da adattamenti meccanici (scudi per tastiere, trackball giganti) a sistemi a 'scansione' (un solo pulsante per selezionare ciclicamente le opzioni). Il salto quantico moderno è la rimozione del contatto fisico. Prima con l'Eye Tracking (usare gli occhi come mouse), ora accessibile consumer, e infine con le Brain-Computer Interfaces (BCI), che mirano a bypassare completamente il corpo permettendo il controllo diretto mente-macchina.",
    traditionalTech: [
      { name: "Switch Access (Scansione)", description: "L'interfaccia evidenzia ciclicamente le icone; l'utente preme un unico sensore (bottone, soffio) quando è evidenziata quella desiderata. Lento ma affidabile.", isModern: false },
      { name: "Keyguards (Scudi)", description: "Griglie in plastica sovrapposte alla tastiera per evitare la pressione accidentale di più tasti contemporaneamente.", isModern: false },
      { name: "Mouse a testa (Head Pointer)", description: "Sistemi basati su adesivi riflettenti sulla fronte per muovere il cursore con il collo.", isModern: false }
    ],
    modernTech: [
      { name: "Eye Tracking Consumer", description: "Barre (es. Tobii) o webcam AI che tracciano la pupilla con precisione millimetrica per digitare e navigare.", isModern: true },
      { name: "Controllo Vocale Semantico", description: "Non solo 'apri Word', ma 'clicca il bottone blu in alto a destra'. Sistemi come Apple Voice Control etichettano ogni elemento cliccabile.", isModern: true },
      { name: "Adaptive Gaming (Xbox Controller)", description: "Controller modulari che permettono di collegare pulsanti esterni, pedali e joystick per rendere accessibili i videogiochi.", isModern: true }
    ],
    details: [
      "Fatica fisica: Le tecnologie moderne riducono lo sforzo muscolare necessario per lunghe sessioni.",
      "Interfacce Neurali (Neuralink): Il futuro prossimo per bypassare lesioni spinali.",
      "Internet of Things (IoT): Controllare luci, porte e temperatura con la voce restituisce autonomia abitativa."
    ]
  },
  {
    id: SectionType.COGNITIVE,
    title: "Disabilità Cognitive: Gestire la complessità",
    icon: Brain,
    summary: "Neurodivergenza e tecnologia: strumenti per l'attenzione, la lettura e la semplificazione.",
    deepDive: "Le disabilità cognitive (Dislessia, ADHD, Autismo, disturbi dell'apprendimento) sono state a lungo trascurate dalla tecnologia assistiva hardware. Qui la barriera non è sensoriale o fisica, ma è il 'carico cognitivo': interfacce troppo affollate, testi complessi, distrazioni costanti. L'evoluzione tecnologica qui è software. Si è passati da semplici correttori ortografici a strumenti di 'Immersive Reading' che alterano visivamente il testo per facilitare la decodifica. L'AI oggi agisce come un 'copilota cognitivo', riassumendo, semplificando il tono e organizzando le informazioni per renderle digeribili.",
    traditionalTech: [
      { name: "Correttori Ortografici base", description: "Segnalazione rosso/blu degli errori. Utili ma spesso non spiegano il 'perché' dell'errore.", isModern: false },
      { name: "Sintesi Vocale 'Robotica'", description: "Lettura del testo utile per chi fatica a decodificare, ma con prosodia innaturale che stanca l'ascolto.", isModern: false },
      { name: "Font dedicati (es. OpenDyslexic)", description: "Caratteri con base appesantita per ridurre la confusione visiva delle lettere (efficacia dibattuta).", isModern: false }
    ],
    modernTech: [
      { name: "AI Summarization & Riscritura", description: "Strumenti (es. Goblin.tools) che trasformano un testo burocratico in linguaggio semplice o suddividono un compito complesso in step.", isModern: true },
      { name: "Focus Mode & Immersive Reader", description: "Strumenti nativi (Edge/Word) che oscurano tutto tranne la riga in lettura, spaziano i caratteri e associano immagini alle parole.", isModern: true },
      { name: "Realtà Aumentata (AR) di supporto", description: "App che mostrano istruzioni visive passo-passo sovrapposte alla realtà per svolgere compiti (es. cucinare, usare una macchinetta).", isModern: true }
    ],
    details: [
      "La regola del 'Easy-to-Read': Linguaggio chiaro, frasi brevi, sintassi lineare.",
      "Prevedibilità: Le interfacce non devono cambiare comportamento inaspettatamente (cruciale per l'autismo).",
      "Copiloti AI: Aiutano a scrivere email formali partendo da appunti disordinati, superando il blocco della pagina bianca."
    ]
  },
  {
    id: SectionType.AI_FUTURE,
    title: "La Rivoluzione AI: Da Strumento ad Agente",
    icon: Cpu,
    summary: "Perché l'IA Generativa (GenAI) cambia il paradigma stesso dell'assistenza tecnologica.",
    deepDive: "Fino a ieri, la tecnologia assistiva era uno 'strumento': l'utente doveva imparare a usarla (imparare le scorciatoie di JAWS, imparare a scansionare con lo sguardo). L'Intelligenza Artificiale Generativa ribalta il tavolo: è la tecnologia che impara ad adattarsi all'utente. Non siamo più di fronte a software rigidi, ma ad 'Agenti Assistivi'. Un modello multimodale (come Gemini o GPT-4) può vedere, ascoltare e parlare contemporaneamente. Questo unifica gli ausili: lo stesso software aiuta un cieco a descrivere una scena e un dislessico a riassumere un testo. Il futuro è l'interfaccia generativa: app che si ridisegnano al volo in base alle capacità dell'utente in quel momento.",
    traditionalTech: [],
    modernTech: [
      { name: "Personalizzazione Estrema (UI Generativa)", description: "Interfacce che ingrandiscono i bottoni se tremi, o semplificano il testo se sei stanco, in tempo reale.", isModern: true },
      { name: "Voice Cloning per SLA", description: "Persone che stanno perdendo la voce possono 'clonarla' con pochi minuti di audio per continuare a parlare con il proprio timbro tramite sintetizzatore.", isModern: true },
      { name: "Be My AI", description: "L'evoluzione di 'Be My Eyes'. Non serve più attendere un volontario umano: l'AI descrive cosa vede la fotocamera istantaneamente e risponde a domande di approfondimento.", isModern: true }
    ],
    details: [
      "Il rischio delle 'Allucinazioni': Se l'AI legge male un'etichetta di un farmaco, le conseguenze sono gravi.",
      "Privacy: Gli assistenti AI richiedono dati sensibili (video della casa, voce).",
      "Accessibilità Automatica: L'AI sta iniziando a riparare automaticamente il codice dei siti web non accessibili."
    ]
  },
  {
    id: SectionType.LEGAL,
    title: "Normativa: Dall'Obbligo all'Opportunità",
    icon: Scale,
    summary: "Come la legislazione sta spingendo il mercato verso l'accessibilità come standard di qualità.",
    deepDive: "L'accessibilità non è solo una 'buona azione', è un diritto civile sancito dalla legge. In Italia, tutto è partito dalla Legge Stanca (2004), rivoluzionaria per l'epoca, che obbligava la Pubblica Amministrazione. Ma il mondo è cambiato. Oggi l'Europa, con l'European Accessibility Act (EAA) che entra in vigore nel 2025, sposta il focus sul settore privato: e-commerce, banche, ebook, trasporti. Non si tratta più di evitare una multa, ma di garantire l'accesso a un mercato di milioni di persone. La normativa si sta evolvendo da liste di controllo tecniche (WCAG) a requisiti funzionali di usabilità reale.",
    traditionalTech: [
      { name: "Legge Stanca (L. 4/2004)", description: "Focalizzata sulla PA e su requisiti tecnici HTML rigidi. Ha creato consapevolezza ma spesso è stata applicata burocraticamente.", isModern: false },
      { name: "Bollini di Accessibilità", description: "Certificazioni statiche che spesso non riflettevano la reale usabilità del sito nel tempo.", isModern: false }
    ],
    modernTech: [
      { name: "European Accessibility Act (2025)", description: "Direttiva UE che impone l'accessibilità a prodotti e servizi chiave privati (bancomat, smartphone, e-commerce).", isModern: true },
      { name: "WCAG 2.2", description: "Le nuove linee guida W3C che includono criteri specifici per disabilità cognitive, ipovisione e input da mobile (touch target).", isModern: true }
    ],
    details: [
      "Accomodamento Ragionevole: Il dovere di fare modifiche necessarie e appropriate per non imporre un onere sproporzionato.",
      "Digital Divide: L'accessibilità è pre-requisito per la cittadinanza digitale.",
      "Procurement Pubblico: Le PA non possono comprare software non accessibile."
    ]
  },
  {
    id: SectionType.SUMMARY_REPORT,
    title: "Report Finale & Infografica",
    icon: FileText,
    summary: "Un riepilogo visivo completo in formato 'Doppio A4' stampabile, che confronta Passato e Presente per tutte le disabilità trattate.",
    deepDive: "",
    traditionalTech: [],
    modernTech: [],
    details: []
  }
];