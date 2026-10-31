import type { Dictionary } from './types';

/** Serbian — Latin script, ekavian */
export const sr: Dictionary = {
  meta: {
    siteName: 'Danica Filipović',
    siteDescription:
      'Lična podrška studentima iz Bosne i Hercegovine, Srbije, Severne Makedonije i Crne Gore koji žele da studiraju u Sloveniji — uključujući duže Erasmus razmene.',
  },
  nav: {
    home: 'Početna',
    about: 'O Danici',
    services: 'Usluge',
    contact: 'Kontakt',
    bookConsultation: 'Zakaži konsultacije',
    openMenu: 'Otvori meni',
    closeMenu: 'Zatvori meni',
    language: 'Jezik',
  },
  footer: {
    tagline:
      'Lična podrška za studije u Sloveniji i duže Erasmus razmene — od nekoga ko je sam prošao taj put.',
    navigation: 'Navigacija',
    legal: 'Pravno',
    privacy: 'Politika privatnosti',
    rights: 'Sva prava zadržana.',
    instagram: 'Danica na Instagramu',
  },
  common: {
    learnMore: 'Saznaj više',
    requestQuote: 'Zatraži ponudu',
  },
  home: {
    metaTitle: 'Tvoj vodič za studije u Sloveniji',
    metaDescription:
      'Danica Filipović pomaže studentima oko studija u Sloveniji i oko dužih Erasmus razmena — dokumenti, dolazak i smeštaj.',
    hero: {
      headline: 'Tvoj vodič za studije u Sloveniji.',
      support:
        'Od izbora fakulteta do pripreme za selidbu — lična podrška od nekoga ko je sam prošao taj put.',
      primaryCta: 'Zakaži konsultacije',
      routes: 'Studije · Erasmus · Priprema za selidbu',
      imageAlt: 'Portret Danice Filipović',
    },
    paths: {
      title: 'Izaberi svoj put',
      intro:
        'Ceo studijski program i duža Erasmus razmena nisu ista podrška.',
      degree: {
        title: 'Studije',
        body: 'Za studente koji razmatraju osnovne ili master studije u Sloveniji — istraživanje programa, upis, dokumenti i podrška pri selidbi.',
        cta: 'Pogledaj podršku za studije',
      },
      erasmus: {
        title: 'Erasmus',
        body: 'Za studente koji dolaze u Sloveniju na dužu Erasmus razmenu: priprema dokumenata i vize, administrativna pomoć pri dolasku u Sloveniju — kako da početak bude lakši, i pomoć pri traženju smeštaja. Ishodi se ne garantuju. Podrška oko prijave za Erasmus se ne nudi.',
        cta: 'Pogledaj podršku za Erasmus',
      },
    },
    help: {
      title: 'U čemu mogu da pomognem?',
      intro: 'Ove oblasti su uglavnom za studije. Za Erasmus podrška pokriva dokumente i vize, administrativnu pomoć pri dolasku i potragu za smeštajem — bez garancija.',
      items: [
        {
          title: 'Izbor pravog programa',
          body: 'Istraži univerzitete i programe koji odgovaraju tvojim interesovanjima i ciljevima.',
        },
        {
          title: 'Prijave i dokumenti',
          body: 'Razumi uslove, rokove i kako da pripremiš materijale.',
        },
        {
          title: 'Potraga za smeštajem',
          body: 'Definiši šta ti treba i lakše uporedi opcije stanovanja.',
        },
        {
          title: 'Selidba u Sloveniju',
          body: 'Pripremi praktičnu listu za dolazak, studentski život i selidbu.',
        },
      ],
    },
    meet: {
      title: 'Upoznaj Danicu',
      body: 'Od Niša do Ljubljane, Danica je sama prošla upis, vize, smeštaj i život u inostranstvu bez gotove mreže podrške. Iz toga su nastale uloge ambasadora i tutora — i želja da budućim studentima put bude jasniji.',
      experience: [
        'Internacionalna studentkinja Univerziteta u Ljubljani',
        'Ambasadorka za internacionalne studente',
        'Erasmus+ studentkinja na Univerzitetu u Lisabonu',
        'Tutorica za internacionalne studente na Fakultetu društvenih nauka, Univerzitet u Ljubljani',
      ],
      cta: 'Više o Danici',
    },
    process: {
      title: 'Kako funkcioniše',
      intro: 'Za studije podrška je konsultacija ili širi paket. Za Erasmus to je praktična pomoć oko dokumenata, dolaska i smeštaja — bez podrške oko prijave.',
      steps: [
        {
          title: 'Reci mi o svojim planovima',
          body: 'Podeli da li želiš studijski program ili podršku za Erasmus.',
        },
        {
          title: 'Izaberi pravu podršku',
          body: 'Za studije zajedno odlučujemo da li treba konsultacija, paket ili dodatna usluga. Za Erasmus radimo na dokumentima i vizama, pomoći pri dolasku i potrazi za smeštajem.',
        },
        {
          title: 'Prođi naredne korake',
          body: 'Za studije radimo dogovorene zadatke: uslovi, dokumenti, smeštaj i priprema za selidbu gde je to relevantno.',
        },
      ],
    },
    pricing: {
      title: 'Usluge i cene',
      intro:
        'Za studije počni jednom konsultacijom, izaberi definisani paket ili zatraži prilagođenu ponudu. Za Erasmus pitaj za pripremu dokumenata i vize, pomoć pri dolasku ili potragu za smeštajem. Tačan obim i cena potvrđuju se pre početka rada.',
      items: [
        {
          title: 'Početne konsultacije',
          body: 'Razjasni situaciju, opcije i praktične naredne korake.',
        },
        {
          title: 'Planiranje studija i prijava',
          body: 'Izbor programa i podrška pri pripremi prijave.',
        },
        {
          title: 'Prijava i priprema za selidbu',
          body: 'Prijave uz administrativnu i selidbenu pripremu.',
        },
        {
          title: 'Puna studentska podrška',
          body: 'Usaglašena podrška kroz glavne faze pripreme.',
        },
      ],
      cta: 'Pronađi podršku koja ti odgovara',
    },
    faq: {
      title: 'Česta pitanja',
      items: [
        {
          q: 'Ko može da radi sa Danicom?',
          a: 'Studenti iz Bosne i Hercegovine, Srbije, Severne Makedonije i Crne Gore koji žele da studiraju u Sloveniji ili da dođu na dužu Erasmus razmenu.',
        },
        {
          q: 'Šta uključuje podrška za Erasmus?',
          a: 'Priprema dokumenata i vize, administrativna pomoć pri dolasku u Sloveniju — kako da početak bude lakši, i pomoć pri traženju smeštaja. Vize, dozvole i smeštaj se nikada ne garantuju. Podrška oko prijave za Erasmus se ne nudi.',
        },
        {
          q: 'Da li moram da govorim slovenački?',
          a: 'Ne nužno za svaki program ili razmenu. Jezičke uslove razmatramo u skladu s tvojim konkretnim planovima.',
        },
        {
          q: 'Možeš li da mi pomogneš da izaberem univerzitet?',
          a: 'Da — možemo istražiti programe koji odgovaraju tvojim interesovanjima, ciljevima i praktičnim okolnostima.',
        },
        {
          q: 'Možeš li da pregledaš moje dokumente i prijavu?',
          a: 'Za studije da — pregled dokumenata i podrška oko prijave mogu biti deo konsultacija ili paketa. Za Erasmus Danica može da pomogne oko pripreme dokumenata i vize, ali ne oko same prijave za Erasmus.',
        },
        {
          q: 'Možeš li da mi pomogneš oko smeštaja?',
          a: 'Da, za studije i za Erasmus — uz smernice o opcijama, kriterijumima i narednim koracima. Sam smeštaj se nikada ne garantuje.',
        },
        {
          q: 'Mogu li da zakažem samo jedne konsultacije?',
          a: 'Naravno. Jedna konsultacija je potpuno validan početak.',
        },
        {
          q: 'Možeš li da garantuješ upis, vizu ili smeštaj?',
          a: 'Ne. Odluke i dostupnost zavise od univerziteta, nadležnih organa, izdavača stanova i tvojih okolnosti. Danica pruža podršku i usmerenje — ne zvanične odluke ni pravno zastupanje.',
        },
        {
          q: 'Šta se dešava nakon što pošaljem upit?',
          a: 'Na sajtu vidiš potvrdu. Danica pregleda poruku i odgovara sa narednim koracima. Tačno vreme odgovora biće potvrđeno kada se dogovori dostupnost.',
        },
      ],
    },
    finalCta: {
      headline: 'Hajde da tvoji planovi za Sloveniju budu jasniji.',
      support: 'Reci mi šta želiš da postigneš, pa zajedno dogovorimo naredne korake.',
      cta: 'Zakaži konsultacije',
    },
  },
  about: {
    metaTitle: 'O Danici Filipović',
    metaDescription:
      'Put Danice od Niša do Ljubljane, iskustvo ambasadorke i tutorice, i zašto pomaže studentima oko studija u Sloveniji.',
    title: 'O Danici',
    intro:
      'Danica Filipović je iz Niša, Srbija. Želela je iskustvo van okruženja koje je oduvek poznavala — i otišla je u Sloveniju da studira.',
    sections: [
      {
        title: 'Lično iskustvo',
        body: 'Kao dolazeća internacionalna studentkinja Univerziteta u Ljubljani, sama je prošla upis, vizne procedure, potragu za smeštajem i prilagođavanje životu u inostranstvu bez gotove mreže podrške.',
      },
      {
        title: 'Od pomoći vršnjacima do formalnih uloga',
        body: 'Tokom prve godine počela je da deli ono što je naučila sa ljudima oko sebe. U drugoj godini pridružila se programu kao ambasadorka za internacionalne studente na Univerzitetu u Ljubljani.',
      },
      {
        title: 'Još jedna perspektiva kroz Erasmus+',
        body: 'Kroz Erasmus+ studirala je na Univerzitetu u Lisabonu u Portugalu — stekavši još jedan lični uvid u međunarodno obrazovanje i mobilnost studenata.',
      },
      {
        title: 'Podrška dolazećim studentima',
        body: 'Nakon povratka u Ljubljanu postala je tutorica za internacionalne studente na Fakultetu društvenih nauka Univerziteta u Ljubljani.',
      },
      {
        title: 'Motivacija',
        body: 'Cilj joj je da budućim studentima pomogne da donose informisane odluke, razumeju korake ispred sebe, izbegnu nepotrebnu zabunu i pristupe studijama u inostranstvu sa više sigurnosti.',
      },
    ],
    experienceTitle: 'Iskustvo ukratko',
    experience: [
      'Internacionalna studentkinja Univerziteta u Ljubljani',
      'Ambasadorka za internacionalne studente',
      'Erasmus+ studentkinja na Univerzitetu u Lisabonu',
      'Tutorica za internacionalne studente na Fakultetu društvenih nauka, Univerzitet u Ljubljani',
    ],
    ctaTitle: 'Spremni da prođemo tvoje planove?',
    ctaBody: 'Pogledaj dostupne usluge ili zakaži konsultacije za jasan početni razgovor.',
    cta: 'Zakaži konsultacije',
  },
  services: {
    metaTitle: 'Usluge za studije u Sloveniji',
    metaDescription:
      'Konsultacije, planiranje studija, podrška oko prijave, smeštaj i selidba za studije. Za Erasmus: dokumenti i vize, pomoć pri dolasku i potraga za smeštajem — bez garancija.',
    title: 'Usluge',
    intro:
      'Za studije zakaži jedne konsultacije, izaberi definisani paket ili dogovori dodatne zadatke posebno. Za Erasmus Danica može da pomogne oko pripreme dokumenata i vize, administrativne pomoći pri dolasku i potrage za smeštajem. Ne nudi podršku oko prijave za Erasmus i ne garantuje vize, dozvole ni smeštaj.',
    routesTitle: 'Dva glavna puta',
    degree: {
      title: 'Studije',
      body: 'Za planove osnovnih ili master studija u Sloveniji — istraživanje programa, upis, dokumenti i selidba.',
    },
    erasmus: {
      title: 'Erasmus',
      body: 'Za duže Erasmus razmene u Sloveniju: priprema dokumenata i vize; administrativna pomoć pri dolasku u Sloveniju — kako da početak bude lakši; i pomoć pri traženju smeštaja. Ishodi se ne garantuju. Podrška oko prijave za Erasmus se ne nudi.',
    },
    listTitle: 'Kako podrška može da izgleda',
    items: [
      {
        title: 'Početne konsultacije',
        forWhom: 'Za studente koji istražuju opcije ili trebaju jasnoću oko konkretnog pitanja.',
        body: 'Razgovor o ciljevima i situaciji. Za studije pregled koraka upisa i dogovor o narednim koracima. Za Erasmus razjasnimo koje od dostupnih podrški odgovaraju tvojim planovima.',
        outcome: 'Ishod: jasnije razumevanje situacije i šta dalje.',
      },
      {
        title: 'Planiranje studija i podrška oko prijave',
        forWhom: 'Za studente na studijama koji biraju program i pripremaju prijavu.',
        body: 'Istraživanje univerziteta i programa, uslovi i rokovi, pregled materijala i plan redosleda prijave. Ne nudi se za prijave na Erasmus.',
        outcome: 'Ishod: jasniji akademski izbor i organizovaniji proces prijave.',
      },
      {
        title: 'Priprema dokumenata i vize',
        forWhom: 'Za Erasmus studente koji pripremaju dokumentaciju za boravak u Sloveniji.',
        body: 'Usmerenje oko toga koji dokumenti obično trebaju i kako ih pripremiti, plus orijentacija oko viznih koraka na osnovu javno dostupnih informacija — ne pravno zastupanje.',
        outcome: 'Ishod: jasnija checklista dokumenata. Vize i dozvole se nikada ne garantuju.',
      },
      {
        title: 'Administrativna pomoć pri dolasku u Sloveniju',
        forWhom: 'Za Erasmus studente kojima je važno da početak u Sloveniji bude lakši.',
        body: 'Praktična orijentacija za rane administrativne korake nakon dolaska — šta očekivati, šta pripremiti i kako pristupiti uobičajenim zadacima prvih dana.',
        outcome: 'Ishod: jasniji plan dolaska. Zvanične odluke ostaju kod nadležnih organa.',
      },
      {
        title: 'Pomoć pri traženju smeštaja',
        forWhom: 'Za studente na studijama i Erasmus studente kojima treba pomoć oko stanovanja u Sloveniji.',
        body: 'Razjašnjavanje potreba, budžeta, lokacije i vremena; poređenje opcija; praktični koraci ka izdavačima ili vlasnicima.',
        outcome: 'Ishod: jasniji kriterijumi i strukturisanija potraga. Smeštaj se ne garantuje.',
      },
      {
        title: 'Puna studentska podrška / priprema za selidbu',
        forWhom: 'Za studente na studijama koji žele strukturisanu podršku kroz više faza.',
        body: 'Usaglašena pomoć oko programa, prijava, administracije, smeštaja i checkliste pred polazak — u dogovorenom obimu.',
        outcome: 'Ishod: usklađen plan akademske, administrativne i smeštajne pripreme.',
      },
    ],
    disclaimer:
      'Danica pruža ličnu podršku i usmerenje. Za Erasmus to može da uključi pripremu dokumenata i vize, administrativnu pomoć pri dolasku i pomoć pri traženju smeštaja — bez podrške oko prijave. Ne garantuje upis, vize, boravišne dozvole, stipendije ni smeštaj, i ne pruža regulisano imigraciono ili pravno zastupanje osim ako je za to posebno kvalifikovana i ovlašćena.',
    ctaTitle: 'Nisi siguran/na koja opcija odgovara?',
    ctaBody: 'Počni konsultacijama ili zatraži prilagođenu ponudu prema tvojim planovima.',
    cta: 'Zakaži konsultacije',
  },
  howItWorks: {
    metaTitle: 'Kako zajedno radimo',
    metaDescription:
      'Tri jednostavna koraka: podeli planove, izaberi podršku i zajedno prođi naredne akcije.',
    title: 'Kako funkcioniše',
    intro: 'Proces ostaje ličan i praktičan. Obim i cena potvrđuju se pre početka rada.',
    steps: [
      {
        title: 'Reci mi o svojim planovima',
        body: 'Podeli da li želiš studijski program ili podršku za Erasmus. Kratka forma je dovoljna za početak.',
      },
      {
        title: 'Izaberi pravu podršku',
        body: 'Za studije zajedno odlučujemo da li treba konsultacija, paket ili dodatna usluga. Za Erasmus radimo na dokumentima i vizama, pomoći pri dolasku i potrazi za smeštajem.',
      },
      {
        title: 'Prođi naredne korake',
        body: 'Za studije radimo dogovorene zadatke — uslovi, dokumenti, smeštaj i priprema za selidbu gde je to relevantno.',
      },
    ],
    afterTitle: 'Nakon što pošalješ upit',
    afterBody:
      'Na sajtu vidiš potvrdu. Danica pregleda poruku i odgovara sa dodatnim pitanjima ili narednim koracima. Tačno vreme odgovora biće objavljeno kada se potvrdi dostupnost. Obim i cena se uvek dogovaraju pre plaćenog rada.',
    cta: 'Zakaži konsultacije',
  },
  contact: {
    metaTitle: 'Zakaži konsultacije',
    metaDescription:
      'Reci Danici o studijama u Sloveniji ili zatraži podršku za Erasmus — dokumenti, dolazak i smeštaj.',
    title: 'Zakaži konsultacije',
    intro:
      'Opiši planove u nekoliko rečenica. Za Erasmus Danica može da pomogne oko pripreme dokumenata i vize, administrativne pomoći pri dolasku i potrage za smeštajem — bez garancija i bez podrške oko prijave za Erasmus. Nemoj da šalješ skenove pasoša ni osetljive identifikacione dokumente preko ove forme.',
    afterSubmit:
      'Nakon slanja vidiš potvrdu ovde. Danica pregleda poruku i odgovara sa narednim koracima.',
    whatsapp: 'Piši na WhatsApp',
    whatsappHint: 'Preferiraš brzi chat? Javi se Danici na WhatsApp.',
    form: {
      name: 'Ime',
      email: 'Email',
      country: 'Zemlja porekla ili trenutna zemlja',
      goal: 'Glavni cilj',
      goalOptions: [
        { value: 'degree', label: 'Studije' },
        { value: 'erasmus', label: 'Erasmus (dokumenti, dolazak, smeštaj)' },
        { value: 'accommodation', label: 'Smeštaj' },
        { value: 'documents', label: 'Dokumenti i administrativna priprema' },
        { value: 'general', label: 'Opšta pitanja' },
        { value: 'other', label: 'Ostalo' },
      ],
      period: 'Očekivani početak ili period putovanja (ako znaš)',
      supportType: 'Vrsta podrške',
      supportOptions: [
        { value: 'consultation', label: 'Jedne konsultacije' },
        { value: 'package', label: 'Paket' },
        { value: 'unsure', label: 'Još nisam siguran/na' },
      ],
      message: 'Kratak opis situacije',
      erasmusNote: 'Za Erasmus: priprema dokumenata i vize, administrativna pomoć pri dolasku i potraga za smeštajem — bez garancije ishoda. Podrška oko prijave za Erasmus se ne nudi. Pun paket podrške je za studije.',
      consent:
        'Razumem da će se moji podaci koristiti za odgovor na ovaj upit, kako je opisano u politici privatnosti.',
      submit: 'Pošalji upit',
      sending: 'Šaljem…',
      success: 'Hvala. Upit je uspešno poslat. Danica će ti se javiti sa narednim koracima.',
      error: 'Došlo je do greške pri slanju. Pokušaj ponovo za trenutak.',
      required: 'Ovo polje je obavezno.',
      invalidEmail: 'Unesi ispravnu email adresu.',
    },
  },
  privacy: {
    metaTitle: 'Politika privatnosti',
    metaDescription: 'Kako se prikupljaju i koriste podaci sa upita na sajtu Danice Filipović.',
    title: 'Politika privatnosti',
    updated: 'Nacrt za pregled — zameni konačnim pravnim tekstom pre lansiranja.',
    sections: [
      {
        title: 'Šta sajt prikuplja',
        body: 'Kada pošalješ formu za konsultacije, prikupljaju se podaci koje uneseš: ime, email, zemlja, ciljevi, željena vrsta podrške, poruka i potvrda saglasnosti.',
      },
      {
        title: 'Zašto se prikupljaju',
        body: 'Podaci se koriste isključivo da se odgovori na upit i dogovori konsultacija ili podrška. Ne prodaju se.',
      },
      {
        title: 'Ko ih prima',
        body: 'Upiti se dostavljaju preko Web3Forms na email adresu koju konfiguriše Danica. Web3Forms obrađuje prenos prema svojim uslovima.',
      },
      {
        title: 'Čuvanje',
        body: 'Poruke se čuvaju onoliko koliko je potrebno za obradu upita i eventualni follow-up, zatim se brišu ili arhiviraju prema praksi rada. Tačni rokovi treba da budu potvrđeni u konačnom pravnom tekstu.',
      },
      {
        title: 'Tvoja prava',
        body: 'U zavisnosti od primenjivog prava, možeš da zatražiš pristup, ispravku ili brisanje ličnih podataka vezanih za upit. Kontaktiraj Danicu preko podataka na stranici kontakta.',
      },
      {
        title: 'Osetljivi dokumenti',
        body: 'Nemoj da šalješ brojeve pasoša, kompletne identifikacione dokumente ni druge visoko osetljive fajlove preko opšte forme. Ako dokumenti kasnije budu potrebni, dogovoriće se pogodan bezbedan način.',
      },
    ],
  },
  notFound: {
    title: 'Stranica nije pronađena',
    body: 'Stranica koju tražiš ne postoji ili je premeštena.',
    cta: 'Nazad na početnu',
  },
};
