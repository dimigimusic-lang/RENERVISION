import type { Lang } from './utils';

type ServiceText = {
  title: string;
  tagline: string;
  description: string;
};

export const serviceTranslations: Record<string, Partial<Record<Lang, ServiceText>>> = {
  solar: {
    de: {
      title: 'Solarenergie',
      tagline: 'Die Kraft der Sonne nutzen',
      description: 'Photovoltaik-Technologie wandelt Sonnenlicht direkt in Strom um \u2014 sauber, leise und zu rapide sinkenden Kosten. RENERVISION plant und realisiert Solaranlagen von 5-kW-Dachanlagen bis hin zu 100-MW-Freifl\u00e4chenparks in ganz Europa.',
    },
    fr: {
      title: '\u00c9nergie solaire',
      tagline: 'Exploiter la puissance du soleil',
      description: 'La technologie photovolta\u00efque convertit directement la lumi\u00e8re du soleil en \u00e9lectricit\u00e9 \u2014 proprement, silencieusement et \u00e0 un co\u00fbt en baisse rapide. RENERVISION con\u00e7oit et r\u00e9alise des installations solaires allant de 5 kW en toiture \u00e0 100 MW de parcs au sol \u00e0 travers l\u2019Europe.',
    },
    es: {
      title: 'Energ\u00eda solar',
      tagline: 'Aprovechando el poder del sol',
      description: 'La tecnolog\u00eda fotovoltaica convierte la luz solar directamente en electricidad, de forma limpia, silenciosa y a un coste en r\u00e1pido descenso. RENERVISION dise\u00f1a e instala sistemas solares desde 5 kW en tejados hasta parques de 100 MW en toda Europa.',
    },
    hr: {
      title: 'Sun\u010deva energija',
      tagline: 'Iskori\u0161tavanje snage Sunca',
      description: 'Fotonaponska tehnologija izravno pretvara sun\u010devu svjetlost u elektri\u010dnu energiju \u2014 \u010disto, tiho i po sve ni\u017eoj cijeni. RENERVISION projektira i izvodi solarne instalacije od krovnih sustava od 5 kW do solarnih parkova od 100 MW diljem Europe.',
    },
    zh: {
      title: '\u592a\u9633\u80fd',
      tagline: '\u5229\u7528\u592a\u9633\u7684\u529b\u91cf',
      description: '\u5149\u4f0f\u6280\u672f\u5c06\u592a\u9633\u5149\u76f4\u63a5\u8f6c\u5316\u4e3a\u7535\u529b\u2014\u2014\u6e05\u6d01\u3001\u65e0\u58f0\u4e14\u6210\u672c\u5feb\u901f\u4e0b\u964d\u3002RENERVISION\u8bbe\u8ba1\u5e76\u5b9e\u65bd\u4ece5 kW\u5c4b\u9876\u7cfb\u7edf\u5230100 MW\u5730\u9762\u7535\u7ad9\u7684\u592a\u9633\u80fd\u9879\u76ee\uff0c\u8986\u76d6\u6574\u4e2a\u6b27\u6d32\u3002',
    },
  },
  wind: {
    de: {
      title: 'Windkraftanlagen',
      tagline: 'Die Energie der bewegten Luft einfangen',
      description: 'Windenergie ist die am schnellsten wachsende Stromquelle der Welt. RENERVISION liefert die komplette Windparkentwicklung \u2014 von der Ressourcenbewertung und Genehmigung \u00fcber den Bau bis zum Netzanschluss und Langzeitbetrieb.',
    },
    fr: {
      title: '\u00c9oliennes',
      tagline: 'Capter l\u2019\u00e9nergie du vent',
      description: 'L\u2019\u00e9nergie \u00e9olienne est la source d\u2019\u00e9lectricit\u00e9 \u00e0 la croissance la plus rapide au monde. RENERVISION assure le d\u00e9veloppement complet de parcs \u00e9oliens \u2014 de l\u2019\u00e9valuation des ressources et des autorisations jusqu\u2019\u00e0 la construction, le raccordement au r\u00e9seau et l\u2019exploitation \u00e0 long terme.',
    },
    es: {
      title: 'Turbinas e\u00f3licas',
      tagline: 'Capturando la energ\u00eda del viento',
      description: 'La energ\u00eda e\u00f3lica es la fuente de electricidad de mayor crecimiento en el mundo. RENERVISION ofrece el desarrollo completo de parques e\u00f3licos \u2014 desde la evaluaci\u00f3n de recursos y la obtenci\u00f3n de permisos hasta la construcci\u00f3n, la conexi\u00f3n a la red y la operaci\u00f3n a largo plazo.',
    },
    hr: {
      title: 'Vjetroturbine',
      tagline: 'Hvatanje energije pokretnog zraka',
      description: 'Energija vjetra najbr\u017ee je rastu\u0107i izvor elektri\u010dne energije na svijetu. RENERVISION pru\u017ea cjelovit razvoj vjetroelektrana \u2014 od procjene resursa i isho\u0111enja dozvola do izgradnje, priklju\u010denja na mre\u017eu i dugoro\u010dnog pogona.',
    },
    zh: {
      title: '\u98ce\u529b\u53d1\u7535',
      tagline: '\u6355\u83b7\u6d41\u52a8\u7a7a\u6c14\u7684\u80fd\u91cf',
      description: '\u98ce\u80fd\u662f\u5168\u7403\u589e\u957f\u6700\u5feb\u7684\u7535\u529b\u6765\u6e90\u3002RENERVISION\u63d0\u4f9b\u5b8c\u6574\u7684\u98ce\u7535\u573a\u5f00\u53d1\u670d\u52a1\u2014\u2014\u4ece\u8d44\u6e90\u8bc4\u4f30\u3001\u8bb8\u53ef\u5ba1\u6279\u5230\u5efa\u8bbe\u3001\u5e76\u7f51\u548c\u957f\u671f\u8fd0\u8425\u3002',
    },
  },
  hydro: {
    de: {
      title: 'Wasserkraft',
      tagline: 'Die zuverl\u00e4ssigste erneuerbare Energiequelle der Welt',
      description: 'Wasserkraft wandelt die Energie flie\u00dfenden Wassers mit unerreichter Effizienz in Strom um. Von Laufwasserkraftwerken bis zu gro\u00dfen Staudammprojekten liefert RENERVISION Wasserkraftl\u00f6sungen, die regelbare, grundlastf\u00e4hige erneuerbare Energie bereitstellen.',
    },
    fr: {
      title: 'Hydro\u00e9lectricit\u00e9',
      tagline: 'L\u2019\u00e9nergie renouvelable la plus fiable au monde',
      description: 'L\u2019hydro\u00e9lectricit\u00e9 convertit l\u2019\u00e9nergie de l\u2019eau en mouvement en \u00e9lectricit\u00e9 avec une efficacit\u00e9 in\u00e9gal\u00e9e. Des installations au fil de l\u2019eau aux grands barrages, RENERVISION fournit des solutions hydro\u00e9lectriques offrant une \u00e9lectricit\u00e9 renouvelable pilotable et de base.',
    },
    es: {
      title: 'Hidroel\u00e9ctrica',
      tagline: 'La fuente renovable m\u00e1s fiable del mundo',
      description: 'La energ\u00eda hidroel\u00e9ctrica convierte la energ\u00eda del agua en movimiento en electricidad con una eficiencia inigualable. Desde instalaciones fluyentes hasta grandes proyectos de presas, RENERVISION ofrece soluciones hidroel\u00e9ctricas que proporcionan electricidad renovable de base y despacho flexible.',
    },
    hr: {
      title: 'Hidroelektrane',
      tagline: 'Najpouzdanija obnovljiva energija na svijetu',
      description: 'Hidroelektri\u010dna energija pretvara energiju teku\u0107e vode u elektri\u010dnu energiju s nenadma\u0161nom u\u010dinkovito\u0161\u0107u. Od proto\u010dnih elektrana do velikih brana, RENERVISION isporu\u010duje hidroenergetska rje\u0161enja koja pru\u017eaju upravljivo, bazno obnovljivo napajanje.',
    },
    zh: {
      title: '\u6c34\u529b\u53d1\u7535',
      tagline: '\u5168\u7403\u6700\u53ef\u9760\u7684\u53ef\u518d\u751f\u80fd\u6e90',
      description: '\u6c34\u529b\u53d1\u7535\u4ee5\u65e0\u4e0e\u4f26\u6bd4\u7684\u6548\u7387\u5c06\u6d41\u52a8\u6c34\u7684\u80fd\u91cf\u8f6c\u5316\u4e3a\u7535\u529b\u3002\u4ece\u5f84\u6d41\u5f0f\u7535\u7ad9\u5230\u5927\u578b\u5927\u576d\u9879\u76ee\uff0cRENERVISION\u63d0\u4f9b\u53ef\u8c03\u5ea6\u3001\u57fa\u8377\u8fd0\u884c\u7684\u53ef\u518d\u751f\u6c34\u7535\u89e3\u51b3\u65b9\u6848\u3002',
    },
  },
  geothermal: {
    de: {
      title: 'Geothermie',
      tagline: 'Grundlastenergie aus dem Erdkern',
      description: 'Geothermie nutzt die innere W\u00e4rme der Erde \u2014 eine praktisch unersch\u00f6pfliche Ressource, verf\u00fcgbar 24 Stunden am Tag, 365 Tage im Jahr. RENERVISION entwickelt Geothermieprojekte sowohl zur Stromerzeugung als auch f\u00fcr direkte W\u00e4rmeanwendungen in geologisch aktiven europ\u00e4ischen Regionen.',
    },
    fr: {
      title: '\u00c9nergie g\u00e9othermique',
      tagline: '\u00c9nergie de base depuis le c\u0153ur de la Terre',
      description: 'L\u2019\u00e9nergie g\u00e9othermique exploite la chaleur interne de la Terre \u2014 une ressource pratiquement in\u00e9puisable, disponible 24 heures sur 24, 365 jours par an. RENERVISION d\u00e9veloppe des projets g\u00e9othermiques pour la production d\u2019\u00e9lectricit\u00e9 et le chauffage direct dans les r\u00e9gions europ\u00e9ennes g\u00e9ologiquement actives.',
    },
    es: {
      title: 'Energ\u00eda geot\u00e9rmica',
      tagline: 'Energ\u00eda de base desde el n\u00facleo de la Tierra',
      description: 'La energ\u00eda geot\u00e9rmica aprovecha el calor interno de la Tierra \u2014 un recurso pr\u00e1cticamente inagotable disponible las 24 horas del d\u00eda, los 365 d\u00edas del a\u00f1o. RENERVISION desarrolla proyectos geot\u00e9rmicos tanto para generaci\u00f3n el\u00e9ctrica como para aplicaciones de calefacci\u00f3n directa en regiones europeas geol\u00f3gicamente activas.',
    },
    hr: {
      title: 'Geotermalna energija',
      tagline: 'Bazna energija iz sredi\u0161ta Zemlje',
      description: 'Geotermalna energija koristi unutarnju toplinu Zemlje \u2014 prakti\u010dki neiscrpan resurs dostupan 24 sata dnevno, 365 dana u godini. RENERVISION razvija geotermalne projekte za proizvodnju elektri\u010dne energije i izravne grijalne primjene u geolo\u0161ki aktivnim europskim regijama.',
    },
    zh: {
      title: '\u5730\u70ed\u80fd',
      tagline: '\u6765\u81ea\u5730\u7403\u6838\u5fc3\u7684\u57fa\u8377\u7535\u529b',
      description: '\u5730\u70ed\u80fd\u5229\u7528\u5730\u7403\u5185\u90e8\u70ed\u91cf\u2014\u2014\u8fd9\u662f\u4e00\u79cd\u51e0\u4e4e\u53d6\u4e4b\u4e0d\u5c3d\u7684\u8d44\u6e90\uff0c\u6bcf\u592924\u5c0f\u65f6\u3001\u6bcf\u5e74365\u5929\u5747\u53ef\u4f7f\u7528\u3002RENERVISION\u5728\u6b27\u6d32\u5730\u8d28\u6d3b\u8dc3\u533a\u57df\u5f00\u53d1\u5730\u70ed\u9879\u76ee\uff0c\u7528\u4e8e\u53d1\u7535\u548c\u76f4\u63a5\u4f9b\u70ed\u5e94\u7528\u3002',
    },
  },
  'waste-to-energy': {
    de: {
      title: 'Abfallverwertung',
      tagline: 'Gesellschaftlichen Abfall in saubere Energie verwandeln',
      description: 'Waste-to-Energy-Technologie (WtE) verbrennt kommunale und industrielle Festabf\u00e4lle unter streng kontrollierten Bedingungen zur Gewinnung von Strom und W\u00e4rme \u2014 und l\u00f6st damit gleichzeitig ein Abfallproblem und erzeugt zuverl\u00e4ssige Grundlastenergie. RENERVISION bietet komplette WtE-Anlagenplanung, Genehmigung und Betriebsdienstleistungen.',
    },
    fr: {
      title: 'Valorisation \u00e9nerg\u00e9tique des d\u00e9chets',
      tagline: 'Transformer les d\u00e9chets de la soci\u00e9t\u00e9 en \u00e9nergie propre',
      description: 'La technologie de valorisation \u00e9nerg\u00e9tique (WtE) incinère les d\u00e9chets solides municipaux et industriels dans des conditions hautement contr\u00f4l\u00e9es pour r\u00e9cup\u00e9rer \u00e9lectricit\u00e9 et chaleur \u2014 r\u00e9solvant simultan\u00e9ment un d\u00e9fi de gestion des d\u00e9chets et g\u00e9n\u00e9rant une \u00e9nergie de base fiable. RENERVISION assure la conception, l\u2019autorisation et l\u2019exploitation compl\u00e8tes des usines WtE.',
    },
    es: {
      title: 'Valorizaci\u00f3n energ\u00e9tica de residuos',
      tagline: 'Convirtiendo los residuos de la sociedad en energ\u00eda limpia',
      description: 'La tecnolog\u00eda Waste-to-Energy (WtE) incinera residuos s\u00f3lidos municipales e industriales en condiciones altamente controladas para recuperar electricidad y calor \u2014 resolviendo simult\u00e1neamente un reto de gesti\u00f3n de residuos y generando energ\u00eda de base fiable. RENERVISION ofrece servicios completos de dise\u00f1o, autorizaci\u00f3n y operaci\u00f3n de plantas WtE.',
    },
    hr: {
      title: 'Otpad u energiju',
      tagline: 'Pretvaranje dru\u0161tvenog otpada u \u010distu energiju',
      description: 'Tehnologija pretvorbe otpada u energiju (WtE) spaljuje komunalni i industrijski kruti otpad u strogo kontroliranim uvjetima radi dobivanja elektri\u010dne energije i topline \u2014 istovremeno rje\u0161avaju\u0107i problem zbrinjavanja otpada i proizvodnje pouzdane bazne energije. RENERVISION pru\u017ea kompletne usluge projektiranja, dozvola i pogona WtE postrojenja.',
    },
    zh: {
      title: '\u5783\u573e\u53d1\u7535',
      tagline: '\u5c06\u793e\u4f1a\u5e9f\u7269\u8f6c\u5316\u4e3a\u6e05\u6d01\u80fd\u6e90',
      description: '\u5783\u573e\u53d1\u7535\uff08WtE\uff09\u6280\u672f\u5728\u9ad8\u5ea6\u53d7\u63a7\u7684\u6761\u4ef6\u4e0b\u71c3\u70e7\u57ce\u5e02\u548c\u5de5\u4e1a\u56fa\u4f53\u5e9f\u7269\u4ee5\u56de\u6536\u7535\u529b\u548c\u70ed\u80fd\u2014\u2014\u540c\u65f6\u89e3\u51b3\u5e9f\u7269\u7ba1\u7406\u96be\u9898\u5e76\u4ea7\u751f\u53ef\u9760\u7684\u57fa\u8377\u7535\u529b\u3002RENERVISION\u63d0\u4f9b\u5b8c\u6574\u7684WtE\u7535\u7ad9\u8bbe\u8ba1\u3001\u8bb8\u53ef\u5ba1\u6279\u548c\u8fd0\u8425\u670d\u52a1\u3002',
    },
  },
  consulting: {
    de: {
      title: 'Energieberatung',
      tagline: 'Fachkundige Begleitung vom Konzept bis zum Finanzabschluss',
      description: 'Erfolgreiche Projekte im Bereich erneuerbarer Energien basieren auf gr\u00fcndlicher Analyse und tiefem regulatorischem Wissen. Die Beratungspraxis von RENERVISION bietet unabh\u00e4ngige Machbarkeitsstudien, Netzanschlussberatung, Genehmigungsunterst\u00fctzung und Finanzmodellierung f\u00fcr Investoren, Entwickler und Kommunen in ganz Europa.',
    },
    fr: {
      title: 'Conseil en \u00e9nergie',
      tagline: 'Accompagnement expert du concept au bouclage financier',
      description: 'Les projets d\u2019\u00e9nergie renouvelable r\u00e9ussis reposent sur une analyse rigoureuse et une connaissance approfondie de la r\u00e9glementation. Le p\u00f4le conseil de RENERVISION propose des \u00e9tudes de faisabilit\u00e9 ind\u00e9pendantes, du conseil en raccordement r\u00e9seau, un appui aux autorisations et de la mod\u00e9lisation financi\u00e8re pour les investisseurs, d\u00e9veloppeurs et collectivit\u00e9s \u00e0 travers l\u2019Europe.',
    },
    es: {
      title: 'Consultor\u00eda energ\u00e9tica',
      tagline: 'Asesoramiento experto del concepto al cierre financiero',
      description: 'Los proyectos exitosos de energ\u00eda renovable se construyen sobre un an\u00e1lisis riguroso y un profundo conocimiento regulatorio. La pr\u00e1ctica de consultor\u00eda de RENERVISION ofrece estudios de viabilidad independientes, asesoramiento en conexi\u00f3n a la red, apoyo en permisos y modelizaci\u00f3n financiera para inversores, promotores y municipios en toda Europa.',
    },
    hr: {
      title: 'Energetsko savjetovanje',
      tagline: 'Stru\u010dno vo\u0111enje od koncepta do financijskog zaklju\u010denja',
      description: 'Uspje\u0161ni projekti obnovljive energije temelje se na temeljitoj analizi i dubokom regulatornom znanju. Savjetodavna praksa RENERVISION-a pru\u017ea neovisne studije izvedivosti, savjetovanje o priklju\u010denju na mre\u017eu, podr\u0161ku u isho\u0111enju dozvola i financijsko modeliranje za investitore, developere i op\u0107ine diljem Europe.',
    },
    zh: {
      title: '\u80fd\u6e90\u54a8\u8be2',
      tagline: '\u4ece\u6982\u5ff5\u5230\u878d\u8d44\u5173\u95ed\u7684\u4e13\u4e1a\u6307\u5bfc',
      description: '\u6210\u529f\u7684\u53ef\u518d\u751f\u80fd\u6e90\u9879\u76ee\u5efa\u7acb\u5728\u4e25\u8c28\u7684\u5206\u6790\u548c\u6df1\u5165\u7684\u6cd5\u89c4\u77e5\u8bc6\u57fa\u7840\u4e0a\u3002RENERVISION\u7684\u54a8\u8be2\u4e1a\u52a1\u4e3a\u6b27\u6d32\u5404\u5730\u7684\u6295\u8d44\u8005\u3001\u5f00\u53d1\u5546\u548c\u5e02\u653f\u5f53\u5c40\u63d0\u4f9b\u72ec\u7acb\u53ef\u884c\u6027\u7814\u7a76\u3001\u5e76\u7f51\u54a8\u8be2\u3001\u8bb8\u53ef\u652f\u6301\u548c\u8d22\u52a1\u5efa\u6a21\u670d\u52a1\u3002',
    },
  },
};

export function getServiceText(slug: string, lang: Lang): ServiceText | undefined {
  return serviceTranslations[slug]?.[lang];
}
